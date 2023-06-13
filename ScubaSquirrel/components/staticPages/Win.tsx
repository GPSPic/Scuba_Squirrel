import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../header/Header'
import { LinearGradient } from 'expo-linear-gradient';
import StartButton from '../buttons/StartButton';

export default function Win({navigation, route, bankedAcorn}: any) {
  const gameReload = route.params.reloadGame;
  return (
    <LinearGradient style={styles.container} colors={['#79f8ff', '#0040a1']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
      <Header bankedAcorn={bankedAcorn}/>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
        <Image source={require('../../assets/Squirrel_transparent.gif')} style={styles.image}/>    
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>WELL DONE!</Text>
          <Text style={styles.text}>YOU DID IT!</Text>
        </View>    
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>PLAY NEXT LEVEL...</Text>
        </View>    
      </View>
      <View style={styles.content}>
        <StartButton navigation={navigation} gameReload={gameReload}/>
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
    marginBottom: 100,
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
  imageContainer:{
    // padding: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  },
  image:{
    maxHeight: 150,
    maxWidth: 100,
  },
});
