import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Color from '../../themes/colors';
import thanh from '../../image/thanh.jpg';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { pushScreen } from '../../navigation/pushScreen';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import MatchesAction from '../../redux/MatchesRedux/actions';
import ModelNotification from '../../components/modelNotification';
import AsyncStorage from '@react-native-community/async-storage';
const Room = (props) => {
  var user = [];
  const profileStore = useSelector((state) => state.profile);
  const matches = useSelector((state) => state.matches);
  const dispatch = useDispatch();
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
  const [fieldChoose, setFieldChoose] = useState(false);
  const [IdField, setIdField] = useState('');
  const [typeField, setTypeField] = useState();
  const [childField, setChildField] = useState(false);
  var id_field_choose = props.data;
  const listField = useSelector((state) => state.fields.responseField);
  const listChidField = useSelector((state) => state.fields.responseGetChildField);
  const [date, setDate] = useState(new Date());
  const [nameRoom, setNameRoom] = useState('');
  const [descriptionRoom, setDescriptionRoom] = useState('');
  const [error, setError] = useState('');
  const [checkModel, setCheckModel] = useState(false);
  // Function
  useEffect(() => {
    if (id_field_choose) {
      listField?.forEach((element) => {
        if (element.id === id_field_choose) {
          setFieldChoose(element);
        }
      });
      let array = [];
      listChidField?.forEach((element) => {
        if (id_field_choose === element.id_field) {
          array.push(element);
        }
      });
      setChildField(array);
    }
  }, [id_field_choose, listChidField, listField]);
  const listFieldScreen = () => {
    pushScreen(props.componentId, 'ListField', '', 'ListField', false, '', '');
  };

  const handleCreateMatch = async () => {
    var id_field = '';
    if (haveField) {
      id_field = 7;
    } else {
      if (id_field_choose) {
        id_field = id_field_choose;
      }
    }
    if (descriptionRoom === '') {
      setDescriptionRoom('description');
    }
    if (id_field === '') {
      setError('Bạn chưa chọn sân, nếu bạn có sân rồi hãy chọn đã có sân');
    } else if (nameRoom === '') {
      setError('Bạn phải nhập tên phòng !');
    } else {
      const data = {
        id_field_play: id_field,
        type_field: typeField,
        time_start_play: date,
        time_end_play: date,
        name_room: nameRoom,
        description: descriptionRoom,
      };
      dispatch(MatchesAction.userPostMatch(data));
      await setCheckModel(true);
    }
  };
  const setModel = () => {
    setCheckModel(false);
  };
  const screenMatchDetail = () => {
    pushScreen(
      props.componentId,
      'DetailRoom',
      matches?.responsePostMatch?.data.id,
      'DetailRoom',
      false,
      '',
      '',
    );
  };
  return (
    <View style={styles.container}>
      {checkModel && (
        <ModelNotification
          showModel={setModel}
          function={screenMatchDetail}
          title={matches?.responsePostMatch?.message}
          description={matches?.responsePostMatch?.error}
        />
      )}
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Tạo Trận</Text>
      </View>
      <ScrollView>
        <View style={styles.elementMatches}>
          <View style={styles.itemElementLock}>
            <View style={styles.viewIconLock}>
              <Icon name="lock" style={styles.iconLock} />
            </View>
            <View style={styles.viewContentLock}>
              <Text style={styles.txtViewContent}>1</Text>
            </View>
          </View>
          <View style={styles.itemElementType}>
            <View style={styles.viewIconType}>
              <Icon name="users" style={styles.icon} />
            </View>
            <View style={styles.viewContentType}>
              <Picker
                style={styles.chooseChildField}
                selectedValue={typeField}
                onValueChange={(itemValue) => setTypeField(itemValue)}
              >
                <Picker.Item label="5 vs 5" value={5} />
                <Picker.Item label="7 vs 7" value={7} />
                <Picker.Item label="11 vs 11" value={11} />
              </Picker>
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
        <View style={styles.itemElement}>
          <View style={styles.viewContentDate}>
            <DatePicker
              date={date}
              onDateChange={setDate}
              style={styles.datePicker}
              androidVariant="nativeAndroid"
              locale="vi_VN"
            />
          </View>
        </View>
        {haveField ? (
          <View />
        ) : (
          <View style={styles.chooseField}>
            <View style={styles.itemChooseField}>
              <TouchableOpacity style={styles.btnChooseField} onPress={listFieldScreen}>
                <Text style={styles.txtBtnChooseField}>
                  {fieldChoose ? fieldChoose.name : 'Chọn Sân'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.itemChooseField}>
              <View style={styles.itemItem}>
                <Picker
                  style={styles.chooseChildField}
                  selectedValue={IdField}
                  onValueChange={(itemValue) => setIdField(itemValue)}
                >
                  {childField ? (
                    childField.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index}
                          label={item.name_field}
                          value={item.id}
                          style={styles.itemChooseChildField}
                        />
                      );
                    })
                  ) : (
                    <Picker.Item label="" value="" style={styles.itemChooseChildField} />
                  )}
                </Picker>
              </View>
            </View>
          </View>
        )}
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
            style={styles.txtInputNameMatches}
            placeholder="Nhập Tên Trận Bạn muốn tạo"
            placeholderTextColor="grey"
            onChangeText={(text) => setNameRoom(text)}
          />
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Ghi chú !"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            onChangeText={(text) => setDescriptionRoom(text)}
          />
        </View>
        <View style={styles.bottomRoom}>
          <View style={styles.viewError}>
            <Text style={styles.txtError}>{error && error}</Text>
          </View>
          <Button
            titleBtn="Tạo Trận"
            checkBtn={true}
            checkColor={false}
            function={handleCreateMatch}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Room;
const { width } = Dimensions.get('window');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    width: width,
  },
  viewError: {
    width: width,
    height: 30,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtError: {
    fontSize: 15,
    color: Color.error,
    textAlign: 'center',
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
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  itemElementLock: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.txtLevel3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    flexDirection: 'row',
  },
  itemElementType: {
    flex: 1.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.txtLevel3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    flexDirection: 'row',
  },
  iconLock: {
    marginLeft: 4,
    fontSize: 12,
    color: Color.primary,
  },
  viewIconLock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContentLock: {
    flex: 1,
    justifyContent: 'center',
  },
  viewIconType: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContentType: {
    flex: 7,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewIcons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContentDate: {
    marginLeft: (20 / startWidth) * width,
    marginRight: (20 / startWidth) * width,
    width: width - (40 / startWidth) * width,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  datePicker: {
    width: width - (40 / startWidth) * width,
    height: 80,
    fontSize: 10,
  },
  icon: {
    fontSize: 12,
    color: Color.primary,
  },
  viewContents: {
    flex: 2,
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
    flex: 1,
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
  chooseChildField: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemChooseChildField: {
    width: 100,
    backgroundColor: Color.backgroud,
  },
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
    height: 180,
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
    height: 110,
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
    height: 80,
    borderColor: Color.txtLevel3,
    borderWidth: 0.5,
    textAlignVertical: 'top',
    borderRadius: 4,
    color: Color.txtLevel1,
  },
  bottomRoom: {
    width: width - (50 / startWidth) * width,
    marginLeft: (25 / startWidth) * width,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
});
