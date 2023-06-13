import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Acorn from './BankedAcorn'
import Title from './Title'
import MenuButton from '../buttons/MenuButton'

export default function Header({bankedAcorn, navigation}: any) {

  return (
    <View style={styles.header}>
      <Acorn bankedAcorn = {bankedAcorn}></Acorn>
      <Title></Title>
      <MenuButton navigation={navigation}></MenuButton>
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