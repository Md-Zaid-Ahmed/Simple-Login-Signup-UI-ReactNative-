import { View, Text,StyleSheet,SafeAreaView  } from 'react-native'
import React from 'react'
import InputBox from '../Components/InputBox';
import BackButton from '../Components/BackButton';
import MyLabel from '../Components/MyLablel';
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';
import MyButton from '../Components/MyButton';
import TouchLabel from '../Components/TouchLabel';
import { useNavigation } from '@react-navigation/native';
const Register = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <BackButton style={styles.btnback} onPress={()=>navigation.navigate("Login")}></BackButton>
      <View>
      <Text style={styles.maintxt}>Register to Healthy Eating</Text>
      </View>

      <View style={styles.inpContainer}>
      <InputBox 
      label="Full Name"/>
      
      <InputBox 
      keyStyle='email-address'
      label="Email"/>

      <InputBox 
      label="Mobile Number"/>

      <InputBox 
      secureTextEntry
      label="Password"/>

      <InputBox 
      label="Confirm Password"
      secureTextEntry
      overrideMargin/>

    </View>
    <View style={styles.btnConatiner}>
    <MyButton 
     onPress={()=>navigation.navigate("Otp")}
     title='Register'/>
    </View>
    <View style={styles.baseContainer}>
        <MyLabel text='By registering you agree to'></MyLabel>
        <TouchLabel text=' Terms & conditions'/>
        <MyLabel text=' and'></MyLabel>
        <TouchLabel text=' privacy Policy'/>
        <MyLabel text=' of the Healthy Eating'></MyLabel>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

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
    inpContainer:{
        marginTop : responsiveHeight(6),
        marginLeft : responsiveWidth(10),
        marginRight : responsiveWidth(8),
      },
    maintxt : {

        marginTop : responsiveHeight(4),
        marginLeft : responsiveWidth(10),
        fontSize : responsiveFontSize(2.8),
        fontWeight : 'bold',
    },
    btnConatiner :{
            
            alignItems : 'center',
            justifyContent : 'center',
            marginTop : responsiveHeight(10),
            marginLeft : responsiveWidth(4),
            marginRight : responsiveWidth(2),
          },
    baseContainer :{
        flexDirection : 'row',
        flexWrap: 'wrap',
        // backgroundColor : 'red',
        marginLeft : responsiveWidth(8),
        marginRight : responsiveWidth(6),
        marginTop : responsiveHeight(8),
        alignItems: 'center', 
        justifyContent: 'center', 
    }

});
export default Register