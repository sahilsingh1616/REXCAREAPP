import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity, Linking } from 'react-native'
import React, { startTransition } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { width, height } = Dimensions.get('screen');
const Help = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView>
      <ScrollView >
        <View style={styles.maincontainer}>
          <View style={styles.containerrow}>
            <TouchableOpacity onPress={() => { navigation.goBack('homescreen') }}>
              <View style={styles.ImageView}>

                <Image source={require('../../../assets/images/Vecto.png')} style={styles.img} />
              </View>
            </TouchableOpacity>
            <View style={styles.helpView}>
              <Text style={styles.txt}>Help</Text>
            </View>
          </View>
          <View style={styles.circleView}>
            <View style={styles.circleBckcolor}>
              <Image source={require('../../../assets/images/you.png')} style={styles.headimg} />
            </View>
          </View>
          <View style={{ marginTop: '7%' }}>
            <Text style={styles.howtxt}>How can we help{'\n'}you?</Text>
          </View>
          <View style={{ marginTop: '9%', alignItems: "center" }}>
            <View style={styles.circlesecond}>
              <View style={styles.bckgroundcolor}>
                <Image source={require('../../../assets/images/cellphone.png')} style={styles.phnimg} />

              </View>
              <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Text style={styles.contactxt}>Contact Us</Text>
              </View>

              <View style={{ marginTop: 40, alignItems: 'center' }}>

                <TouchableOpacity onPress={() => { Linking.openURL(`tel:+1-251-589-5896`) }}>
                  <Text style={styles.numbertxt}>+1-251-589-5896</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { Linking.openURL('tel:+1-251-589-5855') }}>
                  <Text style={styles.numbertxt}>+1-251-589-5855</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  )
}

export default Help

const styles = StyleSheet.create({
  maincontainer: {
    width: width, height: height, backgroundColor: 'white'
  },
  containerrow: {
    marginTop: '10%', marginLeft: '7%', flexDirection: 'row'
  },
  ImageView: {
    borderWidth: 1, width: 50, height: 50, borderRadius: 10, borderColor: '#055294', justifyContent: 'center'
  },
  img: {
    width: 9, height: 16, alignSelf: 'center'
  },
  helpView: {
    alignItems: 'center', width: '70%'
  },
  txt: {
    fontSize: 28, fontWeight: '700', color: '#055294', marginTop: 10
  },
  circleView: {
    alignItems: 'center', marginTop: '10%'
  },
  circleBckcolor: {
    width: 90, height: 90, backgroundColor: '#f2f6fa', borderRadius: 50
  },
  headimg: {
    width: 46, height: 49, marginTop: 18, alignSelf: 'center'
  },
  howtxt: {
    fontSize: 36, color: '#055294', opacity: 0.7, fontWeight: '500', textAlign: 'center'
  },
  circlesecond: {
    backgroundColor: '#f2f6fa', width: '80%', height: 300, borderRadius: 50
  },
  bckgroundcolor: {
    backgroundColor: 'white', width: 70, height: 70, alignSelf: 'center', marginTop: '5%', borderRadius: 50
  },
  phnimg: {
    width: 32, height: 31, marginTop: 18, alignSelf: 'center'
  },
  contactxt: {
    fontSize: 30, fontWeight: '600', color: '#055294'
  },
  numbertxt: {
    fontSize: 30, fontWeight: '900', color: '#055294', opacity: 0.7
  }

})