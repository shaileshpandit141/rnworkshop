import { GroupSection, Segment, SegmentedButton } from '@/components/ui';
import { useColorScheme } from '@/context/colorSchemeContext';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

type TitleType = "System" | "Dark" | "Light";
type ValueType = "system" | "dark" | "light";

const segments: Segment<TitleType, ValueType>[] = [
  { title: "System", value: "system", icon: "laptop" },
  { title: "Dark", value: "dark", icon: "moon" },
  { title: "Light", value: "light", icon: "sunny" },
]

export default function ThemeControlButton() {
  const { resolvedScheme, scheme, switchSchemeTo } = useColorScheme();
  const [selected, setSelected] = useState<ValueType>(
    scheme === "system" ? "system" : resolvedScheme
  );

  return (
    <GroupSection title="Theme">
      <SegmentedButton
        segments={segments}
        value={selected}
        borderRadius={100}
        onChange={(value: ValueType) => {
          setSelected(value);
          switchSchemeTo(value)
        }}
      />
    </GroupSection>
  )
}

const styles = StyleSheet.create({})
