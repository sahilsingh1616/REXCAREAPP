import { StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const AnotherExample = () => {
    const [user,setUser]=useState('');
    const [storage,setStorage]=useState([]);


    const SetData=async()=>{
        await AsyncStorage.setItem("user",JSON.stringify(storage))
        console.log(user)
    }

    const GetData=async()=>{
        const name=await AsyncStorage.getItem("user")
        const name2=JSON.parse(name)
        console.log(name)
        console.log(name2)
        console.log(typeof(name))
        console.log(typeof(name2))

    }
    function renderItem( {item }) {
        console.log(item)
        return (
          <View>
            <Text>{item}</Text>
          </View>
        )
      }

    const Push = () => {
        storage.push(user)
        console.log(storage);
      }

      const Delete = async () => {
        setStorage([])
        await AsyncStorage.removeItem ("email");
   
       }
  return (

    <View style={{ flex:1, backgroundColor: 'aqua', alignItems: "center" }}>
    <View style={{backgroundColor:'white',width:'90%',height:50,marginTop:'30%',borderRadius:20}}> 
    <TextInput placeholderTextColor='black' placeholder='Email' style={{ width: '70%', height: 50, paddingLeft: 10, color: 'black' }}  onChangeText={(text)=>{setUser(text)}}/>
 </View>
 <View style={{marginTop:'10%',width:'50%',height:40}}>
      <TouchableOpacity onPress={()=>{SetData(),Push()}} style={{backgroundColor:'white',width:'100%',height:44}}>
      <Text style={{fontSize:16,fontWeight:'700',color:'black',textAlign:'center',marginTop:11}}>Set Data</Text>

      </TouchableOpacity>
      </View>
      <View style={{marginTop:'10%',width:'50%',height:40}}>
      <TouchableOpacity onPress={()=>GetData()} style={{backgroundColor:'white',width:'100%',height:44}}>
      <Text style={{fontSize:16,fontWeight:'700',color:'black',textAlign:'center',marginTop:11}}>Get Data</Text>

      </TouchableOpacity>
      </View>

      <View style={{marginTop:'10%',width:'50%',height:40}}>
      <TouchableOpacity onPress={Delete} style={{backgroundColor:'white',width:'100%',height:44}}>
      <Text style={{fontSize:16,fontWeight:'700',color:'black',textAlign:'center',marginTop:11}}>Delete Data</Text>

      </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: 'red',marginTop:3}}>
        <Text style={{fontSize: 20,color:'black'}}>{storage}</Text>
      </View>

      <FlatList
       style={{flex:1}}
      data={storage}
      renderItem={renderItem}
       />
 </View>
  )
}

export default AnotherExample

const styles = StyleSheet.create({})