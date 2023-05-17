import React from 'react';
import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import Form from './components/form/Index';


export default function App() {

  const image = require('./assets/Images/image-background.png')

  const windowWidth = useWindowDimensions().width;
  const isWideScreen = windowWidth <= 500;

  return (
    <View style={[styles.container, isWideScreen && styles.respoContent]}>

      <Image source={image} style={[styles.image, isWideScreen && styles.respoImage]} />

      <Form />

    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '200px',
    height: '200px',
    marginBottom: '140px',
    marginRight: '30px'
  },

  respoContent: {
    flexDirection: 'none',
  },

  respoImage: {
    marginBottom: '0',
    marginRight: '0'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  }
});
