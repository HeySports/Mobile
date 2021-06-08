import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Position from './ItemPosition';
const Field5 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemDetailMatches}>
        <View style={styles.nameTeam}>
          <Text style={styles.txtNameTeam}></Text>
        </View>
        <View style={styles.goalkeeper}>
          <Position position="GK" colors="#ff8c00" />
        </View>
        <View style={styles.defender}>
          <View style={styles.LB}>
            <Position position="RB" colors="#00fa9a" />
          </View>
          <View style={styles.LB}>
            <Position position="LB" colors="#00fa9a" />
          </View>
        </View>
        <View style={styles.middlePlayer}>
          <View style={styles.CM}>
            <Position position="CM" colors="#ffff00" />
          </View>
        </View>
        <View style={styles.striker}>
          <View style={styles.ST}>
            <Position position="ST" colors="#ff0000" />
          </View>
        </View>
      </View>
      <View style={styles.itemDetailMatches}>
        <View style={styles.nameTeam}>
          <Text style={styles.txtNameTeam}></Text>
        </View>
        <View style={styles.middlePlayer}>
          <View style={styles.CMP}>
            <Position position="CM" colors="#ffff00" />
          </View>
          <View style={styles.CMP}>
            <Position position="CM" colors="#ffff00" />
          </View>
        </View>
        <View style={styles.defender}>
          <View style={styles.LBP}>
            <Position position="LB" colors="#00fa9a" />
          </View>
          <View style={styles.LBP}>
            <Position position="RB" colors="#00fa9a" />
          </View>
        </View>
        <View style={styles.goalkeeper}>
          <Position position="GK" colors="#ff8c00" />
        </View>
      </View>
    </View>
  );
};

export default Field5;

const styles = StyleSheet.create({
  itemDetailMatches: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  container: {
    width: '100%',
    height: '100%',
  },
  goalkeeper: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defender: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
  },
  LB: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middlePlayer: {
    flexDirection: 'row',
    flex: 1.2,
    width: '100%',
  },
  CM: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  striker: {
    flexDirection: 'row',
    flex: 1,
  },
  LBP: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  CMP: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  nameTeam: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  txtNameTeam: {
    fontSize: 80,
    fontWeight: 'bold',
  },
});
