import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('screen');


const Logo = require('../../../assets/images/Vect.png');



const Faq = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(0);
    
    return (

        <View >

            <ScrollView>

                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack('homescreen')}>
                        <View style={styles.imageview}>

                            <Image source={require('../../../assets/images/Vecto.png')} style={styles.img} />


                        </View>
                    </TouchableOpacity>


                    <View style={styles.secondview}>
                        <Text style={styles.txt}>FAQ</Text>
                    </View>



                </View>
                <View style={styles.frequencyview}>
                    <Text style={styles.FRQtxt}>Frequently Asked{'\n'}Questions</Text>

                </View>
                <View style={styles.MAINVIEW}>
                    <View style={styles.BOTMVIEW}>
                        <View style={styles.DOWNVIEW}>
                            <Text style={styles.txt1}>1. What is the app all about?</Text>
                            <TouchableOpacity onPress={() => isVisible != 1 ? setIsVisible(1) : setIsVisible(0)}>
                                <Image source={Logo} style={[styles.img1, { transform: isVisible != 1 ? [{ rotate: '360deg' }] : [{ rotate: '180deg' }] }]} />

                            </TouchableOpacity>
                        </View>

                    </View>

                    {
                        isVisible == 1 && (<Text style={styles.HIDETXT}>Jorem ipsum dolor sit amet, consectetur adipiscing elit{'\n'}Etiam eu turpis molestie, dictum est a, mattis tellus. Sed{'\n'}dignissim, metus nec fringilla accumsan, risus sem{'\n'}sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas{'\n'}eget condimentum velit, sit amet feugiat lectus. Class{'\n'}aptent taciti sociosqu ad litora torquent</Text>)
                    }


                </View>
                <View style={styles.MAINSECVIEW}>
                    <View style={styles.BOTMVIEW}>
                        <View style={styles.DOWNVIEW}>
                            <Text style={styles.txt1}>2. What are the features available in the app?</Text>
                            <TouchableOpacity onPress={() => isVisible != 2 ? setIsVisible(2) : setIsVisible(0)}>
                                <Image source={Logo} style={[styles.img1, { transform: isVisible != 2 ? [{ rotate: '360deg' }] : [{ rotate: '180deg' }] }]} />

                            </TouchableOpacity>
                        </View>

                    </View>

                    {
                        isVisible == 2 && (<Text style={styles.HIDETXT}>Jorem ipsum dolor sit amet, consectetur adipiscing elit{'\n'}Etiam eu turpis molestie, dictum est a, mattis tellus. Sed{'\n'}dignissim, metus nec fringilla accumsan, risus sem{'\n'}sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas{'\n'}eget condimentum velit, sit amet feugiat lectus. Class{'\n'}aptent taciti sociosqu ad litora torquent</Text>)
                    }


                </View>
                <View style={styles.MAINSECVIEW}>
                    <View style={styles.BOTMVIEW}>
                        <View style={styles.DOWNVIEW}>
                            <Text style={styles.txt1}>3. Can I access the app on multiple devices?</Text>
                            <TouchableOpacity onPress={() => isVisible != 3 ? setIsVisible(3) : setIsVisible(0)}>
                                <Image source={Logo} style={[styles.img1, { transform: isVisible != 3 ? [{ rotate: '360deg' }] : [{ rotate: '180deg' }] }]} />

                            </TouchableOpacity>
                        </View>

                    </View>

                    {
                        isVisible == 3 && (<Text style={styles.HIDETXT}>Jorem ipsum dolor sit amet, consectetur adipiscing elit{'\n'}Etiam eu turpis molestie, dictum est a, mattis tellus. Sed{'\n'}dignissim, metus nec fringilla accumsan, risus sem{'\n'}sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas{'\n'}eget condimentum velit, sit amet feugiat lectus. Class{'\n'}aptent taciti sociosqu ad litora torquent</Text>)
                    }


                </View>

                <View style={styles.MAINSECVIEW}>
                    <View style={styles.BOTMVIEW}>
                        <View style={styles.DOWNVIEW}>
                            <Text style={styles.txt1}>4. Are there any in-app purchases or{'\n'}    subscriptions?</Text>
                            <TouchableOpacity onPress={() => isVisible != 4 ? setIsVisible(4) : setIsVisible(0)}>
                                <Image source={Logo} style={[styles.img1, { transform: isVisible != 4 ? [{ rotate: '360deg' }] : [{ rotate: '180deg' }] }]} />

                            </TouchableOpacity>
                        </View>

                    </View>

                    {
                        isVisible == 4 && (<Text style={styles.HIDETXT}>Jorem ipsum dolor sit amet, consectetur adipiscing elit{'\n'}Etiam eu turpis molestie, dictum est a, mattis tellus. Sed{'\n'}dignissim, metus nec fringilla accumsan, risus sem{'\n'}sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas{'\n'}eget condimentum velit, sit amet feugiat lectus. Class{'\n'}aptent taciti sociosqu ad litora torquent</Text>)
                    }


                </View>

                <View style={styles.MAINSECVIEW}>
                    <View style={styles.BOTMVIEW}>
                        <View style={styles.DOWNVIEW}>
                            <Text style={styles.txt1}>5. How often are new features or updates{'\n'}    added to the app?</Text>
                            <TouchableOpacity onPress={() => isVisible != 5 ? setIsVisible(5) : setIsVisible(0)}>
                                <Image source={Logo} style={[styles.img1, { transform: isVisible != 5 ? [{ rotate: '360deg' }] : [{ rotate: '180deg' }] }]} />

                            </TouchableOpacity>
                        </View>

                    </View>

                    {
                        isVisible == 5 && (<Text style={styles.HIDETXT}>Jorem ipsum dolor sit amet, consectetur adipiscing elit{'\n'}Etiam eu turpis molestie, dictum est a, mattis tellus. Sed{'\n'}dignissim, metus nec fringilla accumsan, risus sem{'\n'}sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas{'\n'}eget condimentum velit, sit amet feugiat lectus. Class{'\n'}aptent taciti sociosqu ad litora torquent</Text>)
                    }


                </View>

                <View style={styles.MAINSECVIEW}>
                    <View style={styles.BOTMVIEW}>
                        <View style={styles.DOWNVIEW}>
                            <Text style={styles.txt1}>6. Is there a customer support service{'\n'}    available in case I face any issues?</Text>
                            <TouchableOpacity onPress={() => isVisible != 6 ? setIsVisible(6) : setIsVisible(0)}>
                                <Image source={Logo} style={[styles.img1, { transform: isVisible != 6 ? [{ rotate: '360deg' }] : [{ rotate: '180deg' }] }]} />

                            </TouchableOpacity>
                        </View>

                    </View>

                    {
                        isVisible == 6 && (<Text style={styles.HIDETXT}>Jorem ipsum dolor sit amet, consectetur adipiscing elit{'\n'}Etiam eu turpis molestie, dictum est a, mattis tellus. Sed{'\n'}dignissim, metus nec fringilla accumsan, risus sem{'\n'}sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas{'\n'}eget condimentum velit, sit amet feugiat lectus. Class{'\n'}aptent taciti sociosqu ad litora torquent</Text>)
                    }


                </View>
                <View style={styles.MAINSECVIEW}>
                    <View style={styles.BOTMVIEW}>
                        <View style={styles.DOWNVIEW}>
                            <Text style={styles.txt1}>7. Can I customize the app based on my{'\n'}    preferences?</Text>
                            <TouchableOpacity onPress={() => isVisible != 7 ? setIsVisible(7) : setIsVisible(0)}>
                                <Image source={Logo} style={[styles.img1, { transform: isVisible != 7 ? [{ rotate: '360deg' }] : [{ rotate: '180deg' }] }]} />

                            </TouchableOpacity>
                        </View>

                    </View>

                    {
                        isVisible == 7 && (<Text style={styles.HIDETXT}>Jorem ipsum dolor sit amet, consectetur adipiscing elit{'\n'}Etiam eu turpis molestie, dictum est a, mattis tellus. Sed{'\n'}dignissim, metus nec fringilla accumsan, risus sem{'\n'}sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas{'\n'}eget condimentum velit, sit amet feugiat lectus. Class{'\n'}aptent taciti sociosqu ad litora torquent</Text>)
                    }


                </View>
                <View style={{ marginBottom: '20%' }}>

                </View>
            </ScrollView>

        </View>






    )
}

export default Faq

const styles = StyleSheet.create({
    container: {
        marginTop: '10%', marginLeft: '7%', flexDirection: 'row'
    },

    imageview: {
        borderWidth: 1, width: 50, height: 50, borderRadius: 10, borderColor: 'blue', justifyContent: 'center'
    },

    img: {
        width: 9, height: 16, alignSelf: 'center',
    },

    secondview: {
        alignItems: 'center', width: '70%'
    },

    txt: {
        fontSize: 21, fontWeight: '700', color: '#055294', marginTop: 10
    },
    frequencyview: {
        marginTop: '10%', marginLeft: '7%'
    },
    FRQtxt: {
        fontSize: 40, fontWeight: '600', color: '#389BD5'
    },
    img1: {
        width: 18, height: 13, marginRight: 28
    },
    MAINVIEW: {
        marginTop: '10%', marginLeft: '7%', backgroundColor: 'white', width: '90%', alignItems: 'center', borderRadius: 10, padding: 1, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.4, shadowRadius: 4, elevation: 5
    },
    MAINSECVIEW: {
        marginTop: '6%', marginLeft: '7%', backgroundColor: 'white', width: '90%', alignItems: 'center', borderRadius: 10, padding: 1, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.4, shadowRadius: 4, elevation: 5
    },
    BOTMVIEW: {
        backgroundColor: '#F2F6FA', borderRadius: 10, width: '100%', height: 54, alignSelf: 'center',
    },
    DOWNVIEW: {
        flexDirection: 'row', marginTop: '4%', justifyContent: 'space-between', alignItems: "center"
    },
    txt1: {
        fontSize: 16, color: 'blue', marginLeft: 10
    },
    HIDETXT: {
        fontSize: 15, color: '#7D7D7D', textAlign: 'left', marginTop: 3
    }
})