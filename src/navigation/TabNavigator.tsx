import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import PlanSelectionScreen from "../screens/PlanSelectionScreen";
import MealSelectionScreen from "../screens/MealSelectionScreen";
import SummaryScreen from "../screens/SummaryScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#1c1c1c", borderTopColor: "#333" },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "alert";
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Plan") iconName = "clipboard";
          else if (route.name === "Meals") iconName = "restaurant";
          else if (route.name === "Summary") iconName = "list";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Plan" component={PlanSelectionScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Meals" component={MealSelectionScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Summary" component={SummaryScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
