import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import logo from '../../image/logo.png';
import { loginScreen, pushScreen } from '../../navigation/pushScreen';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-community/async-storage';
const Register = (props) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    getStore();
  }, []);
  const getStore = async () => {
    try {
      const location = await AsyncStorage.getItem('location');
      setAddress(location);
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };
  const register = async () => {
    const dataRegister = {
      phone_numbers: phoneNumber,
      fullName: fullName,
      password: password,
      confirm_password: confirmPassword,
      address: address,
    };
    if (
      dataRegister.phone_numbers === '' ||
      dataRegister.fullName === '' ||
      dataRegister.password === ''
    ) {
      setError('Bạn phải nhập đầy đủ thông tin bắt buộc !');
    } else if (dataRegister.password !== dataRegister.confirm_password) {
      setError('Mật khẩu không khớp !');
    } else if (dataRegister.phone_numbers.length > 11 || dataRegister.phone_numbers.length < 10) {
      setError('Số điện thoại của bạn không đúng !');
    } else if (dataRegister.password.length < 6) {
      setError('Mật khẩu ít nhất có 6 ký tự !');
    } else {
      setError(false);
      pushScreen(props.componentId, 'CodeRegister', dataRegister, 'CodeRegister', false, '', '');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.txtTitle}> Đăng Ký</Text>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.center}>
          <Input
            title="Số điện thoại"
            icon="phone"
            checkPass={false}
            txtChange={(text) => setPhoneNumber(text)}
            checkTypeInput="phone-pad"
          />
          <Input
            title="Tên người dùng"
            icon="user-alt"
            checkPass={false}
            txtChange={(text) => setFullName(text)}
          />
          <Input
            title="Mật khẩu"
            icon="low-vision"
            checkPass={true}
            txtChange={(text) => setPassword(text)}
          />
          <Input
            title="Xác nhận mật khẩu"
            icon="low-vision"
            checkPass={true}
            txtChange={(text) => setConfirmPassword(text)}
          />
        </View>
        <View style={styles.bottom}>
          {error && (
            <View style={styles.viewError}>
              <Text style={styles.txtError}>{error}</Text>
            </View>
          )}
          <Button titleBtn="Đăng Ký" checkBtn={true} function={register} />
          <Button
            titleBtn="Đăng Nhập ngay"
            checkBtn={false}
            title="Bạn đã có tài khoản ?"
            function={loginScreen}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Register;
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: Color.backgroud,
    height: '100%',
  },
  title: {
    width: width,
    height: (50 / startHeight) * height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: Font.title_main,
    fontWeight: '700',
  },
  body: {
    width: width,
  },
  header: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: (240 / startWidth) * width,
    height: (240 / startWidth) * width,
    borderRadius: ((240 / startWidth) * width) / 2,
  },
  center: {
    marginTop: -20,
    margin: (20 / startWidth) * width,
    marginBottom: 10,
  },
  viewError: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  txtError: {
    fontSize: Font.title_child4,
    color: Color.error,
    fontWeight: '700',
  },
});
