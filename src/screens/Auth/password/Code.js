/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../../../themes/colors';
import Font from '../../../themes/font';
import Button from '../../../components/Button';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Back from '../../../components/Back';
import { pushScreen, goBack } from '../../../navigation/pushScreen';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
const Code = (props) => {
  const [code, setCode] = useState('');
  const [loading, setloading] = useState(true);
  const [confirm, setConfirm] = useState(null);
  const responseCheckPhone = useSelector((state) => state.users.responseCheckPhone);
  useEffect(() => {
    if (responseCheckPhone !== null && responseCheckPhone.length > 0) {
      signInWithPhoneNumber();
    } else {
      goBackScreen();
    }
  }, [responseCheckPhone]);
  const signInWithPhoneNumber = async () => {
    try {
      const formatPhoneNumberFirebase = '+84' + props.data.substring(1, props.data.length);
      setloading(false);
      const confirmation = await auth().signInWithPhoneNumber(formatPhoneNumberFirebase);
      setloading(true);
      setConfirm(confirmation);
    } catch (e) {
      console.log(e);
    }
  };
  const submitCode = async () => {
    try {
      await confirm.confirm(code);
      pushScreen(props.componentId, 'Password', props.data, 'Password', false, '', '');
    } catch (e) {
      alert(e);
      // alert('Kiểm tra số điện thoại hoặc mã');
    }
  };
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const sendCodeAgain = () => {
    alert('Sent Code Again');
  };
  return loading ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.top}>
          <Back goBack={goBackScreen} />
        </View>
        <View style={styles.image}>
          <View style={styles.iconImage}>
            <Icon name="comment-dots" style={styles.icon} />
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.txtCenter}>Nhập Mã Xác Minh</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.txtNotification}>
          Vui Lòng Nhập 6 Mã Số Được Gửi Tới Số Điện Thoại Của Bạn.
        </Text>
        <View style={styles.content}>
          <SmoothPinCodeInput
            cellStyle={styles.borderCell}
            cellStyleFocused={styles.txtCode}
            value={code}
            onTextChange={(text) => setCode(text)}
            codeLength={6}
          />
        </View>
        <View style={styles.buttonBottom}>
          <TouchableOpacity style={styles.btnCode} onPress={() => sendCodeAgain()}>
            <Text style={styles.txtBtnCode}>Gửi Lại Mã</Text>
          </TouchableOpacity>
          <Button titleBtn="Xác Nhận" checkBtn={true} checkColor={true} function={submitCode} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View elevation={5} style={[styles.number, { backgroundColor: 'white' }]}>
              <Text elevation={5} style={[styles.txtNumber, { color: Color.secondary }]}>
                1
              </Text>
            </View>
            <View elevation={5} style={[styles.number, { marginHorizontal: 20 }]}>
              <Text elevation={5} style={[styles.txtNumber]}>
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
    </View>
  ) : (
    <View
      style={{
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.backgroud,
      }}
    >
      <ActivityIndicator size="large" color={Color.primary} />
    </View>
  );
};
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
export default Code;
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
    fontSize: (80 / startWidth) * width,
    color: Color.secondary,
  },
  content: {
    marginTop: (10 / startHeight) * height,
    margin: (20 / startWidth) * width,
    marginBottom: 10,
    flexDirection: 'row',
  },
  borderCell: {
    borderColor: Color.secondary,
    borderBottomWidth: 2,
  },
  txtCode: {
    borderColor: Color.error,
  },
  // txtCode: {
  //   borderWidth: 0.5,
  //   height: 50,
  //   width: 50,
  //   marginLeft: (21 / startWidth) * width,
  //   textAlign: 'center',
  //   fontWeight: '700',
  //   fontSize: Font.title_child2,
  //   borderColor: Color.txtLevel2,
  // },
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
  btnCode: {
    width: '30%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnCode: {
    fontSize: Font.font_description,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  txtNotification: {
    textAlign: 'center',
    lineHeight: 20,
    fontSize: Font.font_description,
    fontWeight: '700',
    margin: (30 / startWidth) * width,
  },
});
