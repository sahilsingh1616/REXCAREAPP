import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
const { width, height } = Dimensions.get('screen');


const ForgetPassword = ({ navigation }) => {

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    const [otp1,setOtp1]=useState('');
    const [otp2,setOtp2]=useState('');
    const [opt3,setOtp3]=useState('');
    const [otp4,setOtp4]=useState('');


    return (
        <ScrollView>
            <View>
                <View style={styles.MAINCONTAINER}>
                    <View style={styles.IMGVIEW}>
                        <Image source={require('../../../assets/images/also.png')} style={styles.img} />
                    </View>

                </View>

                <View style={styles.FORGETTXT}>
                    <View style={styles.THREETXTMARGIN}>
                        <Text style={styles.txt}>Verify Email</Text>
                        <Text style={styles.SECONDLINE}>Please enter the verification code sent to </Text>
                        <Text style={styles.THIRDTXT}>your email</Text>

                    </View>

                    <View style={styles.EMAILVIEW}>
                        <Text style={styles.EMAILTXT}>Verification Code</Text>


                    </View>

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '5%' }}>
                        <TextInput placeholderTextColor='black' ref={ref1} value='otp1' style={{ width: 50, height: 50, color: 'black', borderWidth: 0.5, borderRadius: 10, backgroundColor: 'white',textAlign:'center',fontWeight:'800' }} keyboardType="number-pad" maxLength={1} onChangeText={text => {
                            setOtp1(text);
                            if (text.length >= 1) {
                                ref2.current.focus();

                            }
                        }} />
                        <TextInput placeholderTextColor='black' ref={ref2} value='otp2' style={{ width: 50, height: 50, borderWidth: 0.5, borderRadius: 10, backgroundColor: 'white', marginLeft: '3%',textAlign:'center', color: 'black',fontWeight:'800' }} keyboardType="number-pad" maxLength={1} onChangeText={text => {
                            setOtp2(text);
                            if (text.length >= 1) {
                                ref3.current.focus();
                            }
                            else if(text.length<1){
                            ref2.current.focus();
                            }
                        }} />
                        <TextInput placeholderTextColor='black' ref={ref3} value='otp3' style={{ width: 50, height: 50, borderWidth: 0.5, borderRadius: 10, backgroundColor: 'white', marginLeft: '3%',textAlign:'center', color: 'black',fontWeight:'800' }} keyboardType="number-pad" maxLength={1} onChangeText={text => {
                             setOtp3(text);
                            if (text.length >= 1) {
                                ref4.current.focus(); 
                            }
                            else if(text.length<1){
                            ref3.current.focus();
                            }
                        }}
                        />
                        <TextInput placeholderTextColor='black' ref={ref4} value='otp4' style={{ width: 50, height: 50, borderWidth: 0.5, borderRadius: 10, backgroundColor: 'white', marginLeft: '3%',textAlign:'center', color: 'black',fontWeight:'900' }} keyboardType="number-pad" maxLength={1} onChangeText={text => {
                              setOtp4(text);
                              if (text.length >= 1) {
                                ref4.current.focus();
                            }
                            else if(text.length<1){
                            ref3.current.focus();
                            }
                        }}  
                            
                            />
                    </View>


                    <View style={{ marginTop: '5%', flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 15, color: 'white', opacity: 0.8 }}>Didn't received code? </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, color: 'white', fontWeight: '700', textDecorationLine: 'underline' }}>Resend Code</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.TOUCH}>
                        <Text style={styles.SUBMITTXT}>SUBMIT</Text>

                    </TouchableOpacity>
                </View>




            </View>

        </ScrollView>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    MAINCONTAINER: {
        flex: 1, height: 320, backgroundColor: 'white'
    },
    IMGVIEW: {
        alignItems: 'center', marginTop: '20%'

    },
    img: {
        width: 300, height: 200
    },
    FORGETTXT: {
        height: height, borderTopRightRadius: 50, borderTopLeftRadius: 50, backgroundColor: '#055294'
    },
    THREETXTMARGIN: {
        marginTop: '7%', alignItems: 'center'
    },
    txt: {
        fontSize: 32, color: 'white', fontWeight: '500'
    },
    SECONDLINE: {
        fontSize: 16, color: 'white', marginTop: '3%'
    },
    THIRDTXT: {
        fontSize: 16, color: 'white'
    },
    EMAILVIEW: {
        marginTop: '9%', marginLeft: '8%', alignItems: 'center'
    },
    EMAILTXT: {
        fontSize: 20, color: 'white', fontWeight: '700'
    },
    TXTINPUT: {
        borderWidth: 1, width: '90%', height: 50, borderRadius: 13, backgroundColor: 'white', marginTop: 10, paddingLeft: 10, color: 'black'
    },
    TOUCH: {
        width: '83%', height: 50, borderRadius: 13, backgroundColor: '#389BD5', alignSelf: 'center', marginTop: '10%'
    },
    SUBMITTXT: {
        fontSize: 18, color: 'white', textAlign: 'center', marginTop: 12, fontWeight: '500'
    }


})