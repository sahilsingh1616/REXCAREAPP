import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Async = () => {
  const [text, setText] = useState(" ");
const [storage, setStorage] = useState([]);

  const Check=async() =>{
    await AsyncStorage.setItem ("email",JSON.stringify(storage))
 
  }

  const handlestorage=async() =>{
    const response=await AsyncStorage.getItem("email")
    setText(response)
    console.log(text)

  }
  const Delete=async()=>{
   await AsyncStorage.removeItem ("email");
    
}

const addItemIntoList=async()=>{
storage.push(text)
console.log(storage)

// const Input=JSON.stringify(storage)
// console.log(Input)
}
 

// const getItem=async()=>{

// }



  useEffect(()=>{
    handlestorage
},[])

  return (
<View  style={{flex:1,backgroundColor:'aqua',justifyContent:'center',alignItems:"center"}}>
<TextInput  placeholderTextColor='black' placeholder='Email' style={{width:'80%',height:50,backgroundColor:'white',borderRadius:20,paddingLeft:10,color:'black'}} onChangeText={(val)=>[setText(val)]}/>

<TouchableOpacity onPress={()=>[Check(),addItemIntoList()]}  style={{width:'78%',height:50,backgroundColor:'black',borderRadius:20,marginTop:20}}>
     <Text style={{fontSize:22,color:'white',textAlign:'center',paddingTop:10,fontWeight:'bold'}}>Sumbit</Text>

     </TouchableOpacity>
     <TouchableOpacity onPress={handlestorage}  style={{width:'78%',height:50,backgroundColor:'black',borderRadius:20,marginTop:20}}>
     <Text style={{fontSize:22,color:'white',textAlign:'center',paddingTop:10,fontWeight:'bold'}}>SubmitCheck</Text>

     </TouchableOpacity>

     <TouchableOpacity onPress={()=>Delete()}  style={{width:'78%',height:50,backgroundColor:'black',borderRadius:20,marginTop:20}}>
     <Text style={{fontSize:22,color:'white',textAlign:'center',paddingTop:10,fontWeight:'bold'}}>Delete</Text>

     </TouchableOpacity>




   <Text style={{fontSize:11,color:'black'}}> The value are given bellow{setStorage}</Text>
    </View>
  )
}

export default Async

const styles = StyleSheet.create({})