import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { width, height } = Dimensions.get('screen');
const Frequently = () => {
    return (
        <KeyboardAwareScrollView>
            <ScrollView >
                <View style={styles.maincontainer}>
                    <View style={styles.firstview}>
                        <TouchableOpacity>
                            <View style={styles.secondview}>

                                <Image source={require('../../../assets/images/Vecto.png')} style={styles.img} />



                            </View>
                        </TouchableOpacity>
                        <View style={styles.thirdview}>
                            <Text style={styles.txt}>FAQ</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </KeyboardAwareScrollView>
    )
}

export default Frequently

const styles = StyleSheet.create({
    maincontainer: {
        width: width, height: height, backgroundColor: 'white'
    },
    firstview: {
        marginTop: '10%', marginLeft: '7%', flexDirection: 'row'
    },
    secondview: {
        borderWidth: 1, width: 40, height: 40, borderRadius: 10, borderColor: '#055294', justifyContent: 'center'
    },
    img: {
        width: 9, height: 16, alignSelf: 'center'
    },
    thirdview: {
        alignItems: 'center', width: '70%'
    },
    txt: {
        fontSize: 25, fontWeight: '700', color: '#055294', marginTop: 10
    }
})