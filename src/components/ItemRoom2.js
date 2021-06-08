import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import imageGroup from '../image/room.png';
import backG from '../image/bgItem.png';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../themes/colors';
import ImageAvatar from '../image/avatar.png';
import imgvs from '../image/vs.png';
import Star from '../components/Star';
import { pushScreen } from '../navigation/pushScreen';
import moment from 'moment';
import Font from '../themes/font';
const ItemRoom = (props) => {
  const room = props.room;
  const detailRoom = () => {
    pushScreen(props.idComponent, 'RoomDetail', room?.match?.id, 'RoomDetail', false, '', '');
  };
  var team_a = [];
  var team_b = [];
  // GET INFORMATION TEAM A
  if (room?.team_a?.members.length) {
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
      name_team: name_team ? name_team : 'Team A',
      rating_team: rating_team,
      team_members: team_members,
      time_histories: time_histories,
    };
    team_b.push(itemRoom);
  }
  const itemTeam = (checkTeam) => {
    return (
      <View>
        {checkTeam ? (
          <View style={styles.team}>
            <View style={styles.imageTeam}>
              <Image source={imageGroup} style={styles.image} />
              <View style={styles.memberOfTeam}>
                <Text style={styles.txtMemberOfTeam}>{team_a[0]?.team_members}</Text>
              </View>
            </View>
            <View style={styles.informationOfMatches}>
              <Text style={styles.txtNameTeam}>
                {props.room.team_a.members[0].team_name
                  ? props.room.team_a.members[0].team_name?.toUpperCase()
                  : props.room.team_a.members[0].full_name}
              </Text>
              <View style={styles.listIconStar}>
                <Star star={team_a[0]?.rating_team} />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.team}>
            <View style={styles.imageTeam}>
              <Image source={imageGroup} style={styles.image} />
              <View style={styles.memberOfTeam}>
                <Text style={styles.txtMemberOfTeam}>{team_b[0]?.team_members}</Text>
              </View>
            </View>
            <View style={styles.informationOfMatches}>
              <Text style={styles.txtNameTeam}>
                {props.room.team_a.members[0].team_name
                  ? props.room.team_a.members[0].team_name?.toUpperCase()
                  : props.room.team_a.members[0].full_name}
              </Text>
              <View style={styles.listIconStar}>
                <Star star={team_b[0]?.rating_team} />
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  const team = () => {
    return (
      <View style={styles.team}>
        <View style={styles.imageTeam}>
          <Image source={ImageAvatar} style={styles.imgWaiting} />
        </View>
        <View style={styles.informatch}>
          <Text style={styles.txtInformatch}>Đang đợi...</Text>
        </View>
      </View>
    );
  };
  return (
    <TouchableOpacity onPress={detailRoom} style={styles.room}>
      <View style={styles.container}>
        <View style={styles.headerRoom}>
          <Text style={styles.nameRoom}>{room?.match?.name_room?.toUpperCase()}</Text>
        </View>
        <View style={styles.teamInfo}>
          {room?.team_a?.matches_number ? itemTeam(true) : team()}
          <View style={styles.iconMatch}>
            <Image source={imgvs} style={styles.imgVs} />
          </View>
          {room?.team_b?.matches_number ? itemTeam(false) : team()}
        </View>

        <View style={styles.bottomRoom}>
          <View style={styles.itemBottom}>
            <View style={styles.icon}>
              <Icon name="futbol" style={styles.styleIcon} />
            </View>
            <View style={styles.txtDescription}>
              <Text style={styles.txt}>
                {room?.match.type_field
                  ? 'Đá sân ' + room?.match.type_field + ' người'
                  : 'Đá sân ' + 5 + ' người'}
              </Text>
            </View>
          </View>
          <View style={styles.itemBottom}>
            <View style={styles.icon}>
              <Icon name="map-marker-alt" style={styles.styleIcon} />
            </View>
            <View style={styles.txtDescription}>
              <Text style={styles.txt}>
                {room?.field_play
                  ? 'Sân bóng ' + room?.field_play?.[0]?.name
                  : room?.match?.address}
              </Text>
            </View>
          </View>
          <View style={styles.itemBottom}>
            <View style={styles.icon}>
              <Icon name="clock" style={styles.styleIcon} />
            </View>
            <View style={styles.txtDescription}>
              <Text style={styles.txt}>
                {moment(room?.match?.time_start_play).format('hh:mm - DD/MM/YYYY')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemRoom;
const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width: width - 120,
    height: 200,
    backgroundColor: Color.field,
    borderRadius: 4,
  },
  imgVs: {
    height: 60,
    width: 60,
    marginBottom: 10,
  },
  room: {
    width: width - 120,
    height: 200,
    marginLeft: 20,
    marginRight: 0,
    marginTop: 15,
    backgroundColor: Color.field,
    borderRadius: 5,
    marginEnd: 5,
    borderWidth: 0.5,
    borderColor: Color.primary,
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.06);',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerRoom: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameRoom: {
    fontSize: 14,
    color: Color.black,
    fontWeight: '700',
  },
  iconMatch: {
    width: 20,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFootball: {
    fontSize: 15,
  },
  teamInfo: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-around',
    marginTop: 10,
  },
  team: {
    width: (width - 120) / 2 - 60,
  },
  memberOfTeam: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  txtMemberOfTeam: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  imageTeam: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
  },
  informationOfMatches: {
    height: 25,
    width: '100%',
  },
  txtNameTeam: {
    width: '100%',
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 10,
  },
  listIconStar: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomRoom: {
    height: 30,
  },
  itemBottom: {
    flexDirection: 'row',
    height: 15,
  },
  icon: {
    height: 15,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDescription: {
    width: 135,
    justifyContent: 'center',
  },
  txt: {
    fontSize: 10,
    fontWeight: '700',
  },
  styleIcon: {
    fontSize: 11,
    color: Color.primary,
    fontWeight: '700',
  },
  informatch: {
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInformatch: {
    fontSize: 11,
    fontWeight: '700',
  },
  imgWaiting: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginBottom: 10,
  },
});
