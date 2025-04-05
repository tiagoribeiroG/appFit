import 'react-native-reanimated';
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import ProductsScreen from "./screens/ProductsScreen";
import { StyleSheet } from "react-native";
import 'react-native-reanimated';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerStyle: styles.drawer,
          drawerActiveTintColor: "#4CAF50",
          drawerInactiveTintColor: "#888",
          headerShown: false,
          drawerIcon: ({ color, size }) => {
            const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
              Home: "home",
              Configurações: "settings",
              Sobre: "information-circle",
              Contato: "call",
              Produtos: "cart",
            };
          
            const iconName = icons[route.name] || "help-circle"; // Ícone padrão caso o nome não exista
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          ,
        })}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabel: "Início" }} />
        <Drawer.Screen name="Configurações" component={SettingsScreen} />
        <Drawer.Screen name="Sobre" component={AboutScreen} />
        <Drawer.Screen name="Contato" component={ContactScreen} />
        <Drawer.Screen name="Produtos" component={ProductsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#121212",
    width: 250,
  },
});