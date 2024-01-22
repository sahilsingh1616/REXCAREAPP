import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DATA } from './index1'


const DataExtend = ({route}) => {

  return (
    <View>
      <Text style={{fontSize:11,color:'blue'}}>{route.params.itemcom2.image}</Text>
    </View>
  )
}

export default DataExtend

const styles = StyleSheet.create({})