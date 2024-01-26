import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import BackButton from '../Components/BackButton'
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions'
import MyLablel from '../Components/MyLablel'
import InputBox from '../Components/InputBox'
import MyButton from '../Components/MyButton'

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackButton 
      onPress={()=>navigation.navigate("Login")}
      style={styles.btnback}
      ></BackButton>
      <Text style={styles.maintxt}>Forgot Password</Text>
      <View style={styles.lblcontainer}>
        <MyLablel text="Please enter your registered email or mobile to reset your Password"/>
    </View>
    <View style={styles.inpContainer}>
      <InputBox 
      secureTextEntry
      label="Email/Mobile number"/>
      
    </View>
    <View style={styles.btnConatiner}>
         <MyButton 
         onPress={()=>navigation.navigate("Email Check")}
         title='Recover Password'></MyButton> 
    </View>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            // alignItems : 'center',
            backgroundColor : '#FFF',
        },
        btnback :{
            alignItems : 'flex-start',
            marginTop : responsiveHeight(8),
            marginLeft : responsiveWidth(6),
        },
        maintxt : {

            marginTop : responsiveHeight(4),
            marginLeft : responsiveWidth(10),
            fontSize : responsiveFontSize(2.8),
            fontWeight : 'bold',
        },
        lblcontainer :{
            // backgroundColor : 'blue',
            marginTop : responsiveHeight(1),
            marginLeft : responsiveWidth(10),
            marginRight : responsiveWidth(6),
        },
        inpContainer:{
            marginTop : responsiveHeight(6),
            marginLeft : responsiveWidth(10),
            marginRight : responsiveWidth(8),
          },
          btnConatiner :{
            
            alignItems : 'center',
            justifyContent : 'center',
            marginTop : responsiveHeight(10),
            marginLeft : responsiveWidth(4),
            marginRight : responsiveWidth(2),
          },
          
        
    }
)
export default ForgotPassword