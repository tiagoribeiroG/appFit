import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <ImageBackground source={require("../assets/background.png")} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="whatsapp" size={24} color="white" />
          <Text style={styles.buttonText}>WHATSAPP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="instagram" size={24} color="white" />
          <Text style={styles.buttonText}>INSTAGRAM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="envelope" size={24} color="white" />
          <Text style={styles.buttonText}>E-MAIL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="map-marker" size={24} color="white" />
          <Text style={styles.buttonText}>LOCALIZAÇÃO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="facebook" size={24} color="white" />
          <Text style={styles.buttonText}>FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactButton}>
          <Text style={styles.interactButtonText}>CLIQUE PARA INTERAGIR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: 250,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  interactButton: {
    backgroundColor: "#FF5722",
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
  },
  interactButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
