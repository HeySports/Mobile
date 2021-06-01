import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import Color from '../themes/colors';
import { putStatusNotification } from '../redux/NotificationRedux/actions';
import Font from '../themes/font';
import avatar from '../image/profile.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../navigation/pushScreen';
import { useDispatch, useSelector } from 'react-redux';

const NotificationItem = (props) => {
  const dispatch = useDispatch();
  const created_at =
    props.item && props.item.created_at ? props.item.created_at : '2021-09-09 21:31:26';
  const d = created_at.substring(0, 10);
  const h = created_at.substring(11, 16);
  const detailRoom = () => {
    console.log('props.item.status');
    console.log(props.item.status);
    props.item && dispatch(putStatusNotification(props.item.id));
    pushScreen('Notification', 'RoomDetail', props.item?.id_match, 'RoomDetail', false, '', '');
  };
  return (
    <View style={styles.container} elevation={5}>
      <TouchableOpacity onPress={detailRoom} style={props.checkItem ? styles.items : styles.item}>
        <View style={styles.leftItem}>
          <View style={styles.borderImage}>
            <Image source={avatar} style={styles.image} />
          </View>
        </View>
        <View style={styles.centerItem}>
          <View style={styles.topItem}>
            <Text style={styles.txtTopItem}>{props.item && props.item.description}</Text>
          </View>
          <View style={styles.bottomItem}>
            <Text style={styles.txtBottomLeftItem}>{h}</Text>
            <Text style={styles.txtBottomRightItem}>{d}</Text>
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
    height: 70,
    width: width,
    shadowColor: Color.primary,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
