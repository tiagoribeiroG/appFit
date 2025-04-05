import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SummaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      {/* detalhes do pedido */}
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
