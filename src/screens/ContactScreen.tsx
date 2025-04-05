import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContactScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Entre em contato</Text>
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

export default ContactScreen;
