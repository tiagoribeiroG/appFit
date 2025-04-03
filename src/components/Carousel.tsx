import React from "react";
import { View, Image, FlatList, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  require("../assets/img1.webp"),
  require("../assets/img2.webp"),
  require("../assets/img3.webp"),
];

const Carousel = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: "center",
  },
  image: {
    width: width * 0.9,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default Carousel;
