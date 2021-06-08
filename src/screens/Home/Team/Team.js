import React, { useCallback, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Colors, Fonts } from '../../../themes';
import TeamActions from '../../../redux/TeamRedux/actions';
import Images from '../../../image';
const Team = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.responseProfile);
  useEffect(() => {
    onGetTeam();
  }, [onGetTeam]);
  const onGetTeam = useCallback(async () => {
    dispatch(TeamActions.myDetailTeam(user?.id));
  }, [dispatch, user]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerDetailTeam}>
        <View style={styles.iconHeader}>
          <TouchableOpacity
            style={styles.btnBackHeader}
            onPress={() => Navigation.popTo('Profile')}
          >
            <Icons name="caret-left" style={styles.iconBack} size={15} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleHeader}>
          <Text style={styles.txtTitle}>CHI TIẾT ĐỘI BÓNG</Text>
        </View>
      </View>
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.bodyHeaderTeam}>
          <Image source={Images.vn} style={styles.imgTeam} />
          <View style={styles.teamDetail}>
            <View>
              <Text>Thanh</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Team;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerDetailTeam: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.txtLevel3,
  },
  iconHeader: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    height: '100%',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBackHeader: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    fontSize: 20,
    color: Colors.greyishBrown,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  bodyContainer: {
    flex: 1,
  },
  bodyHeaderTeam: {
    height: 250,
  },
  imgTeam: {
    height: '100%',
    width: '100%',
  },
});
