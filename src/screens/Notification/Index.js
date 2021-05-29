import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemNotification from '../../components/Notification';
import setupFirebase from '../../../setupFirebase';
import messaging from '@react-native-firebase/messaging';
// import Setup from './Setup';
import { useDispatch, useSelector } from 'react-redux';
const Notification = () => {
  const [checkNotification, setCheckNotification] = useState(true);
  const [listNotification, setListNotification] = useState(true);
  const [notification, setNotification] = useState(true);
  // const notification = useSelector((state) => state.notification.notificationData);
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('.........................: ', token);
  };

  useEffect(() => {
    getToken();
    messaging().onMessage(async (remoteMessage) => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      setNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        image: remoteMessage.notification.android.imageUrl,
      });
    });

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log('onNotificationOpenedApp: ', JSON.stringify(remoteMessage));
      setNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        image: remoteMessage.notification.android.imageUrl,
      });
    });
    //hung add
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            JSON.stringify(remoteMessage),
          );
          setNotification({
            title: remoteMessage.notification.title,
            body: remoteMessage.notification.body,
            image: remoteMessage.notification.android.imageUrl,
          });
        }
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Thông Báo</Text>
      </View>
      <View style={styles.typeNotification}>
        <TouchableOpacity
          style={checkNotification ? styles.itemType : styles.itemTypes}
          onPress={() => setCheckNotification(true)}
        >
          <Icon name="users" style={checkNotification ? styles.icon : styles.icons} />
          <Text style={checkNotification ? styles.txtNotification : styles.txtNotifications}>
            Lời Mời
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={checkNotification ? styles.itemTypes : styles.itemType}
          onPress={() => setCheckNotification(false)}
        >
          <Icon name="bell" style={checkNotification ? styles.icons : styles.icon} />
          <Text style={checkNotification ? styles.txtNotifications : styles.txtNotification}>
            Thông báo
          </Text>
        </TouchableOpacity>
      </View>
      {checkNotification ? (
        <ScrollView style={styles.listView}>
          <ItemNotification />
          <ItemNotification />
        </ScrollView>
      ) : (
        <ScrollView style={styles.listView}>
          <ItemNotification />
          <ItemNotification checkItem={true} />
          <ItemNotification />
          <ItemNotification checkItem={true} />
          <ItemNotification />
          <ItemNotification checkItem={true} />
          <ItemNotification />
          <ItemNotification checkItem={true} />
          <ItemNotification />
          <ItemNotification checkItem={true} />
          <ItemNotification />
          <ItemNotification checkItem={true} />
        </ScrollView>
      )}
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
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.txtLevel2,
  },
  txtHeader: {
    fontSize: Font.title_child,
    fontWeight: '700',
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
