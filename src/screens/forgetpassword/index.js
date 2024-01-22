import { StyleSheet, Text, View,Dimensions,Image,ScrollView,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen');


const ForgetPassword = ({navigation}) => {
    
    
  return (
    <ScrollView>
    <View>
  

    <View style={styles.MAINCONTAINER}>
    <View style={styles.IMGVIEW}>
       <Image source={require('../../../assets/images/groupphto.png')} style={styles.img}/>
       </View>

    </View>

    <View style={styles.FORGETTXT}>
    <View style={styles.THREETXTMARGIN}>
    <Text style={styles.txt}>Forgot Password</Text>
    <Text style={styles.SECONDLINE}>Please enter your email to reset your</Text>
    <Text style={styles.THIRDTXT}>password</Text>

    </View>

    <View style={styles.EMAILVIEW}>
        <Text style={styles.EMAILTXT}>Email</Text>
        <TextInput placeholderTextColor='black' placeholder='Enter here' style={styles.TXTINPUT}/>
    </View>

    <TouchableOpacity onPress={()=>navigation.navigate('verifypassword')} style={styles.TOUCH}>
    <Text style={styles.SUBMITTXT}>SUBMIT</Text>

    </TouchableOpacity>
    
</View>




    </View>

    </ScrollView>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
    MAINCONTAINER:{
        flex:1,height:320,backgroundColor:'white'
    },
    IMGVIEW:{
        alignItems:'center',marginTop:'20%'
        
    },
    img:{
        width:220,height:220
    },
    FORGETTXT:{
        height:height,borderTopRightRadius:50,borderTopLeftRadius:50,backgroundColor:'#055294'
    },
    THREETXTMARGIN:{
        marginTop:'7%',alignItems:'center'
    },
    txt:{
        fontSize:32,color:'white',fontWeight:'500'
    },
    SECONDLINE:{
        fontSize:20,color:'white',marginTop:'3%'
    },
    THIRDTXT:{
        fontSize:20,color:'white',fontWeight:'500'
    },
    EMAILVIEW:{
        marginTop:'7%',marginLeft:'8%'
    },
    EMAILTXT:{
        fontSize:16,color:'white',fontWeight:'700'
    },
    TXTINPUT:{
        borderWidth:1,width:'90%',height:50,borderRadius:13,backgroundColor:'white',marginTop:10,paddingLeft:10,color:'black'
    },
    TOUCH:{
        width:'83%',height:50,borderRadius:13,backgroundColor:'#389BD5',alignSelf:'center',marginTop:'10%'
    },
    SUBMITTXT:{
        fontSize:18,color:'white',textAlign:'center',marginTop:12,fontWeight:'500'
    }
    
    
})