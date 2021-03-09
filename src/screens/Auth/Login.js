import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import logo from '../../image/logo.png';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import Input from '../../components/Input';
import Button from '../../components/Button';
const Login = () => {
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
          <Input title="Số điện thoại" icon="phone" checkPass={false} />
          <Input title="Mật khẩu" icon="low-vision" checkPass={true} />
        </View>
        <TouchableOpacity style={styles.forgotPass}>
          <Text style={styles.txtForgot}>Quên mật khẩu !</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Button titleBtn="Đăng nhập" checkBtn={true} />
          <Button titleBtn="Đăng Ký ngay" checkBtn={false} title="Bạn chưa có tài khoản ?" />
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
});
