import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }: any) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
});
