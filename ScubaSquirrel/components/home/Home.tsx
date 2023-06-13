import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import StartButton from '../buttons/StartButton'
import StatDisplay from '../gauges/StatDisplay'
import Header from '../header/Header'
import { LinearGradient } from 'expo-linear-gradient';



export default function Home({ navigation, route }: any) {
  const gameReload = route.params.reloadGame;
  const bankedAcorn = route.params.bankedAcorn;

    console.log(bankedAcorn);
  

  return (
    <LinearGradient style = {styles.container} colors={['#79f8ff', '#0040a1']}start={{x:0, y:1}}end={{x:1, y:1}}>
        <Header bankedAcorn={bankedAcorn}/>
        <View style={styles.statDisplayContainer}>
          <StatDisplay/>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/Squirrel_transparent.gif')} style={styles.image} />
        </View>
        <View style={styles.startButtonDisplay}>
          <StartButton navigation={navigation} gameReload={gameReload}/>
        </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  startButtonDisplay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  statDisplayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
})