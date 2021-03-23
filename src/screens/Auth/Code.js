import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { goBack } from '../../navigation/pushScreen';
import Font from '../../themes/font';
import Colors from '../../themes/colors';
import Back from '../../components/Back';
import Button from '../../components/Button';
const Code = (props) => {
  const [code, setCode] = useState('');
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const submitCode = () => {
    alert(code);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back goBack={goBackScreen} />
        <View style={styles.title}>
          <Text style={styles.txtTitle}>Nhập Mã Xác Minh</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.bodyCode}>
          <View style={styles.topBody}>
            <View style={styles.viewIcon}>
              <Icon name="comments" style={styles.iconComment} />
            </View>
          </View>
          <View style={styles.bottomBody}>
            <View style={styles.topBottom}>
              <Text style={styles.txtTopBottom}>
                Vui Lòng Nhập 4 Mã Số Đã Được Gửi Đến Số Điện Thoại Của Bạn
              </Text>
            </View>
            <View style={styles.bodyBottom}>
              <SmoothPinCodeInput
                cellStyle={styles.borderCell}
                cellStyleFocused={styles.txtCode}
                value={code}
                onTextChange={(text) => setCode(text)}
                codeLength={4}
              />
            </View>
            <View style={styles.bottomBottom}>
              <TouchableOpacity style={styles.btnCode}>
                <Text style={styles.txtBtnCode}>Gửi Lại Mã</Text>
              </TouchableOpacity>
              <Button titleBtn="Xác Nhận" checkBtn={true} function={submitCode} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Code;
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: Colors.backgroud,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.4,
    borderLeftColor: '#dcdcdc',
  },
  title: {
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: Font.title_child2,
    fontWeight: '700',
  },
  bodyCode: {
    height: height - 50,
    flex: 1,
  },
  topBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconComment: {
    fontSize: 100,
    color: Colors.primary,
  },
  viewIcon: {
    width: 170,
    height: 170,
    borderWidth: 10,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 85,
  },
  bottomBody: {
    flex: 1.5,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  topBottom: {
    margin: (20 / startWidth) * width,
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTopBottom: {
    fontSize: Font.font_description,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bodyBottom: {
    width: width,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderCell: {
    borderColor: Colors.primary,
    borderBottomWidth: 2,
  },
  txtCode: {
    borderColor: Colors.error,
  },
  btnCode: {
    width: '30%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  txtBtnCode: {
    fontSize: Font.font_description,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  bottomBottom: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
