import React from 'react';
import { StyleSheet, ActivityIndicator, View, Dimensions, SafeAreaView } from 'react-native';
import Colors from '../themes/colors';

const Loading = (props) => {
  return (
    <SafeAreaView style={props.checkLoading ? styles.container : styles.containerLoading}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </SafeAreaView>
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
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
