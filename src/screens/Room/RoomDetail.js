import React from 'react';
import { StyleSheet, Text, ImageBackground, View, SafeAreaView, Dimensions } from 'react-native';
import sanbong from '../../image/sanbong.jpg';

const RoomDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={sanbong} style={styles.image}>
        <View style={styles.team}>
          <Text>Team</Text >
        </View>
        <View style={styles.team}>
          <Text>Team</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default RoomDetail;
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    margin: 10,
    width: width - 20,
    height: 550,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  team: {
    flex: 1,
  },
});
