import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const TouchLabel = ({ text, ...props }) => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.fg_label} {...props}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fg_label: {
    color: '#B31312',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.6),
  },
});

export default TouchLabel;
