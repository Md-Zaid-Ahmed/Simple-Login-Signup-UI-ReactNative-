import { View, Text, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const MyLabel = ({ text, style }) => {
  return (
    <View>
      <Text style={[styles.labelStyle, style]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    color: 'rgba(0, 0, 0, 0.32)',
    fontSize: responsiveFontSize(1.6),
    fontWeight: 'bold',
  },
});

export default MyLabel;