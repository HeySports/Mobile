import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Room = () => {
  const dataRoom = [
    {
      icon: 'lock',
      content: '001',
    },
    {
      icon: 'clock',
      content: '20:00-21:00',
    },
    {
      icon: 'calendar-alt',
      content: '01-04-2021',
    },
    {
      icon: 'users',
      content: '5 vs 5',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Tạo Trận</Text>
      </View>
      <View style={styles.elementMatches}>
        {dataRoom.map((item, index) => {
          return (
            <View style={styles.itemElement} key={index}>
              <View style={styles.viewIcon}>
                <Icon name={item.icon} style={styles.icon} />
              </View>
              <View style={styles.viewContent}>
                <Text style={styles.txtViewContent}>{item.content}</Text>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.chooseField}>
        <View style={styles.itemChooseField}>
          <TouchableOpacity style={styles.btnChooseField}>
            <Text style={styles.txtBtnChooseField}>Chọn Sân</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemChooseField}>
          <View style={styles.itemItem}>
            <Text>N12</Text>
          </View>
          <View style={styles.itemItem}>
            <Icon name="caret-down" />
          </View>
        </View>
        <View style={styles.itemChooseFields}>
          <View style={styles.itemHave}>
            <Text>Đã Có Sân</Text>
          </View>
          <View style={styles.itemHaves}>
            <Text>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Room;
const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  header: {
    height: 50,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtHeader: {
    fontSize: Font.title_child,
    fontWeight: 'bold',
  },
  elementMatches: {
    width: width,
    flexDirection: 'row',
    height: 40,
  },
  itemElement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.txtLevel3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    flexDirection: 'row',
  },
  viewIcon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 12,
    color: Color.primary,
  },
  viewContent: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtViewContent: { fontSize: 12 },
  chooseField: {
    height: 45,
    flexDirection: 'row',
    marginTop: 5,
  },
  itemChooseField: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.txtLevel3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    flexDirection: 'row',
  },
  itemChooseFields: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.txtLevel3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    flexDirection: 'row',
  },
  btnChooseField: {
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  itemHave:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemHaves: {
    flex: 1,
    justifyContent: 'center',
  },
});
