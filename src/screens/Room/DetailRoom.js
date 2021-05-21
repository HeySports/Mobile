import React, { useEffect, useState, useCallback } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Font from '../../themes/font';
import Color from '../../themes/colors';
import { useDispatch, useSelector } from 'react-redux';
import Back from '../../components/Back';
import { goBack } from '../../navigation/pushScreen';
import sanbong from '../../image/sanbong.jpg';
import Field11 from '../../components/Field11';
import Field5 from '../../components/Field5';
import Field7 from '../../components/Field7';
import Loading from '../../components/Loading';
import profile from '../../image/thanh.jpg';
import Player from '../../components/Player';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModelNotification from '../../components/modelNotification';
import moment from 'moment';
const DetailRoom = (props) => {
  var listData = useSelector((state) => state.matches?.responseMatchFindMember);
  const [room, setRoom] = useState([]);
  const [id] = useState(props.data);
  const [checkUser, setCheckUser] = useState(false);
  const [checkShowModel, setCheckShowModel] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  var typeField = false;
  if (room) {
    if (room?.match?.type_field === 5) {
      typeField = <Field5 />;
    } else if (room?.match?.type_field === 7) {
      typeField = <Field7 />;
    } else {
      typeField = <Field11 />;
    }
  }

  useEffect(() => {
    handleGetListData();
    if (room) {
      setTimeout(function () {
        setLoading(false);
      }, 250);
    }
  }, [handleGetListData, room]);

  const handleGetListData = useCallback(async () => {
    const data = await listData;
    if (data) {
      data.forEach((element) => {
        if (element?.match?.id === id) {
          setRoom(element);
        }
      });
    }
  }, [listData, id]);

  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const dataMatches = [
    {
      icon: 'user',
      title: 'Người Tạo: ',
      description: room?.team_a?.members?.[0]?.full_name,
    },
    {
      icon: 'volleyball-ball',
      title: 'Sân Bóng',
      description: room?.field_play ? room?.field_play?.[0]?.name : room?.match?.field_name,
    },
    {
      icon: 'i-cursor',
      title: 'Loại Sân',
      description: 'Sân ' + room?.match?.type_field + ' Người',
    },
    {
      icon: 'map-marker-alt',
      title: 'Địa Chỉ',
      description: room?.field_play ? room?.field_play?.[0]?.address : room?.match?.address,
    },
    {
      icon: 'clock',
      title: 'Thời Gian',
      description: moment(room?.match?.start_play).format('hh:mm - DD/MM/YYYY'),
    },
    {
      icon: 'map-marker-alt',
      title: 'Giá sân',
      description: room?.match?.price ? room?.match?.price + ' VND' : 'FREE',
    },
    {
      icon: 'balance-scale-right',
      title: 'Tỷ Lệ',
      description: room?.match?.price
        ? 'Phí chơi: ' + room?.match?.lose_pay + '  | ' + room?.match?.price + ' VND'
        : 'FREE',
    },
  ];

  var users = useSelector((state) => state.profile.responseProfile);
  const handleModel = () => {
    setCheckShowModel(false);
  };
  return (
    <View style={styles.container}>
      {loading && <Loading />}
      {checkShowModel && (
        <ModelNotification
          titleBtnLeft="Hủy Bỏ"
          titleBtnRight="Đặt Sân"
          checkModel={true}
          description={
            'Bạn chưa đủ cầu thủ để có thể đá sân ' +
            room?.match?.type_field +
            ' người. Bạn có muốn tiếp tục đặt sân không?'
          }
          title="Thông Báo"
          showModel={handleModel}
        />
      )}
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
              <Text style={styles.txtNameMatches}>{room?.match?.name_room}</Text>
            </View>
          </View>
          <View style={styles.ViewListTeam}>
            <View style={styles.titleListTeam}>
              <Text style={styles.txtTitleListTeam}>Cầu Thủ Tham Gia</Text>
            </View>
            <FlatList
              horizontal
              data={room?.team_a?.members}
              renderItem={({ item, index }) => (
                <Player key={index} image={profile} idComponent={props.componentId} items={item} />
              )}
            />
          </View>
          <View style={styles.informationMatch}>
            <View style={styles.titleInformation}>
              <Text style={styles.txtTitleListTeam}>Thông Tin Chi Tiết</Text>
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
                <Text style={styles.txtDescription} numberOfLines={5}>
                  {room?.match?.description}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.order}>
            {checkUser ? (
              <TouchableOpacity style={styles.btnOrder}>
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
    </View>
  );
};
export default DetailRoom;
const { width } = Dimensions.get('screen');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    flex: 1,
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
