import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TeamActions from '../../../redux/TeamRedux/actions';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Colors, Fonts, ScreenSize } from '../../../themes';
import { Navigation } from 'react-native-navigation';
import Images from '../../../image';
import Star from '../../../components/Star';
import { formatDate } from '../../../utils/Tools';
import Player from '../../../components/team/PlayerTeam';
import Comment from '../../../components/team/comment';
import { Rating } from 'react-native-ratings';
import { pushScreen } from '../../../navigation/pushScreen';
import ModelOffer from '../../../components/JoinTeam/ModelJoinTeam';
import Load from '../../../components/Load';
import ModelNotification from '../../../components/JoinTeam/ModelJoinTeam';

const Detail = ({ data }) => {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);
  const user = useSelector((state) => state.profile.responseProfile);
  const [comment, setComment] = useState(false);
  const [information, setInformation] = useState(true);
  const [members, setMembers] = useState(false);
  const [joinTeam, setJoinTeam] = useState(false);
  const [comments, setComments] = useState(false);
  const [rating, setRating] = useState(0);
  const [textComment, setTextComment] = useState('');
  const [description, setDescription] = useState('');
  const [modelOffer, setModelOffer] = useState(false);
  const [error, setError] = useState(false);
  const [model, setModel] = useState(false);
  const listOfferOfTeam = team?.listOfferTeam?.data;
  function userExists(id_user) {
    return listOfferOfTeam?.some(function (el) {
      if (id_user === el?.id_user && el?.id_status === 1) {
        return true;
      } else {
        return false;
      }
    });
  }
  const onMembers = () => {
    setComment(false);
    setInformation(false);
    setMembers(true);
  };
  const onComment = () => {
    setComment(true);
    setInformation(false);
    setMembers(false);
  };
  const onInformation = () => {
    setComment(false);
    setInformation(true);
    setMembers(false);
  };
  const commentScreen = () => {
    pushScreen(
      'TeamDetail',
      'CommentTeam',
      team?.teamDetail?.commentOfTeam,
      '',
      false,
      false,
      false,
      false,
    );
  };
  const onCommentTeam = () => {
    if (userExists(user?.id)) {
      setError('Bạn đã đánh giá trước đây, bạn chỉ có thể sửa đánh giá');
      setModel(true);
    } else if (!textComment) {
      setError('Bạn chưa nhập nhận xét của bạn về đội này');
      setModel(true);
    } else if (!rating) {
      setError('Bạn chưa đánh giá cho đội này');
      setModel(true);
    } else {
      setError(false);
      setModel(false);
      const dataComment = {
        description: textComment,
        rating: rating,
        id_team: team?.teamDetail?.team?.id,
      };
      setTextComment('');
      setRating(0);
      dispatch(TeamActions.commentTeam(dataComment));
    }
  };
  function userExists(id) {
    return team?.teamDetail?.commentOfTeam?.some(function (el) {
      return el.id_user === id;
    });
  }
  const onOfferTeam = async () => {
    if (!description) {
      setError('Bạn chưa mô tả về bạn');
      setModel(true);
    } else {
      let dataOffer = {
        id_team: team?.teamDetail?.team?.id,
        description: description,
      };
      await dispatch(TeamActions.userOfferTeam(dataOffer));
      setModel(false);
      setDescription('');
      setTimeout(function () {
        setModelOffer(true);
      }, 2000);
    }
  };
  const ItemMenu = ({ label, icon, onPress, colorText, colorBtn, colorIcon, fontWeight }) => {
    return (
      <TouchableOpacity
        style={[styles.itemMenu, [{ backgroundColor: colorBtn ? colorBtn : null }]]}
        onPress={onPress}
      >
        <Icons name={icon} style={[styles.iconMenu, { color: colorIcon }]} />
        <Text style={[styles.txtBtn, { color: colorText, fontWeight: fontWeight }]}>{label}</Text>
      </TouchableOpacity>
    );
  };
  const handleModel = () => {
    setModelOffer(false);
  };
  const handleModelNotification = () => {
    setModel(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      {modelOffer && (
        <ModelOffer
          labelBtn1={team?.error ? 'Xác Nhận' : 'Xác Nhận'}
          labelBtn2="Kèo Của Tôi"
          title={team?.error ? 'THAM GIA THẤT BẠI' : 'THAM GIA THÀNH CÔNG'}
          checkModel={true}
          checkBtn={false}
          description={
            team?.error
              ? team?.error?.data?.message
              : 'Bạn đã gửi yêu cầu tham gia đội thành công, Bạn hãy đợi được chấp nhận từ đội này '
          }
          handleModel={team?.error ? handleModel : handleModel}
          styleBodyModel={styles.styleModelNotification}
          styleDescriptionView={styles.descriptionNotification}
        />
      )}
      {model && (
        <ModelNotification
          labelBtn1={'Xác Nhận'}
          title={'THÔNG BÁO'}
          checkModel={true}
          checkBtn={false}
          description={error}
          handleModel={handleModelNotification}
          styleBodyModel={styles.styleModelNotification}
          styleDescriptionView={styles.descriptionNotification}
        />
      )}
      <View style={styles.headerDetailTeam}>
        <View style={styles.iconHeader}>
          <TouchableOpacity style={styles.btnBackHeader} onPress={() => Navigation.popTo('Home')}>
            <Icons name="caret-left" style={styles.iconBack} size={15} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleHeader}>
          <Text style={styles.txtTitle}>CHI TIẾT ĐỘI BÓNG</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.bodyTeamDetail}>
        <View style={styles.bodyHeaderTeam}>
          <Image
            source={
              team?.teamDetail?.team?.image ? { uri: team?.teamDetail?.team?.image } : Images.vn
            }
            style={styles.imgTeam}
          />
          <View style={styles.teamDetail}>
            <Text style={styles.txtNameTeam} numberOfLines={2}>
              {team?.teamDetail?.team?.name
                ? team?.teamDetail?.team?.name?.toUpperCase()
                : 'Name Team'?.toUpperCase()}
            </Text>
            <Star
              star={team?.teamDetail?.team.rating ? team?.teamDetail?.team.rating : 1}
              size={18}
            />
          </View>
        </View>
        <View style={styles.menuTeam}>
          <ItemMenu
            icon="info-circle"
            label="Thông Tin"
            onPress={onInformation}
            colorBtn={information ? Colors.secondary : null}
            colorIcon={information ? Colors.primary : Colors.secondary}
            colorText={information ? Colors.primary : Colors.secondary}
            fontWeight={information ? '700' : '400'}
          />
          <ItemMenu
            icon="users"
            label={
              team?.teamDetail
                ? 'Cầu (' + team?.teamDetail?.userOfTeam?.length + ')'
                : 'Cầu (' + 0 + ')'
            }
            onPress={onMembers}
            colorBtn={members ? Colors.secondary : null}
            colorIcon={members ? Colors.primary : Colors.secondary}
            colorText={members ? Colors.primary : Colors.secondary}
            fontWeight={members ? '700' : '400'}
          />
          <ItemMenu
            icon="comment-dots"
            label={
              team?.teamDetail
                ? 'Đánh Giá(' + team?.teamDetail?.commentOfTeam?.length + ')'
                : 'Đánh Giá(' + 0 + ')'
            }
            onPress={onComment}
            colorBtn={comment ? Colors.secondary : null}
            colorIcon={comment ? Colors.primary : Colors.secondary}
            colorText={comment ? Colors.primary : Colors.secondary}
            fontWeight={comment ? '700' : '400'}
          />
        </View>
        <View style={styles.containerBody}>
          {team?.loadingOffer && <Load />}
          {information && (
            <View style={styles.containerInformation}>
              <Text style={styles.txtTitleInfo}>Thông Tin Đội Bóng</Text>
              <View style={styles.itemInformation}>
                <Icons name="map-marked-alt" style={styles.iconItemInfo} />
                <Text style={styles.txtItemInfo}>
                  {team?.teamDetail?.team?.address ? team?.teamDetail?.team?.address : 'address'}
                </Text>
              </View>
              <View style={styles.itemInformation}>
                <Icons name="calendar-alt" style={[styles.iconItemInfo, { fontSize: 18 }]} />
                <Text style={styles.txtItemInfo}>
                  {'Ngày Thành Lâp: ' +
                    formatDate(
                      team?.teamDetail?.team?.created_at
                        ? team?.teamDetail?.team?.created_at
                        : new Date(),
                    )}
                </Text>
              </View>
              <View style={styles.description}>
                <Text style={styles.txtItemInfo}>{team?.teamDetail?.team?.description}</Text>
              </View>
              {joinTeam && (
                <View style={styles.descriptionJoin}>
                  <TextInput
                    style={styles.txtInputJoinTeam}
                    numberOfLines={64}
                    placeholder="Mô tả về bạn"
                    onChangeText={(text) => setDescription(text)}
                  />
                </View>
              )}
              {userExists(user?.id) ? (
                <View style={styles.bottomItemInformation}>
                  <TouchableOpacity style={styles.btnJoinTeam}>
                    <Text style={styles.txtBtnJoinTeam}>ĐỢI PHẢN HỒI</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.bottomItemInformation}>
                  {joinTeam ? (
                    <TouchableOpacity style={styles.btnJoinTeam} onPress={onOfferTeam}>
                      <Text style={styles.txtBtnJoinTeam}>XÁC NHẬN</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity style={styles.btnJoinTeam} onPress={() => setJoinTeam(true)}>
                      <Text style={styles.txtBtnJoinTeam}>THAM GIA NGAY</Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          )}
          {members && (
            <View style={styles.containerMemberTeam}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={team?.teamDetail?.userOfTeam}
                renderItem={({ item, index }) => <Player key={index} player={item} />}
              />
            </View>
          )}
          {comment && (
            <View style={styles.containerComment}>
              {team?.teamDetail?.commentOfTeam?.slice(0, 2).map((item, index) => {
                return <Comment comment={item} key={index} />;
              })}
              <View style={styles.comment}>
                {comments
                  ? null
                  : team?.teamDetail?.commentOfTeam?.length >= 3 && (
                      <Text style={styles.viewMoreRating} onPress={commentScreen}>
                        Xem Thêm Đánh Giá
                      </Text>
                    )}
                {comments && (
                  <Rating
                    type="custom"
                    ratingColor={Colors.icon}
                    ratingBackgroundColor="#c8c7c8"
                    ratingCount={5}
                    imageSize={20}
                    style={styles.itemRating}
                    onFinishRating={setRating}
                  />
                )}
                {comments && (
                  <TextInput
                    style={styles.txtInputJoinTeam}
                    numberOfLines={6}
                    placeholder="Nhận xét của bạn !"
                    onChangeText={(text) => setTextComment(text)}
                  />
                )}
                {comments ? (
                  <TouchableOpacity style={styles.btnComment} onPress={onCommentTeam}>
                    <Text style={styles.txtBottom}>XÁC NHẬN</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.btnComment} onPress={() => setComments(true)}>
                    <Text style={styles.txtBottom}>ĐÁNH GIÁ</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      {team?.loading && <Load />}
    </SafeAreaView>
  );
};
export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  bodyTeamDetail: {
    flex: 1,
  },
  bodyHeaderTeam: {
    height: 250,
    width: ScreenSize.Screen_Width,
  },
  imgTeam: {
    height: '100%',
    width: '100%',
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
  menuTeam: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#F7F8F9',
    borderRadius: 20,
    margin: 10,
  },
  itemMenu: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
  },
  txtBtn: {
    fontSize: Fonts.font_description,
    marginLeft: 5,
  },
  iconMenu: {
    fontSize: Fonts.font_description,
  },
  containerBody: {
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
  bottomItemInformation: {
    height: 50,
    paddingLeft: 50,
    paddingRight: 50,
    position: 'absolute',
    bottom: 0,
    width: ScreenSize.Screen_Width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnJoinTeam: {
    backgroundColor: Colors.primary,
    width: '100%',
    height: 45,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInformation: {
    height: ScreenSize.Screen_Height / 2.6,
    paddingLeft: 20,
    paddingRight: 20,
    width: ScreenSize.Screen_Width,
  },
  txtBtnJoinTeam: {
    fontSize: Fonts.title_child4,
    fontWeight: '700',
    color: Colors.white,
  },
  descriptionJoin: {
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  txtInputJoinTeam: {
    height: 80,
    width: '100%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.txtLevel2,
    paddingLeft: 5,
    textAlignVertical: 'top',
  },
  containerMemberTeam: {
    paddingTop: 10,
    width: ScreenSize.Screen_Width,
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
  btnComment: {
    marginTop: 15,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    marginLeft: 15,
    marginRight: 15,
  },
  viewMoreRating: {
    fontSize: Fonts.font_description,
    color: Colors.waterBlueTwo,
    textDecorationLine: 'underline',
  },
  txtBottom: {
    fontSize: Fonts.font_description,
    fontWeight: 'bold',
    color: Colors.shadow,
  },
  itemRating: {
    marginBottom: 5,
  },
  styleModelNotification: {
    height: 180,
  },
  descriptionNotification: {
    height: 80,
  },
});
