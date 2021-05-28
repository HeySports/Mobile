import React from 'react';
import { StyleSheet, Image, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import pitch from '../image/duytan.jpg';
import Color from '../themes/colors';
import Font from '../themes/font';
import { pushScreen } from '../navigation/pushScreen';
const RoomItem = (props) => {
  const room = props.room;
  const detailRoom = () => {
    pushScreen(props.idComponent, 'DetailRoom', room?.match.id, 'DetailRoom', false, '', '');
  };
  return (
    <TouchableOpacity onPress={detailRoom}>
      <View style={[styles.container, props.styleHomepage && props.styleHomepage]}>
        {props.styleHomepage ? (
          console.log('no')
        ) : (
          <View style={styles.imageRoom}>
            <Image source={pitch} style={styles.imgRoom} />
          </View>
        )}

        <View style={styles.detailRoom}>
          <Text style={styles.titleDetail}>{room?.match.name_room}</Text>
          <View style={styles.row}>
            <View style={styles.viewIconDetail}>
              <Icon name="users" style={styles.iconDetail} />
            </View>
            <View style={styles.viewTxtDetail}>
              <Text style={styles.txtDetail}>
                {room?.team_a.members?.length ? room?.team_a.members[0]?.team_name : 'Đang chờ...'}
              </Text>
              <Text style={styles.txtVs}>Vs</Text>
              <Text style={styles.txtDetail}>
                {room?.team_b.members?.length ? room?.team_b.members[0]?.team_name : 'Đang chờ...'}
              </Text>
            </View>
          </View>
          <View style={[styles.row]}>
            <View style={styles.viewIconDetail}>
              <Icon name="people-arrows" style={styles.iconDetail} />
            </View>
            <View style={styles.viewTxtDetails}>
              <Text style={styles.txtDetails}>{room?.match?.type_field} người</Text>
              <Icon name="people-arrows" style={[styles.iconDetail, styles.iconLosePay]} />
              <Text style={[styles.txtDetails, styles.txtLosePay]}>{room?.match?.lose_pay}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.viewIconDetail}>
              <Icons name="soccer-field" style={styles.iconDetail} />
            </View>
            <View style={styles.viewTxtDetails}>
              <Text style={styles.txtDetails}>{room?.match.field}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.viewIconDetail}>
              <Icon name="map-marker-alt" style={styles.iconDetail} />
            </View>
            <View style={styles.viewTxtDetails}>
              <Text style={styles.txtDetails}>{room?.match?.address}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.viewIconDetail}>
              <Icon name="clock" style={styles.iconDetail} />
            </View>
            <View style={styles.viewTxtDetails}>
              <Text style={styles.txtDetailTime}>{room?.match.time_start_play}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RoomItem;
const { width } = Dimensions.get('window');
const startWidth = 360;
const styles = StyleSheet.create({
  iconLosePay: {
    marginLeft: 20,
  },
  txtLosePay: {
    marginLeft: 5,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    margin: (20 / startWidth) * width,
    backgroundColor: Color.field,
    height: 130,
    marginTop: 15,
    marginBottom: 0,
  },

  imageRoom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailRoom: {
    flex: 3,
    alignItems: 'center',
  },
  imgRoom: {
    width: '100%',
    height: '100%',
  },
  titleDetail: {
    fontSize: Font.font_description,
    fontWeight: '700',
    color: Color.white,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 2,
  },
  viewIconDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconDetail: {
    fontSize: 12,
    color: Color.primary,
  },
  viewTxtDetail: {
    flex: 4.5,
    flexDirection: 'row',
  },
  viewTxtDetails: {
    flex: 4.5,
    flexDirection: 'row',
  },
  txtDetail: {
    fontSize: 11,
    color: Color.greyishBrown,
    textAlign: 'center',
    fontWeight: '700',
  },
  txtDetails: {
    fontSize: 12,
    color: Color.greyishBrown,
    fontWeight: '700',
  },
  txtVs: {
    fontSize: 11,
    textAlign: 'center',
    color: '#AC090B',
    fontWeight: '700',
    marginLeft: '3%',
    marginRight: '3%',
  },
  txtDetailTime: {
    fontSize: 10,
    color: Color.greyishBrown,
    fontWeight: 'bold',
  },
});
