import useColors from "@/hooks/useColors";
import { ReactNode } from "react";
import { Platform, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView as RnSafeAreaView } from "react-native-safe-area-context";

interface SafeAreaContainerProps {
  children: ReactNode;
  style?: ViewStyle;
}

export function SafeAreaView({ children, style }: SafeAreaContainerProps) {
  const colors = useColors();
  return (
    <RnSafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.core.background },
        style
      ]}
      edges={Platform.OS === "android"
        ? ["left", "right", "bottom"]
        : ["top", "left", "right", "bottom"]}
    >
      {children}
    </RnSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
