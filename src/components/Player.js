import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Star from '../components/Star';
import { pushScreen } from '../navigation/pushScreen';
const Player = (props) => {
  const users = props.items;
  const user = () => {
    pushScreen(props.idComponent, 'User', users?.id, 'User', false, '', '');
  };
  return (
    <TouchableOpacity style={styles.player} onPress={user}>
      <View style={styles.header}>
        <Image source={props.image} style={styles.imageProfile} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.txtNamePlayer}>{users?.full_name}</Text>
        <Text style={styles.txtNamePlayer}>{users?.position_play}</Text>
        <View style={styles.rating}>
          <Star star={users?.skill_rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Player;
const styles = StyleSheet.create({
  player: {
    height: 99,
    width: 80,
    flex: 1,
    marginLeft: 2.5,
    marginRight: 2.5,
    borderWidth: 0.5,
    borderColor: '#708090',
    backgroundColor: '#fffafa',
    borderRadius: 4,
    marginTop: 2,
    marginBottom: 2,
  },
  header: {
    flex: 1,
  },
  imageProfile: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  bottom: {
    flex: 1,
  },
  txtNamePlayer: {
    fontSize: 9,
    textAlign: 'center',
    marginTop: 1,
    fontWeight: '700',
    flex: 1,
  },
  rating: {
    width: '100%',
    flex: 2,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
