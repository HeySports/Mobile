import React, { useEffect, useState, useCallback, useLayoutEffect } from 'react';
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
  Alert,
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
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import moment from 'moment';
import ModelJoinTeam from '../../components/JoinTeam/ModelJoinTeam';
import ModelNotification from '../../components/JoinTeam/ModelJoinTeam';
import MatchActions from '../../redux/MatchesRedux/actions';
import Load from '../../components/Load';
import { Navigation } from 'react-native-navigation';
import { pushScreen } from '../../navigation/pushScreen';
import CountDown from 'react-native-countdown-component';
const RoomDetail = (props) => {
  const [id_room] = useState(props.data);
  const matches = useSelector((state) => state.matches);
  const team = useSelector((state) => state.team.team);
  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [model, setModel] = useState(false);
  const [nameTeam, setNameTeam] = useState('');
  const [description, setDescription] = useState('');
  const [modelNotification, setModelNotification] = useState(false);
  const [timeKeeper, setTimeKeeper] = useState(timeKeeper);
  useEffect(() => {
    handleRoom();
    if (room) {
      setTimeout(function () {
        setLoading(false);
      }, 250);
    }
  }, [handleRoom, room]);
  useLayoutEffect(() => {
    const dateFormat = 'YYYY-MM-DD HH:mm:ss';
    // Get your start and end date/times
    const rightNow = moment().format(dateFormat);
    const thisTimeYesterday = moment(room?.match?.time_start_play).format(dateFormat);
    // pass in hours as the second parameter to the diff function
    var differenceInHours = moment(rightNow).diff(thisTimeYesterday, 'seconds');
    setTimeKeeper(differenceInHours);
  }, [room]);
  var data = useSelector((state) => state.matches?.responseMatches);
  const handleRoom = useCallback(async () => {
    const dataList = await data;
    if (dataList) {
      dataList.forEach((element) => {
        if (element?.match?.id === id_room) {
          setRoom(element);
        }
      });
    }
  }, [data, id_room]);
  const dataRoom = {
    dataMatch: matches?.responseDetailMatches?.match,
    teamA: matches?.responseDetailMatches?.team_a,
    members_length: matches?.responseDetailMatches?.team_a?.members?.length,
    listMatch: matches?.responseMatches,
  };
  const userActive = useSelector((state) => state?.profile?.responseProfile?.id);
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
  const handleModel = () => {
    setModel(false);
    setModelNotification(false);
  };
  const handleSubmitOffer = async () => {
    let dataOffer = {
      id: id_room,
      team_name: nameTeam ? nameTeam : team?.[0]?.name,
      description: description,
    };
    await dispatch(MatchActions.userAcceptTeam(dataOffer));
    setTimeout(function () {
      setModelNotification(true);
    }, 2000);
  };
  const handleModelClose = () => {
    setModelNotification(false);
    Navigation.popTo('Home');
  };
  const handleActionMatch = () => {
    setModelNotification(false);
    pushScreen('RoomDetail', 'Room', '', '', false, '', '');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleView title="CHI TIẾT KÈO ĐẤU" idComponent={props.componentId} />
      {model && (
        <ModelJoinTeam
          handleModel={handleModel}
          labelBtn1="Trở Lại"
          labelBtn2="Nhận Kèo"
          title="THÔNG TIN"
          checkModel={false}
          styleInput2={styles.txtInputDescription}
          multiline={true}
          numberOfLines={4}
          placeholderTxt2="Mô tả"
          placeholderTxt1="Bạn chưa có đội trong app, nhập tên đội bạn"
          value1={team?.[0]?.name}
          styleBodyModel={styles.bodyModelJoinTeam}
          handleAction={handleSubmitOffer}
          setValueText1={(text) => setNameTeam(text)}
          setValueText2={(text) => setDescription(text)}
        />
      )}
      {modelNotification && (
        <ModelNotification
          labelBtn1={matches?.error ? 'Xác Nhận' : 'Màn Hình Chính'}
          labelBtn2="Kèo Của Tôi"
          title={matches?.error ? 'NHẬN KÈO THẤT BẠI' : 'NHẬN KÈO THÀNH CÔNG'}
          checkModel={true}
          checkBtn={matches?.error ? false : true}
          description={
            matches?.error
              ? matches?.error?.data?.error
              : 'Bạn đã nhận kèo thành công, Hãy xem thêm ở mục Kèo của tôi'
          }
          handleModel={matches?.error ? handleModel : handleModelClose}
          styleBodyModel={styles.styleModelNotification}
          styleDescriptionView={styles.descriptionNotification}
          handleAction={handleActionMatch}
        />
      )}
      {loading && <Loading />}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.containerDetail}>
        <ImageBackground source={sanbong} style={styles.image}>
          <View style={styles.teamA}>
            <View style={styles.imageTeam}>
              <Image source={logoTeam} style={styles.imageLogo} />
              <View style={styles.timer}>
                {timeKeeper !== 0 && (
                  <CountDown
                    until={timeKeeper}
                    onFinish={() => alert('finished')}
                    onPress={() => alert('hello')}
                    size={15}
                    digitStyle={styles.itemTimer}
                    digitTxtStyle={styles.digitTxtStyle}
                    timeLabelStyle={styles.timeLabelStyle}
                    timeLabels={{ d: 'Ngày', h: 'Giờ', m: 'Phút', s: 'Giây' }}
                  />
                )}
              </View>
              <View style={styles.nameClub}>
                <Text style={styles.txtNameClub}>
                  {room?.team_a?.members?.[0]?.team_name
                    ? room?.team_a?.members?.[0]?.team_name?.toUpperCase()
                    : room?.match?.name_room}
                </Text>
                <Star star={3} />
              </View>
            </View>
            <View style={styles.informationTeam}>
              <ItemTeam
                icon="phone"
                description={
                  room?.team_a?.members?.[0]?.phone_numbers
                    ? 'Liên lạc: ' + room?.team_a?.members?.[0]?.phone_numbers
                    : 'Liên lạc: ' + '0946613608'
                }
              />
              <ItemTeam
                icon="anchor"
                description={'Đã đá:  ' + room?.team_a?.matches_number + ' trận'}
              />
              <ItemTeam
                icon="users"
                description={'Đội có ' + room?.team_a?.members?.length + ' cầu'}
              />
              <FlatList
                data={room?.team_a?.members}
                horizontal
                renderItem={({ item, index }) => (
                  <ItemUser items={item} key={index} image={image} />
                )}
                showsHorizontalScrollIndicator={false}
              />
              <View style={styles.status}>
                <Text style={styles.txtStatus} numberOfLines={3}>
                  {room?.match?.description}
                </Text>
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
              room?.field_play
                ? 'Sân bóng ' + room?.field_play?.[0]?.name
                : 'Sân bóng ' + room?.match?.field_name
            }
            check={true}
          />
          <ItemTeam
            icon="map-marked-alt"
            description={room?.field_play ? room?.field_play?.[0]?.address : room?.match?.address}
            check={true}
          />
          <ItemTeam
            icon="futbol"
            description={'Sân ' + room?.match?.type_field + ' người'}
            check={true}
          />
          <ItemTeam
            icon="clock"
            description={
              'Thời Gian: ' + moment(room?.match?.time_start_play).format('hh:mm - DD/MM/YYYY')
            }
            check={true}
          />
          <ItemTeam
            icon="hand-holding-usd"
            description={room?.match?.price ? 'Giá sân : ' + room?.match?.price + ' VND' : 'FREE'}
            check={true}
          />
          <ItemTeam
            icon="balance-scale-right"
            description={
              room?.match?.price
                ? 'Phí chơi: ' + room?.match?.lose_pay + '  | ' + room?.match?.price + ' VND'
                : 'FREE'
            }
            check={true}
          />
        </View>
        <View style={styles.bottomDetail}>
          <TouchableOpacity style={styles.btnBottom} onPress={handleOffer}>
            <Text style={styles.txtBtnBottom}>NHẬN KÈO</Text>
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
      {matches?.loading && <Load />}
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
    flex: 1,
  },
  imageTeam: {
    height: '50%',
  },
  imageLogo: {
    height: '100%',
    width: '100%',
  },
  nameClub: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
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
    height: 70,
  },
  txtStatus: {
    fontSize: Font.font_description,
    color: Color.txtLevel2,
    lineHeight: 20,
    marginTop: 5,
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
    borderRadius: 4,
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
    height: 170,
  },
  descriptionNotification: {
    height: 70,
  },
  timer: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  itemTimer: {
    backgroundColor: Color.primary,
  },
  timeLabelStyle: {
    color: Color.secondary,
    fontSize: 11,
    fontWeight: '700',
  },
  separatorStyle: {
    color: Color.secondary,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
