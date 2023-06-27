import {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Suit({suitAir, dumpSuit}) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={dumpSuit}>
        <Image source={require('../../assets/suit2.jpg')} style={styles.image} resizeMode='contain'/>
        <Text style={styles.text}>{suitAir}l</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  text: {
    color: '#feee00',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
});