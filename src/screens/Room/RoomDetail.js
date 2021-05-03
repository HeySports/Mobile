import React from 'react';
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
const RoomDetail = (props) => {
  const name = 'hà Nội FC';
  return (
    <SafeAreaView style={styles.container}>
      <TitleView title="CHI TIẾT KÈO ĐẤU" idComponent={props.componentId} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={sanbong} style={styles.image}>
          <View style={styles.teamA}>
            <View style={styles.imageTeam}>
              <Image source={logoTeam} style={styles.imageLogo} />
              <View style={styles.nameClub}>
                <Text style={styles.txtNameClub}>{name.toUpperCase()}</Text>
                <Star star={3} />
              </View>
            </View>
            <View style={styles.informationTeam}>
              <ItemTeam icon="phone" description="Liên lạc 0946613608" />
              <ItemTeam icon="users" description="Đội có 7 cầu" />
              <ItemTeam icon="anchor" description="Đã đá 8 trận" />
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.listPlayerTeamA}
                horizontal
              >
                <ItemUser image={image} />
                <ItemUser image={image} />
                <ItemUser image={image} />
                <ItemUser image={image} />
                <ItemUser image={image} />
                <ItemUser image={image} />
              </ScrollView>
              <View style={styles.status}>
                <Text style={styles.txtStatus} numberOfLines={3}>
                  Tìm đội yếu cực yếu, anh em dân văn phòng giao lưu lấy tý mồ hôi Tìm đội yếu cực
                  yếu, anh em dân văn phòng liao lưu lấy tý mồ hôiTìm đội yếu cực yếu, anh em dân
                  văn phòng giao lưu lấy tý mồ hôi.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.teamB}>
            <View style={styles.joinTeam}>
              <View style={styles.borderJoinTeam}>
                <TouchableOpacity style={styles.btnJoinTeam}>
                  <Text style={styles.txtBtnJoinTeam}>NHẬN KÈO</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <View style={styles.team}>
          <View style={styles.leftTeam}>
            <View style={styles.imageTeam}>
              <Image source={logoTeam} style={styles.imageLogo} />
              <View style={styles.nameClub}>
                <Text style={styles.txtNameClub}>{name.toUpperCase()}</Text>
              </View>
            </View>
            <View style={styles.informationTeam}>
              <ItemTeam icon="phone" description="Số điện thoạiz" />
              <ItemTeam icon="phone" description="Số điện thoạiz" />
              <ItemTeam icon="phone" description="Số điện thoạiz" />
              <ItemTeam icon="phone" description="Số điện thoạiz" />
            </View>
          </View>
          <View style={styles.rightTeam}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.listPlayerTeamB}>
              <ItemUser image={image} />
              <ItemUser image={image} />
              <ItemUser image={image} />
              <ItemUser image={image} />
              <ItemUser image={image} />
              <ItemUser image={image} />
            </ScrollView>
          </View>
        </View> */}
        </ImageBackground>
        <View style={styles.title}>
          <Text style={styles.txtTitle}>THÔNG TIN CHI TIẾT KÈO</Text>
        </View>
        <View style={styles.descriptionDetail}>
          <ItemTeam icon="building" description="Sân bóng duy tân" check={true} />
          <ItemTeam
            icon="map-marked-alt"
            description="101b Lê hữu trác, quận Sơn Trà, Đà Nẵng"
            check={true}
          />
          <ItemTeam icon="futbol" description="Sân 5 người" check={true} />
          <ItemTeam icon="phone" description="Liên lạc 0946613608" />
          <ItemTeam icon="phone" description="Liên lạc 0946613608" />
          <ItemTeam icon="phone" description="Liên lạc 0946613608" />
          <ItemTeam icon="phone" description="Liên lạc 0946613608" />
        </View>
      </ScrollView>
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
  image: {
    margin: 10,
    width: width - 20,
    height: 550,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  teamA: {
    flex: 2,
  },
  teamB: {
    flex: 1,
  },
  imageTeam: {
    height: '45%',
  },
  imageLogo: {
    height: 160,
    width: '100%',
  },
  nameClub: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  txtStatus: {
    fontSize: Font.font_description,
    color: Color.txtLevel2,
    lineHeight: 20,
  },
  joinTeam: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderJoinTeam: {
    width: 150,
    height: 150,
    backgroundColor: Color.backgroud,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnJoinTeam: {
    width: 120,
    height: 120,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
  },
  txtBtnJoinTeam: {
    fontSize: 20,
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
});
