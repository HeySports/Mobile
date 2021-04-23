import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import imageGroup from '../image/room.png';
import imageWaiting from '../image/avatar.png';
import imageWaitingMember from '../image/player.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../themes/colors';
import Font from '../themes/font';
import Star from '../components/Star';
import { pushScreen } from '../navigation/pushScreen';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const HomeItemRoom = (props) => {
  console.log(props.room);
  const room = props.room;
  const detailRoom = () => {
    pushScreen(props.idComponent, 'DetailRoom', room.match.id, 'DetailRoom', false, '', '');
  };
  var team_a = [];
  var team_b = [];
  // GET INFORMATION TEAM A
  if (room?.team_a?.members.length > 0) {
    let rating_team = 0;
    let name_team = room.team_a.members[0]?.team_name;
    let team_members = room.team_a.members.length;
    let time_histories = room.team_a.matches_number;
    room.team_a.members.forEach((element) => {
      rating_team += Number(element.skill_rating);
      if (room.team_a.members.id === 0) {
        name_team = element.team_name;
      }
    });
    const itemRoom = {
      name_team: name_team,
      rating_team: rating_team,
      team_members: team_members,
      time_histories: time_histories,
    };
    team_a.push(itemRoom);
  } else {
    let rating_team = 0;
    let name_team = 'Team_A';
    let team_members = 0;
    let time_histories = 0;
    const itemRoom = {
      name_team: name_team,
      rating_team: rating_team,
      team_members: team_members,
      time_histories: time_histories,
    };
    team_a.push(itemRoom);
  }
  // TEAM B
  if (room?.team_b?.members.length > 0) {
    let rating_team = 0;
    let name_team = room.team_b.members[0]?.team_name;
    let team_members = room.team_b.members.length;
    let time_histories = room.team_b.matches_number;
    room.team_b.members.forEach((element) => {
      rating_team += Number(element.skill_rating);
      if (room.team_b.members.id === 0) {
        name_team = element.team_name;
      }
    });
    const itemRoom = {
      name_team: name_team,
      rating_team: rating_team,
      team_members: team_members,
      time_histories: time_histories,
    };
    team_b.push(itemRoom);
  } else {
    let rating_team = 0;
    let name_team = 'Team_B';
    let team_members = 0;
    let time_histories = 0;
    const itemRoom = {
      name_team: name_team,
      rating_team: rating_team,
      team_members: team_members,
      time_histories: time_histories,
    };
    team_b.push(itemRoom);
  }
  return (
    <TouchableOpacity onPress={detailRoom}>
      <View style={styles.room}>
        <View style={styles.flexRow}>
          <View style={styles.iconMatch}>
            <Icon name="futbol" style={styles.iconFootball} />
          </View>
            <Text style={[styles.txtNameGroup, {fontSize: 13}]}>
              {room.match.type_field +' vs '+ room.match.type_field + ' '}
            </Text>
            <Text style={[styles.txtNameGroup, {fontSize: 13}]}>
              từ 20:30 - 21-30
            </Text>
        </View>
        <View style={styles.flexRow}>
            <Text style={[styles.txtNameGroup, {fontSize: 13}]}>
              ngày 20-04-2021
            </Text> 
        </View>
        <View style={[styles.flexRow, {justifyContent: 'space-around', marginTop: 10}]}>
          <View style={styles.logoGroup}>
              <Image source={imageGroup} style={styles.imageLogoGroup} />
            </View>
            <View style={styles.logoGroup}>
              <Image source={props.isFindMember ?imageWaitingMember : imageWaiting} style={[styles.imageLogoGroup]} />
            </View>
        </View>
        <View style={[styles.flexRow, {justifyContent: 'space-around'}]}>
          <Text style={styles.txtNameGroup}> {team_a[0]?.name_team}</Text>
          <Text style={styles.txtNameGroup}>{!props.isFindMember ? ('Đang chờ...') : ('Thiếu ('+ (props.room.missing_members - 6)+'-'
          + props.room.missing_members +') cầu...')} </Text>
        </View>
        <View style={[styles.flexRow, {alignItems: 'center'}]}>
            <View  style={[styles.flexRow, {marginRight: 10}]}>
            <View style={styles.iconMatch}>
            <Icon name="futbol" style={[styles.iconFootball, {fontSize: 12}]} />
          </View>
               <Text style={styles.txtNumberMatch}>{team_a[0]?.time_histories}</Text>
            </View>
            <View style={[styles.listIcon, {marginRight: 10}]}>
              <Star star={team_a[0]?.rating_team} />
            </View>
            <Text style={styles.txtNumberMatch}>Phí: {room.match.lose_pay}</Text>
        </View>
        <View style={[styles.flexRow, {marginLeft: 10}]}>
            <View style={styles.iconMatch}>
              <Icons name="soccer-field" style={[styles.iconFootball, {fontSize: 12}]} />
            </View>
              <Text style={styles.txtNumberMatch}>{room?.match.field}</Text>
          </View>
          <View style={styles.flexRow}>
            <View style={[styles.iconMatch]}>
              <Icon name="map-marker-alt" style={[styles.iconFootball, {marginLeft: 5, fontSize: 12}]} />
            </View>
            <Text style={styles.txtNumberMatch}>{room?.match?.address}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeItemRoom;
const { width } = Dimensions.get('window');
const startWidth = 360;
const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 5,
     },
  room: {
    width: ( 190/ startWidth) * width,
    height: (240 / startWidth) * startWidth,
    backgroundColor: Color.backgroud,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 15,
    backgroundColor: Color.field,
    borderRadius: 4,
  },
  nameRoom: {
    color: Color.white,
    fontSize: Font.font_description,
    fontWeight: '700',
    width: '100%',
    marginTop: 2,
    marginLeft: 10,
    height: '15%',
  },
  groupRoom: {
    flexDirection: 'row',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  descriptionRoom: {
    flexDirection: 'row',
    flex: 1,
  },
  space: {
    flex: 1,
  },
  descriptionDetail: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNameGroup: {
    fontSize: 9,
    fontWeight: '700',
    textAlign: 'center',
  },
  listIcon: {
    flexDirection: 'row',
  },
  iconRating: {
    fontSize: 9,
    color: Color.icon,
  },
  txtNumberMatch: {
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    color: Color.white,
  },
  logoGroup: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 4,
  },
  iconMatch: {
    marginHorizontal:3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFootball: {
    fontSize: 15,
    color: Color.primary
  },
  imageLogoGroup: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  txtViewNumber: {
    backgroundColor: Color.primary,
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15 / 2,
    marginLeft: '5%',
  },
  txtNumberMatches: {
    fontSize: 12,
    fontWeight: '700',
    color: Color.white,
  },
});
