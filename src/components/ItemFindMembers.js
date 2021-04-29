import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Colors from '../themes/colors';
import Font from '../themes/font';
import img from '../image/team.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';
const ItemFindMembers = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.body}>
        <View style={styles.bodyRoom}>
          <View style={styles.imageRoom}>
            <Image source={img} style={styles.image} />
            <View style={styles.title}>
              <Text style={styles.txtTitle}>HA NOI FC</Text>
            </View>
          </View>
        </View>
        <View style={styles.bodyContent}>
          <ItemContent icon="futbol" title="5 người Vs 5 người" />
          <ItemContent icon="user" title="1/10 người" />
          <ItemContent icon="map-marker-alt" title="Sân Duy Tân" />
          <ItemContent icon="clock" title="10:30 ngày 20-11-2021" />
          <ItemContent icon="balance-scale-right" title="7/3 | 250.000 VND" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnJoinTeam}>
        <Text style={styles.txtBtnJoinTeam}>THAM GIA</Text>
      </TouchableOpacity>
    </View>
  );
};
const ItemContent = ({ icon, title }) => {
  return (
    <View style={styles.itemContent}>
      <View style={styles.leftItem}>
        <Icon name={icon} style={styles.icon} />
      </View>
      <View style={styles.rightItem}>
        <Text style={styles.txtContent}>{title}</Text>
      </View>
    </View>
  );
};
export default ItemFindMembers;
const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: width / 1.3,
    height: 300,
    borderRadius: 4,
    backgroundColor: '#fffaf0',
    borderWidth: 0.5,
    borderColor: Colors.primary,
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.06);',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  body: {
    height: 255,
  },
  imageRoom: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: '100%',
  },
  title: {
    position: 'absolute',
    top: 90,
    left: 10,
  },
  txtTitle: {
    fontSize: Font.title_child3,
    fontWeight: '700',
    color: '#000000',
  },
  btnJoinTeam: {
    height: 35,
    width: '80%',
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginLeft: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  txtBtnJoinTeam: {
    fontSize: 16,
    fontWeight: '700',
  },
  itemContent: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  leftItem: {
    flex: 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
    color: Colors.primary,
  },
  rightItem: {
    flex: 8,
    justifyContent: 'center',
  },
});
