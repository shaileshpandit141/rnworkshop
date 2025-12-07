import useColors from "@/hooks/useColors";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Text } from "./Text";
import { View } from "./View";

export interface Segment<T = string, V = string> {
  title: T;
  value: V;
  icon?: keyof typeof Ionicons.glyphMap;
}

interface SegmentedButtonProps {
  segments: Segment[];
  value: string;
  onChange: (value: any) => void;
}

export function SegmentedButton({ segments, value, onChange }: SegmentedButtonProps) {
  const colors = useColors();
  const [width, setWidth] = useState(0);

  const activeItemIndex = useSharedValue(0);
  const itemWidth = width ? width / segments.length : 0;

  useEffect(() => {
    const index = segments.findIndex((s) => s.value === value);
    if (index !== -1) activeItemIndex.value = index;
  }, [value, segments, activeItemIndex]);

  const animatedStyle = useAnimatedStyle(() => {
    if (!itemWidth) return { left: 0, width: 0 };
    return {
      left: withTiming(itemWidth * activeItemIndex.value),
      width: itemWidth,
    };
  });

  return (
    <View
      style={[
        styles.segmentedButtonContainer,
        { backgroundColor: colors.core.surface, borderColor: colors.core.border },
      ]}
    >
      <View
        style={styles.segmentedItemsContainer}
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
      >
        <Animated.View
          style={[
            styles.selected,
            animatedStyle,
            { backgroundColor: colors.overlay.heavy },
          ]}
        />
        {segments.map((segment, index) => (
          <TouchableOpacity
            key={segment.value}
            style={[styles.segment, { width: itemWidth }]}
            onPress={() => onChange(segment.value)}
          >
            {segment.icon && (
              <Ionicons name={segment.icon} size={12} color={colors.neutral.light} />
            )}
            <Text style={styles.title}>{segment.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  segmentedButtonContainer: {
    width: "100%",
    overflow: "hidden",
    padding: 2,
    borderRadius: 10,
    borderWidth: 1
  },
  segmentedItemsContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
  selected: {
    position: "absolute",
    zIndex: -1,
    height: "100%",
    borderRadius: 8,
  },
  segment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: 6,
    borderRadius: 8,
  },
  title: {
    textTransform: "capitalize",
  },
});
