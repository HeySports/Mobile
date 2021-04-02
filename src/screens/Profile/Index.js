import React from 'react';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Font from '../../themes/font';
import avatar from '../../image/avatars.jpg';
import Title from '../../components/TitleView';
import ItemRoom from '../../components/ItemRoom';
import Room from '../../components/Room';
import { pushScreen } from '../../navigation/pushScreen';
import { useSelector } from 'react-redux';
import Star from '../../components/Star';
import ProfileAction from '../../redux/ProfileRedux/actions';
const Profile = (props) => {
  const storeUser = useSelector((state) => state.profile);
  const settingProfile = () => {
    pushScreen(props.componentId, 'Setting', '', 'Setting', false, '', '');
  };

  return (
    <View style={styles.container}>
      {storeUser.loadingProfile ? (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color="#0000ff" />
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
              <Text style={styles.txtNameProfile}>{storeUser.responseProfile.full_name}</Text>
              <View style={styles.backgroundIcon}>
                <Star star={2.1} />
              </View>
            </View>
            <ScrollView style={styles.content}>
              <View style={styles.informations}>
                <TouchableOpacity style={styles.btnContent}>
                  <Icon name="information-outline" style={styles.iconContent} />
                  <Text style={styles.txtContent}>Thông tin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContent}>
                  <Icons name="search" style={styles.iconContent} />
                  <Text style={styles.txtContent}>Tìm đội</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContent}>
                  <Icon name="plus-circle-outline" style={styles.iconContent} />
                  <Text style={styles.txtContent}>Tạo trận</Text>
                </TouchableOpacity>
              </View>
              <Title title="Trận đấu sắp tới" checkTitle={true} />
              <ScrollView style={styles.listScroll} horizontal={true}>
                <ItemRoom />
                <ItemRoom />
                <ItemRoom />
              </ScrollView>
              <Title title="Lịch sử thi đấu" checkTitle={true} />
              <ScrollView style={styles.viewRoom}>
                <View style={styles.roomList} />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
              </ScrollView>
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
    flex: 1,
  },
  iconHeader: {
    fontSize: 20,
  },
  avtProfile: {
    height: (340 / startHeight) * height,
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
    borderRadius: 15,
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
