import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemNotification from '../../components/Notification';
const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Thông Báo</Text>
      </View>
      <View style={styles.invited}>
        <View style={styles.titleInvited}>
          <Text style={styles.txtTitle}>Quản Lý Lời Mời</Text>
          <Icon name="users" style={styles.iconTitle} />
        </View>
        <ScrollView style={styles.listNotification}>
          <ItemNotification />
          <ItemNotification />
          <ItemNotification />
          <ItemNotification checkItem={true} />
          <ItemNotification checkItem={true} />
          <ItemNotification />
          <ItemNotification checkItem={true} />
          <ItemNotification checkItem={true} />
        </ScrollView>
      </View>
      <View style={styles.notification}>
        <View style={styles.titleInvited}>
          <Text style={styles.txtTitle}>Quản Lý Thông Báo</Text>
          <Icon name="bell" style={styles.iconTitle} />
        </View>
        <ScrollView style={styles.listNotification}>
          <ItemNotification />
          <ItemNotification />
          <ItemNotification />
          <ItemNotification checkItem={true} />
          <ItemNotification />
          <ItemNotification checkItem={true} />
          <ItemNotification checkItem={true} />
          <ItemNotification checkItem={true} />
        </ScrollView>
      </View>
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
  invited: {
    height: '45%',
    width: width,
    borderBottomWidth: 1,
    borderColor: Color.txtLevel2,
  },
  titleInvited: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtTitle: {
    flex: 6,
    marginLeft: 15,
    fontSize: Font.title_child4,
    fontWeight: '700',
  },
  iconTitle: {
    flex: 1,
    fontSize: 20,
    color: Color.primary,
  },
  notification: {
    width: width,
    height: '60%',
  },
});
