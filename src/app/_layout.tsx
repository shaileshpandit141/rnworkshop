import useColors from "@/hooks/useColors";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "@/context/colorSchemeContext";
import { ColorSchemeProvider } from "@/context/colorSchemeContext";
import { StatusBar } from "@/components/ui";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

function AppThemeLayout() {
  const { resolvedScheme } = useColorScheme();
  const colors = useColors();

  return (
    <ThemeProvider value={resolvedScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider style={{ flex: 1, backgroundColor: colors.core.background }}>
        <StatusBar />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <ColorSchemeProvider>
      <AppThemeLayout />
    </ColorSchemeProvider>
  );
}
