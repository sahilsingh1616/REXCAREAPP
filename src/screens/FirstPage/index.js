import { StyleSheet, Text, View, Image, TextInput, ScrollView, Dimensions, TouchableOpacity, Alert,Platform } from 'react-native'
import React, { useRef, useState } from 'react'
import SignUp from '../signup';
import { HandlePostApi } from '../../Services/AuthFunction';
import { LOGIN_URL } from '../../Config';
const { width, height } = Dimensions.get('screen');


const Logo = require('../../../assets/images/blind.png');
const Logo1 = require('../../../assets/images/restriction.png');


const FirstPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(true)
    const [checkValidEmail, setCheckInValidEmail] = useState(false)
    console.log(email)
    console.log(password)

    const Hidden = () => {
        setImage(!image)
    }

    const ref = useRef();

    // const ConditionCheck = () => {
    //     if (email == '' && password == '') {

    //         Alert.alert('Error', 'Please fill all Invaild field')
    //     }
    //     else if (email == '') {

    //         Alert.alert('Error', 'Enter email')

    //     }

    //     else if (password == '') {
    //         Alert.alert('Error', 'Enter Password')

    //     }
    //     else if (checkValidEmail == true) {
    //         Alert.alert('Error', 'plz enter email properly')
    //     }
    //     else {
    //         navigation.navigate('drawer')
    //     }

    //     console.log(email)
    //     console.log(password)
    // }

    // const handleCheckEmail = (text) => {

    //     var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    //     var regex = /(\d{2})-(\d{2})-(\d{4})/;

    //     setEmail(text)
    //     if (re.test(text) || regex.test(text)) {
    //         setCheckInValidEmail(false)
    //     }
    //     else {
    //         setCheckInValidEmail(true)
    //     }
    // }

    async function HandleLogin() {
        const LoginData = {

            email:email,
            password: password,
            device_type: Platform.OS=='android'?'android':'ios' ,
            device_token: "ios"

        }

        const response= await HandlePostApi(LoginData,LOGIN_URL)
        if(response?.data?.code==200){
            // console.log(response?.data?.body,'-------------------------------')
            navigation.replace('drawer')
        }else{
        Alert.alert(response?.data?.message)
        }

    }

    return (
        <View style={styles.maincontainer}>
            <ScrollView keyboardShouldPersistTaps='always' style={styles.scrollMain}>
                <View style={styles.firstview}>
                    <View style={styles.secondview}>
                        <Image source={require('../../../assets/images/mainlogo.png')} style={styles.img} />
                    </View>
                    <View style={styles.thirdview}>
                        <View style={styles.fourthview}>
                            <Text style={styles.txt}>Welcome Back!</Text>
                            <View style={styles.fifthview}>
                                <Text style={styles.txt1}>Enter details to login your account</Text>

                            </View>
                        </View>
                        <View style={styles.sixthview}>
                            <Text style={styles.txt2}>Email</Text>
                            <TextInput value={email} onSubmitEditing={() => [ref.current.focus()]} placeholderTextColor='#7D7D7D' placeholder='Enter Email' style={styles.txtinput} maxLength={23} onChangeText={(text) => setEmail(text)}/>

                        </View>
                        <View style={{ alignSelf: 'flex-end', marginRight: '10%' }}>
                            {checkValidEmail ?
                                (<Text style={{ fontSize: 16, color: 'green', fontWeight: '400' }}>Wrong Format email</Text>) : (<Text></Text>)}
                        </View>
                        <View style={styles.seventhview}>
                            <Text style={styles.txt2}>Password</Text>
                            <View style={{}}>
                                <View style={styles.eightview}>
                                    <TextInput value={password} ref={ref} placeholderTextColor='#7D7D7D' placeholder='Enter Password' style={styles.txtinput1} maxLength={20} secureTextEntry={image} onChangeText={(password) => setPassword(password)} />
                                    <TouchableOpacity onPress={Hidden}>
                                        <Image source={image ? Logo1 : Logo} style={styles.img1} />
                                    </TouchableOpacity>

                                </View>

                                {checkValidEmail ?
                                    (<Text style={{ fontSize: 16, color: 'green', fontWeight: '400' }}>Wrong Format Password</Text>) : (<Text></Text>)}

                            </View>
                        </View>

                        <View style={styles.ninethview}>
                            <TouchableOpacity onPress={() => navigation.navigate('forgetpassword')}>
                                <Text style={styles.txt3}>Forget Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tenthview}>
                            <TouchableOpacity onPress={HandleLogin} style={styles.touchview}>
                                <Text style={styles.txt4}>LOGIN</Text>

                            </TouchableOpacity>
                        </View>
                        <View style={styles.elventhview}>
                            <View style={styles.twelveview}>
                                <Text style={styles.txt5}>Don’t have any account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                                    <Text style={styles.txt6}> Sign Up</Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default FirstPage

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollMain: {
        flex: 1
    },
    firstview: {
        flex: 1,
        height: height,
        backgroundColor: 'white'
    },
    secondview: {
        backgroundColor: 'white', height: 250, alignItems: 'center'
    },
    thirdview: {
        height: '100%', backgroundColor: '#055294', borderTopRightRadius: 50, borderTopLeftRadius: 50
    },
    fourthview: {
        alignItems: 'center', marginTop: 20
    },
    fifthview: {
        marginTop: 6
    },
    sixthview: {
        marginTop: '20%', marginLeft: '10%'
    },
    seventhview: {
        marginTop: '6%', marginLeft: '10%'
    },
    eightview: {
        flexDirection: 'row', backgroundColor: 'white', width: '90%', height: 50, borderRadius: 10, marginTop: 6
    },
    ninethview: {
        marginTop: 10, marginLeft: '12%'
    },
    tenthview: {
        marginTop: '10%', alignItems: 'center'
    },
    elventhview: {
        alignItems: 'center'
    },
    twelveview: {
        flexDirection: 'row', marginTop: '8%'
    },
    img: {
        width: 150, height: 150, marginTop: '16%'
    },
    img1: {
        width: 20, height: 20, marginTop: 15, marginLeft: 1
    },
    txt: {
        fontSize: 35, fontFamily: 'Arial Rounded MT Bold', fontWeight: '600', color: '#fff'
    },
    txt1: {
        fontSize: 16, color: '#fff', fontWeight: '400'
    },
    txt2: {
        fontSize: 16, color: '#fff', fontWeight: '400'
    },
    txt3: {
        fontSize: 14, color: '#fff', fontWeight: '400'
    },
    txt4: {
        fontSize: 16, color: '#FFFF', textAlign: 'center', paddingTop: 13, fontWeight: '500'
    },
    txt5: {
        fontSize: 14, color: '#FFFF', fontWeight: '400'
    },
    txt6: {
        fontSize: 14, color: '#FFFF', fontWeight: 'bold'
    },
    txtinput: {
        backgroundColor: '#fff', width: '90%', height: 50, color: 'black', marginTop: 6, borderRadius: 10, paddingLeft: 10
    },
    txtinput1: {
        width: '88%', color: 'black', paddingLeft: 10
    },
    touchview: {
        backgroundColor: '#389BD5', width: '80%', borderRadius: 10, height: 50
    }
})