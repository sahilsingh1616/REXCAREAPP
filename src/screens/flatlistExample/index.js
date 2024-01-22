import { SafeAreaView, StyleSheet, Text, View, FlatList, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DATA } from './index1'

const Item = ({ itemcomp,navigation }) => (
    <View style={styles.container}>


        <TouchableOpacity onPress={() => {navigation.navigate('DataExtend',{itemcom2:itemcomp})}}>
            <Text style={styles.txtstyle}>{itemcomp.title}</Text>
        </TouchableOpacity>


        <Text style={styles.txtstyle1}>{itemcomp.description}</Text>


        <Image source={{ uri:itemcomp.image }} style={{ width: 120, height: 120, alignSelf: 'center' }} />
    </View>
);
const FlatListExample = ({ navigation }) => {
    return (

        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item itemcomp={item} navigation={navigation} />}
            keyExtractor={item => item.description}
        />


    )
}

export default FlatListExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },
    txtstyle: {
        backgroundColor: 'green',
        padding: 10,
        marginHorizontal: 16,
        marginVertical: 8

    },
    txtstyle1: {
        backgroundColor: 'blue',
        padding: 10,
        marginHorizontal: 16,
        marginVertical: 8

    },
    imageuri: {
        backgroundColor: 'lime',
        padding: 10,
        marginHorizontal: 16,
        marginVertical: 8
    }

});


