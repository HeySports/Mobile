import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts, ScreenSize } from '../../themes';
import Star from '../Star';
import { pushScreen } from '../../navigation/pushScreen';
import Images from '../../image/index';
const PlayerTeam = ({ player, componentId }) => {
  const user = () => {
    pushScreen(componentId, 'User', player?.id, 'User', false, '', '');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={user}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Image source={Images?.vn} style={styles.imageUser} />
        </View>
        <View style={styles.info}>
          <Text style={styles.txtInfoUser}>{'Tên: ' + player?.full_name} </Text>
          <Text style={styles.txtInfoUser} numberOfLines={1}>
            {'Địa Chỉ: ' + player?.address}{' '}
          </Text>
          <Text style={styles.txtInfoUser}>{'Độ Tuổi: ' + player?.age + ' Tuổi'} </Text>
          <Text style={styles.txtInfoUser}>{'Vị Trí Chơi: ' + player?.position_play} </Text>
        </View>
        <View style={styles.bottom}>
          <Star star={(player?.attitude_rating + player?.skill_rating) / 2} size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default PlayerTeam;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: Colors.white,
    marginLeft: 24,
    marginRight: 24,
    width: ScreenSize.Screen_Width - 48,
    height: 290,
    borderRadius: 6,
    shadowColor: Colors.greyishBrown,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  header: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUser: {
    width: '80%',
    height: '80%',
    borderRadius: 4,
  },
  info: {
    padding: 20,
    paddingTop: 0,
    flex: 1,
  },
  txtInfoUser: {
    fontSize: Fonts.font_description,
    fontWeight: 'bold',
    lineHeight: 25,
  },
  bottom: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
