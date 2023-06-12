import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function StatDisplay() {
  return (
    <View style={styles.statDisplay}>
      <Text style={styles.statText}>Current Stat: ***</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    statDisplay: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'yellow',
        borderRadius: 20,
        borderStyle: 'dashed',
        backgroundColor: 'transparent',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 250,
        height: 40,
        color: '#feee00',
      },
    statText: {
      color: '#feee00',
      fontSize: 15,
    }
})