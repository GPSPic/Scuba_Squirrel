import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title() {
  return (
    <View style={styles.titleStyle}>
      <Text>ScubaSquirrel</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle: {
        flex: 1,
        backgroundColor: 'pink'
    }
})