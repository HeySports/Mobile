import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Position from './ItemPosition';

const Field11 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemDetailMatches}>
        <View style={styles.nameTeam}>
          <Text style={styles.txtNameTeam}>Team</Text>
        </View>
        <View style={styles.goalkeeper}>
          <Position position="GK" colors="#ff8c00" />
        </View>
        <View style={styles.defender}>
          <View style={styles.LB}>
            <Position position="RB" colors="#00fa9a" />
          </View>
          <View style={styles.CB}>
            <Position position="CB" colors="#00fa9a" />
          </View>
          <View style={styles.CB}>
            <Position position="CB" colors="#00fa9a" />
          </View>
          <View style={styles.LB}>
            <Position position="LB" colors="#00fa9a" />
          </View>
        </View>
        <View style={styles.middlePlayer}>
          <View style={styles.CM}>
            <Position position="CM" colors="#ffff00" />
          </View>
          <View style={styles.CDM}>
            <Position position="CMD" colors="#ffff00" />
          </View>
          <View style={styles.CM}>
            <Position position="CM" colors="#ffff00" />
          </View>
        </View>
        <View style={styles.striker}>
          <View style={styles.RWT}>
            <Position position="ST" colors="#ff0000" />
          </View>
          <View style={styles.ST}>
            <Position position="CAM" colors="#ffff00" />
          </View>
          <View style={styles.RWT}>
            <Position position="ST" colors="#ff0000" />
          </View>
        </View>
      </View>
      <View style={styles.itemDetailMatches}>
        <View style={styles.nameTeam}>
          <Text style={styles.txtNameTeam}>Team</Text>
        </View>
        <View style={styles.striker}>
          <View style={styles.RWTP}>
            <Position position="LW" colors="#ff0000" />
          </View>
          <View style={styles.ST}>
            <Position position="ST" colors="#ff0000" />
          </View>
          <View style={styles.RWTP}>
            <Position position="RW" colors="#ff0000" />
          </View>
        </View>
        <View style={styles.middlePlayer}>
          <View style={styles.CMP}>
            <Position position="CM" colors="#ffff00" />
          </View>
          <View style={styles.CDMP}>
            <Position position="CMD" colors="#ffff00" />
          </View>
          <View style={styles.CMP}>
            <Position position="CM" colors="#ffff00" />
          </View>
        </View>
        <View style={styles.defender}>
          <View style={styles.LBP}>
            <Position position="LB" colors="#00fa9a" />
          </View>
          <View style={styles.CBP}>
            <Position position="CB" colors="#00fa9a" />
          </View>
          <View style={styles.CBP}>
            <Position position="CB" colors="#00fa9a" />
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

export default Field11;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  itemDetailMatches: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  goalkeeper: {
    flexDirection: 'row',
    flex: 0.7,
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
  CB: {
    flex: 1.5,
    alignItems: 'center',
  },
  middlePlayer: {
    flexDirection: 'row',
    flex: 1.2,
    width: '100%',
  },
  CDM: {
    flex: 1,
    alignItems: 'center',
    marginTop: -22,
  },
  CM: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  striker: {
    flexDirection: 'row',
    flex: 1,
  },
  ST: {
    flex: 1,
    alignItems: 'center',
    marginTop: -10,
  },
  RWT: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  LBP: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  CBP: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  CDMP: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: -15,
  },
  CMP: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  RWTP: {
    flex: 1,
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
