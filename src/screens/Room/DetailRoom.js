import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Font from '../../themes/font';
import Color from '../../themes/colors';
import { useDispatch, useSelector } from 'react-redux';
import Back from '../../components/Back';
import MatchesAction from '../../redux/MatchesRedux/actions';
import { goBack } from '../../navigation/pushScreen';
import sanbong from '../../image/sanbong.jpg';
import Field11 from '../../components/Field11';
import Field5 from '../../components/Field5';
import Field7 from '../../components/Field7';
import Loading from '../../components/Loading';
import profile from '../../image/thanh.jpg';
import Player from '../../components/Player';
import Icon from 'react-native-vector-icons/FontAwesome5';
const DetailRoom = (props) => {
  const [id] = useState(props.data);
  const [checkUser, setCheckUser] = useState(false);
  const [checkShowModel, setCheckShowModel] = useState(false);
  const dispatch = useDispatch();
  var detail = [];
  const storeDetail = useSelector((state) => state.matches);
  var typeField = false;
  if (storeDetail.responseDetailMatches) {
    detail = storeDetail.responseDetailMatches;
    if (detail.match.type_field === 5) {
      typeField = <Field5 />;
    } else if (detail.match.type_field === 7) {
      typeField = <Field7 />;
    } else {
      typeField = <Field11 />;
    }
  }
  useEffect(() => {
    dispatch(MatchesAction.userGetDetailMatch(id));
  }, [dispatch, id]);
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const dataMatches = [
    {
      icon: 'user',
      title: 'Người Tạo: ',
      description: name_owner_room ? name_owner_room : 'Người Tạo Phòng',
    },
    {
      icon: 'people-arrows',
      title: 'Cáp Kèo',
      description:
        (team_name_a ? team_name_a : 'Team A') + ' Vs ' + (team_name_b ? team_name_b : 'Team B'),
    },
    {
      icon: 'volleyball-ball',
      title: 'Sân Bóng',
      description: detail?.match?.field,
    },
    {
      icon: 'i-cursor',
      title: 'Loại Sân',
      description: 'Sân ' + detail?.match?.type_field + ' Người',
    },
    {
      icon: 'map-marker-alt',
      title: 'Địa Chỉ',
      description: detail?.match?.address,
    },
    {
      icon: 'clock',
      title: 'Thời Gian',
      description:
        detail?.match?.time_start_play.slice(10, 16) +
        ' Ngày ' +
        detail?.match?.time_start_play.slice(0, 10),
    },
    {
      icon: 'balance-scale-right',
      title: 'Tỷ Lệ',
      description: detail?.match?.lose_pay ? detail?.match?.lose_pay : 'Đến sân rồi tính',
    },
  ];

  const team_name_a = detail?.team_a?.members[0]?.team_name;
  const team_name_b = detail?.team_b?.members[0]?.team_name;
  var name_owner_room = '';
  if (!name_owner_room) {
    detail?.team_a?.members?.forEach((element) => {
      if (detail?.match?.id_user === element.id) {
        name_owner_room = element.full_name;
      }
    });
  }
  var users = useSelector((state) => state.profile.responseProfile);
  if (!checkUser) {
    if (users?.id === detail?.match?.id_user) {
      setCheckUser(true);
    }
  }
  const handleBooking = () => {
    let memberInmatch = detail?.team_b?.members?.length + detail?.team_a?.members?.length;
    let typesField = detail?.match?.type_field * 2;
    if (memberInmatch < typesField) {
     setCheckShowModel(true);
    } else {
      alert('Bạn Muốn đặt Sân !');
    }
  };
  return (
    <View style={styles.container}>
      {storeDetail.loadingDetailMatches ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <View style={styles.headerDetailMatches}>
            <Back goBack={goBackScreen} />
            <View style={styles.titleDetailMatches}>
              <Text style={styles.txtTitle}>CHI TIẾT TRẬN ĐẤU</Text>
            </View>
          </View>
          <ScrollView
            style={styles.viewScroll}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.backgroundDetailMatches}>
              <ImageBackground source={sanbong} style={styles.image}>
                {typeField && typeField}
              </ImageBackground>
            </View>
            <View style={styles.bottomDetail}>
              <View style={styles.nameMatches}>
                <Text style={styles.txtNameMatches}>{detail.match && detail.match.name_room}</Text>
              </View>
            </View>
            <View style={styles.ViewListTeam}>
              <View style={styles.titleListTeam}>
                <Text style={styles.txtTitleListTeam}>Danh Sách Đội NameTeamA</Text>
              </View>
              <ScrollView
                style={styles.listPlayer}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                {detail.match &&
                  detail?.team_a?.members?.map((item, index) => {
                    return (
                      <Player
                        key={index}
                        image={profile}
                        idComponent={props.componentId}
                        items={item}
                      />
                    );
                  })}
              </ScrollView>
            </View>
            <View style={styles.ViewListTeam}>
              <View style={styles.titleListTeam}>
                <Text style={styles.txtTitleListTeam}>Danh Sách Đội NameTeamB</Text>
              </View>
              <ScrollView
                style={styles.listPlayer}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                {detail.match &&
                  detail?.team_b?.members?.map((item, index) => {
                    return (
                      <Player
                        key={index}
                        image={profile}
                        id={item.id}
                        idComponent={props.componentId}
                        items={item}
                      />
                    );
                  })}
              </ScrollView>
            </View>
            <View style={styles.informationMatch}>
              <View style={styles.titleInformation}>
                <Text style={styles.txtTitleListTeam}>Thông Tin Về Trận Đấu</Text>
              </View>
              <View style={styles.informationDetail}>
                {dataMatches?.map((item, index) => {
                  return (
                    <View style={styles.itemDetail} key={index}>
                      <Icon name={item.icon} style={styles.iconDetail} />
                      <Text style={styles.txtDetail}>{item.title}</Text>
                      <Text style={styles.txtValueDetail}>{item.description}</Text>
                    </View>
                  );
                })}
                <View style={styles.descriptionDetail}>
                  <Text style={styles.txtTitleDescription}>Mô Tả</Text>
                  <Text style={styles.txtDescription}>{detail?.match?.description}</Text>
                </View>
              </View>
            </View>
            <View style={styles.order}>
              {checkUser ? (
                <TouchableOpacity style={styles.btnOrder} onPress={handleBooking}>
                  <Text style={styles.txtBtnOrder}>ĐẶT SÂN</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.btnOrder}>
                  <Text style={styles.txtBtnOrder}>THAM GIA TRẬN ĐẤU</Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default DetailRoom;
const { width, height } = Dimensions.get('screen');
const startWidth = 360;
const styles = StyleSheet.create({
  container: { height: height, width: width },
  headerDetailMatches: {
    height: 50,
    flexDirection: 'row',
    borderWidth: 0.5,
  },
  titleDetailMatches: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ' 85%',
  },
  txtTitle: {
    fontSize: Font.title_child2,
    fontWeight: 'bold',
  },
  image: {
    margin: (1 / startWidth) * width,
    width: width - (1 / startWidth) * width * 2,
    height: 550,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backgroundDetailMatches: {
    height: 550,
    width: width,
    flex: 1,
  },
  nameMatches: {
    width: width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNameMatches: {
    fontSize: Font.title_child,
    fontWeight: 'bold',
  },
  titleListTeam: {
    height: 40,
    justifyContent: 'center',
  },
  txtTitleListTeam: {
    fontSize: Font.title_child3,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  listPlayer: {
    width: width - 10,
    height: 100,
    borderWidth: 0.5,
    borderTopColor: Color.txtLevel2,
    borderBottomColor: Color.txtLevel2,
    margin: 5,
  },
  viewScroll: {
    marginBottom: 100,
  },
  informationMatch: {
    width: width,
    marginTop: 20,
  },
  titleInformation: {
    width: width,
    height: 40,
  },
  informationDetail: {
    width: width,
  },
  itemDetail: {
    width: '100%',
    height: 40,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtDetail: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    flex: 2.5,
  },
  txtValueDetail: {
    fontSize: Font.font_description,
    color: Color.txtLevel1,
    flex: 6.8,
  },
  iconDetail: {
    flex: 0.7,
    fontSize: 18,
    color: Color.primary,
  },
  descriptionDetail: {
    marginLeft: 20,
    marginTop: 5,
  },
  txtTitleDescription: {
    fontSize: 18,
  },
  txtDescription: {
    fontSize: Font.font_description,
    marginTop: 5,
  },
  order: {
    width: width,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOrder: {
    width: '80%',
    height: 40,
    backgroundColor: Color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  txtBtnOrder: {
    fontSize: 16,
    fontWeight: '700',
  },
});
