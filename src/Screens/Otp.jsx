import { View, Text,StyleSheet, TextInput } from 'react-native'
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';
import MyButton from '../Components/MyButton';
import BackButton from '../Components/BackButton';
import OtpInput from '../Components/OtpInput';
import React,{useRef,useState} from 'react'
import MyLabel from '../Components/MyLablel';
import TouchLabel from '../Components/TouchLabel';
import { useNavigation } from '@react-navigation/native';
const Otp = () => {

    const et1 = useRef();     const [f1,setF1] = useState('');
    const et2 = useRef();     const [f2,setF2] = useState('');
    const et3 = useRef();     const [f3,setF3] = useState('');
    const et4 = useRef();     const [f4,setF4] = useState('');

    const navigation = useNavigation();

  return (
    <View>
      <BackButton style={styles.btnback} onPress={()=>navigation.navigate("Register")}></BackButton>
      <View style={styles.topContainer}>
      <Text style={styles.maintxt}>Otp Verification </Text>
      </View>
      <View style={styles.OtpConatiner}>
        {/* <OtpInput></OtpInput> */}
        <TextInput 
        ref={et1} 
        style={[styles.otpInp,
            {borderColor : f1.length >=1 ? '#65B741' : '#B31312'}
            ]} 
        keyboardType='number-pad' 
        maxLength={1}
        value={f1}
        
        onChangeText={txt =>{
            setF1(txt);
            if(txt.length>=1)
            {
                et2.current.focus();
            }
            else if(txt.length<1)
            {
                et1.current.focus();
            }
        }}
        
        />
        <TextInput 
        ref={et2} 
        style={[styles.otpInp,
        {borderColor : f2.length >=1 ? '#65B741' : '#B31312'}
        ]} 
        keyboardType='number-pad' 
        maxLength={1}
        value={f2}
        onChangeText={txt =>{
            setF2(txt);
            if(txt.length>=1)
            {
                et3.current.focus();
            }
            else if(txt.length<1)
            {
                et1.current.focus();
            }
        }}

        />
        <TextInput 
        ref={et3}
        value={f3}
        style={[styles.otpInp,
            {borderColor : f3.length >=1 ? '#65B741' : '#B31312'}
            ]} 
        keyboardType='number-pad' 
        maxLength={1}
        onChangeText={txt =>{
            setF3(txt);
            if(txt.length>=1)
            {
                et4.current.focus();
            }
            else if(txt.length<1)
            {
                et2.current.focus();
            }
        }}

        />
        <TextInput 
        ref={et4}
        style={[styles.otpInp,
            {borderColor : f4.length >=1 ? '#65B741' : '#B31312'}
            ]} 
        keyboardType='number-pad' 
        maxLength={1}
        value={f4}
        onChangeText={txt =>{
            setF4(txt);
            if(txt.length>=1)
            {
                et4.current.focus();
            }
            else if(txt.length<1)
            {
                et3.current.focus();
            }
        }}
        />
      </View>
      <View style={styles.btnConatiner}>
        <MyButton 
        disabled={
            f1 !=='' && f2!=='' && f3!=='' && f4!=='' ? false : true
        }
        onPress={()=>navigation.navigate("Home")}
         title='Verify'/>
    </View>
    <View style={styles.baseContainer}>
        <MyLabel text='Didn’t receive a verification code?'></MyLabel>
        
    </View>
    <View style={styles.base2Container}>
        <TouchLabel text='Resend code '></TouchLabel>
        <Text style={{color : '#B31312',
          fontWeight : 'bold',
          fontSize : responsiveFontSize(1.6),}}>|</Text>
        <TouchLabel text=' Change Number'></TouchLabel>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({

    container :{
        flex : 1,
        // alignItems : 'center',
        backgroundColor : '#FFF',
    },
    btnback :{
        alignSelf : 'flex-start',
        marginTop : responsiveHeight(8),
        marginLeft : responsiveWidth(6),
    },
    topContainer : 
    {
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
    },
    maintxt : {
        marginTop : responsiveHeight(4),
        fontSize : responsiveFontSize(2.8),
        fontWeight : 'bold',
    },
    OtpConatiner :
    {
        // backgroundColor : 'red',
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
        marginTop : responsiveHeight(8),
    },
    otpInp :
    {
        width : responsiveWidth(12),
        height : responsiveHeight(6),
        borderWidth : 1,
        borderRadius : responsiveWidth(1),
        marginLeft : responsiveWidth(4),
        textAlign  : 'center',
       
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
        // marginLeft : responsiveWidth(8),
        // marginRight : responsiveWidth(6),
        marginTop : responsiveHeight(8),
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    base2Container :{
        flexDirection : 'row',
        flexWrap: 'wrap',
        // backgroundColor : 'red',
        // marginLeft : responsiveWidth(8),
        // marginRight : responsiveWidth(6),
        
        alignItems: 'center', 
        justifyContent: 'center', 
    }
    // topContainer : 
    // {
    //     width : responsiveWidth(80),
    //     alignItems: 'center', 
    //     justifyContent: 'center', 
    //     flexDirection : 'row',
    //     flexWrap : 'wrap',
    // }
});
export default Otp