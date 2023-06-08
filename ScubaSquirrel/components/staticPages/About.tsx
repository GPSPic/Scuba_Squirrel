import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../header/Header'

export default function About() {
  return (
    <View style = {{flex: 1, backgroundColor: "pink"}}>
      <View style={styles.header}> 
        <Header/>
      </View>
      <View style={styles.content}>
        <Text>About</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    flex: 10,
  },
  header:{
    flex: 1,
  }
})