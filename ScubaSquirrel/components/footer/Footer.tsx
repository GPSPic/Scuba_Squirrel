import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gauge from '../gauges/Gauge'
import AirTank from '../buttons/AirTank'
import Suit from '../buttons/Suit'

export default function Footer({suitAir, dumpSuit, tankAir, fillSuit}: any){

  return (
    <View style={styles.footer}>
      <View style={{flex:1}}>
        <Suit suitAir={suitAir} dumpSuit={dumpSuit}/>
      </View>
      <View style={{flex:1}}>
        <AirTank tankAir={tankAir} fillSuit={fillSuit}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 15
    }
})