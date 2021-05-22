import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { pushScreen } from '../../navigation/pushScreen';
import { Colors, Fonts } from '../../themes';
import Images from '../../image';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import moment from 'moment';
const Room = (props) => {
  const [option, setOption] = useState(true);
  const [roomList] = useState([]);
  const pushScreenToScreen = (screen, data) => {
    pushScreen(props.componentId, screen, data, screen, false, '', '');
  };
  const dataList = useSelector((state) => state.matches?.responseMatchFindMember);
  const user_id = useSelector((state) => state.profile?.responseProfile?.id);
  const listData = useSelector((state) => state.matches?.responseMatches);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (roomList) {
      setTimeout(function () {
        setLoading(false);
      }, 500);
    }
  }, [roomList]);
  roomList.sort(function (a, b) {
    return a.start_play - b.start_play;
  });
  dataList?.forEach((element) => {
    element?.team_a?.members.forEach((item) => {
      if (item?.id === user_id) {
        if (roomList?.includes(element)) {
        } else {
          roomList.push(element);
        }
      }
    });
    element?.team_b?.members.forEach((item) => {
      if (item?.id === user_id) {
        if (roomList?.includes(element)) {
        } else {
          roomList.push(element);
        }
      }
    });
  });
  listData?.forEach((element) => {
    element?.team_a?.members.forEach((item) => {
      if (item?.id === user_id) {
        if (roomList?.includes(element)) {
        } else {
          roomList.push(element);
        }
      }
    });
    element?.team_b?.members.forEach((item) => {
      if (item?.id === user_id) {
        if (roomList?.includes(element)) {
        } else {
          roomList.push(element);
        }
      }
    });
  });
  const ItemMenu = ({ btnColor, txtColor, label }) => {
    return (
      <TouchableOpacity
        style={[styles.btnOption, { backgroundColor: btnColor }]}
        onPress={handleOption}
      >
        <Text style={[styles.txtBtn, { color: txtColor }]}>{label}</Text>
      </TouchableOpacity>
    );
  };
  const handleOption = () => {
    setOption(!option);
  };
  const BtnCreateMatch = ({ title, icon, handleAction }) => {
    return (
      <TouchableOpacity style={styles.btnCreateMatches} onPress={handleAction}>
        <Icons name={icon} style={styles.iconCreateMatches} />
        <Text style={styles.txtTitleBtnCreate}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const DescriptionItem = ({ icon, title }) => {
    return (
      <View style={styles.containerDescription}>
        <View style={styles.viewIcon}>
          <Icons name={icon} style={styles.iconDescription} />
        </View>
        <Text style={styles.txtDescription}>{title}</Text>
      </View>
    );
  };
  const ItemRoom = ({ item }) => {
    return (
      <View style={styles.itemRoom}>
        <Image source={Images.filed} style={styles.filedImage} />
        <Text style={styles.txtNameRoom}>{item?.match?.name_room}</Text>
        <View style={styles.description}>
          <DescriptionItem
            icon="futbol"
            title={
              item?.field_play
                ? 'Sân bóng ' + item?.field_play?.[0]?.name
                : 'Sân bóng ' + item?.match?.field_name
            }
          />
          <DescriptionItem
            icon="map-marked"
            title={item?.field_play ? item?.field_play?.[0]?.address : item?.match?.address}
          />
          <DescriptionItem
            icon="clock"
            title={
              moment(item?.match?.time_start_play).format('hh') +
              ' giờ ' +
              moment(item?.match?.time_start_play).format('mm') +
              ' phút ngày ' +
              moment(item?.match?.time_start_play).format('DD-MM-YYYY')
            }
          />
          <DescriptionItem icon="gem" title={item?.match?.type ? 'Kèo Yếu' : 'Kèo Mạnh'} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtTitle}>TRẬN ĐẤU CỦA BẠN</Text>
      </View>
      <View style={styles.option}>
        <ItemMenu
          label="Kèo Sắp Tới"
          btnColor={option ? Colors.secondary : null}
          txtColor={option ? Colors.white : Colors.txtLevel3}
        />
        <ItemMenu
          label="Tạo Trận"
          btnColor={option ? null : Colors.secondary}
          txtColor={option ? Colors.txtLevel3 : Colors.white}
        />
      </View>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.bodyRoom}>
          {option ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={roomList}
              renderItem={({ item, index }) => <ItemRoom key={index} item={item} />}
            />
          ) : (
            <View style={styles.createMatch}>
              <BtnCreateMatch
                title="TÌM NGƯỜI CHƠI CÙNG"
                icon="users"
                handleAction={() => pushScreenToScreen('FindMember', true)}
              />
              <BtnCreateMatch
                title="TÌM ĐỐI THỦ"
                icon="users-cog"
                handleAction={() => pushScreenToScreen('FindMember', false)}
              />
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};
export default Room;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.txtLevel2,
    borderBottomWidth: 1,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  option: {
    marginTop: 20,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    backgroundColor: '#fff0f5',
    borderRadius: 19,
  },
  btnOption: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 19,
  },
  txtBtn: {
    fontSize: Fonts.title_child4,
    fontWeight: '700',
  },
  bodyRoom: {
    padding: 24,
    flex: 1,
    paddingBottom: 0,
  },
  createMatch: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  btnCreateMatches: {
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10%',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    backgroundColor: Colors.secondary,
  },
  iconCreateMatches: {
    fontSize: 100,
    color: Colors.white,
  },
  txtTitleBtnCreate: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.white,
  },
  itemRoom: {
    height: 300,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    backgroundColor: Colors.white,
    marginBottom: 15,
  },
  filedImage: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  description: {
    flex: 1,
    width: '100%',
  },
  containerDescription: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  iconDescription: {
    fontSize: 18,
    color: Colors.secondary,
  },
  txtDescription: {
    fontSize: Fonts.font_description,
    fontWeight: '700',
    marginLeft: 5,
    color: Colors.primary,
  },
  viewIcon: {
    width: '10%',
  },
  txtNameRoom: {
    position: 'absolute',
    top: '38%',
    left: 15,
    fontSize: 18,
    fontWeight: '700',
  },
});
