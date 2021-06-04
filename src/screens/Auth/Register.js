/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import logo from '../../image/logo.png';
import { loginScreen, pushScreen } from '../../navigation/pushScreen';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import LoginActions from '../../redux/AuthRedux/actions';
import { validateEmail, validatePhone } from '../../utils/checker';
import { useDispatch, useSelector } from 'react-redux';
const Register = (props) => {
  // const { auth } = setupFirebase();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const checkPhone = useSelector((state) => state.auth);
  useEffect(() => {
    getStore();
    if (phoneNumber !== '') {
      !checkPhone.checkPhone ? setError('Số điện thoại này đã đăng kí!') : setError(false);
    }
  }, [checkPhone.checkPhone]);
  const getStore = async () => {
    try {
      const location = await AsyncStorage.getItem('location');
      setAddress(location);
    } catch (e) {
      alert('Không thể lấy được vị trí hiện tại');
    }
  };
  const register = async () => {
    const dataRegister = {
      phone_numbers: phoneNumber,
      fullName: fullName,
      password: password,
      confirm_password: confirmPassword,
      address: address,
      age: parseInt(age),
      email: email,
      description: description,
    };
    if (
      dataRegister.phone_numbers === '' ||
      dataRegister.fullName === '' ||
      dataRegister.age === '' ||
      dataRegister.email === '' ||
      dataRegister.password === ''
    ) {
      setError('Bạn phải nhập đầy đủ thông tin bắt buộc !');
    } else if (!validatePhone(dataRegister.phone_numbers)) {
      setError('Số điện thoại của bạn không đúng !');
    } else if (validateEmail(dataRegister.email)) {
      setError('Email của bạn nhập không đúng !');
    } else if (dataRegister.password.length < 6) {
      setError('Mật khẩu ít nhất có 6 ký tự !');
    } else if (dataRegister.password !== dataRegister.confirm_password) {
      setError('Mật khẩu không trùng khớp !');
    } else if (
      dataRegister.age < 10 ||
      dataRegister.age > 60 ||
      !Number.isInteger(dataRegister.age)
    ) {
      setError('Số tuổi ' + dataRegister.age + ' không hợp lệ (10-60 tuổi)');
    } else {
      setError(false);
      dispatch(LoginActions.userCheckPhone(dataRegister));
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <View style={styles.title} />
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.center}>
          <Input
            title="Số điện thoại"
            required={true}
            icon="phone"
            checkPass={false}
            txtChange={(text) => setPhoneNumber(text)}
            checkTypeInput="phone-pad"
          />
          <Input
            title="Tên người dùng"
            required={true}
            icon="user-alt"
            checkPass={false}
            txtChange={(text) => setFullName(text)}
          />
          <Input
            title="Email"
            required={true}
            icon="envelope"
            checkPass={false}
            txtChange={(text) => setEmail(text)}
          />
          <Input
            title="Mật khẩu"
            required={true}
            icon="low-vision"
            checkPass={true}
            txtChange={(text) => setPassword(text)}
          />
          <Input
            title="Xác nhận mật khẩu"
            required={true}
            icon="low-vision"
            checkPass={true}
            txtChange={(text) => setConfirmPassword(text)}
          />
          <View style={styles.flexRow}>
            <Input
              style={styles.inputAge}
              title="Tuổi"
              required={true}
              icon="baby-carriage"
              checkPass={false}
              checkTypeInput="phone-pad"
              txtChange={(text) => setAge(text)}
            />
            <Input
              style={styles.inputAddress}
              title="Địa chỉ"
              icon="map-marker-alt"
              checkPass={false}
              txtChange={(text) => setAddress(text)}
            />
          </View>
          <Input
            title="Mô tả"
            icon="clipboard"
            multiline={true}
            numberOfLines={12}
            textAlignVertical="top"
            checkPass={false}
            txtChange={(text) => setDescription(text)}
          />
        </View>
        <View style={styles.bottom}>
          {checkPhone.loadingCheckPhone ? (
            <ActivityIndicator size="small" color={Color.primary} />
          ) : (
            error && (
              <View style={styles.viewError}>
                <Text style={styles.txtError}>{error}</Text>
              </View>
            )
          )}
          <Button titleBtn="Đăng Ký" checkBtn={true} function={() => register()} />
          <Button
            titleBtn="Đăng Nhập"
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
  flexRow: {
    flexDirection: 'row',
  },
  inputAge: {
    width: 100,
    marginRight: 10,
  },
  inputAddress: {
    width: 210,
  },
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
