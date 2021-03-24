import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../themes/colors';
import Font from '../../../themes/font';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Back from '../../../components/Back';
import { goBack } from '../../../navigation/pushScreen';
const ChangePassword = (props) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const savePassword = () => {
    const dataPassword = {
      oldPassword: password,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    if (
      dataPassword.oldPassword === '' ||
      dataPassword.newPassword === '' ||
      dataPassword.confirmPassword === ''
    ) {
      setError('Bạn phải nhập đầy đủ thông tin !');
    } else if (dataPassword.newPassword < 6) {
      setError('Mật khẩu có ít nhất 6 ký tự !');
    } else if (dataPassword.newPassword !== dataPassword.confirmPassword) {
      setError('Mật khẩu của bạn không khớp !');
    } else {
      alert('success');
    }
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
            <Icon name="check" style={styles.icon} />
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.txtCenter}>Đặt Lại Mật Khẩu Mới</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.content}>
          <Input
            title="Mật khẩu cũ"
            checkPass={true}
            icon="low-vision"
            txtChange={(text) => setPassword(text)}
          />
          <Input
            title="Mật khẩu mới"
            checkPass={true}
            icon="low-vision"
            txtChange={(text) => setNewPassword(text)}
          />
          <Input
            title="Nhập lại mật khẩu"
            checkPass={true}
            icon="low-vision"
            txtChange={(text) => setConfirmPassword(text)}
          />
        </View>
        {error && (
          <View>
            <Text>{error}</Text>
          </View>
        )}
        <View style={styles.buttonBottom}>
          <Button titleBtn="Xác Nhận" checkBtn={true} checkColor={true} function={savePassword} />
        </View>
      </View>
    </View>
  );
};
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
export default ChangePassword;
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
    fontSize: (100 / startWidth) * width,
    color: Color.secondary,
  },
  content: {
    marginTop: (20 / startHeight) * height,
    margin: (20 / startWidth) * width,
    marginBottom: 10,
  },
  buttonBottom: {
    marginTop: (5 / startHeight) * height,
    alignItems: 'center',
  },
  txtNotification: {
    textAlign: 'center',
    lineHeight: 20,
    fontSize: Font.font_description,
    fontWeight: '700',
  },
});
