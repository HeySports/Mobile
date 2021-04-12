import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import imageGroup from '../image/room.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../themes/colors';
import Font from '../themes/font';
import Star from '../components/Star';
import { pushScreen } from '../navigation/pushScreen';
const ItemRoom = (props) => {
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
        <Text style={styles.nameRoom}> {room && room.match.name_room}</Text>
        <View style={styles.groupRoom}>
          <View style={styles.logoGroup}>
            <View style={styles.txtViewNumber}>
              <Text style={styles.txtNumberMatches}> {team_a[0]?.team_members} </Text>
            </View>
            <Image source={imageGroup} style={styles.imageLogoGroup} />
          </View>
          <View style={styles.iconMatch}>
            <Icon name="futbol" style={styles.iconFootball} />
          </View>
          <View style={styles.logoGroup}>
            <View style={styles.txtViewNumber}>
              <Text style={styles.txtNumberMatches}>{team_b[0]?.team_members} </Text>
            </View>
            <Image source={imageGroup} style={styles.imageLogoGroup} />
          </View>
        </View>
        <View style={styles.descriptionRoom}>
          <View style={styles.descriptionDetail}>
            <Text style={styles.txtNameGroup}> {team_a[0]?.name_team}</Text>
            <View style={styles.listIcon}>
              <Star star={team_a[0]?.rating_team} />
            </View>
            <Text style={styles.txtNumberMatch}>Số trận tham gia</Text>
            <Text style={styles.txtNumberMatch}>{team_a[0]?.time_histories}</Text>
          </View>
          <View style={styles.space} />
          <View style={styles.descriptionDetail}>
            <Text style={styles.txtNameGroup}>{team_b[0]?.name_team}</Text>
            <View style={styles.listIcon}>
              <Star star={team_b[0]?.rating_team} />
            </View>
            <Text style={styles.txtNumberMatch}>Số trận tham gia</Text>
            <Text style={styles.txtNumberMatch}>{team_b[0]?.time_histories}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemRoom;
const { width } = Dimensions.get('window');
const startWidth = 360;
const styles = StyleSheet.create({
  room: {
    width: (160 / startWidth) * width,
    height: (120 / startWidth) * startWidth,
    backgroundColor: Color.backgroud,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 15,
    // eslint-disable-next-line no-dupe-keys
    backgroundColor: Color.field,
    borderRadius: 4,
  },
  nameRoom: {
    color: Color.white,
    fontSize: Font.font_description,
    fontWeight: '700',
    width: '100%',
    textAlign: 'center',
    marginTop: 2,
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
    fontSize: 7,
    fontWeight: '700',
    textAlign: 'center',
    color: Color.white,
  },
  logoGroup: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    bottom: 4,
  },
  iconMatch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFootball: {
    fontSize: Font.title_child2,
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
