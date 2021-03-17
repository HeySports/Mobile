import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../themes/colors';
import Font from '../themes/font';
const TitleView = (props) => {
  return (
    <View style={styles.titleListRoom}>
      <Text style={styles.txtTitleListRoom}>{props.title}</Text>
      {props.checkTitle ? (
        <View />
      ) : (
        <TouchableOpacity style={styles.btnListRoom} onPress={props.functionViewMore}>
          <Icon name="angle-double-right" style={styles.iconView} />
          <Text style={styles.txtBtnView}>Xem thêm</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TitleView;
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  titleListRoom: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: (20 / startWidth) * width,
    marginRight: (20 / startWidth) * width,
  },
  txtTitleListRoom: {
    flex: 2,
    fontSize: Font.title_child2,
    fontWeight: '700',
  },
  btnListRoom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    fontSize: Font.font_description,
    color: Color.primary,
  },
  txtBtnView: {
    marginLeft: 5,
    fontSize: Font.font_description,
    color: Color.primary,
  },
});
