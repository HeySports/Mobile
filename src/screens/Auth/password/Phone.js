/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../themes/colors';
import Font from '../../../themes/font';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Back from '../../../components/Back';
import { pushScreen, goBack } from '../../../navigation/pushScreen';
import UserActions from '../../../redux/UserRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
const Phone = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const responseCheckPhone = useSelector((state) => state.users);
  const pushNextScreen = async () => {
    if (phoneNumber === '' || phoneNumber.length > 13 || phoneNumber.length < 10) {
      setError('Số điện thoại của bạn không đúng !');
    } else {
      try {
        dispatch(UserActions.checkPhoneNumberExisted({ phone_numbers: phoneNumber }));
      } catch (error) {
        console.log(error);
        setError('Số điện thoại của bạn không đúng !');
      }
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
          <Input
            title="Số điện thoại"
            icon="phone"
            checkPass={false}
            txtChange={(text) => setPhoneNumber(text)}
            checkTypeInput="phone-pad"
            tinColorIcon={Color.secondary}
          />
        </View>
        <View style={styles.buttonBottom}>
          {responseCheckPhone.loadingCheckPhone && (
            <ActivityIndicator size="small" color={Color.secondary} />
          )}
          <Button titleBtn="Gửi mã" checkBtn={true} checkColor={true} function={pushNextScreen} />
          {responseCheckPhone.responseCheckPhone ? (
            <View style={styles.viewError}>
              <Text style={styles.txtError}>Số điện thoại chưa được đăng kí!</Text>
            </View>
          ) : (
            error && (
              <View style={styles.viewError}>
                <Text style={styles.txtError}>{error}</Text>
              </View>
            )
          )}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View elevation={5} style={[styles.number]}>
              <Text elevation={5} style={[styles.txtNumber]}>
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
            <View elevation={5} style={[styles.number, { backgroundColor: 'white' }]}>
              <Text elevation={5} style={[styles.txtNumber, { color: Color.secondary }]}>
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
export default Phone;
const styles = StyleSheet.create({
  viewError: {
    height: 40,
    marginBottom: -30,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  txtError: {
    fontSize: Font.title_child4,
    color: Color.error,
    fontWeight: '700',
  },
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
    marginTop: (50 / startHeight) * height,
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
