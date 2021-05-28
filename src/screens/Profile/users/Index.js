import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Header from '../../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import ProfileAction from '../../../redux/ProfileRedux/actions';
import { goBack } from '../../../navigation/pushScreen';
import profile from '../../../image/thanh.jpg';
import Color from '../../../themes/colors';
import Font from '../../../themes/font';
import Star from '../../../components/Star';
const Index = (props) => {
  const dispatch = useDispatch();
  const [id] = useState(props.data);
  useEffect(() => {
    dispatch(ProfileAction.userGetDetail(id));
  }, [dispatch, id]);
  var users = [];
  const user = useSelector((state) => state.profile);
  if (user.responseDetail) {
    users = user.responseDetail;
  }
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const listInformation = [
    {
      title: 'Số Điện Thoại:',
      description: users.phone_numbers,
    },
    {
      title: 'Email:',
      description: users.email,
    },
    {
      title: 'Tuổi: ',
      description: users.age,
    },
    {
      title: 'Địa Chỉ:',
      description: users.address,
    },
    {
      title: 'Vị Trí Chơi:',
      description: users.position_play,
    },
    {
      title: 'Số Trận Đã Chơi: ',
      description: users.matches_number,
    },
  ];
  return (
    <View style={styles.container}>
      {user.loadingDetail ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <Header title="Thông Tin Người Chơi" function_goBack={goBackScreen} />
          <ScrollView style={styles.information}>
            <View style={styles.header}>
              <Image source={profile} style={styles.imageProfile} />
            </View>
            <View style={styles.moreInformation}>
              <View style={styles.nameUser}>
                <Text style={styles.txtNameUser}>
                  {users.full_name && users.full_name.toUpperCase()}
                </Text>
              </View>
              <View style={styles.rating}>
                <View style={styles.itemRating}>
                  <Text style={styles.txtItemRating}>Kĩ Năng: </Text>
                  <Star star={users.skill_rating && users.skill_rating} />
                </View>
                <View style={styles.itemRating}>
                  <Text style={styles.txtItemRating}>Fair play: </Text>
                  <Star star={users.attitude_rating && users.attitude_rating} />
                </View>
                {listInformation.map((item, index) => {
                  return (
                    <View style={styles.itemRating} key={index}>
                      <Text style={styles.txtItemRating}>{item.title}</Text>
                      <Text style={styles.txtContent}>{item.description && item.description}</Text>
                    </View>
                  );
                })}
                <View style={styles.itemRatings}>
                  <Text style={styles.txtItemRating}>Mô Tả</Text>
                  <Text style={styles.txtContents}>{users.description && users.description}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default Index;
const { width, height } = Dimensions.get('screen');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  information: {
    width: width,
  },
  header: {
    height: 180,
    width: width,
  },
  imageProfile: {
    width: width,
    height: 180,
  },
  moreInformation: {
    width: width,
  },
  nameUser: {
    margin: (15 / startHeight) * height,
  },
  txtNameUser: {
    fontSize: Font.title_child2,
    fontWeight: '700',
  },
  rating: {
    width: width,
  },
  itemRating: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: width - 20,
  },
  txtItemRating: {
    fontSize: Font.font_description,
    fontWeight: '700',
    marginRight: 5,
  },
  txtContent: {
    fontSize: Font.font_description,
  },
  itemRatings: {
    marginLeft: 10,
    width: width - 20,
    marginTop: 15,
  },
  txtContents: {
    marginTop: 5,
    fontSize: Font.font_description,
  },
});
