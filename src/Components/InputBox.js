import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const InputBox = (
  { label, 
    overrideMargin,
    onChangeText,
    keyStyle,
    ...props
  }) => {
  

  const inputStyles = [
    styles.input,
    overrideMargin && { marginBottom: 0 }, // Override marginBottom if overrideMargin is true
  ];

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} onChangeText={onChangeText} keyboardType={keyStyle} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'rgba(0, 0, 0, 0.32)',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },
  input: {
    height: responsiveHeight(4),
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: responsiveHeight(4),
  },
});

export default InputBox;
