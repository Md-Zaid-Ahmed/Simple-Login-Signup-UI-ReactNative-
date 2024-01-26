import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

const MyButton = ({ disabled, ...props }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton
      ]}
      disabled={disabled}
      {...props} // Pass any additional props directly to TouchableOpacity
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B31312',
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(1.5),
    position: 'absolute',
    left: responsiveWidth(6),
    right: responsiveWidth(6),
  },
  disabledButton: {
    backgroundColor: 'gray', // Set your desired color for the disabled state
  },
  text: {
    fontSize: responsiveFontSize(2.2),
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    width: '100%', // Take up the full width of TouchableOpacity
    textAlign: 'center', // Center the text within TouchableOpacity
  },
});

export default MyButton;
