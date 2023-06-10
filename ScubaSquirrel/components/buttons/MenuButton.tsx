import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MenuButton() {
  return (
    <View>
      <Text style={styles.text}>menu</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
  color: '#feee00',
  fontSize: 25,
  fontWeight: 'bold',
  textAlign: 'center',
},})