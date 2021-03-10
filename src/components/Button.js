import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native';
import Colors from '../themes/colors';
import Font from '../themes/font';

const Button = (props) => {
  return (
    <View style={styles.container}>
      {props.checkBtn ? (
        <TouchableOpacity style={styles.button} onPress={props.function}>
          <Text style={styles.txtBtn}>{props.titleBtn}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.containerBtn}>
          <Text style={styles.txtTitle}>{props.title}</Text>
          <TouchableOpacity style={styles.buttons} onPress={props.function}>
            <Text style={styles.txtBtns}>{props.titleBtn}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default Button;
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    width: (200 / startWidth) * width,
    height: (38 / startHeight) * height,
    backgroundColor: Colors.primary,
    borderRadius: ((38 / startHeight) * height) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    fontSize: 16,
    fontWeight: '700',
  },
  containerBtn: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 20,
  },
  buttons: {
    marginLeft: (15 / startWidth) * width,
  },
  txtBtns: {
    fontSize: Font.font_description,
    fontWeight: '700',
    color: Colors.primary,
  },
  txtTitle: {
    fontSize: Font.font_description,
  },
});
