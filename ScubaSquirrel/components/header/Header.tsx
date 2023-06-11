import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Acorn from './Acorn'
import Title from './Title'
import MenuButton from '../buttons/MenuButton'

export default function Header({acornCount}) {
  return (
    <View style={styles.header}>
      <Acorn acornCount = {acornCount}></Acorn>
      <Title></Title>
      <MenuButton></MenuButton>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 25
    },
})