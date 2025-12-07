import { GroupSection, Segment, SegmentedButton } from '@/components/ui';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

type TitleType = "System" | "Dark" | "Light";
type ValueType = "system" | "dark" | "light";

const segments: Segment<TitleType, ValueType>[] = [
  { title: "System", value: "system", icon: "laptop" },
  { title: "Dark", value: "dark", icon: "moon" },
  { title: "Light", value: "light", icon: "sunny" },
]

export default function ThemeControlButton() {
  const [selected, setSelected] = useState<ValueType>("system")

  return (
    <GroupSection title="Theme">
      <SegmentedButton
        segments={segments}
        value={selected}
        onChange={(value: ValueType) => { setSelected(value) }}
      />
    </GroupSection>
  )
}

const styles = StyleSheet.create({})