import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { DATA } from '../homescreen/index1'

const Details = ({ navigation, route }) => {
    console.log(route.params.fordata1.description)
    return (

       
        <View>
   
      
            <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack('homescreen')}>
                <View style={styles.imageview}>
                 
                        <Image source={require('../../../assets/images/Vecto.png')} style={styles.img} />

                  
                </View>
                </TouchableOpacity>
                

                <View style={styles.secondview}>
                    <Text style={styles.txt}>Details</Text>
                </View>


            </View>
            <View style={{ marginTop: '10%', marginLeft: '7%' }}>
                <Image source={route.params.fordata1.image} style={{ width: 200, height: 60,resizeMode:'contain' }} />

            </View>
            <View style={{ marginTop: '8%', marginLeft: '7%' }}>

                <Text style={{ fontSize: 40, color: '#389BD5', fontWeight: '700' }}>{route.params.fordata1.database}</Text>
            </View>

            <View style={{marginTop:'6%'}}>
                <Text style={{ marginLeft: '7%',fontSize:11,color:'black',fontWeight:'600',opacity:0.3}}>{route.params.fordata1.description}</Text>
            </View>

            
                <FlatList 
                    data={route.params.fordata1.list}
                   
                    renderItem={({item}) =>{
                        return(
                        <View style={{flexDirection:'row',marginTop:'5%',marginLeft:'8%'}}>
                  <Image source={require('../../../assets/images/yes.png')} style={{width:10,height:10,resizeMode:"contain",marginTop:2}} />

                        <Text style={{marginTop:1,fontSize:11,color:'black',fontWeight:'600',opacity:0.3}}> {item}</Text>

                       
                        </View>
                      
                
                        )
                    }}  
                    
                />
              
            
                </View>
               
        
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        marginTop: '10%', marginLeft: '7%', flexDirection: 'row'
    },
    imageview: {
        borderWidth: 1, width: 50, height: 50, borderRadius: 10, borderColor: 'blue', justifyContent: 'center'
    },
    img: {
        width: 9, height: 16, alignSelf: 'center'
    },
    secondview: {
        alignItems: 'center', width: '70%'
    },
    txt: {
        fontSize: 21, fontWeight: '700', color: '#055294', marginTop: 10
    },
})