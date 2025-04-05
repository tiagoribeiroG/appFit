import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductsScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Nossos produtos</Text>
  </View>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  screenText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductsScreen;
