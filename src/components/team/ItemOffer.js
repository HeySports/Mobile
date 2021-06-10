import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../../themes';
import TeamActions from '../../redux/TeamRedux/actions';
import Star from '../Star';
import { formatDate } from '../../utils/Tools';
import Images from '../../image';
import { useDispatch } from 'react-redux';
const ItemOffer = ({ offer }) => {
  const dispatch = useDispatch();
  const onAccept = () => {
    dispatch(TeamActions.acceptJoinTeam(offer?.id));
  };
  const onRemove = () => {
    dispatch(TeamActions.removeJoinTeam(offer?.id));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image source={Images.avatar} style={styles.imgAvatar} />
        </View>
        <View style={styles.rightHeader}>
          <Text style={styles.nameOffer}>{offer?.full_name}</Text>
          <View style={styles.rating}>
            <View style={styles.itemRating}>
              <Star star={(offer?.attitude_rating + offer?.skill_rating) / 2} />
            </View>
            <Text style={styles.date}>{formatDate(offer?.created_at)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>{offer?.description}</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={[styles.btnBottom, { backgroundColor: Colors.secondary }]}
          onPress={onAccept}
        >
          <Text style={styles.txtBtnBottom}>Chấp Nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnBottom, styles.btnRemove]} onPress={onRemove}>
          <Text style={styles.txtBtnBottom}>Từ Chối</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemOffer;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    height: 170,
    width: '100%',
    borderRadius: 4,
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftHeader: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgAvatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  rightHeader: {
    flex: 3,
  },
  body: {
    height: 60,
    paddingLeft: 20,
    paddingRight: 10,
  },
  bottom: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  btnBottom: {
    flex: 1,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  btnRemove: {
    backgroundColor: Colors.error,
    marginLeft: 10,
  },
  txtBtnBottom: {
    fontSize: Fonts.font_description,
    color: Colors.shadow,
    fontWeight: 'bold',
  },
  description: {
    fontSize: Fonts.font_description,
    fontWeight: '400',
    color: Colors.txtLevel3,
    lineHeight: 20,
  },
  rating: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: Colors.txtLevel2,
    marginRight: 10,
  },
  itemRating: {
    height: '100%',
    flex: 1,
  },
  nameOffer: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
