import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { Appearance } from "react-native";
import { colorSchemeStorage, ColorScheme } from "@/async-storage/colorSchemeStorage";

interface ColorSchemeContextType {
  scheme: ColorScheme;
  resolvedScheme: "light" | "dark";
  switchSchemeTo: (mode: ColorScheme) => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined);

export const ColorSchemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [scheme, setScheme] = useState<ColorScheme>("system");
  const [isHydrated, setIsHydrated] = useState(false);
  const [systemScheme, setSystemScheme] = useState<"light" | "dark">(Appearance.getColorScheme() ?? "light");

  // Hydrate from storage once, before showing UI
  useEffect(() => {
    let isMounted = true;

    const hydrateTheme = async () => {
      try {
        const stored = await colorSchemeStorage.get();
        if (!isMounted) return;

        if (stored === "light" || stored === "dark" || stored === "system") {
          setScheme(stored);
        } else {
          setScheme("system");
        }
      } catch (error) {
        // Fallback to "system" if storage read fails
        if (!isMounted) return;
        setScheme("system");
      }
      setIsHydrated(true);
    };

    hydrateTheme();

    return () => {
      isMounted = false;
    };
  }, []);

  // Persist to storage when scheme changes (after hydration)
  useEffect(() => {
    if (!isHydrated) return;
    colorSchemeStorage.set(scheme);
  }, [scheme, isHydrated]);

  // Listen to system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme && scheme === "system") {
        setSystemScheme(colorScheme);
      }
    });

    return () => {
      subscription.remove();
    };
  }, [scheme]); // Depend on scheme, not theme

  const resolvedScheme: "light" | "dark" = useMemo(() => {
    if (scheme === "light" || scheme === "dark") return scheme;
    return systemScheme;
  }, [scheme, systemScheme]);

  const switchSchemeTo = (mode: ColorScheme) => {
    setScheme(mode);
  };

  // Avoid flicker: render nothing until hydrated
  if (!isHydrated) {
    return null; // or <LoadingSplash />
  }

  return (
    <ColorSchemeContext.Provider value={{
      scheme,
      resolvedScheme,
      switchSchemeTo
    }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorScheme = (): ColorSchemeContextType => {
  const ctx = useContext(ColorSchemeContext);
  if (!ctx) {
    throw new Error("useColorScheme must be used inside a <ColorSchemeProvider>");
  }
  return ctx;
};
