import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'purple',
    },
})