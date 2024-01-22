import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
const Logo = require('../../../assets/images/mainlogo.png');
const Logo1 = require('../../../assets/images/unchecked.png');
const Logo2 = require('../../../assets/images/checkbox.png');
const SignUp = ({ navigation }) => {
    const [image, setImage] = useState(true);

    const ImageShow = () => {
        setImage(!image)
    }

    return (
        <ScrollView >
            <View style={styles.maincontainer}>
                <View style={styles.firstview}>
                    <Image source={Logo} style={styles.img} />
                </View>
                <View style={styles.secondview}>

                    <View style={styles.thirdview}>
                        <Text style={styles.txt}>Sign Up</Text>
                        <Text style={styles.txt1}>Enter details to Register your account</Text>
                    </View>
                    <View style={styles.fourthview}>
                        <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter first name' style={styles.TextInput} />

                    </View>

                    <View style={styles.fifthview}>
                        <Text style={styles.txt2}>Last Name</Text>
                        <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter last name' style={styles.TextInput} />

                    </View>

                    <View style={styles.fifthview}>
                        <Text style={styles.txt2}>Email</Text>
                        <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter email address' style={styles.TextInput} />

                    </View>
                    <View style={styles.fifthview}>
                        <Text style={styles.txt2}>Phone no.</Text>
                        <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter phone no' style={styles.TextInput} />

                    </View>
                    <View style={styles.fifthview}>
                        <Text style={styles.txt2}>Company ID#</Text>
                        <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter ID' style={styles.TextInput} />

                    </View>
                    <View style={styles.fifthview}>
                        <Text style={styles.txt2}>Password</Text>
                        <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter password' style={styles.TextInput} />

                    </View>
                    <View style={styles.fifthview}>
                        <Text style={styles.txt2}> Confirm Password</Text>
                        <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter password' style={styles.TextInput} />

                    </View>



                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: '10%' }}>
                        <TouchableOpacity onPress={ImageShow} >
                            <Image source={image ? Logo1 : Logo2} style={styles.img1} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginTop: '2%', marginLeft: 3, marginBottom: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: '300', color: '#fff' }}>Accpet all</Text>
                            {/* <TouchableOpacity> */}
                                <Text style={{ fontSize: 15, fontWeight: '900', color: '#fff' }}> Terms & Conditions</Text>
                            {/* </TouchableOpacity> */}

                        </View>

                    </View>

                    <View style={styles.seventhview}>
                        <TouchableOpacity onPress={() => { navigation.navigate('drawer') }} style={styles.touchview}>
                            <Text style={styles.txt5}>Register</Text>

                        </TouchableOpacity>

                    </View>

                    <View style={{ marginTop: '11%', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Text style={styles.txt6}>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.replace('FirstPage')}>
                                <Text style={styles.txt7}> Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>

    )
}

export default SignUp

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "#FFFFFF", flex: 1
    },
    firstview: {
        marginTop: '20%', alignItems: 'center'
    },
    secondview: {
        flex: 1, backgroundColor: '#055294', borderTopLeftRadius: 50, borderTopRightRadius: 50, marginTop: 20
    },
    thirdview: {
        alignItems: 'center', marginTop: 20
    },
    fourthview: {
        marginTop: '10%', marginLeft: '10%'
    },
    fifthview: {
        marginTop: '6%', marginLeft: '10%'
    },
    sixthview: {
        marginLeft: '10%'
    },
    seventhview: {
        marginTop: '9%', marginLeft: '10%'
    },
    img: {
        width: 180, height: 180
    },
    img1: {
        width: 20, height: 20, alignSelf: 'center', marginTop: 5, tintColor: 'white'
    },
    txt: {
        fontSize: 35, fontFamily: 'Arial Rounded MT Bold', fontWeight: '600', color: '#fff'
    },
    txt1: {
        fontSize: 16, color: '#fff', fontWeight: '400', marginTop: 4
    },
    txt2: {
        fontSize: 16, color: '#fff', fontWeight: '500'
    },
    txt3: {
        fontSize: 15, fontWeight: '300', color: '#fff', borderWidth: 1
    },
    txt4: {
        fontSize: 15, color: '#fff', fontWeight: '200'
    },
    txt5: {
        fontSize: 18, color: '#fff', fontWeight: '400', textAlign: 'center', paddingTop: 13
    },
    txt6: {
        fontSize: 16, color: '#fff', marginBottom: 30, fontWeight: '300'
    },
    txt7: {
        fontSize: 16, color: '#fff', fontWeight: 'bold'
    },
    TextInput: {
        backgroundColor: '#fff', width: '90%', height: 50, color: 'black', marginTop: 6, borderRadius: 10, paddingLeft: 10
    },
    touchview: {
        width: '89%', borderRadius: 10, height: 50, backgroundColor: '#389BD5'
    }
})