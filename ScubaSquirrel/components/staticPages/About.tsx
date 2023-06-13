import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../header/Header'
import { LinearGradient } from 'expo-linear-gradient';

export default function About({bankedAcorn}: any) {
  return (
    <LinearGradient style={styles.container} colors={['#79f8ff', '#0040a1']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
      <Header bankedAcorn={bankedAcorn}/>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>ABOUT</Text>
        </View>    
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>TEST</Text>
        </View>    
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    },
  textContainer: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    color: '#feee00',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
