import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Color from '../themes/colors';
import Font from '../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
const ItemSetting = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.function}>
      <View style={styles.iconLeft}>
        <Icon name={props.icon} style={styles.iconUser} />
      </View>
      {props.txtTitle ? (
        <View style={styles.content}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.txtTitle}>{props.txtTitle}</Text>
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      )}
      <View style={styles.iconRight}>
        <Icon name="angle-left" style={styles.iconBack} />
      </View>
    </TouchableOpacity>
  );
};
const { width, height } = Dimensions.get('window');
const startHeight = 640;
export default ItemSetting;

const styles = StyleSheet.create({
  container: {
    height: (60 / startHeight) * height,
    marginTop: (15 / startHeight) * height,
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderBottomColor: Color.backgroud,
    backgroundColor: '#FFFFFF',
  },
  iconLeft: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  iconUser: {
    fontSize: 35,
    color: Color.primary,
  },
  content: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: Font.title_child4,
    fontWeight: '700',
  },
  txtTitle: {
    fontSize: Font.font_description,
    color: Color.txtLevel3,
  },
  iconRight: {
    height: '100%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    color: Color.primary,
    fontSize: 25,
  },
});
