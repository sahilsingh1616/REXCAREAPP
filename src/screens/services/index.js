import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Logo = require('../../../assets/images/Vect.png');
const Logo1 = require('../../../assets/images/vecr.png');

const Services = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isSecond, setIsSecond] = useState(true);
    const [isthird, setThird] = useState(true);
    const [isfourth, setFourth] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }
    const SecondVisibility = () => {
        setIsSecond(!isSecond)
    }

    const ThirdVisibility = () => {
        setThird(!isthird)
    }
    const FourthVisibility = () => {
        setFourth(!isfourth)
    }

    return (
        <KeyboardAwareScrollView>
            <ScrollView>
                <View style={styles.maincontainer}>
                    <View style={styles.container}>
                   <TouchableOpacity onPress={()=>navigation.goBack('homescreen')}>
                        <View style={styles.imageview}>
                            <Image source={require('../../../assets/images/Vecto.png')} style={styles.img} />

                        </View>
                        </TouchableOpacity>
                        <View style={styles.secondview}>
                            <Text style={styles.txt}>Services</Text>
                        </View>
                    </View>
                    <View style={styles.thirdview}>
                        <Image source={require('../../../assets/images/Recx.png')} style={styles.img1} />

                    </View>
                    <View style={styles.fourthview}>
                        <Image source={require('../../../assets/images/worth.png')} style={styles.img2} />
                    </View>

                    <View style={styles.fifthview}>
                        <View style={styles.sixthview}>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/images/psa.png')} style={styles.img3} />
                            </TouchableOpacity>
                            <Text style={styles.txt1}>FREE Welness{'\n'}<Text style={{ fontSize: 22, color: 'grey' }}>Services</Text></Text>
                        </View>

                    </View>
                    <View style={styles.seventhview}>

                        <View style={styles.eigthview}>
                            <View style={styles.ninthview}>
                                <Text style={styles.txt2}>Teledoc (Free Online Doctor)</Text>
                                <TouchableOpacity onPress={toggleVisibility}>
                                    <Image source={isVisible ? Logo : Logo1} style={styles.img4} />

                                </TouchableOpacity>
                            </View>
                        </View>


                        {isVisible && (<Text style={styles.txt3}> Jorem ipsum dolor sit amet, consectetur adipiscing elit.{'\n'} Etiam eu turpis molestie, dictum est a, mattis tellus. Sed{'\n'} dignissim, metus nec fringilla accumsan, risus sem {'\n'} sollicitudin lacus, ut interdum tellus elit sed risus.Maecenas {'\n'} eget condimentum velit, sit amet feugiat lectus.aptent taciti{'\n'} sociosqu ad litora torquent</Text>)}

                    </View>
                    <View style={styles.seventhview}>

                        <View style={styles.eigthview}>
                            <View style={styles.ninthview}>
                                <Text style={styles.txt2}>Dirx (Free Prescription Meds)</Text>
                                <TouchableOpacity onPress={SecondVisibility}>
                                    <Image source={isSecond ? Logo : Logo1} style={styles.img4} />

                                </TouchableOpacity>
                            </View>
                        </View>

                        {isSecond && (<Text style={styles.txt3}> Jorem ipsum dolor sit amet, consectetur adipiscing elit.{'\n'} Etiam eu turpis molestie, dictum est a, mattis tellus. Sed{'\n'} dignissim, metus nec fringilla accumsan, risus sem {'\n'} sollicitudin lacus, ut interdum tellus elit sed risus.Maecenas {'\n'} eget condimentum velit, sit amet feugiat lectus.aptent taciti{'\n'} sociosqu ad litora torquent</Text>)}


                    </View>
                    <View style={styles.seventhview}>

                        <View style={styles.eigthview}>
                            <View style={styles.ninthview}>
                                <Text style={styles.txt2}>Textcoach (Free Mental Health Coach)</Text>
                                <TouchableOpacity onPress={ThirdVisibility}>
                                    <Image source={isthird ? Logo : Logo1} style={styles.img4} />

                                </TouchableOpacity>
                            </View>
                        </View>

                        {isthird && (<Text style={styles.txt3}> Jorem ipsum dolor sit amet, consectetur adipiscing elit.{'\n'} Etiam eu turpis molestie, dictum est a, mattis tellus. Sed{'\n'} dignissim, metus nec fringilla accumsan, risus sem {'\n'} sollicitudin lacus, ut interdum tellus elit sed risus.Maecenas {'\n'} eget condimentum velit, sit amet feugiat lectus.aptent taciti{'\n'} sociosqu ad litora torquent</Text>)}


                    </View>
                    <View style={styles.seventhview}>

                        <View style={styles.eigthview}>
                            <View style={styles.ninthview}>
                                <Text style={styles.txt2}>Quest Health (Free Metabilic Panels)</Text>
                                <TouchableOpacity onPress={FourthVisibility}>
                                    <Image source={isfourth ? Logo : Logo1} style={styles.img4} />

                                </TouchableOpacity>
                            </View>
                        </View>
                        {isfourth && (<Text style={styles.txt3}> Jorem ipsum dolor sit amet, consectetur adipiscing elit.{'\n'} Etiam eu turpis molestie, dictum est a, mattis tellus. Sed{'\n'} dignissim, metus nec fringilla accumsan, risus sem {'\n'} sollicitudin lacus, ut interdum tellus elit sed risus.Maecenas {'\n'} eget condimentum velit, sit amet feugiat lectus.aptent taciti{'\n'} sociosqu ad litora torquent</Text>)}



                    </View>
                    <View style={{ marginBottom: 20 }}>

                    </View>

                </View>
            </ScrollView>
        </KeyboardAwareScrollView>
    )
}

export default Services

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: '#F5F5F5'
    },
    container: {
        marginTop: '10%', marginLeft: '7%', flexDirection: 'row'
    },
    imageview: {
        borderWidth: 1, width: 50, height: 50, borderRadius: 10, borderColor: 'blue', justifyContent: 'center'
    },
    secondview: {
        alignItems: 'center', width: '70%'
    },
    thirdview: {
        marginLeft: '6%', marginTop: '10%'
    },
    fourthview: {
        marginLeft: '6%', marginTop: '2%'
    },
    fifthview: {
        backgroundColor: '#FBFCF7', width: '90%', height: 140, alignSelf: 'center', marginTop: '10%', borderRadius: 20
    },
    sixthview: {
        flexDirection: 'row', marginTop: 20, marginLeft: 20
    },
    seventhview: {
        backgroundColor: 'white', marginTop: '5%', width: '90%', alignSelf: 'center', borderRadius: 10, padding: 1, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.4, shadowRadius: 4, elevation: 5,
    },
    eigthview: {
        backgroundColor: '#DEDEF0', borderRadius: 10, width: '100%', height: 49, alignSelf: 'center'
    },
    ninthview: {
        flexDirection: 'row', marginTop: '4%', justifyContent: 'space-between', alignItems: "center"
    },
    img: {
        width: 9, height: 16, alignSelf: 'center'
    },
    img1: {
        width: 128, height: 25
    },
    img2: {
        width: 180, height: 23
    },
    img3: {
        width: 80, height: 80
    },
    img4: {
        width: 18, height: 13, marginRight: 28
    },
    txt: {
        fontSize: 21, fontWeight: '700', color: '#055294', marginTop: 10
    },
    txt1: {
        fontSize: 32, fontWeight: '800', color: '#AABE53', marginLeft: 20, marginTop: 5
    },
    txt2: {
        fontSize: 16, color: 'blue', marginLeft: 10
    },
    txt3: {
        fontSize: 15, color: '#7D7D7D', textAlign: 'left', marginTop: 3
    }
})