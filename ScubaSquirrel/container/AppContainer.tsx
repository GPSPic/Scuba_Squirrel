import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../components/home/Home'

import About from '../components/staticPages/About'
import AirTank from '../components/buttons/AirTank'
import MenuButton from '../components/buttons/MenuButton'
import StartButton from '../components/buttons/StartButton'
import Suit from '../components/buttons/Suit'


export default function AppContainer() {
  return (
    <View style ={{flex : 1, backgroundColor: 'blue'}}>
      <Text>AppContainer</Text>
      <Home/>
      <About/>
      {/* <Tutorial/> */}
    </View>
  )
}

const styles = StyleSheet.create({})

