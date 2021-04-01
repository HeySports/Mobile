import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import pitch from '../image/duytan.jpg';
import Color from '../themes/colors';
import Font from '../themes/font';
import { pushScreen } from '../navigation/pushScreen';
const Pitch = (props) => {
  const detailPitch = () => {
    pushScreen(props.idProps, 'Detail', props.id, 'Detail', false, '', '');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={detailPitch}>
        <View style={styles.image}>
          <Image source={pitch} style={styles.imagePitch} />
        </View>
        <View>
          <View style={styles.detailPitch}>
            <View style={styles.title}>
              <Text style={styles.txtTitle}>{props.nameField}</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.iconDetailPitch}>
                <Icon name="map-marker-alt" style={styles.iconDetail} />
              </View>
              <View style={styles.txtDetailPitch}>
                <Text style={styles.txtDetail}>{props.address}</Text>
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.iconDetailPitch}>
                <Icon name="clock" style={styles.iconDetail} />
              </View>
              <View style={styles.txtDetailPitch}>
                <Text style={styles.txtDetail}>
                  {props.timeStart} - {props.timeEnd}
                </Text>
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
    width: (150 / startWidth) * width,
    height: 200,
    marginLeft: (20 / startWidth) * width,
    marginTop: 15,
    borderWidth: 1,
    borderColor: Color.txtLevel2,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '50%',
  },
  imagePitch: {
    width: '100%',
    height: '100%',
  },
  detailPitch: {
    width: '100%',
    height: '50%',
  },
  title: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },
  txtTitle: {
    fontSize: Font.title_child4,
    fontWeight: '700',
    color: Color.primary,
    textAlign: 'center',
  },
  content: {
    height: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  iconDetailPitch: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDetailPitch: {
    width: '80%',
    justifyContent: 'center',
  },
  iconDetail: {
    fontSize: 15,
    color: Color.primary,
  },
  txtDetail: {
    fontSize: 12,
    color: Color.primary,
  },
});
