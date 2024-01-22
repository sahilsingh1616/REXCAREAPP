import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const AsyncCodesStepbyStep = () => {
    const [user,setUser]=useState('');

    const SetData=async()=>{
        await AsyncStorage.setItem("user","Singh")

    }
    const GetData=async()=>{
        const name =await AsyncStorage.getItem("user")
        setUser(name)
        console.log(name)
    }

    const RemoveData=async()=>{
        await AsyncStorage.removeItem("user")
        setUser('')
    }
  return (
    <View style={{height:800,justifyContent:'center',alignItems:'center',backgroundColor:"#CAB4B4"}}>
      <Text style={{fontSize:22,color:'black'}}>My name is Sahil | {user}</Text>

<View style={{marginTop:'10%',width:'50%',height:40}}>
      <TouchableOpacity onPress={()=>SetData()} style={{backgroundColor:'white',width:'100%',height:44}}>
      <Text style={{fontSize:16,fontWeight:'700',color:'black',textAlign:'center',marginTop:11}}>Set Data</Text>

      </TouchableOpacity>
      </View>

      <View style={{marginTop:'4%',width:'50%',height:40}}>
      <TouchableOpacity onPress={()=>GetData()} style={{backgroundColor:'white',width:'100%',height:44}}>
      <Text style={{fontSize:16,fontWeight:'700',color:'black',textAlign:'center',marginTop:11}}>Get Data</Text>

      </TouchableOpacity>
      </View>

      <View style={{marginTop:'4%',width:'50%',height:40}}>
      <TouchableOpacity onPress={RemoveData} style={{backgroundColor:'white',width:'100%',height:44}}>
      <Text style={{fontSize:16,fontWeight:'700',color:'black',textAlign:'center',marginTop:11}}>Remove Data</Text>

      </TouchableOpacity>
      </View>
    </View>
  )
}

export default AsyncCodesStepbyStep

const styles = StyleSheet.create({})