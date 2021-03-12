import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Back from '../../components/Back';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { goBack } from '../../navigation/pushScreen';
import ItemRoom from '../../components/ItemRoom';
const ListRoom = (props) => {
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Back style={styles.iconBack} goBack={goBackScreen} />
        <View style={styles.contentTitle}>
          <Text style={styles.txtTitle}>Đội Bóng Đang Chờ</Text>
        </View>
        <TouchableOpacity style={styles.btnIcon}>
          <Icon name="list" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.viewRoom}>
        <View style={styles.listRoom}>
          <ItemRoom />
          <ItemRoom />
          <ItemRoom />
          <ItemRoom />
          <ItemRoom />
          <ItemRoom />
          <ItemRoom />
          <ItemRoom />
          <ItemRoom />
          <ItemRoom />
        </View>
      </ScrollView>
    </View>
  );
};

export default ListRoom;

const styles = StyleSheet.create({
  title: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.txtLevel2,
  },
  iconBack: { flex: 1 },
  contentTitle: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: Font.title_child2,
    fontWeight: '700',
  },
  btnIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  icon: {
    fontSize: Font.title_child2,
  },
  listRoom: {
    flexDirection: 'row',
    alignContent: 'stretch',
    flexWrap: 'wrap',
  },
  viewRoom: {
    marginBottom: 50,
  },
});
