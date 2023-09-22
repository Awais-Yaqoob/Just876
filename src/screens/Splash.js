import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const Splash = () =>{

    return(
            <View  >
              <View style={styles.container}>
                <Image source={require('../assets/Logo.png')} style={{height:100, width:300, resizeMode:'contain' }} /> 
            </View>
            <View >
            <Text style={{textAlign:'center', marginBottom:10, color:'gray', }}>Powered by just876.com</Text>
            </View>
            </View>
          );
        }
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center', 
          },
        });

export default Splash;
