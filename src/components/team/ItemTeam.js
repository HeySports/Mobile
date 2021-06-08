import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts, ScreenSize } from '../../themes';
import Images from '../../image/index';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Star from '../../components/Star';
import { pushScreen } from '../../navigation/pushScreen';
import { useDispatch } from 'react-redux';
import TeamActions from '../../redux/TeamRedux/actions';
const ItemTeam = ({ item }) => {
  const dispatch = useDispatch();
  const onDetailTeam = async () => {
    await dispatch(TeamActions.getTeamDetail(item?.id));
    await pushScreen('Home', 'TeamDetail', item?.id, false, false, false, false, false);
    await dispatch(TeamActions.userGetOfferTeam(item?.id));
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onDetailTeam}>
      <View style={styles.teamImage}>
        <Image source={item?.image ? { uri: item?.image } : Images.vn} style={styles.imgTeam} />
        <View style={styles.rating}>
          <Star star={item?.rating} size={14} />
        </View>
      </View>
      <View style={styles.bodyTeam}>
        <Text style={styles.nameTeam} numberOfLines={2} ellipsizeMode="tail">
          {item?.name}
        </Text>
        <View style={styles.address}>
          <Icons name="map-marked-alt" style={styles.iconAddress} />
          <Text style={styles.time} numberOfLines={1}>
            {item?.address}
          </Text>
        </View>
        <Text style={styles.txtDescription} numberOfLines={5}>
          {item?.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemTeam;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: ScreenSize.Screen_Width - 120,
    marginRight: 20,
    marginLeft: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    backgroundColor: Colors.item,
    shadowOffset: {
      width: 5,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 4,
  },
  teamImage: {
    flex: 1,
    borderRadius: 4,
  },
  bodyTeam: {
    flex: 1,
    padding: 5,
  },
  imgTeam: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  nameTeam: {
    fontWeight: '700',
    fontSize: Fonts.title_child3,
    width: '100%',
    textAlign: 'center',
    lineHeight: 25,
  },
  rating: {
    position: 'absolute',
    top: 5,
    left: 10,
  },
  address: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
  },
  iconAddress: {
    fontSize: 12,
    color: Colors.primary,
  },
  time: {
    marginLeft: 5,
    fontSize: 12,
    color: Colors.greyishBrown,
  },
  txtDescription: {
    fontSize: 13,
    color: Colors.greyishBrown,
  },
});
