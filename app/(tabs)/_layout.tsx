import { SafeAreaView } from "@/components/ui";
import useColors from '@/hooks/useColors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const colors = useColors();
  return (
    <SafeAreaView>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.brand.primary,
          headerShown: true,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          animation: "shift",
          headerTitleStyle: {
            textTransform: "capitalize",
          },
          tabBarLabelStyle: {
            textTransform: "capitalize",
          },
          headerStyle: {
            height: 80,
            backgroundColor: colors.core.header,
            borderBottomWidth: .5,
            borderBottomColor: colors.core.border,
          },
          tabBarStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: colors.core.tab,
            borderBottomWidth: 0,
            borderTopWidth: .5,
            borderTopColor: colors.core.border,
            height: 52
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
          name="settings"
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
    </SafeAreaView>
  );
}
