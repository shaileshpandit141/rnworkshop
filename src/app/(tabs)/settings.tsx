import ThemeControlButton from '@/components/ThemeControlButton';
import { View } from '@/components/ui';
import React from 'react';
import { StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
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