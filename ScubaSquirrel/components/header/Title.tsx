import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Title() {
  return (
    <View style={styles.titleStyle}>
      <Image source={require('../../assets/ScubaSquirrelLogo.png')} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        },
      image: {
        width: 125,
        height: 60,
        marginRight: 10,
      },
})