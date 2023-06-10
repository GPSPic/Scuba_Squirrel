import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import StartButton from '../buttons/StartButton'
import StatDisplay from '../gauges/StatDisplay'
import Header from '../header/Header'
import Gear from '../gear/Gear'


export default function Home({ navigation }: any) {
  return (
      <View style={styles.container}>
      <View style={styles.statDisplayContainer}>
        <StatDisplay/>
      </View>
      <View style={styles.imageContainer}>
          <Image source={require('../../assets/Squirrel_transparent.gif')} style={styles.image} />
      </View>
      <View style={styles.startButtonDisplay}>
        <StartButton navigation={navigation}/>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
})