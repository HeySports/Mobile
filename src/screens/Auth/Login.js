import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import logo from '../../image/logo.png';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { pushScreen } from '../../navigation/pushScreen';
import LoginActions from '../../redux/AuthRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
const Login = (props) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);
  const dispatch = useDispatch();
  const storeLogin = useSelector((state) => state.auth);
  const register = () => {
    pushScreen(props.componentId, 'Register', '', 'Register', false, '', '');
  };
  const forgot = () => {
    pushScreen(props.componentId, 'Phone', '', 'Phone', false, '', '');
  };
  const handleTextInput = () => {
    let validatePhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phone || !password) {
      setErrorLogin('Bạn phải nhập đủ thông tin để tiến hành Login !');
    } else if (phone.indexOf(' ') >= 0 || password.indexOf(' ') >= 0 || password.length < 6) {
      setErrorLogin('Số điện thoại hoặc mật khẩu của bạn không hợp lệ !');
    } else if (!phone.valueOf().match(validatePhone)) {
      setErrorLogin('Số điện thoại hoặc mật khẩu của bạn không hợp lệ !');
    } else {
      handleLogin(phone, password);
      Keyboard.dismiss();
      setErrorLogin(false);
    }
  };
  const handleLogin = (phone_numbers, password_login) => {
    dispatch(LoginActions.userLogin({ phone_numbers: phone_numbers, password: password_login }));
  };
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.txtTitle}>Đăng Nhập</Text>
      </View>
      <ScrollView style={styles.contentLogin}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.center}>
          <Input
            title="Số điện thoại"
            icon="phone"
            checkPass={false}
            txtChange={(text) => setPhone(text)}
            checkTypeInput="phone-pad"
          />
          <Input
            title="Mật khẩu"
            icon="low-vision"
            checkPass={true}
            txtChange={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.forgotPass} onPress={() => forgot()}>
          <Text style={styles.txtForgot}>Quên mật khẩu !</Text>
        </TouchableOpacity>
        {storeLogin.loadingLogin && <ActivityIndicator size="small" color="#0000ff" />}
        {storeLogin.checkLoginFail && (
          <View style={styles.error}>
            <Text style={styles.txtError}>{storeLogin.responseLogin}</Text>
          </View>
        )}
        {errorLogin && (
          <View style={styles.error}>
            <Text style={styles.txtError}>{errorLogin}</Text>
          </View>
        )}
        <View style={styles.bottom}>
          <Button titleBtn="Đăng nhập" checkBtn={true} function={handleTextInput} />
          <Button
            titleBtn="Đăng Ký ngay"
            checkBtn={false}
            title="Bạn chưa có tài khoản ?"
            function={register}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.backgroud,
    height: '100%',
  },
  title: {
    width: width,
    height: (60 / startHeight) * height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: Font.title_main,
    fontWeight: '700',
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
    marginTop: 0,
    margin: (20 / startWidth) * width,
    marginBottom: 10,
  },
  forgotPass: {
    marginLeft: (230 / startWidth) * width,
  },
  txtForgot: {
    textDecorationLine: 'underline',
    fontSize: Font.font_description,
  },
  bottom: {
    width: width,
    alignItems: 'center',
  },
  error: {
    width: width,
    justifyContent: 'center',
    height: 40,
    alignItems: 'center',
  },
  txtError: {
    fontSize: Font.font_description,
    color: '#ff0000',
  },
});
