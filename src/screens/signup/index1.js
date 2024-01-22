import { StyleSheet, Text, View, Image, TextInput, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen');
const SignUp = () => {
    return (
        <SafeAreaView style={styles.maincontainer}>
          
                {/* <ScrollView style={styles.scrollMain}> */}
                {/* <View style={styles.firstview}> */}
                    <View style={styles.secondview}>
                        <Image source={require('../../../assets/images/mainlogo.png')} style={styles.img} />
                    </View>

                    <ScrollView style ={styles.thirdview}>
                    
                            <View style={styles.fourthview}>
                                <Text style={styles.txt}>Welcome Back!</Text>
                                <View style={styles.fifthview}>
                                    <Text style={styles.txt1}>Enter details to login your account</Text>

                                </View>
                            </View>
                            <View style={styles.sixthview}>
                                <Text style={styles.txt2}>First Name</Text>
                                <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter first name' style={styles.txtinput} />

                            </View>

                            <View style={styles.seventhview}>
                                <Text style={styles.txt2}>Last Name</Text>
                                <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter last name' style={styles.txtinput} />

                            </View>
                            <View style={styles.seventhview}>
                                <Text style={styles.txt2}>Email</Text>
                                <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter email address' style={styles.txtinput} />

                            </View>
                            <View style={styles.seventhview}>
                                <Text style={styles.txt2}>Phone no.</Text>
                                <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter phone no' style={styles.txtinput} />

                            </View>
                            <View style={styles.seventhview}>
                                <Text style={styles.txt2}>Company ID#</Text>
                                <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter ID' style={styles.txtinput} />

                            </View>
                            <View style={styles.seventhview}>
                                <Text style={styles.txt2}>Password</Text>
                                <TextInput placeholderTextColor='#7D7D7D' placeholder='Enter phone no' style={styles.txtinput} />

                            </View>


                            {/* <View style={styles.tenthview}>
                            <TouchableOpacity style={styles.touchview}>
                                <Text style={{ fontSize: 16, color: '#FFFF', textAlign: 'center', paddingTop: 13, fontWeight: '500' }}>LOGIN</Text>

                            </TouchableOpacity>
                        </View> */}
                            {/* <View style={{alignItems:'center'}}>
                        <View style={{flexDirection:'row',marginTop:'8%'}}>
                        <Text style={{fontSize:14,color:'#FFFF',fontWeight:'400'}}>Don’t have any account?</Text>
                        <TouchableOpacity>
                        <Text style={{fontSize:14,color:'#FFFF',fontWeight:'bold'}}> Sign Up</Text>

                        </TouchableOpacity>  
                    </View>
                    </View> */}
                        
                    </ScrollView>
                

                {/* </ScrollView> */}
            
        </SafeAreaView>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    maincontainer: {
        //flex:1,
        backgroundColor: 'white'
    },
    scrollMain: {
        width: width,
        height: height,

    },
    firstview: {
        flex: 1,
        height: height,
        backgroundColor: 'white'
    },
    secondview: {
        backgroundColor: 'white', alignItems: 'center'
    },
    thirdview: {
         backgroundColor: '#055294', borderTopRightRadius: 50, borderTopLeftRadius: 50,marginTop:10
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
    img: {
        width: 150, height: 150, marginTop: '16%'
    },
    img1: {
        width: 18, height: 18, marginTop: 15, marginLeft: 1
    },
    txt: {
        fontSize: 35, fontFamily: 'Arial Rounded MT Bold', fontWeight: '600', color: '#fff'
    },
    txt1: {
        fontSize: 16, color: '#fff', fontWeight: '400'
    },
    txt2: {
        fontSize: 16, color: '#fff', fontWeight: '500'
    },
    txt3: {
        fontSize: 14, color: '#fff', fontWeight: '400'
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