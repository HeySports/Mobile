import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Colors, Fonts, ScreenSize } from '../../../themes';
import TeamActions from '../../../redux/TeamRedux/actions';
import Images from '../../../image';
import { formatDate } from '../../../utils/Tools';
import Star from '../../../components/Star';
import Player from '../../../components/team/PlayerTeam';
import Comment from '../../../components/team/comment';
import { pushScreen } from '../../../navigation/pushScreen';
import ItemOffer from '../../../components/team/ItemOffer';
import messaging from '@react-native-firebase/messaging';
import Loading from '../../../components/Load';
const Team = ({ componentId }) => {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);
  const [information, setInformation] = useState(true);
  const [comment, setComment] = useState(false);
  const [members, setMembers] = useState(false);
  const [offer, setOffer] = useState(false);
  const onInfo = () => {
    setInformation(true);
    setComment(false);
    setMembers(false);
    setOffer(false);
  };
  const onMembers = () => {
    setInformation(false);
    setComment(false);
    setMembers(true);
    setOffer(false);
  };
  const onComment = () => {
    setInformation(false);
    setComment(true);
    setMembers(false);
    setOffer(false);
  };
  const onOffer = () => {
    setInformation(false);
    setComment(false);
    setMembers(false);
    setOffer(true);
  };
  useEffect(() => {
    onGetTeam();
  }, [onGetTeam]);
  const onGetTeam = useCallback(async () => {
    dispatch(TeamActions.myDetailTeam());
  }, [dispatch]);

  const ItemMenu = ({ icon, colorIcon, colorButton, text, onPress }) => {
    return (
      <TouchableOpacity
        style={[styles.btnMenu, { backgroundColor: colorButton }]}
        onPress={onPress}
      >
        <Icons name={icon} style={[styles.iconMenu, { color: colorIcon }]} />
        {text && <Text style={[styles.txtMenu, { color: colorIcon }]}>{text}</Text>}
      </TouchableOpacity>
    );
  };
  const onRating = () => {
    if (team?.myTeam?.team?.rating > 4) {
      return 'Đội Mạnh';
    } else if (team?.myTeam?.team?.rating > 4) {
      return 'Đá Được';
    } else {
      return 'Đội Yếu';
    }
  };
  const commentScreen = () => {
    pushScreen(
      'TeamOffer',
      'CommentTeam',
      team?.teamDetail?.commentOfTeam,
      '',
      false,
      false,
      false,
      false,
    );
  };
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      if (remoteMessage?.notification?.title === 'Chấp nhận vào đội') {
        onGetTeam();
      }
    });
    return unsubscribe;
  }, [dispatch, onGetTeam]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerDetailTeam}>
        <View style={styles.iconHeader}>
          <TouchableOpacity
            style={styles.btnBackHeader}
            onPress={() => Navigation.popTo('Profile')}
          >
            <Icons name="caret-left" style={styles.iconBack} size={15} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleHeader}>
          <Text style={styles.txtTitle}>CHI TIẾT ĐỘI BÓNG</Text>
        </View>
      </View>
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.bodyHeaderTeam}>
          <Image
            source={team?.myTeam?.team?.avatar ? { uri: team?.myTeam?.team?.avatar } : Images.vn}
            style={styles.imgTeam}
          />
          <View style={styles.teamDetail}>
            <Text style={styles.txtNameTeam} numberOfLines={2}>
              {team?.myTeam?.team?.name
                ? team?.myTeam?.team?.name?.toUpperCase()
                : 'Name Team'?.toUpperCase()}
            </Text>
            <Star star={team?.myTeam?.team.rating ? team?.myTeam?.team.rating : 1} size={18} />
          </View>
        </View>
        <View style={styles.containerMenu}>
          <ItemMenu
            onPress={onInfo}
            icon="info-circle"
            colorButton={information ? Colors.secondary : null}
            colorIcon={information ? Colors.primary : Colors.txtLevel3}
          />
          <ItemMenu
            icon="users"
            text={
              team?.myTeam?.userOfTeam?.length
                ? '( ' + team?.myTeam?.userOfTeam?.length + ')'
                : '(0)'
            }
            onPress={onMembers}
            colorButton={members ? Colors.secondary : null}
            colorIcon={members ? Colors.primary : Colors.txtLevel3}
          />
          <ItemMenu
            icon="comments"
            text={
              team?.myTeam?.commentOfTeam?.length
                ? '( ' + team?.myTeam?.commentOfTeam?.length + ')'
                : '(0)'
            }
            onPress={onComment}
            colorButton={comment ? Colors.secondary : null}
            colorIcon={comment ? Colors.primary : Colors.txtLevel3}
          />
          <ItemMenu
            icon="gem"
            text={
              team?.listOfferTeam?.data?.length
                ? '( ' + team?.listOfferTeam?.data?.length + ' )'
                : '(0)'
            }
            onPress={onOffer}
            colorButton={offer ? Colors.secondary : null}
            colorIcon={offer ? Colors.primary : Colors.txtLevel3}
          />
        </View>
        <View style={styles.bodyTeam}>
          {information && (
            <View style={styles.containerInformation}>
              <Text style={styles.txtTitleInfo}>Thông Tin Đội Bóng</Text>
              <View style={styles.itemInformation}>
                <Icons name="map-marked-alt" style={styles.iconItemInfo} />
                <Text style={styles.txtItemInfo}>{team?.myTeam?.team?.address}</Text>
              </View>
              <View style={styles.itemInformation}>
                <Icons name="calendar-alt" style={[styles.iconItemInfo, [{ fontSize: 18 }]]} />
                <Text style={styles.txtItemInfo}>{formatDate(team?.myTeam?.team?.created_at)}</Text>
              </View>
              <View style={styles.itemInformation}>
                <Icons name="gem" style={[styles.iconItemInfo, [{ fontSize: 18 }]]} />
                <Text style={styles.txtItemInfo}>{onRating()}</Text>
              </View>
              <View style={styles.description}>
                <Text style={styles.txtItemInfo}>{team?.myTeam?.team?.description}</Text>
              </View>
            </View>
          )}
          {members && (
            <View style={styles.containerMemberTeam}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={team?.myTeam?.userOfTeam}
                renderItem={({ item, index }) => (
                  <Player key={index} player={item} componentId={componentId} />
                )}
              />
            </View>
          )}
          {comment && (
            <View style={styles.containerComment}>
              {team?.myTeam?.commentOfTeam?.slice(0, 2).map((item, index) => {
                return <Comment comment={item} key={index} />;
              })}
              <View style={styles.comment}>
                {team?.myTeam?.commentOfTeam?.length >= 3 && (
                  <Text style={styles.viewMoreRating} onPress={commentScreen}>
                    Xem Thêm Đánh Giá
                  </Text>
                )}
              </View>
            </View>
          )}
          {offer && (
            <View style={styles.offerList}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={team?.listOfferTeam?.data}
                renderItem={({ item, index }) => <ItemOffer key={index} offer={item} />}
              />
            </View>
          )}
        </View>
      </ScrollView>
      {team?.loading && <Loading />}
    </SafeAreaView>
  );
};

export default Team;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewMoreRating: {
    fontSize: Fonts.font_description,
    color: Colors.waterBlueTwo,
    textDecorationLine: 'underline',
  },
  containerComment: {
    padding: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  comment: {
    marginTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerDetailTeam: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.txtLevel3,
  },
  iconHeader: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    height: '100%',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBackHeader: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    fontSize: 20,
    color: Colors.greyishBrown,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  bodyContainer: {
    flex: 1,
  },
  bodyHeaderTeam: {
    height: 250,
  },
  imgTeam: {
    height: '100%',
    width: '100%',
  },
  containerMenu: {
    height: 40,
    margin: 10,
    backgroundColor: Colors.shadow,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
  },
  btnMenu: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  iconMenu: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtMenu: {
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 3,
  },
  containerInformation: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  txtTitleInfo: {
    fontSize: Fonts.title_child2,
    fontWeight: '700',
    marginBottom: 10,
  },
  itemInformation: {
    flexDirection: 'row',
    paddingLeft: 5,
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconItemInfo: {
    fontSize: Fonts.font_description,
    color: Colors.primary,
  },
  txtItemInfo: {
    fontSize: Fonts.font_description,
    marginLeft: 15,
    color: Colors.greyishBrown,
  },
  description: {
    padding: 5,
    paddingTop: 10,
  },
  teamDetail: {
    position: 'absolute',
    left: 10,
    bottom: 20,
  },
  txtNameTeam: {
    fontSize: Fonts.title_child,
    fontWeight: 'bold',
  },
  containerMemberTeam: {
    paddingTop: 10,
    width: ScreenSize.Screen_Width,
  },
  offerList: {
    padding: 20,
  },
});
