import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function BankedAcorn({bankedAcorn}: any) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/acorn/acorn.png')} style={styles.image} />
      <Text style={styles.text}>{bankedAcorn}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  text: {
    color: '#feee00',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
