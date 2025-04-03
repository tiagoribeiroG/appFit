import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MealSelectionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How many meals would you like each week?</Text>
      {/* Aqui você pode adicionar os botões de seleção */}
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
});
