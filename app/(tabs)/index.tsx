import { Text, View } from '@/components/ui';
import React from 'react';
import { StyleSheet } from 'react-native';

const Screen = () => {
  return (
    <View style={styles.container}>
      <Text>screens</Text>
    </View>
  )
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})