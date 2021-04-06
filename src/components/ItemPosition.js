import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const ItemPosition = (props) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: props.colors,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity style={styles.btnPosition} onPress={props.function}>
        <Text style={styles.txtBtnPosition}>{props.position}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemPosition;

const styles = StyleSheet.create({
  btnPosition: {
    width: 40,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnPosition: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
