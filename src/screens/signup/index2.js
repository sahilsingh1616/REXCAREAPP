import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React , {useState}from 'react'


const HideImage = () => {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleVisibility}>
      <Image source={require('../../../assets/images/worth.png')} style={{ width: 180, height: 23 }} />

        <Text>Click to {isVisible ? 'Hide' : 'Show'} Content</Text>
      </TouchableOpacity>

      {isVisible && (
        <View>
          <Text>This is the hidden/showable content.</Text>
        </View>
      )}
    </View>
  );
};
   
  
export default HideImage

const styles = StyleSheet.create({})