import { StyleSheet, Text, View, Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import HomeScreen from '../homescreen';
import Help from '../help';
import CustomDrawer from '../CustomDrawer';
import Faq from '../faq';
import Services from '../services';
import HowTo from '../howto';
import Profile from '../profile/index1';
import ServicesExample from '../services/index1';
import ImagePicker from '../profile/index1';



const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
      drawerActiveBackgroundColor: 'lightgreen', headerShown: false, drawerStyle: {
        backgroundColor: '#055294',
        borderTopRightRadius: 40,
        borderBottomEndRadius: 40,
      },
      drawerLabelStyle:{
        fontSize: 20,
        color: 'white',
      },
  
    }} >
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        drawerIcon: ({ focused }) => {
          return (
            <View>
              <Image source={require('../../../assets/images/home.png')} style={{ width: 20, height: 20, tintColor: 'white', marginRight: -5 }} />
            </View>
          )
        }
      }} />

      <Drawer.Screen name="Services" component={ServicesExample} options={{
        drawerIcon: ({ focused }) => {
          return (
            <View>
              <Image source={require('../../../assets/images/nikhal.png')} style={{ width: 20, height: 20, tintColor: 'white', marginRight: -5 }} />
            </View>
          )
        }
      }} />
      <Drawer.Screen name="Help" component={Help} options={{
        drawerIcon: ({ focused }) => {
          return (
            <View>
              <Image source={require('../../../assets/images/velly.png')} style={{ width: 20, height: 20, tintColor: 'white', marginRight: -5 }} />
            </View>
          )
        }
      }} />
      <Drawer.Screen name="How To" component={HowTo} options={{
        drawerIcon: ({ focused }) => {
          return (
            <View>
              <Image source={require('../../../assets/images/download.png')} style={{ width: 20, height: 20, tintColor: 'white', marginRight: -5 }} />
            </View>
          )
        }
      }} />
      <Drawer.Screen name="Profile" component={ImagePicker} options={{
        drawerIcon: ({ focused }) => {
          return (
            <View>
              <Image source={require('../../../assets/images/saahil.png')} style={{ width: 20, height: 20, tintColor: 'white', marginRight: -5 }} />
            </View>
          )
        }
      }} />
      <Drawer.Screen name="FAQ" component={Faq} options={{
        drawerIcon: ({ focused }) => {
          return (
            <View>
              <Image source={require('../../../assets/images/layer.png')} style={{ width: 20, height: 20, tintColor: 'white', marginRight: -5 }} />
            </View>
          )
        }
      }} />
    </Drawer.Navigator>
  )
}

export default DrawerScreen

const styles = StyleSheet.create({})