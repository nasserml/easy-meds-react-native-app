import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Add New",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-square" size={24} color={color} />
          ),
        }}
        name="AddNew"
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
        name="Profile"
      />
    </Tabs>
  );
}
