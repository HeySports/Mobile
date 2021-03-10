import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import logo from '../../image/logo.png';
import { loginScreen } from '../../navigation/pushScreen';
import Input from '../../components/Input';
import Button from '../../components/Button';
const Register = () => {
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
          <Input title="Số điện thoại" icon="phone" checkPass={false} />
          <Input title="Tên người dùng" icon="user-alt" checkPass={false} />
          <Input title="Mật khẩu" icon="low-vision" checkPass={true} />
          <Input title="Xác nhận mật khẩu" icon="low-vision" checkPass={true} />
        </View>
        <View style={styles.bottom}>
          <Button titleBtn="Đăng Ký" checkBtn={true} />
          <Button
            titleBtn="Đăng Ký ngay"
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
});
