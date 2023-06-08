import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function StatDisplay() {
  return (
    <View style={styles.statDisplay}>
      <Text>StatDisplay</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    statDisplay: {
        // flex: 1,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'grey',
    },
})