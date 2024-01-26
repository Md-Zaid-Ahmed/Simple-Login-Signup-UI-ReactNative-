import { View, Text,StyleSheet,ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import rocket from '../images/rocket.png'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import MyLabel from '../Components/MyLablel';
import MyButton from '../Components/MyButton';
import { useNavigation } from '@react-navigation/native';

const EmailCheck = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        
      <View style={styles.imgContainer}>
        <ImageBackground 
      source={rocket}
      style ={styles.imageStyle}
      />
      <View style={styles.textView}>
      <Text style ={styles.imgStyle}>Check your Email</Text>
      </View>
      </View>
      <View style={{ marginBottom: responsiveHeight(4) }}>
      <MyLabel style={{ textAlign: 'center' }} text="we have sent you a reset password link on your registered email address" />
      </View>
      <View style={styles.btnContainer}>
        <MyButton 
        onPress={()=>navigation.navigate("Reset Password")}
        title="Reset" ></MyButton>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({

    container :{
        flex : 1,
        position : 'relative',
        alignItems : 'center',
        // backgroundColor : 'red',
         margin : responsiveWidth(4),     
    },
    imgContainer :{
        // height : responsiveHeight(202),
        // width : responsiveWidth(202),
        alignItems : 'center',
        // backgroundColor : 'black',
        position : 'relative',
        marginTop : responsiveHeight(12),
        // marginLeft : responsiveWidth(1),
        // marginRight : responsiveWidth(1),
        
    },
    imageStyle :{
        height : responsiveHeight(50),
        width : Dimensions.get('window').width,
    },
    imgStyle : {
        fontSize: responsiveFontSize(2.8),
    color: 'black',
    fontWeight: 'bold',
    },
    textView: {
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: responsiveWidth(4),
      },
      btnContainer :{
        width: '100%',
        
      },
});

export default EmailCheck