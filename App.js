import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/splash';
import SignUp from './src/screens/signup';
import FirstPage from './src/screens/FirstPage';
import HomeScreen from './src/screens/homescreen';
import Services from './src/screens/services';
import HideImage from './src/screens/signup/index2';
import Help from './src/screens/help';
import Profile from './src/screens/profile';
import Frequently from './src/screens/frequently';
import Bottom from './src/screens/bottom';
import Drawer from './src/screens/drawer';
import DrawerScreen from './src/screens/drawer';
import ServicesExample from './src/screens/services/index1';
import { FlatListComponent } from 'react-native';
import FlatListExample from './src/screens/flatlistExample';
import DataExtend from './src/screens/flatlistExample/index2';
import Details from './src/screens/details';
import Faq from './src/screens/faq';
import HowTo from './src/screens/howto';
import Modal from './src/screens/modal';
import ModalExample from './src/screens/modal';
import Async from './src/screens/async';
import AsyncStorageExample from './src/screens/async/index1';
import AsyncCodesStepbyStep from './src/screens/async/index2';
import AnotherExample from './src/screens/async/index3';
import ForgetPassword from './src/screens/forgetpassword';
import VerifyEmail from './src/screens/verifypassword';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
      
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen  name='splash' component={Splash}/>   
          <Stack.Screen  name='FirstPage' component={FirstPage}/>  
          
          {/* <Stack.Screen  name='forgetpassword' component={ForgetPassword}/>  */}
          {/* <Stack.Screen  name='verifypassword' component={VerifyEmail}/>  */}



            <Stack.Screen  name='signup' component={SignUp}/>    
           <Stack.Screen name='details' component={Details}/>  

           {/* <Stack.Screen name='modal' component={ModalExample}/> */}

              


          
 
               <Stack.Screen name='drawer' component={DrawerScreen}/>  
{/* 
            <Stack.Screen name='flatExample' component={FlatListExample}/>
             <Stack.Screen name='DataExtend' component={DataExtend}/>   */}
{/* 
             <Stack.Screen name='faq' component={Faq}/> 
              <Stack.Screen name='howto' component={HowTo}/>  */}
              {/* <Stack.Screen name='async' component={AnotherExample}/>  */}



            


      </Stack.Navigator>
    </NavigationContainer>

  );

}

export default App

