import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import imageGroup from '../image/room.png';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../themes/colors';
import Font from '../themes/font';
const ItemRoom = () => {
  return (
    <View style={styles.room}>
      <Text style={styles.nameRoom}>Phòng 1</Text>
      <View style={styles.groupRoom}>
        <View style={styles.logoGroup}>
          <View style={styles.txtViewNumber}>
            <Text style={styles.txtNumberMatches}>5</Text>
          </View>
          <Image source={imageGroup} style={styles.imageLogoGroup} />
        </View>
        <View style={styles.iconMatch}>
          <Icon name="futbol" style={styles.iconFootball} />
        </View>
        <View style={styles.logoGroup}>
          <View style={styles.txtViewNumber}>
            <Text style={styles.txtNumberMatches}>5</Text>
          </View>
          <Image source={imageGroup} style={styles.imageLogoGroup} />
        </View>
      </View>
      <View style={styles.descriptionRoom}>
        <View style={styles.descriptionDetail}>
          <Text style={styles.txtNameGroup}>Trường Bách Khoa</Text>
          <View style={styles.listIcon}>
            <Icons name="star" style={styles.iconRating} />
            <Icons name="star" style={styles.iconRating} />
            <Icons name="star" style={styles.iconRating} />
            <Icons name="star" style={styles.iconRating} />
            <Icons name="star" style={styles.iconRating} />
          </View>
          <Text style={styles.txtNumberMatch}>Số trận tham gia</Text>
          <Text style={styles.txtNumberMatch}>1</Text>
        </View>
        <View style={styles.space} />
        <View style={styles.descriptionDetail}>
          <Text style={styles.txtNameGroup}>Trường Bách Khoa</Text>
          <View style={styles.listIcon}>
            <Icons name="star" style={styles.iconRating} />
            <Icons name="star" style={styles.iconRating} />
            <Icons name="star" style={styles.iconRating} />
            <Icons name="star" style={styles.iconRating} />
            <Icons name="star" style={styles.iconRating} />
          </View>
          <Text style={styles.txtNumberMatch}>Số trận tham gia</Text>
          <Text style={styles.txtNumberMatch}>1</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemRoom;
const { width } = Dimensions.get('window');
const startWidth = 360;
const styles = StyleSheet.create({
  room: {
    width: (160 / startWidth) * width,
    height: (120 / startWidth) * startWidth,
    backgroundColor: Color.backgroud,
    marginLeft: 14,
    marginTop: 15,
    // eslint-disable-next-line no-dupe-keys
    backgroundColor: Color.field,
    borderRadius: 4,
  },
  nameRoom: {
    color: Color.white,
    fontSize: Font.font_description,
    fontWeight: '700',
    width: '100%',
    textAlign: 'center',
    marginTop: 2,
    height: '15%',
  },
  groupRoom: {
    flexDirection: 'row',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  descriptionRoom: {
    flexDirection: 'row',
    flex: 1,
  },
  space: {
    flex: 1,
  },
  descriptionDetail: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNameGroup: {
    fontSize: 9,
    fontWeight: '700',
    textAlign: 'center',
  },
  listIcon: {
    flexDirection: 'row',
  },
  iconRating: {
    fontSize: 9,
    color: Color.icon,
  },
  txtNumberMatch: {
    fontSize: 7,
    fontWeight: '700',
    textAlign: 'center',
    color: Color.white,
  },
  logoGroup: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    bottom: 4,
  },
  iconMatch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFootball: {
    fontSize: Font.title_child2,
  },
  imageLogoGroup: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  txtViewNumber: {
    backgroundColor: Color.primary,
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15 / 2,
    marginLeft: '5%',
  },
  txtNumberMatches: {
    fontSize: 12,
    fontWeight: '700',
    color: Color.white,
  },
});
