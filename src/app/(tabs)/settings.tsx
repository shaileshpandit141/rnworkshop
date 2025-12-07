import ThemeControlButton from '@/components/ThemeControlButton';
import { View } from '@/components/ui';
import useColors from '@/hooks/useColors';
import React from 'react';
import { StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const colors = useColors();
  return (
    <View style={[styles.container, { backgroundColor: colors.core.background }]}>
      <ThemeControlButton />
    </View>
  )
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    rowGap: 12,
  },
})