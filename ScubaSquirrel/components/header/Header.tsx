import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Acorn from './BankedAcorn'
import Title from './Title'
import MenuButton from '../buttons/MenuButton'

export default function Header({bankedAcorn, navigation}: any) {

  return (
    <View style={styles.header}>
      <View style={{flex:1}}>
      <Acorn bankedAcorn = {bankedAcorn}></Acorn>
      </View>
      <View style={{flex:1}}>
        <Title/>
      </View>
      <View style={{flex:1}}>
        <MenuButton navigation={navigation}></MenuButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 35
    },
})