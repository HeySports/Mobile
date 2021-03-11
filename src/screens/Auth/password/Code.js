import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../themes/colors';
import Font from '../../../themes/font';
import Button from '../../../components/Button';
import Back from '../../../components/Back';
import { pushScreen, goBack } from '../../../navigation/pushScreen';
const Code = (props) => {
  const pushNextScreen = () => {
    pushScreen(props.componentId, 'Password', '', 'Password', false, '', '');
  };
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const sendCodeAgain = () => {
    alert('Sent Code Again');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.top}>
          <Back goBack={goBackScreen} />
        </View>
        <View style={styles.image}>
          <View style={styles.iconImage}>
            <Icon name="comment-dots" style={styles.icon} />
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.txtCenter}>Nhập Mã Xác Minh</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.txtNotification}>
          Vui Lòng Nhập 4 Mã Số Được Gửi Tới Số Điện Thoại Của Bạn.
        </Text>
        <View style={styles.content}>
          <TextInput style={styles.txtCode} />
          <TextInput style={styles.txtCode} />
          <TextInput style={styles.txtCode} />
          <TextInput style={styles.txtCode} />
        </View>
        <View style={styles.buttonBottom}>
          <TouchableOpacity style={styles.btnCode} onPress={() => sendCodeAgain()}>
            <Text style={styles.txtBtnCode}>Gửi Lại Mã</Text>
          </TouchableOpacity>
          <Button titleBtn="Xác Nhận" checkBtn={true} checkColor={true} function={pushNextScreen} />
          <View style={styles.number}>
            <Text>2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
export default Code;
const styles = StyleSheet.create({
  header: {
    width: width,
    height: (231 / startHeight) * height,
    backgroundColor: Color.secondary,
  },
  center: {
    width: width,
    height: (98 / startHeight) * height,
    backgroundColor: Color.txtLevel2,
    marginTop: -50,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCenter: {
    fontSize: Font.title_child,
    fontWeight: '700',
    marginBottom: (30 / startHeight) * height,
  },
  bottom: {
    width: width,
    height: (386 / startHeight) * height,
    marginTop: -40,
    backgroundColor: '#F9F3F3',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  top: {
    width: width,
    height: 40,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: (150 / startWidth) * width,
    height: (150 / startWidth) * width,
    borderRadius: ((150 / startWidth) * width) / 2,
    backgroundColor: '#F9F3F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: (80 / startWidth) * width,
    color: Color.secondary,
  },
  content: {
    marginTop: (10 / startHeight) * height,
    margin: (20 / startWidth) * width,
    marginBottom: 10,
    flexDirection: 'row',
  },
  txtCode: {
    borderWidth: 0.5,
    height: 50,
    width: 50,
    marginLeft: (21 / startWidth) * width,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: Font.title_child2,
    borderColor: Color.txtLevel2,
  },
  buttonBottom: {
    marginTop: (20 / startHeight) * height,
    alignItems: 'center',
  },
  number: {
    marginTop: (95 / startHeight) * height,
    width: 30,
    height: 30,
    backgroundColor: Color.backgroud,
    borderRadius: 15,
    fontSize: Font.font_description,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCode: {
    width: '30%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnCode: {
    fontSize: Font.font_description,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  txtNotification: {
    textAlign: 'center',
    lineHeight: 20,
    fontSize: Font.font_description,
    fontWeight: '700',
    margin: (30 / startWidth) * width,
  },
});
