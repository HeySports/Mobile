import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import sanbong from '../../image/sanbong.jpg';
import logoTeam from '../../image/team.jpg';
import Font from '../../themes/font';
import Color from '../../themes/colors';
import ItemUser from '../../components/Player';
import image from '../../image/thanh.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Star from '../../components/Star';
import TitleView from '../../components/Header';
import ItemRoom from '../../components/ItemRoom';
import MatchesAction from '../../redux/MatchesRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
const RoomDetail = (props) => {
  const id_room = props.data;
  const matches = useSelector((state) => state.matches);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MatchesAction.userGetDetailMatch(id_room));
  }, [dispatch, id_room]);
  const dataRoom = {
    loading: matches?.loadingDetailMatches,
    dataMatch: matches?.responseDetailMatches?.match,
    teamA: matches?.responseDetailMatches?.team_a,
    members_length: matches?.responseDetailMatches?.team_a?.members?.length,
    listMatch: matches?.responseMatches,
  };
  const name = 'hà Nội FC';

  return (
    <SafeAreaView style={styles.container}>
      <TitleView title="CHI TIẾT KÈO ĐẤU" idComponent={props.componentId} />
      {dataRoom?.loading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.containerDetail}>
          <ImageBackground source={sanbong} style={styles.image}>
            <View style={styles.teamA}>
              <View style={styles.imageTeam}>
                <Image source={logoTeam} style={styles.imageLogo} />
                <View style={styles.nameClub}>
                  <Text style={styles.txtNameClub}>{name.toUpperCase()}</Text>
                  <Star star={3} />
                </View>
              </View>
              <View style={styles.informationTeam}>
                <ItemTeam icon="phone" description="Liên lạc 0946613608" />
                <ItemTeam
                  icon="anchor"
                  description={'Đã đá:  ' + dataRoom?.teamA?.matches_number + ' trận'}
                />
                <ItemTeam
                  icon="users"
                  description={'Đội có ' + dataRoom?.members_length + ' cầu'}
                />
                <FlatList
                  data={dataRoom?.teamA?.members}
                  horizontal
                  renderItem={({ item, index }) => (
                    <ItemUser items={item} key={index} image={image} />
                  )}
                  showsHorizontalScrollIndicator={false}
                />
                <View style={styles.status}>
                  <Text style={styles.txtStatus} numberOfLines={3}>
                    {dataRoom?.dataMatch?.description}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.teamB}>
              <View style={styles.joinTeam}>
                <View style={styles.borderJoinTeam}>
                  <TouchableOpacity style={styles.btnJoinTeam}>
                    <Text style={styles.txtBtnJoinTeam}>NHẬN KÈO</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.title}>
            <Text style={styles.txtTitle}>THÔNG TIN CHI TIẾT KÈO</Text>
          </View>
          <View style={styles.descriptionDetail}>
            <ItemTeam
              icon="building"
              description={
                'Sân ' +
                dataRoom?.dataMatch?.name_field +
                ', sân bóng ' +
                dataRoom?.dataMatch?.field
              }
              check={true}
            />
            <ItemTeam
              icon="map-marked-alt"
              description={dataRoom?.dataMatch?.address}
              check={true}
            />
            <ItemTeam
              icon="futbol"
              description={'Sân ' + dataRoom?.dataMatch?.type_field + ' người'}
              check={true}
            />
            <ItemTeam
              icon="clock"
              description={
                'Thời gian: ' +
                dataRoom?.dataMatch?.time_start_play.slice(10, 16) +
                ' Ngày ' +
                dataRoom?.dataMatch?.time_start_play.slice(0, 10)
              }
              check={true}
            />
            <ItemTeam
              icon="hand-holding-usd"
              description={'Giá sân : ' + dataRoom?.dataMatch?.price?.slice(0, 3) + ' 000 VND'}
              check={true}
            />
            <ItemTeam
              icon="balance-scale-right"
              description={
                'Phí chơi: ' +
                dataRoom?.dataMatch?.lose_pay +
                '|  ' +
                dataRoom?.dataMatch?.price?.slice(0, 3) +
                ' 000 VND'
              }
              check={true}
            />
          </View>
          <View style={styles.bottomDetail}>
            <TouchableOpacity style={styles.btnBottom}>
              <Text style={styles.txtBtnBottom}>Nhận Kèo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.txtTitle}>KÈO THƠM KHÁC</Text>
          </View>
          <View style={styles.listMatches}>
            <FlatList
              data={dataRoom?.listMatch}
              horizontal
              style={styles.listMatch}
              renderItem={({ item, index }) => (
                <ItemRoom room={item} key={index} idComponent={props.componentId} />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
const ItemTeam = ({ icon, description, check }) => {
  return (
    <View style={styles.itemInfo}>
      <View style={styles.iconInfo}>
        <Icon name={icon} style={styles.iconStyle} />
      </View>
      <View style={styles.description}>
        <Text style={check ? styles.txtDescriptions : styles.txtDescription}>{description}</Text>
      </View>
    </View>
  );
};
export default RoomDetail;
const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDetail: {
    flex: 1,
  },
  image: {
    margin: 10,
    width: width - 20,
    height: 550,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  teamA: {
    flex: 3,
  },
  teamB: {
    flex: 1,
  },
  imageTeam: {
    height: '40%',
  },
  imageLogo: {
    height: 160,
    width: '100%',
  },
  nameClub: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
  },
  txtNameClub: {
    fontSize: Font.title_child,
    fontWeight: '700',
    color: 'black',
  },
  listPlayerTeamB: {
    marginTop: 5,
  },
  informationTeam: {
    flex: 1,
  },
  itemInfo: {
    flexDirection: 'row',
    width: '100%',
    height: 25,
    alignItems: 'center',
  },
  iconInfo: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: Font.title_child4,
    color: Color.primary,
  },
  description: {
    flex: 8.5,
  },
  txtDescription: {
    fontSize: Font.font_description,
    color: Color.primary,
    fontWeight: '700',
  },
  txtDescriptions: {
    fontSize: Font.font_description,
    color: Color.txtLevel3,
    fontWeight: '700',
  },
  status: {
    marginLeft: 15,
    marginRight: 5,
  },
  txtStatus: {
    fontSize: Font.font_description,
    color: Color.txtLevel2,
    lineHeight: 20,
  },
  joinTeam: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderJoinTeam: {
    width: 120,
    height: 120,
    backgroundColor: Color.backgroud,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnJoinTeam: {
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
  },
  txtBtnJoinTeam: {
    fontSize: Font.font_description,
    fontWeight: '700',
  },
  title: {
    height: 40,
    justifyContent: 'center',
    marginLeft: 15,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  bottomDetail: {
    marginTop: 20,
    width: width,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBottom: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    borderRadius: 8,
  },
  listMatches: {
    marginBottom: 10,
  },
  txtBtnBottom: {
    fontSize: 16,
    fontWeight: '700',
  },
  listMatch: {
    flex: 1,
  },
});
