import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Comment from '../../../components/team/comment';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Navigation } from 'react-native-navigation';
import { Colors } from '../../../themes/index';
const Comments = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerDetailTeam}>
        <View style={styles.iconHeader}>
          <TouchableOpacity
            style={styles.btnBackHeader}
            onPress={() => Navigation.popTo('TeamDetail')}
          >
            <Icons name="caret-left" style={styles.iconBack} size={15} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleHeader}>
          <Text style={styles.txtTitle}>TẤT CẢ ĐÁNH GIÁ</Text>
        </View>
      </View>
      <View style={styles.body}></View>
    </SafeAreaView>
  );
};

export default Comments;

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
  body: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    flex: 1,
  },
});
