import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { DATA } from './index1';
const { width, height } = Dimensions.get('screen');

const HomeScreen = ({ navigation }) => {
    return (

        <KeyboardAwareScrollView>
            <ScrollView contentContainerStyle>

                <View style={styles.maincontainer}>
                    <View style={styles.scroll}>

                        <View style={styles.firstview}>
                            <TouchableOpacity onPress={() => { navigation.openDrawer()}}>
                                <Image source={require('../../../assets/images/xxxx.png')} style={styles.img} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.txtview}>
                            <Text style={styles.txt}>Let’s get you{'\n'}signed up</Text>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/images/Rectangle.png')} style={styles.img1} />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.withtxt}>
                            <Text style={styles.txt1}>with these amazing Free{'\n'}Wellness & health services!</Text>
                        </View>

                    </View>
                    <View style={styles.secondview}>
                        <View style={styles.botmview}>
                            <View style={styles.botmTop}>
                                <Text style={styles.botmtxt}>Once signed up, you will{'\n'}have 100% FREE access to{'\n'}the below services</Text>
                            </View>
                        </View>
                        <View style={styles.botmbackgroundview}>
                            <View style={styles.txtrow}>
                                <TouchableOpacity>
                                    <Text style={styles.questiontxt}>Questions on each service</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.abouttxt}>About the services</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.quickview}>
                            <Text style={styles.quicktxt}>Quick Access</Text>

                        </View>
                        <View style={styles.BotmdownView}>
                            <View style={styles.backgroundView}>
                                <Image source={require('../../../assets/images/dirx.png')} style={styles.fourimg} />
                                <View style={styles.signtxtview}>
                                    <Text style={styles.signtxt}>Sign Up</Text>
                                    <TouchableOpacity onPress={()=>navigation.navigate('details',{fordata1:DATA[0]})}>
                                        <Image source={require('../../../assets/images/path.png')} style={styles.path} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.backgroundView}>
                                <Image source={require('../../../assets/images/tela.png')} style={styles.fourimg} />
                                <View style={styles.signtxtview}>
                                    <Text style={styles.signtxt}>Sign Up</Text>
                                    <TouchableOpacity onPress={()=>navigation.navigate('details',{fordata1:DATA[1]})}>
                                        <Image source={require('../../../assets/images/path.png')} style={styles.path} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                        <View style={styles.BotmdownView}>
                            <View style={styles.backgroundView}>
                                <Image source={require('../../../assets/images/text.png')} style={styles.fourimg} />
                                <View style={styles.signtxtview}>
                                    <Text style={styles.signtxt}>Sign Up</Text>
                                    <TouchableOpacity onPress={()=>navigation.navigate('details',{fordata1:DATA[2]})}>
                                        <Image source={require('../../../assets/images/path.png')} style={styles.path} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.backgroundView}>
                                <Image source={require('../../../assets/images/quest.png')} style={styles.fourimg} />
                                <View style={styles.signtxtview}>
                                    <Text style={styles.signtxt}>Sign Up</Text>
                                    <TouchableOpacity onPress={()=>navigation.navigate('details',{fordata1:DATA[3]})}>
                                        <Image source={require('../../../assets/images/path.png')} style={styles.path} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </View>
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: '#055294'
    },
    scroll: {
        backgroundColor: '#055294',
        width: width,
        height: 220
    },
    firstview: {
        backgroundColor: 'white', width: 40, height: 40, borderRadius: 10, marginLeft: '4%', marginTop: 20
    },
    img: {
        width: 19, height: 19, alignSelf: 'center', marginTop: 9
    },
    secondview: {
        backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, width: width, height: 670
    },
    txtview: {
        marginTop: 20, marginLeft: '4%', flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-end'
    },
    txt: {
        fontSize: 29, color: '#fff', fontWeight: 'bold'
    },
    img1: {
        width: 70, height: 70, marginRight: 30
    },
    withtxt: {
        marginTop: '4%', marginLeft: '4%'
    },
    txt1: {
        color: '#fff', fontWeight: '400'
    },
    botmview: {
        alignItems: 'center', marginTop: '7%'
    },
    botmTop: {
        borderRadius: 20, width: '85%', height: 130, borderRightWidth: 20, borderColor: '#AABE53'
    },
    botmtxt: {
        fontSize: 22, fontWeight: '900', color: '#AABE53', marginLeft: 10, marginTop: 10, lineHeight: 40
    },
    botmbackgroundview: {
        backgroundColor: '#F2F6FA', width: '85%', height: 49, marginTop: '8%', alignSelf: 'center'
    },
    txtrow: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15
    },
    questiontxt: {
        fontSize: 14, color: '#065194', fontWeight: '400', marginLeft: 10
    },
    abouttxt: {
        fontSize: 14, color: '#065194', fontWeight: '400', marginRight: 20, textDecorationLine: 'underline'
    },
    quickview: {
        marginTop: '5%', marginLeft: '7%'
    },
    quicktxt: {
        fontSize: 25, color: '#065194', fontWeight: '600'
    },
    BotmdownView: {
        flexDirection: 'row', marginTop: 10, justifyContent: 'space-evenly'
    },
    backgroundView: {
        backgroundColor: '#F2F6FA', width: 160, height: 160, borderRadius: 10, justifyContent: 'center', alignItems: 'center'
    },
    fourimg: {
        width: 150, height: 37, resizeMode: 'contain'
    },
    signtxtview: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: '15%', width: '80%'
    },
    signtxt: {
        fontSize: 16, fontWeight: '700', color: 'black', opacity: 0.3
    },
    path: {
        width: 20, height: 20
    }

})