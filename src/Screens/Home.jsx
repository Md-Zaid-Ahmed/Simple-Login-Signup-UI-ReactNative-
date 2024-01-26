import { ImageBackground,View,StyleSheet,Text } from 'react-native'
import React from 'react'
import logo from '../images/logo.png'
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';
const Home = () => {
  return (
    <View style={sytles.container}>
      <ImageBackground 
      source={logo}
      style ={sytles.imageStyle}
      />
      <View>
        <Text style={sytles.text}>Welcome to Home Page</Text>
      </View>
    </View>
  )
}
const sytles = StyleSheet.create(
    {
        container :{
            flex : 1,
            justifyContent : 'center',
            alignItems : 'center',
            backgroundColor : '#fff',

        },
        imageStyle :{
            height : 200,
            width : 200,
        },
        text: {
          alignItems : 'center',
            textAlign : 'center',
            fontSize : responsiveFontSize(2.5),
            fontWeight : 'bold',
            color : '#B31312',
        },
      })
export default Home