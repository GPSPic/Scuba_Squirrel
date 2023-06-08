import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Acorn() {
  return (
    <View style={styles.acornStyle}>
      <Text>Acorn</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    acornStyle: {
        flex: 1,
        backgroundColor: 'brown'
    }
})