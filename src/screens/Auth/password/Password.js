/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../themes/colors';
import Font from '../../../themes/font';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Back from '../../../components/Back';
import Error from '../../../components/Error';
import { pushScreen, goBack } from '../../../navigation/pushScreen';
import UserActions from '../../../redux/UserRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
const Password = (props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);
  const dispatch = useDispatch();
  const savePassword = () => {
    if (password !== confirmPassword) {
      setErrorLogin('Không khớp mật khẩu?');
    } else {
      dispatch(
        UserActions.resetPassword({
          phone_numbers: props.data,
          password: password,
          confirm_password: confirmPassword,
        }),
      );
    }
  };
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  return (
    <ScrollView style={styles.container}>
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
            title="Mật khẩu mới"
            tinColorIcon={Color.secondary}
            checkPass={true}
            icon="low-vision"
            txtChange={(text) => setPassword(text)}
          />
          <Input
            title="Nhập lại mật khẩu"
            tinColorIcon={Color.secondary}
            checkPass={true}
            icon="low-vision"
            txtChange={(text) => setConfirmPassword(text)}
          />
        </View>
        <View style={styles.buttonBottom}>
          {errorLogin && <Error messageError={errorLogin} />}
          <Button titleBtn="Xác Nhận" checkBtn={true} checkColor={true} function={savePassword} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View elevation={5} style={[styles.number, { backgroundColor: 'white' }]}>
              <Text elevation={5} style={[styles.txtNumber, { color: Color.secondary }]}>
                1
              </Text>
            </View>
            <View
              elevation={5}
              style={[styles.number, { marginHorizontal: 20, backgroundColor: 'white' }]}
            >
              <Text elevation={5} style={[styles.txtNumber, { color: Color.secondary }]}>
                2
              </Text>
            </View>
            <View elevation={5} style={[styles.number]}>
              <Text elevation={5} style={[styles.txtNumber]}>
                3
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
export default Password;
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
    marginTop: (60 / startHeight) * height,
    margin: (20 / startWidth) * width,
    marginBottom: 10,
  },
  buttonBottom: {
    marginTop: (20 / startHeight) * height,
    alignItems: 'center',
  },
  number: {
    marginTop: (30 / startHeight) * height,
    width: 25,
    height: 25,
    backgroundColor: Color.secondary,
    borderRadius: 15,
    fontSize: Font.font_description,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNumber: {
    color: '#F9F3F3',
  },
  txtNotification: {
    textAlign: 'center',
    lineHeight: 20,
    fontSize: Font.font_description,
    fontWeight: '700',
  },
});
