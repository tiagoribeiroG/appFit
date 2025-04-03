import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PlanSelectionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personalize your plan</Text>
      <Text style={styles.subtitle}>Choose a type of meal</Text>
      {/* Aqui você pode adicionar opções interativas */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    marginTop: 10,
  },
});
