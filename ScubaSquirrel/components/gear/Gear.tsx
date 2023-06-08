import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Gear() {
  return (
    <View style={styles.gearStyle}>
      <Text>Gear</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    gearStyle: {
        flex: 1,
        backgroundColor: 'orange'
    }
})