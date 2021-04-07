import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Back from '../components/Back';
import Font from '../themes/font';
import Color from '../themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Header = (props) => {
  return (
    <View style={styles.container}>
      <Back goBack={props.function_goBack} />
      <View style={styles.title}>
        <Text style={styles.txtNamePlayer}>{props.title}</Text>
      </View>
      <View style={styles.rightHeader}>
        {props.iconRight && props.typeView ? (
          props.checkView ? (
            <TouchableOpacity style={styles.btnIcon} onPress={props.functionFail}>
              <Icon name="th-large" style={styles.icon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btnIcon}>
              <Icon name="list" style={styles.icon} onPress={props.functionTrue} />
            </TouchableOpacity>
          )
        ) : (
          <TouchableOpacity style={styles.btnIcon} onPress={props.function}>
            <Icon name={props.icon} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.txtLevel2,
  },
  title: {
    flex: 8.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightHeader: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRightHeader: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNamePlayer: {
    fontSize: Font.title_child,
  },
  btnIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  icon: {
    fontSize: Font.title_child2,
  },
});
