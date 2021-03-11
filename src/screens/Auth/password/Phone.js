import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../themes/colors';
import Font from '../../../themes/font';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Back from '../../../components/Back';
import { pushScreen, goBack } from '../../../navigation/pushScreen';
const Phone = (props) => {
  const pushNextScreen = () => {
    pushScreen(props.componentId, 'Code', '', 'Code', false, '', '');
  };
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.top}>
          <Back goBack={goBackScreen} />
        </View>
        <View style={styles.image}>
          <View style={styles.iconImage}>
            <Icon name="lock" style={styles.icon} />
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.txtCenter}>Quên Mật Khẩu</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.content}>
          <Text style={styles.txtNotification}>
            Vui Lòng Nhập Số Điện Thoại Của Bạn Để Nhận Mã Xác Minh.
          </Text>
          <Input title="Số Điện Thoại" checkPass={false} />
        </View>
        <View style={styles.buttonBottom}>
          <Button titleBtn="Gửi mã" checkBtn={true} checkColor={true} function={pushNextScreen} />
          <View style={styles.number}>
            <Text>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
export default Phone;
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
    fontSize: (50 / startWidth) * width,
    color: Color.secondary,
  },
  content: {
    marginTop: (60 / startHeight) * height,
    margin: (20 / startWidth) * width,
    marginBottom: 10,
  },
  buttonBottom: {
    marginTop: (20 / startHeight) * height,
    alignItems: 'center',
  },
  number: {
    marginTop: (100 / startHeight) * height,
    width: 30,
    height: 30,
    backgroundColor: Color.backgroud,
    borderRadius: 15,
    fontSize: Font.font_description,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNotification: {
    textAlign: 'center',
    lineHeight: 20,
    fontSize: Font.font_description,
    fontWeight: '700',
  },
});
