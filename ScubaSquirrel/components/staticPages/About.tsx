import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../header/Header'
import { LinearGradient } from 'expo-linear-gradient';

export default function About({route, navigation}: any) {
  const bankedAcorn = route.params.bankedAcorn;

  return (
    <LinearGradient style={styles.container} colors={['#79f8ff', '#0040a1']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
      <Header bankedAcorn={bankedAcorn}navigation={navigation}/>
      <View style={styles.content}>
        <View style={styles.textContainer}>
        <Text style={styles.textHeader}>ABOUT</Text>
          <Text style={styles.textHeader}></Text>
          <Text style={styles.text}>Scuba Squirrel is a simple iOS/Android mobile game created by a group of software development students over the course of 2 weeks.</Text>
        </View>    
      </View>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>CREDITS</Text>
          <Text style={styles.text}></Text>
          <Text style={styles.text}>freepik - image assets</Text>
          <Text style={styles.text}>Silvana Roth - ScubaSquirrel animation</Text>
          <Text style={styles.text}>Boris Berak - React Native Game Engine</Text>
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
    marginLeft: 40,
    marginRight: 40,
  },
  textHeader: {
    color: '#feee00',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  text: {
    color: '#feee00',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    letterSpacing: 1,
    lineHeight: 25
  },
});
