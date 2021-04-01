import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import pitch from '../../image/duytan.jpg';
const Detail = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={pitch} style={styles.imageField} />
          <TouchableOpacity style={styles.btnBack}>
            <Text style={styles.txtBtnBack}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text>Body</Text>
        </View>
        <View style={styles.bottom}>
          <Text>Body</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
const { width, height } = Dimensions.get('window');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    flex: 1,
  },
  imageField: {
    width: width,
    height: 180,
  },
  btnBack: {
    height: 40,
    width: 40,
    marginTop: -180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnBack: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1.5,
  },
  bottom: {
    flex: 1.5,
  },
});
