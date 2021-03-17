import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import Color from '../themes/colors';
import Font from '../themes/font';
import avatar from '../image/profile.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';
const NotificationItem = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={props.checkItem ? styles.items : styles.item}>
        <View style={styles.leftItem}>
          <View style={styles.borderImage}>
            <Image source={avatar} style={styles.image} />
          </View>
        </View>
        <View style={styles.centerItem}>
          <View style={styles.topItem}>
            <Text style={styles.txtTopItem}>Nguyễn Hùng mời bạn tham gia vào đội PNV</Text>
          </View>
          <View style={styles.bottomItem}>
            <Text style={styles.txtBottomLeftItem}>14:30</Text>
            <Text style={styles.txtBottomRightItem}>12/03/2021</Text>
          </View>
        </View>
        <View style={styles.rightItem}>
          <Icon name="ellipsis-v" style={styles.iconDot} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationItem;
const { width, height } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    height: 60,
    width: width,
  },
  item: {
    height: 60,
    width: width,
    backgroundColor: Color.backgroud,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#FFFFFF',
    flexDirection: 'row',
  },
  items: {
    height: 60,
    width: width,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#FFFFFF',
    flexDirection: 'row',
  },
  leftItem: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderImage: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.primary,
    borderWidth: 1,
    borderRadius: 20,
  },
  image: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  centerItem: {
    flex: 7,
    justifyContent: 'center',
  },
  topItem: {
    height: '40%',
    justifyContent: 'center',
  },
  txtTopItem: {
    fontSize: 12.5,
    fontWeight: '700',
  },
  bottomItem: {
    flexDirection: 'row',
  },
  txtBottomLeftItem: {
    flex: 2,
    color: Color.txtLevel3,
    fontSize: 13,
  },
  txtBottomRightItem: {
    flex: 1,
    textAlign: 'center',
    color: Color.txtLevel3,
    fontSize: 13,
  },
  rightItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconDot: {
    fontSize: 15,
  },
});
