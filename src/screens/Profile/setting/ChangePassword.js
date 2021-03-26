import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../themes/colors';
import Font from '../../../themes/font';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Back from '../../../components/Back';
import { goBack } from '../../../navigation/pushScreen';
import { useDispatch, useSelector } from 'react-redux';
import ProfileActions from '../../../redux/ProfileRedux/actions';
import Error from '../../../components/Error';
const ChangePassword = (props) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const storeChangePass = useSelector((state) => state.profile);
  const savePassword = () => {
    if (password === '' || newPassword === '' || confirmPassword === '') {
      setError('Bạn phải nhập đầy đủ thông tin !');
    } else if (newPassword.length < 6) {
      setError('Mật khẩu có ít nhất 6 ký tự !');
    } else if (newPassword !== confirmPassword) {
      setError('Mật khẩu của bạn không khớp !');
    } else {
      const dataPassword = {
        password: password,
        new_password: newPassword,
        confirm_password: confirmPassword,
      };
      dispatch(ProfileActions.userChangePassword(dataPassword));
    }
  };
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.top}>
            <Back goBack={goBackScreen} />
            <View style={styles.title}>
              <Text style={styles.txtTitle}>Thay Đổi Mật Khẩu</Text>
            </View>
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
          {storeChangePass.loadingChangePassword && (
            <ActivityIndicator size="small" color="#0000ff" />
          )}
          {storeChangePass.errorChangePassword && (
            <Error messageError={storeChangePass.errorChangePassword.message} />
          )}
          {storeChangePass.responseChangePassword && (
            <Error messageError={storeChangePass.responseChangePassword.message} />
          )}
          {error && <Error messageError={error} />}
          <View style={styles.buttonBottom}>
            <Button titleBtn="Xác Nhận" checkBtn={true} checkColor={true} function={savePassword} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
export default ChangePassword;
const styles = StyleSheet.create({
  header: {
    width: width,
    height: (250 / startHeight) * height,
    backgroundColor: Color.secondary,
  },
  title: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 60,
  },
  txtTitle: {
    fontSize: Font.title_child2,
    fontWeight: 'bold',
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
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
