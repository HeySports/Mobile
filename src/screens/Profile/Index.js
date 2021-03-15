import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import avatar from '../../image/avatar.png';
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.top}>
          <Text>askjhdja</Text>
        </View>
        <Image source={avatar} style={styles.avatar} />
      </View>
      <View style={styles.information}>
        <Text>Centers</Text>
      </View>
      <View style={styles.nextMatch}>
        <Text>Next Match</Text>
      </View>
      <View style={styles.history}>
        <Text>History</Text>
      </View>
    </View>
  );
};

export default Profile;
const { width, height } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1.3,
    backgroundColor: Color.backgroud,
  },
  avatar: {
    width: width,
    height: '100%',
    top: -10,
  },
  top: {
    height: 30,
  },
  information: {
    flex: 1,
  },
  nextMatch: {
    flex: 1,
  },
  history: {
    flex: 1,
  },
});
