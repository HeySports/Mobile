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
  Alert,
} from 'react-native';
import Font from '../../themes/font';
import Color from '../../themes/colors';
import { useDispatch, useSelector } from 'react-redux';
import Back from '../../components/Back';
import { goBack, pushScreen } from '../../navigation/pushScreen';
import sanbong from '../../image/sanbong.jpg';
import Field11 from '../../components/Field11';
import Field5 from '../../components/Field5';
import Field7 from '../../components/Field7';
import Loading from '../../components/Loading';
import profile from '../../image/thanh.jpg';
import Player from '../../components/Player';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModelJoinTeam from '../../components/JoinTeam/ModelJoinTeam';
import moment from 'moment';
import MatchActions from '../../redux/MatchesRedux/actions';
import ModelNotification from '../../components/JoinTeam/ModelJoinTeam';
import Load from '../../components/Load';

const DetailRoom = (props) => {
  var listData = useSelector((state) => state.matches?.responseMatchFindMember);
  var userActive = useSelector((state) => state?.profile?.responseProfile?.id);
  const matches = useSelector((state) => state.matches);
  // const [room, setRoom] = useState([]);
  const [id] = useState(props.data);
  const [model, setModel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState(1);
  const [modelNotification, setModelNotification] = useState(false);

  const dispatch = useDispatch();
  const room = listData?.find((item) => item?.match?.id === id);

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
    if (room) {
      setTimeout(function () {
        setLoading(false);
      }, 250);
    }
  }, [room]);
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
      description: moment(room?.match?.time_start_play).format('hh:mm - DD/MM/YYYY'),
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
  const handleModel = () => {
    setModel(false);
  };
  const handleOffer = () => {
    if (room?.team_a?.members?.[0]?.id === userActive) {
      Alert.alert('THÔNG BÁO', 'Trận đấu này là do bạn tạo bạn không thể nhận kèo này được !', [
        {
          text: 'Xác nhận',
          style: styles.btnAccept,
        },
      ]);
    } else {
      setModel(true);
    }
  };
  const handleSubmitOffer = async () => {
    setModel(false);
    let data = {
      id_match: id,
      numbers_user_added: members,
      description: description,
    };
    await dispatch(MatchActions.userJoinMatch(data));
    setTimeout(function () {
      setModelNotification(true);
    }, 2000);
  };
  const handleActionMatch = () => {
    setModelNotification(false);
    pushScreen('DetailRoom', 'Room', '', '', false, '', '');
  };
  return (
    <View style={styles.container}>
      {loading && <Loading />}
      {model && (
        <ModelJoinTeam
          handleModel={handleModel}
          labelBtn1="Trở Lại"
          labelBtn2="Tham gia"
          title="THÔNG TIN"
          checkModel={false}
          styleInput2={styles.txtInputDescription}
          multiline={true}
          numberOfLines={4}
          keyboardType="number-pad"
          placeholderTxt2="Mô tả"
          placeholderTxt1="Số cầu thủ bạn có"
          styleBodyModel={styles.bodyModelJoinTeam}
          handleAction={handleSubmitOffer}
          setValueText1={(text) => setMembers(text)}
          setValueText2={(text) => setDescription(text)}
        />
      )}
      {modelNotification && (
        <ModelNotification
          labelBtn1={matches?.error ? 'Xác Nhận' : 'Xác Nhận'}
          labelBtn2="Kèo Của Tôi"
          title={matches?.error ? 'THAM GIA THẤT BẠI' : 'THAM GIA THÀNH CÔNG'}
          checkModel={true}
          checkBtn={matches?.error ? false : true}
          description={
            matches?.error ? matches?.error?.data?.error : 'Bạn đã tham gia trận này thành công '
          }
          handleModel={matches?.error ? handleModel : handleModel}
          styleBodyModel={styles.styleModelNotification}
          styleDescriptionView={styles.descriptionNotification}
          handleAction={handleActionMatch}
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
            <TouchableOpacity style={styles.btnOrder} onPress={handleOffer}>
              <Text style={styles.txtBtnOrder}>THAM GIA TRẬN ĐẤU</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {matches?.loading && <Load />}
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
  btnAccept: {
    backgroundColor: Color.primary,
  },
  txtInputDescription: {
    height: 80,
    textAlignVertical: 'top',
  },
  bodyModelJoinTeam: {
    marginTop: '39%',
  },
  styleModelNotification: {
    height: 200,
  },
  descriptionNotification: {
    height: 100,
  },
});
