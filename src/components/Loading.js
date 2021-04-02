import React from 'react';
import { StyleSheet, ActivityIndicator, View, Dimensions } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loading;
const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  containerLoading: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
