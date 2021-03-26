import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Color from '../themes/colors';
import Font from '../themes/font';
const Error = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtMessage}>{props.messageError}</Text>
    </View>
  );
};

export default Error;
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { height: 40, width: width, justifyContent: 'center', alignItems: 'center' },
  txtMessage: { fontSize: Font.font_description, textAlign: 'center', color: Color.error },
});
