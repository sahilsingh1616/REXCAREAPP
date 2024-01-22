import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'

const CustomDrawer = (props,{navigation}) => {
  return (

    <View style={styles.maincontainer}>

   
  <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#055294'}}>
  <View style={styles.imgview}>
  <TouchableOpacity>
  <Image source={require('../../../assets/images/harsh.png')} style={styles.img} />
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>{ props.navigation.closeDrawer()}}>
  <View style={styles.xview}>
  <Text style={styles.txt}>X</Text>

  </View>
  </TouchableOpacity>
  </View>

  <View style={{marginTop:'7%',marginLeft:'10%'}}>
  <Text style={{fontSize:22,color:'white'}}>Hello</Text>

  </View>
  <View style={{marginTop:'2%',marginLeft:'7%'}}>
  <Text style={{fontSize:32,color:'white',fontWeight:'bold'}}>John Smith</Text>

  </View>
  
  
<View style={{flex:1,backgroundColor:'fff',paddingTop:'20%'}}>
<DrawerItemList  {...props}/>
</View>


<TouchableOpacity onPress={()=>props.navigation.replace('FirstPage')} style={{marginTop:'10%',flexDirection:'row'}}>
<Image source={require('../../../assets/images/lagout.png')} style={{width:22,height:22,marginLeft:'6%'}} />

<Text style={{fontSize:22,color:'white',fontWeight:'400',marginLeft:'9%'}}>Logout</Text>

</TouchableOpacity>

  </DrawerContentScrollView>

  </View>

  
  

  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    maincontainer:{
    flex:1,
    marginTop:'20%',

    },
    img:{
     marginLeft:20,
     width:80,
     height:80
    },
    imgview:{
        flexDirection:'row',justifyContent:'space-between',alignItems:'center'
    },
    xview:{
        backgroundColor:'white',width:50,height:50,borderRadius:50,marginRight:20
    },
    txt:{
        fontSize:20,textAlign:"center",marginTop:'30%',fontWeight:'bold',color:'black'
    }
})