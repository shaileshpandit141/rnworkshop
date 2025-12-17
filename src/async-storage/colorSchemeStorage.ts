import AsyncStorage from "@react-native-async-storage/async-storage";

const COLOR_SCHEME_KEY = "colorScheme";

export type ColorScheme = "system" | "light" | "dark";

export const colorSchemeStorage = {
  async get(): Promise<ColorScheme | null> {
    try {
      const value = await AsyncStorage.getItem(COLOR_SCHEME_KEY);
      if (value === "light" || value === "dark" || value === "system") {
        return value;
      }
      return null;
    } catch (error) {
      console.warn("Failed to load color scheme", error);
      return null;
    }
  },

  async set(theme: ColorScheme): Promise<void> {
    try {
      await AsyncStorage.setItem(COLOR_SCHEME_KEY, theme);
    } catch (error) {
      console.warn("Failed to save color scheme", error);
    }
  },
};
