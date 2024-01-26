import { View, Text,StyleSheet,ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png'
import InputBox from '../Components/InputBox';
import MyButton from '../Components/MyButton';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import TouchLabel from '../Components/TouchLabel';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    setButtonDisabled(email.length === 0 || password.length === 0); 
  }, [email, password])

  return (
    <View style = {styles.conatiner}>
    <View style={styles.imgContainer}>
      <ImageBackground 
      source={logo}
      style ={styles.imageStyle}
      />
    </View>

    <View>
        <Text style={styles.text}>Welcome User!</Text>
    </View>

    <View style={styles.inpContainer}>
      <InputBox 
      onChangeText={text => setEmail(text)}
      keyStyle="email-address"
      label="EMAIL ID"/>

      <InputBox 
      onChangeText={text => setPassword(text)}
      secureTextEntry
      label="PASSWORD"
       
      overrideMargin/>
    </View>
    <View style={styles.fgConatiner}>
      <TouchableOpacity 
      style = {{marginBottom : responsiveHeight(8)}}
      onPress={()=>navigation.navigate("Forgot Password")}
      >
      <Text style={styles.fg_label}>forgot password?</Text>
      </TouchableOpacity>
    </View>
    <View styles={styles.extra}>
        <MyButton 
          title="Login"
          disabled={buttonDisabled}
          onPress={()=>navigation.navigate("Home")}
        />
    </View>
    <View style={styles.baseLine}>
     <Text style={styles.base_lbl}>Dont have an account?</Text>
      <TouchLabel 
      onPress={()=>navigation.navigate("Register")}
      text = "Register Now" ></TouchLabel>
    </View>
    </View>
    
  )
}

const styles = StyleSheet.create(
    {
        conatiner : {
            flex : 1,
            backgroundColor : '#fff',
           
            // justifyContent : 'center',
            // alignItems : 'center',
        },
        imgContainer :{
            marginTop : responsiveHeight(10),
            alignItems : 'center',
        },
        imageStyle :{
          width: responsiveHeight(20),
          height: responsiveHeight(20),
          // objectFit : 'fill'
        },
        text: {
          alignItems : 'center',
            textAlign : 'center',
            fontSize : responsiveFontSize(2.5),
            fontWeight : 'bold',
            color : '#B31312',
        },
        inpContainer:{
          marginTop : responsiveHeight(10),
          marginLeft : responsiveWidth(8),
          marginRight : responsiveWidth(8),
        },
       
        fgConatiner:{
          alignItems: 'flex-end',
          margin : responsiveWidth(3),
          marginRight : responsiveWidth(8),
        },
        fg_label :{
          color : '#B31312',
          fontWeight : 'bold',
          fontSize : responsiveFontSize(1.6),
        },
        extra :{
         alignItems : 'center',
        },
        base_lbl : 
        {
          color: 'rgba(0, 0, 0, 0.32)',
          fontSize: responsiveFontSize(1.6),
          fontWeight : 'bold',
        },
        baseLine :{
          marginTop : responsiveHeight(22),
          alignItems : 'center',
        }
        
});
export default Login