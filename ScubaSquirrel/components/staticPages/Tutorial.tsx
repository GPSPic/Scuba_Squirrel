import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../header/Header'

export default function Tutorial() {
  return (
    <View style = {styles.about}>
      <View style = {styles.headerDisplay}>
        <Header/>
      </View>
      <View style={styles.content}>
        <Text>Tutorial</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  about: {
    flex: 1, 
    backgroundColor: "yellow"
  },
  headerDisplay: {
    flex: 1,
  },
  content:{
    flex:10,
  }
})