import React from 'react';
import { StyleSheet, ActivityIndicator, View, Dimensions } from 'react-native';

const Loading = (props) => {
  return (
    <View style={props.checkLoading ? styles.container : styles.containerLoading}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loading;
const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  containerLoading: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
