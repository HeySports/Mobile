/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemNotification from '../../components/Notification';
import { getNotification } from '../../redux/NotificationRedux/actions';
import setupFirebase from '../../../setupFirebase';
import messaging from '@react-native-firebase/messaging';
// import Setup from './Setup';
import { useDispatch, useSelector } from 'react-redux';
const Notification = () => {
  const [checkNotification, setCheckNotification] = useState(true);
  const [listNotification, setListNotification] = useState([]);
  const [notification, setNotification] = useState(true);
  const dispatch = useDispatch();

  const list = useSelector((state) => state.notification.notificationData);

  useEffect(() => {
    messaging().onMessage(async (remoteMessage) => {
      console.log('A new FCM message arrived! ...........................................');
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      dispatch(getNotification());
    });
  }, [notification, checkNotification]);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Thông Báo</Text>
        <Icon name="bell" style={checkNotification ? styles.icons : styles.icon} />
      </View>
      <ScrollView style={styles.listView}>
        {list ? (
          list.map((item, index) => {
            return <ItemNotification item={item} checkItem={item.status === 1} />;
          })
        ) : (
          <Text>Không có thông báo</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Notification;
const { width, height } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  header: {
    height: 50,
    width: width,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: Color.txtLevel2,
  },
  txtHeader: {
    fontSize: Font.title_child,
    width: '80%',
    fontWeight: '700',
    marginLeft: 15,
  },
  typeNotification: {
    width: width - 2,
    flexDirection: 'row',
    height: 40,
    marginLeft: 1,
  },
  itemType: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Color.primary,
    flexDirection: 'row',
  },
  itemTypes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.txtLevel3,
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    marginLeft: 20,
    fontSize: 20,
    color: Color.primary,
  },
  icons: {
    flex: 1,
    marginLeft: 20,
    fontSize: 20,
    color: Color.txtLevel3,
  },
  txtNotification: {
    flex: 3,
    fontSize: Font.font_description,
    color: Color.primary,
  },
  txtNotifications: {
    flex: 3,
    fontSize: Font.font_description,
    color: Color.txtLevel3,
  },
});
