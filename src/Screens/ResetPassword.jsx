import { View,StyleSheet,ImageBackground, Text, Dimensions } from 'react-native'
import React from 'react'
import ChevronLeft from '../icon/ChevronLeft'
import BackButton from '../Components/BackButton'
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions'
import MyLablel from '../Components/MyLablel'
import InputBox from '../Components/InputBox'
import MyButton from '../Components/MyButton'
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackButton style={styles.btnback} onPress={()=>navigation.navigate("Forgot Password")}></BackButton>
      <Text style={styles.maintxt}>Reset Password</Text>
      <View style={styles.lblcontainer}>
        <MyLablel text="please enter your new password and confirm the password."/>
    </View>
    <View style={styles.inpContainer}>
      <InputBox 
      secureTextEntry
      label="New Password"/>
      <InputBox 
      label="Confirm Password"
      secureTextEntry
      overrideMargin/>
    </View>
    <View style={styles.btnConatiner}>
         <MyButton 
         onPress={()=>navigation.navigate("Login")}
          title='Update'></MyButton> 
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
export default ResetPassword