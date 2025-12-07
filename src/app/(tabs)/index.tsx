import Route from '@/components/Route';
import { GroupSection, View } from '@/components/ui';
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
        <GroupSection
          key={index}
          title={screen.title}
          containerStyle={{paddingBottom: 12}}
        >
          <View style={[styles.routeContainer, { borderColor: colors.core.border }]}>
            {screen.routes.map((route, index) => (
              <Route
                key={index}
                {...route}
                isLast={index === screen.routes.length - 1}
              />
            ))}
          </View>
        </GroupSection>
      )))}
    </ScrollView>
  )
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  routeContainer: {
    borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden",
  }
})