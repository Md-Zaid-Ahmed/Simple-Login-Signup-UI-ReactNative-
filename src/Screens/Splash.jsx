import { ImageBackground,View,StyleSheet,Text } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={sytles.container}>
      <ImageBackground 
      source={{uri : 'https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg'}}
      style ={sytles.imageStyle}
      />
      <View>
        <Text style={sytles.text}>Foody</Text>
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
        },
    }
)
export default Splash