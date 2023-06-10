import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

export default function Gear({ currentAir }) {




  return (
    <View style={styles.gearStyle}>
      <Text>Gear: {currentAir}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    gearStyle: {
        backgroundColor: 'orange',
    }
})