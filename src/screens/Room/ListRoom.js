import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Back from '../../components/Back';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { goBack } from '../../navigation/pushScreen';
import ItemRoom from '../../components/ItemRoom';
import RoomItem from '../../components/Room';
const ListRoom = (props) => {
  const [checkView, setCheckView] = useState(true);
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  var matches = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Back style={styles.iconBack} goBack={goBackScreen} />
        <View style={styles.contentTitle}>
          <Text style={styles.txtTitle}>Đội Bóng Đang Chờ</Text>
        </View>
        {checkView ? (
          <TouchableOpacity style={styles.btnIcon} onPress={() => setCheckView(false)}>
            <Icon name="list" style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btnIcon} onPress={() => setCheckView(true)}>
            <Icon name="th-large" style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      {checkView ? (
        <ScrollView
          style={styles.viewRoom}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.listRoom}>
            {matches?.map((item, index) => {
              return <ItemRoom key={index} room={item} idComponent={props.componentId} />;
            })}
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          style={styles.viewRoom}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.roomList} />
          {matches?.map((item, index) => {
            return <RoomItem room={item} idComponent={props.componentId} key={index} />;
          })}
        </ScrollView>
      )}
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
