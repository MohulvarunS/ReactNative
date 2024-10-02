import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,TextInput,ScrollView} from 'react-native';
import React,{useState} from 'react';
import RegisterScreen from './screens/Registerscreen';
export default function App() {
   
  return (
    <View style={styles.container}> 
       <RegisterScreen/>

    </View>

   
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',

  },
   
  
 
});
