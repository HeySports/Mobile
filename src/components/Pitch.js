import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import pitch from '../image/duytan.jpg';
import Color from '../themes/colors';
import Font from '../themes/font';
import { pushScreen } from '../navigation/pushScreen';
import Star from './Star';
const Pitch = ({ item }) => {
  const detailPitch = () => {
    pushScreen('Home', 'Detail', item?.id, 'Detail', false, '', '');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={detailPitch}>
        <View style={styles.image}>
          <Image source={pitch} style={styles.imagePitch} />
          <View style={styles.rating}>
            <Star star={item?.rating} size={15} />
          </View>
        </View>
        <View>
          <View style={styles.detailPitch}>
            <View style={styles.title}>
              <Text style={styles.txtTitle}>{item?.name?.toUpperCase()}</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.iconDetailPitch}>
                <Icon name="map-marker-alt" style={styles.iconDetail} />
              </View>
              <View style={styles.txtDetailPitch}>
                <Text style={styles.txtDetail}>{item?.address}</Text>
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.iconDetailPitch}>
                <Icon name="database" style={styles.iconDetail} />
              </View>
              <View style={styles.txtDetailPitch}>
                <Text style={styles.txtDetail}>
                  {'Số lượng sân có: ' + item?.quantities_field + ' sân'}
                </Text>
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.iconDetailPitch}>
                <Icon name="clock" style={styles.iconDetail} />
              </View>
              <View style={styles.txtDetailPitch}>
                <Text style={styles.txtDetail}>5:00 am - 23:00 pm</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Pitch;
const { width } = Dimensions.get('window');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 250,
    marginLeft: (20 / startWidth) * width,
    marginRight: (20 / startWidth) * width,
    borderRadius: 4,
    shadowColor: '#000',
    backgroundColor: Color.item,
    shadowOffset: {
      width: 5,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: '100%',
    borderRadius: 4,
    height: '50%',
  },
  imagePitch: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  detailPitch: {
    width: '100%',
    height: '50%',
  },
  title: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  txtTitle: {
    fontSize: Font.title_child3,
    fontWeight: '700',
    color: Color.primary,
    textAlign: 'center',
  },
  content: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  iconDetailPitch: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  txtDetailPitch: {
    width: '85%',
    justifyContent: 'center',
    marginLeft: 8,
  },
  iconDetail: {
    fontSize: 15,
    color: Color.primary,
  },
  txtDetail: {
    fontSize: 12,
    color: Color.primary,
  },
  rating: {
    position: 'absolute',
    bottom: 5,
    left: 10,
  },
});
