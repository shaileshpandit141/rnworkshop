import React from 'react'
import { useColorScheme } from "@/context/colorSchemeContext";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export function StatusBar() {
  const { resolvedScheme } = useColorScheme();
  return (
    <ExpoStatusBar style={resolvedScheme == "dark" ? "light" : "dark"} />
  );
}
