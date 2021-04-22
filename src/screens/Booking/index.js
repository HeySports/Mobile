import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../../themes/colors';
import Font from '../../themes/font';
import Header from '../../components/Header';
const Index = (props) => {
  const data = props.data;
  const dataInfoMatch = [
    {
      title: 'ID trận',
      description: data.id_match,
    },
    {
      title: 'Cáp kèo',
      description: data.team_name_match,
    },
    {
      title: 'Sân bóng',
      description: data.field,
    },
    {
      title: 'Thời gian',
      description: data.time,
    },
    {
      title: 'Địa Chỉ',
      description: data.address,
    },
  ];
  const dataUser = [
    {
      title: 'Tên người đặt sân',
      description: data.name_user,
    },
    {
      title: 'Số điện thoại',
      description: data.phone,
    },
    {
      title: 'Email người đặt',
      description: data.email,
    },
  ];
  return (
    <View style={styles.container}>
      <Header title="Đặt Sân" idComponent={props.componentId} />
      <ScrollView style={styles.bodyBooking}>
        <View style={styles.headerBooking}>
          <Text style={styles.txtInfoMatch}>Thông Tin Trận Đấu</Text>
          <View style={styles.infoMatch}>
            {dataInfoMatch.map((item, index) => {
              return (
                <View style={styles.itemInfo} key={index}>
                  <Text style={styles.txtTitleInfo}>{item.title}</Text>
                  <Text style={styles.txtDescriptionInfo}>{item.description}</Text>
                </View>
              );
            })}
          </View>
          <Text style={styles.txtInfoUser}>Thông Người Đặt Sân</Text>
          <View style={styles.infoMatch}>
            {dataUser.map((item, index) => {
              return (
                <View style={styles.itemInfo} key={index}>
                  <Text style={styles.txtTitleInfor}>{item.title}</Text>
                  <Text style={styles.txtDescriptionInfor}>{item.description}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.infoUser} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Index;
const { width, height } = Dimensions.get('screen');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  bodyBooking: {
    width: width,
    marginTop: 20,
  },
  headerBooking: {
    width: width,
    marginLeft: (15 / startWidth) * width,
    marginRight: (15 / startWidth) * width,
  },
  txtInfoMatch: {
    fontSize: Font.title_child3,
    fontWeight: '700',
  },
  infoMatch: {
    flex: 1,
  },
  itemInfo: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  txtTitleInfo: {
    flex: 1,
    fontSize: Font.font_description,
    color: 'black',
  },
  txtTitleInfor: {
    flex: 2,
    fontSize: Font.font_description,
    color: 'black',
  },
  txtDescriptionInfo: {
    flex: 4,
    fontSize: Font.font_description,
    color: Colors.txtLevel3,
  },
  txtInfoUser: {
    marginTop: 15,
    fontSize: Font.title_child3,
    fontWeight: '700',
  },
  txtDescriptionInfor: {
    flex: 4,
    fontSize: Font.font_description,
    color: Colors.error,
  },
});
