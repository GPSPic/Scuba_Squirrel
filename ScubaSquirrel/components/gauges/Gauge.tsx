import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Gauge() {
  return (
    <View style={styles.gaugeStyle}>
      <Text>Gauge</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    gaugeStyle: {
        flex: 1,
        backgroundColor: 'purple'
    }
})