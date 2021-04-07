import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Star from '../components/Star';
import { pushScreen } from '../navigation/pushScreen';
const Player = (props) => {
  const user = () => {
    pushScreen(props.idComponent, 'User', props.id, 'User', false, '', '');
  };
  return (
    <TouchableOpacity style={styles.player} onPress={user}>
      <View style={styles.header}>
        <Image source={props.image} style={styles.imageProfile} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.txtNamePlayer}>{props.name}</Text>
        <Text style={styles.txtNamePlayer}>{props.position}</Text>
        <View style={styles.rating}>
          <Star star={props.rating} />
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
    marginLeft: 5,
    borderWidth: 0.5,
    borderColor: '#708090',
    backgroundColor: '#fffafa',
    borderRadius: 4,
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
