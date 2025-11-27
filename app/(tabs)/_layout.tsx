import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
import useColors from '@/hooks/useColors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const colors = useColors();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerTitleAlign: "center",
        headerShadowVisible: false,
        animation: "shift",
        headerStyle: {
          height: 80,
          backgroundColor: colors.headerBackground,
          borderBottomWidth: .5,
          borderBottomColor: colors.border,
        },
        headerTitleStyle: {
          textTransform: "capitalize",
        },
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: colors.tabBackground,
          borderBottomWidth: .5,
          borderBottomColor: colors.border,
        },
        tabBarLabelStyle: {
          textTransform: "capitalize",
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "screens",
          tabBarLabel: "screens",
          tabBarIcon: ({ focused, color, size }) => (
            focused
              ? <Ionicons name="link-outline" size={size} color={color} />
              : <Ionicons name="link" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "settings",
          tabBarLabel: "settings",
          tabBarIcon: ({ focused, color, size }) => (
            focused
              ? <Ionicons name="settings" size={size} color={color} />
              : <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
