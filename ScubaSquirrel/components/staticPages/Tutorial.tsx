import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Header from '../header/Header';
import { LinearGradient } from 'expo-linear-gradient';

export default function Tutorial({navigation}: any) {
  return (
    <LinearGradient style={styles.container} colors={['#79f8ff', '#0040a1']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
      <Header navigation={navigation}/>
      <View style={styles.content}>
        <Image source={require('../../assets/Squirrel_transparent.gif')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>CLICK THE SCREEN IN THE DIRECTION YOU WANT TO MOVE THE SQUIRREL.</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/acorn/acorn.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>COLLECT AS MANY ACORNS AS YOU CAN.</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/caveEntry.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>MAKE YOUR WAY TO THE CAVE TO COMPLETE THE LEVEL.</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/rocks:walls/wall4Bottom3.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>USE THE WALLS TO HIDE FROM ENEMIES.</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.fish}>
          <Image source={require('../../assets/fish/yellowfish.png')} style={styles.image} />
          <Image source={require('../../assets/fish/pinkfish.png')} style={styles.image} />
          <Image source={require('../../assets/fish/bluefish.png')} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>THESE FISH ARE HARMLESS AND CAN BE USED TO YOUR ADVANTAGE...</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/fish/puffafish.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>PUFFERFISH WILL EXPAND ON CONTACT. AVOID!</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/fish/jellyfish.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>JELLY FISH ARE POISONOUS AND WILL END THE GAME. AVOID!</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/seaweed/kelp2.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>SEAWEED WILL GET YOU TANGLED AND SLOW YOU DOWN.</Text>
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
  },
  image: {
    maxHeight: 50,
    maxWidth: 55,
  },
  fish: {
    justifyContent: 'space-around',
  },
  textContainer: {
    flex: 1,
    marginLeft: 50,
    marginRight: 30,
  },
  text: {
    color: '#feee00',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
