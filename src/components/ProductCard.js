import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ imageSource, title, price }) => {
  return (
    <View style={styles.card}>
      <Image  source={imageSource}  style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    margin: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    color:'green'
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProductCard;
