import {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AirTank({tankAir, fillSuit}) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={fillSuit}>
        <Image source={require('../../assets/tank2.jpg')} style={styles.image} resizeMode='contain'/>
        <Text style={styles.text}>{tankAir}l</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
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
  },
});