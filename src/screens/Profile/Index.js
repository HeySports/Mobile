import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Color from '../../themes/colors';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Font from '../../themes/font';
import avatar from '../../image/thanh.jpg';
import Title from '../../components/TitleView';
import ItemRoom from '../../components/ItemRoom';
import { pushScreen } from '../../navigation/pushScreen';
import { useSelector, useDispatch } from 'react-redux';
import Star from '../../components/Star';
import ProfileAction from '../../redux/ProfileRedux/actions';
const Profile = (props) => {
  var user = [];
  var histories = [false];
  const profileStore = useSelector((state) => state.profile);
  if (profileStore.responseProfile) {
    user = profileStore.responseProfile;
  }
  if (profileStore.responseHistories !== null) {
    histories = profileStore.responseHistories;
  }
  const settingProfile = () => {
    pushScreen(props.componentId, 'Setting', '', 'Setting', false, '', '');
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProfileAction.userGetHistories());
  }, [dispatch]);

  const btnprofile = (icon, title, functionOnPress) => {
    return (
      <TouchableOpacity style={styles.btnContent} onPress={() => functionOnPress()}>
        <Icons name={icon} style={styles.iconContent} />
        <Text style={styles.txtContent}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const handleInfomationBtn = () => {
    alert('Info');
  };
  const handlefindMatchesBtn = () => {
    alert('find matches');
  };
  const handleCreateNewTeam = () => {
    alert('create Team');
  };
  return (
    <View style={styles.container}>
      {profileStore.loadingProfile ? (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color={Color.primary} />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.avtProfile} source={avatar} />
            <View style={styles.headerIcon}>
              <TouchableOpacity style={styles.btnHeader}>
                <Icons name="camera" style={styles.iconHeader} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnHeader} onPress={settingProfile}>
                <Icons name="cog" style={styles.iconHeader} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.information}>
            <View style={styles.nameProfile}>
              <Text style={styles.txtNameProfile}>{user.full_name && user.full_name}</Text>
              <View style={styles.backgroundIcon}>
                <Star star={user.skill_rating && user.skill_rating} />
              </View>
            </View>
            <ScrollView style={styles.content}>
              <View style={styles.informations}>
                {btnprofile('info-circle', 'Thông Tin', handleInfomationBtn)}
                {btnprofile('search', 'Tìm Trận', handleInfomationBtn)}
                {btnprofile('plus-circle', 'Tạo Trận', handleCreateNewTeam)}
              </View>
              <Title title="Trận đấu sắp tới" checkTitle={true} />
              <ScrollView style={styles.listScroll} horizontal={true}>
                <ItemRoom />
                <ItemRoom />
                <ItemRoom />
              </ScrollView>
              <Title title="Lịch sử thi đấu" checkTitle={true} />
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};
export default Profile;
const { width, height } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  containerLoading: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width,
    height: height,
    flex: 1,
  },
  header: {
    flex: 0.21,
  },
  iconHeader: {
    fontSize: 20,
  },
  avtProfile: {
    height: (150 / startHeight) * height,
    width: width,
    position: 'absolute',
  },
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 100,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  information: {
    flex: 1,
  },
  nameProfile: {
    height: 50,
    width: (160 / startWidth) * width,
    marginLeft: (10 / startWidth) * width,
    alignItems: 'center',
  },
  txtNameProfile: {
    height: 30,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    fontSize: Font.title_child4,
    fontWeight: '700',
    lineHeight: 30,
    borderWidth: 2,
    borderColor: '#f8f8ff',
    borderRadius: 4,
  },
  backgroundIcon: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  iconStart: {
    color: Color.icon,
    fontSize: Font.title_child4,
  },
  informations: {
    flexDirection: 'row',
  },
  btnContent: {
    height: 80,
    margin: (20 / startWidth) * width,
    marginLeft: (10 / startWidth) * width,
    marginRight: (10 / startWidth) * width,
    width: (100 / startWidth) * width,
    borderWidth: 1,
    borderColor: Color.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContent: {
    fontSize: 20,
    color: Color.primary,
  },
  txtContent: {
    fontSize: Font.font_description,
  },
  listScroll: {
    marginTop: 10,
    height: (150 / startWidth) * startWidth,
  },
});
