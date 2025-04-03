import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = route.name === "Home" ? "home" : "settings";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#4CAF50",
          tabBarInactiveTintColor: "#888",
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Início" }} />
        <Tab.Screen name="Configurações" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#121212",
    borderTopColor: "#333",
    paddingBottom: 5,
    height: 60,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
