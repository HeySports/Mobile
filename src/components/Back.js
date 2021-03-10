import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Back = () => {
  return (
    <TouchableOpacity style={styles.btnBack}>
      <Icon name="chevron-left" style={styles.iconBack} />
    </TouchableOpacity>
  );
};
export default Back;
const styles = StyleSheet.create({
  btnBack: {
    width: '7%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    fontSize: 18,
  },
});
