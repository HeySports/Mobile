import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Back from '../../components/Back';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import { goBack, pushScreen } from '../../navigation/pushScreen';
import ItemSetting from '../../components/ItemSetting';
import { useDispatch } from 'react-redux';
import AuthAction from '../../redux/AuthRedux/actions';
const Setting = (props) => {
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const informationScreen = () => {
    pushScreen(props.componentId, 'Information', '', 'Information', false, '', '');
  };
  const changePasswordScreen = () => {
    pushScreen(props.componentId, 'ChangePassword', '', 'ChangePassword', false, '', '');
  };
  const helpScreen = () => {
    pushScreen(props.componentId, 'Help', '', 'Help', false, '', '');
  };
  const ruleScreen = () => {
    pushScreen(props.componentId, 'Rules', '', 'Rules', false, '', '');
  };
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(AuthAction.userLogout());
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back goBack={goBackScreen} />
        <View style={styles.title}>
          <Text style={styles.txtTitle}>Cài Đặt Thông Tin</Text>
        </View>
      </View>
      <ItemSetting
        icon="user"
        title="Thông tin cá nhân"
        txtTitle="Chỉnh sữa"
        function={informationScreen}
      />
      <ItemSetting
        icon="lock"
        title="Thay đổi mật khẩu"
        txtTitle="Chỉnh sữa"
        function={changePasswordScreen}
      />
      <ItemSetting
        icon="info-circle"
        title="Hổ trợ"
        txtTitle="Xem chi tiết"
        function={helpScreen}
      />
      <ItemSetting icon="file-alt" title="Quy định" txtTitle="Xem Chi tiết" function={ruleScreen} />
      <ItemSetting icon="sign-out-alt" title="Đăng xuất" function={logout} />
    </View>
  );
};
export default Setting;
const { width, height } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: 'white',
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
});
