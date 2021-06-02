import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TeamActions from '../../../redux/TeamRedux/actions';
import Loading from '../../../components/Load';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Colors, Fonts, ScreenSize } from '../../../themes';
import { Navigation } from 'react-native-navigation';
import Images from '../../../image';
import Star from '../../../components/Star';
const Detail = ({ data }) => {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);
  const user = useSelector((state) => state.profile.responseProfile);
  const [comment, setComment] = useState(false);
  const [information, setInformation] = useState(true);
  const [members, setMembers] = useState(false);

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

  return (
    <SafeAreaView style={styles.container}>
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

      {team?.loading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.bodyTeamDetail}>
          <View style={styles.bodyHeaderTeam}>
            <Image source={Images.vn} style={styles.imgTeam} />
            <View style={styles.teamDetail}>
              <Text style={styles.txtNameTeam} numberOfLines={2}>
                {team?.teamDetail?.name?.toUpperCase()}
              </Text>
              <Star star={team?.teamDetail?.rating} size={18} />
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
              label="Cầu (10)"
              onPress={onMembers}
              colorBtn={members ? Colors.secondary : null}
              colorIcon={members ? Colors.primary : Colors.secondary}
              colorText={members ? Colors.primary : Colors.secondary}
              fontWeight={members ? '700' : '400'}
            />
            <ItemMenu
              icon="comment-dots"
              label="Đánh Giá (10)"
              onPress={onComment}
              colorBtn={comment ? Colors.secondary : null}
              colorIcon={comment ? Colors.primary : Colors.secondary}
              colorText={comment ? Colors.primary : Colors.secondary}
              fontWeight={comment ? '700' : '400'}
            />
          </View>
          <Text>DetailTeam</Text>
        </ScrollView>
      )}
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
});
