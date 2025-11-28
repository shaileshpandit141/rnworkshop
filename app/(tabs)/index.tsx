import Route from '@/components/Route';
import { Text, View } from '@/components/ui';
import useColors from '@/hooks/useColors';
import screens from '@/screens';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


const Screen = () => {
  const colors = useColors();
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.core.background }]}
      showsVerticalScrollIndicator={false}
    >
      {screens.map((screen, index) => ((
        <View
          key={index}
          style={[
            styles.screenContainer,
            index === screens.length - 1 ? { paddingBottom: 12 } : {}
          ]}
        >
          <Text style={[styles.title, { color: colors.neutral.mid }]}>{screen.title}</Text>
          <View style={[styles.routeContainer, { borderColor: colors.core.border }]}>
            {screen.routes.map((route, index) => (
              <Route
                key={index}
                {...route}
                isLast={index === screen.routes.length - 1}
              />
            ))}
          </View>
        </View>
      )))}
    </ScrollView>
  )
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    rowGap: 8,
    paddingInline: 8,
    paddingTop: 12,
  },
  title: {
    textTransform: "capitalize",
    fontSize: 12
  },
  routeContainer: {
    borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden",
  }
})