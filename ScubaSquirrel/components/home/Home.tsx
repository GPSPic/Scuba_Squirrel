import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StartButton from '../buttons/StartButton'
import StatDisplay from '../gauges/StatDisplay'
import Header from '../header/Header'

export default function Home({ navigation }: any) {
  return (
    <View style = {{flex: 1, backgroundColor: "red"}}>
      <Header/>
      <View style = {{flex:1}}>
        <Text>Home</Text>
      </View>
      <View style={styles.statDisplayDisplay}>
        <StatDisplay/>
      </View>
      <View style={styles.startButtonDisplay}>
        <StartButton navigation={navigation}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  startButtonDisplay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'darkturquoise',
},
  statDisplayDisplay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'white',
},
})