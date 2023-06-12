import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Header from '../header/Header';
import { LinearGradient } from 'expo-linear-gradient';

export default function Tutorial() {
  return (
    <LinearGradient style={styles.container} colors={['#79f8ff', '#0040a1']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
      <Header />
      <View style={styles.content}>
        <Image source={require('../../assets/Squirrel_transparent.gif')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Click the screen in the direction you want to go to move the squirrel.</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/acorn/acorn.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Collect all the acorns to complete the level.</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/rocks:walls/circlerock.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Contact with walls will end the game. Avoid!</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.fish}>
          <Image source={require('../../assets/fish/yellowfish.png')} style={styles.image} />
          <Image source={require('../../assets/fish/pinkfish.png')} style={styles.image} />
          <Image source={require('../../assets/fish/bluefish.png')} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>These types of fish are harmless and can be used to your advantage...</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/fish/puffafish.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Pufferfish expand on contact. Avoid!</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/fish/jellyfish.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Jellyfish are poisonous and will end the game. Avoid!</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/seaweed/kelp1.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Seaweed will get you tangled and reduce your speed but protect you from enemies.</Text>
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
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
});
