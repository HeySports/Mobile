import React from 'react';
import { StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';

const Loading = ({ loadingStyle }) => {
  return (
    <SafeAreaView style={[styles.containerLoading, loadingStyle]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </SafeAreaView>
  );
};

export default Loading;
const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
