import react from "react";
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import ProductCard from "../components/ProductCard";

const products = [
    {
      id: '1',
      title: 'Product 1',
      price: '$10',
      imageUrl: require('../assets/download.jpeg')
    },
    {
      id: '2',
      title: 'Product 2',
      price: '$15',
      imageUrl: require('../assets/download.jpeg')
    },
    {
        id: '3',
        title: 'Product 3',
        price: '$20',
        imageUrl: require('../assets/download.jpeg')
      },
      {
        id: '4',
        title: 'Product 4',
        price: '$25',
        imageUrl: require('../assets/download.jpeg')
      },
    // Add more products as needed
  ];
  // imageSource={require('../assets/download.jpeg')}
const Home = () =>{
    return (
        <View style={styles.container}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProductCard
                title={item.title}
                price={item.price}
                imageSource={item.imageUrl}
              />
            )}
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        paddingTop:50
      },
    });
    
export default Home;