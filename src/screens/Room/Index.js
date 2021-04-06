import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Color from '../../themes/colors';
import thanh from '../../image/thanh.jpg';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import DoubleButton from '../../components/DoubleButton';
const Room = () => {
  const dataRoom = [
    {
      icon: 'lock',
      content: '001',
    },
    {
      icon: 'clock',
      content: '20:00-21:00',
    },
    {
      icon: 'calendar-alt',
      content: '01-04-2021',
    },
    {
      icon: 'users',
      content: '5 vs 5',
    },
  ];
  var user = [];
  const profileStore = useSelector((state) => state.profile);
  if (profileStore.responseProfile) {
    user = profileStore.responseProfile;
  }
  const dataInfoUsers = [
    {
      icon: 'users',
      title: 'Câu Lạc Bộ: ',
      description: 'PNV',
    },
    {
      icon: 'info-circle',
      title: '',
      description: user.full_name,
    },
    {
      icon: 'phone',
      title: '',
      description: user.phone_numbers,
    },
  ];
  const [haveField, setHaveField] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtHeader}>Tạo Trận</Text>
        </View>
        <View style={styles.elementMatches}>
          {dataRoom.map((item, index) => {
            return (
              <View style={styles.itemElement} key={index}>
                <View style={styles.viewIcon}>
                  <Icon name={item.icon} style={styles.icon} />
                </View>
                <View style={styles.viewContent}>
                  <Text style={styles.txtViewContent}>{item.content}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.chooseField}>
          <View style={styles.itemChooseField}>
            <TouchableOpacity style={styles.btnChooseField}>
              <Text style={styles.txtBtnChooseField}>Chọn Sân</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemChooseField}>
            <View style={styles.itemItem}>
              <Text>N12</Text>
            </View>
            <View style={styles.itemItem}>
              <Icon name="caret-down" />
            </View>
          </View>
          <View style={styles.itemChooseFields}>
            <View style={styles.itemHave}>
              <Text>Đã Có Sân</Text>
            </View>
            <View style={styles.itemHaves}>
              {haveField ? (
                <TouchableOpacity style={styles.btnHaveField} onPress={() => setHaveField(false)}>
                  <Icon name="check" style={styles.iconHaveFields} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.btnHaveField} onPress={() => setHaveField(true)}>
                  <Icon name="check" style={styles.iconHaveField} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View style={styles.informationUser}>
          <View style={styles.imageUser}>
            <View style={styles.borderImage}>
              <Image source={thanh} style={styles.imageProfile} />
            </View>
          </View>
          <View style={styles.information}>
            {dataInfoUsers.map((item, index) => {
              return (
                <View style={styles.itemInfo} key={index}>
                  <View style={styles.iconInfo}>
                    <Icon name={item.icon} style={styles.iconInformation} />
                  </View>
                  <View style={styles.contentInfo}>
                    <Text style={styles.txtTitleInfo}>{item.title}</Text>
                    <Text style={styles.txtTitleInfo}>{item.description}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.descriptionRoom}>
          <TextInput
            multiline={true}
            style={styles.txtInputNameMatches}
            placeholder="Nhập Tên Trận Bạn muốn tạo"
            underlineColorAndroid="transparent"
            placeholderTextColor="grey"
          />
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Ghi chú !"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>
        <View style={styles.bottomRoom}>
          <DoubleButton txtTitleBtn1="Tạo Trận" txtTitleBtn2="Tìm Đối Thủ" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Room;
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  header: {
    height: 50,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtHeader: {
    fontSize: Font.title_child,
    fontWeight: 'bold',
  },
  elementMatches: {
    width: width,
    flexDirection: 'row',
    height: 40,
  },
  itemElement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.txtLevel3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    flexDirection: 'row',
  },
  viewIcon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 12,
    color: Color.primary,
  },
  viewContent: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtViewContent: { fontSize: 12 },
  chooseField: {
    height: 45,
    flexDirection: 'row',
    marginTop: 5,
  },
  itemChooseField: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.txtLevel3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    flexDirection: 'row',
  },
  itemChooseFields: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.txtLevel3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    flexDirection: 'row',
  },
  btnChooseField: {
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  itemHave: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemHaves: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 10,
  },
  btnHaveField: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.txtLevel3,
    borderRadius: 4,
  },
  iconHaveField: {
    fontSize: 13,
  },
  iconHaveFields: {
    fontSize: 13,
    color: Color.secondary,
  },
  informationUser: {
    width: width,
    flexDirection: 'row',
    height: 200,
    borderEndColor: Color.txtLevel3,
    borderWidth: 1,
  },
  imageUser: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderImage: {
    width: 110,
    height: 110,
    borderColor: Color.primary,
    borderWidth: 4.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
  },
  imageProfile: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  information: {
    flex: 1.5,
    marginTop: 20,
    height: 160,
  },
  itemInfo: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iconInfo: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInformation: {
    fontSize: 20,
    color: Color.primary,
  },
  contentInfo: {
    flex: 7.5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtTitleInfo: {
    fontSize: Font.font_description,
    fontWeight: 'bold',
  },
  descriptionRoom: {
    height: 150,
    margin: (20 / startWidth) * width,
  },
  txtInputNameMatches: {
    borderColor: Color.txtLevel3,
    borderWidth: 0.5,
    height: 40,
    borderRadius: 4,
    color: Color.txtLevel1,
  },
  textArea: {
    marginTop: 10,
    height: 100,
    borderColor: Color.txtLevel3,
    borderWidth: 0.5,
    justifyContent: 'flex-end',
    borderRadius: 4,
    color: Color.txtLevel1,
  },
  bottomRoom: {
    flexDirection: 'row',
  },
});
