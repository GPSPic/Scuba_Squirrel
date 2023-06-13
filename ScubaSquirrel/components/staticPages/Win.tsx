import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Header from '../header/Header';
import { LinearGradient } from 'expo-linear-gradient';
import StartButton from '../buttons/StartButton';

export default function Win({ navigation, route }: any) {
  const gameReload = route.params.reloadGame;
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  return (
    <LinearGradient
      style={styles.container}colors={['#79f8ff', '#0040a1']}start={{ x: 0, y: 1 }}end={{ x: 1, y: 1 }}>
      <Header navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>WELL DONE!</Text>
          {/* <Text style={styles.text}>YOU DID IT!</Text> */}
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Animated.Image
            source={require('../../assets/Squirrel_transparent.gif')}
            style={[styles.image, { transform: [{ translateY }] }]}/>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>PLAY NEXT LEVEL...</Text>
        </View>
      </View>
      <View style={styles.content}>
        <StartButton navigation={navigation} gameReload={gameReload} />
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
    marginTop: 20,
    marginBottom: 80,
  },
  textContainer: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    color: '#feee00',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  image: {
    maxHeight: 200,
    maxWidth: 150,
  },
});
