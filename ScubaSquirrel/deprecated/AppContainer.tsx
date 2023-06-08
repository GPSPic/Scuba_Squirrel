import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../components/home/Home'
import About from '../components/staticPages/About'
import Tutorial from '../components/staticPages/Tutorial'


export default function AppContainer() {
  return (
    <View style ={{flex : 1, backgroundColor: 'blue'}}>
      <Text>AppContainer</Text>
      {/* <Home/> */}
      {/* <About /> */}
      <Tutorial/>
    </View>
  )
}

const styles = StyleSheet.create({})

