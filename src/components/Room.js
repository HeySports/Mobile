import React from 'react';
import { StyleSheet, Image, View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import pitch from '../image/duytan.jpg';
import Color from '../themes/colors';
import Font from '../themes/font';
const RoomItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageRoom}>
        <Image source={pitch} style={styles.imgRoom} />
      </View>
      <View style={styles.detailRoom}>
        <Text style={styles.titleDetail}>Phòng 1</Text>
        <View style={styles.row}>
          <View style={styles.viewIconDetail}>
            <Icon name="users" style={styles.iconDetail} />
          </View>
          <View style={styles.viewTxtDetail}>
            <Text style={styles.txtDetail}>Bách Khoa</Text>
            <Text style={styles.txtVs}>Vs</Text>
            <Text style={styles.txtDetail}>Kiến Trúc</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.viewIconDetail}>
            <Icon name="people-arrows" style={styles.iconDetail} />
          </View>
          <View style={styles.viewTxtDetails}>
            <Text style={styles.txtDetails}>11 người</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.viewIconDetail}>
            <Icons name="soccer-field" style={styles.iconDetail} />
          </View>
          <View style={styles.viewTxtDetails}>
            <Text style={styles.txtDetails}>Sân Duy Tân</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.viewIconDetail}>
            <Icon name="map-marker-alt" style={styles.iconDetail} />
          </View>
          <View style={styles.viewTxtDetails}>
            <Text style={styles.txtDetails}>07 Duy Tân, Hòa Cường Bắc, Hải Châu, Đà Nẵng</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.viewIconDetail}>
            <Icon name="clock" style={styles.iconDetail} />
          </View>
          <View style={styles.viewTxtDetails}>
            <Text style={styles.txtDetails}>15:00 - 16:00 | 10/03/2021</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default RoomItem;
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    margin: (20 / startWidth) * width,
    backgroundColor: Color.field,
    height: 130,
    marginTop: 15,
    marginBottom: 0,
  },
  imageRoom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailRoom: {
    flex: 3,
    alignItems: 'center',
  },
  imgRoom: {
    width: '100%',
    height: '100%',
  },
  titleDetail: {
    fontSize: Font.font_description,
    fontWeight: '700',
    color: Color.white,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 2,
  },
  viewIconDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconDetail: {
    fontSize: 12,
    color: Color.primary,
  },
  viewTxtDetail: {
    flex: 4.5,
    flexDirection: 'row',
  },
  viewTxtDetails: {
    flex: 4.5,
    flexDirection: 'row',
  },
  txtDetail: {
    fontSize: 12,
    color: Color.greyishBrown,
    width: '45%',
    textAlign: 'center',
    fontWeight: '700',
  },
  txtDetails: {
    fontSize: 12,
    color: Color.greyishBrown,
    fontWeight: '700',
  },
  txtVs: {
    fontSize: 12,
    width: '10%',
    textAlign: 'center',
    color: '#AC090B',
    fontWeight: '700',
  },
});
