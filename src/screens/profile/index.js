import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { width, height } = Dimensions.get('screen');


const Profile = ({navigation}) => {
    return (
        <KeyboardAwareScrollView>
            <ScrollView contentContainerStyle={styles.maincontainer}>
                <View style={styles.secondview}>
           
                    <View style={styles.touchable}>
                    <TouchableOpacity onPress={()=>navigation.goBack('homeScreen')}> 
                        <View style={styles.firstview}>
                            <Image source={require('../../../assets/images/Vecto.png')} style={styles.img} />



                        </View>
                        </TouchableOpacity>
                    </View>
                 
                    <View style={styles.thirdview}>
                        <Text style={styles.txt}>Profile</Text>

                    </View>


                </View>
                <View style={styles.fourthview}>
                    <View style={styles.fifthview}>

                        <Image source={require('../../../assets/images/harsh.png')} style={styles.img1} />

                        <TouchableOpacity onPress={() => { Alert.alert("Update Profile", "Update profile") }}>
                            <View style={styles.sixthview}>
                                <Image source={require('../../../assets/images/poy.png')} style={styles.img2} />


                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.seventhview}>
                        <Text style={styles.txt1}>John Smith</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.txt2}>dummymail4587@gmail.com</Text>

                    </View>
                    <View style={styles.eightview}>
                        <View style={styles.ninthview}>
                            <View>
                                <Text style={styles.txt3}>Phone No.</Text>
                                <Text style={styles.txt4}>+1-524-257-5544</Text>
                            </View>
                            <View style={styles.tenthview}>

                            </View>
                            <View>
                                <Text style={styles.txt5}>Customer ID</Text>
                                <Text style={styles.txt6}>#256410248425654</Text>
                            </View>
                        </View>

                    </View>
                    <TouchableOpacity>
                    <View style={styles.elventhview}>
                        <View style={styles.twelvethview}>
                            <Text style={styles.txt7}>About Me</Text>
                            <Image source={require('../../../assets/images/greaater.png')} style={styles.img3} />



                        </View>


                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.thirteenview}>
                        <View style={styles.twelvethview}>
                            <Text style={styles.txt7}>Change Password</Text>
                            <Image source={require('../../../assets/images/greaater.png')} style={styles.img3} />



                        </View>


                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    
                    <View style={styles.thirteenview}>
                        <View style={styles.twelvethview}>
                            <Text style={styles.txt7}>Notifications</Text>
                            <Image source={require('../../../assets/images/greaater.png')} style={styles.img3} />



                        </View>


                    </View>
                    </TouchableOpacity>

                   <TouchableOpacity>

                    <View style={styles.thirteenview}>
                        <View style={styles.twelvethview}>
                            <Text style={styles.txt7}>Privacy Policy</Text>
                            <Image source={require('../../../assets/images/greaater.png')} style={styles.img3} />



                        </View>


                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                 
                    <View style={{backgroundColor:'#389BD5',width:'88%',borderRadius:10,height:50,marginTop:'4%',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                    <Text style={{fontSize:22,fontWeight:'700',color:'white'}}>Logout</Text>
                 </View>   

</TouchableOpacity>

                </View>

            </ScrollView>

        </KeyboardAwareScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: '#055294', height: height
    },
    firstview: {
         width: 38, height: 38, borderRadius: 10, borderColor: 'white', borderWidth: 1, justifyContent: 'center', alignItems: 'center'
    },
    secondview: {
        flexDirection: 'row', width: '100%', marginTop: '10%'
    },
    thirdview: {
        marginRight:'40%'
    },
    img: {
        width: 9, height: 16, tintColor: 'white', alignSelf: 'center', marginTop: 2
    },
    touchable: {
       flex:1, marginLeft: 25
    },
    txt: {
        fontSize: 27, color: 'white', textAlign: 'center', fontWeight: '900'
    },
    txt1: {
        fontSize: 30, color: '#055294', fontWeight: '600'
    },
    txt2: {
        fontSize: 15, color: '#7D7D7D', textAlign: 'center'
    },
    fourthview: {
         flex:1,backgroundColor: 'white', marginTop:'34%', borderTopLeftRadius: 50, borderTopRightRadius: 50
    },
    fifthview: {
        alignItems: 'center', marginTop: -70
    },
    sixthview: {
        width: 130, height: 130, justifyContent: 'flex-end', alignItems: 'flex-end'
    },
    eightview: {
        justifyContent: 'center', alignSelf: 'center', backgroundColor: '#F2F6FA', width: '90%', height: 100, borderRadius: 20, marginTop: '5%'
    },
    img1: {
        width: 130, height: 130, borderRadius: 100, borderColor: 'white', borderWidth: 2, position: 'absolute'
    },
    img2: {
        width: 30, height: 30, right: 10
    },
    seventhview: {
        alignItems: 'center', marginTop: 20
    },
    ninthview: {
        flexDirection: 'row', justifyContent: 'space-around'
    },
    txt3: {
        fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#055294', marginBottom: 10
    },
    txt4: {
        fontSize: 14, color: '#7D7D7D', fontWeight: '600', textAlign: 'center'
    },
    tenthview: {
        borderRightWidth: 1, borderColor: '#055294'
    },
    txt5: {
        fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#055294', marginBottom: 10
    },
    txt6: {
        fontSize: 14, color: '#7D7D7D', fontWeight: '600', textAlign: 'center'
    },
    elventhview: {
        alignSelf: 'center', backgroundColor: '#F2F6FA', width: '90%', height: 70, borderRadius: 20, marginTop: '5%'
    },
    twelvethview: {
        flexDirection: 'row', flex: 1, justifyContent: "space-between", alignItems: 'center'
    },
    txt7: {
        fontSize: 14, fontWeight: '800', color: '#065194', marginLeft: '10%'
    },
    img3: {
        width: 12, height: 18, marginRight: '10%',resizeMode:'cover'
    },
    thirteenview:{
        alignSelf: 'center', backgroundColor: '#F2F6FA', width: '90%', height: 70, borderRadius: 20, marginTop: '3%'

    }
})