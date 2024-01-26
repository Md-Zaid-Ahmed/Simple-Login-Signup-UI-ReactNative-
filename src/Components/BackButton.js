import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ChevronLeft from '../icon/ChevronLeft';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const BackButton = ({...props}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <ChevronLeft width={responsiveHeight(5)} height={responsiveHeight(5)} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10, // Adjust the padding as needed
  },
});

export default BackButton;
