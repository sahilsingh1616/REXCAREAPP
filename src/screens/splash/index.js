import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import FirstPage from '../FirstPage';

const Splash = ({navigation}) => {

  
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('FirstPage');

        }, 2000);
      }, []);
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/mainlogo.png')} style={styles.img} />
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    img: {
        width: 201, height: 212
    }
})