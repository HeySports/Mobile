import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Color from '../themes/colors';
const DoubleButton = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TouchableOpacity style={styles.btn1} onPress={props.functionBtn1}>
          <Text style={styles.txtBtn}>{props.txtTitleBtn1}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity style={styles.btn2} onPress={props.functionBtn2}>
          <Text style={styles.txtBtn}>{props.txtTitleBtn2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoubleButton;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    flex: 1,
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    borderRadius: 5,
  },
  btn2: {
    flex: 1,
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    borderRadius: 5,
  },
  txtBtn: { fontSize: 15, fontWeight: 'bold', color: Color.white, },
});
