import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../header/Header';
import { LinearGradient } from 'expo-linear-gradient';


export default function Menu({navigation, route}: any) {

  const bankedAcorn = route.params.bankedAcorn;

    const homeRoute = () => {
        navigation.navigate("Home");
    }
    const tutorialRoute = () => {
        navigation.navigate("Tutorial");
    }
    const aboutRoute = () => {
        navigation.navigate("About");
    }

    
  return (
    <LinearGradient style={styles.container} colors={['#79f8ff', '#0040a1']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
      <Header bankedAcorn={bankedAcorn} navigation={navigation}/>
        <View style={styles.content}>
            <View style={styles.textContainer}>
            <TouchableOpacity style={styles.button} onPress={homeRoute}>
                <Image source={require('../../assets/Home.png')} style={styles.image} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.content}>
            <View style={styles.textContainer}>
            <TouchableOpacity style={styles.button} onPress={tutorialRoute}>
                <Image source={require('../../assets/Tutorial.png')} style={styles.image2} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.content}>
            <View style={styles.textContainer}>
            <TouchableOpacity style={styles.button} onPress={aboutRoute}>
                <Image source={require('../../assets/About.png')} style={styles.image3} />
            </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textContainer: {
    flex: 1,
  },
  image:{
    width:170,
    height:40,
  },
  image2:{
    width:250,
    height:40,
  },
  image3:{
    width:200,
    height:40,
  },
  button: {
    borderWidth: 3,
    borderColor: '#feee00',
    borderRadius: 25,
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
