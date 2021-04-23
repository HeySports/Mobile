import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { pushScreen } from '../../navigation/pushScreen';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import MatchesAction from '../../redux/MatchesRedux/actions';
import ModelNotification from '../../components/modelNotification';
import Loading from '../../components/Loading';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Room = (props) => {
  const fields = useSelector((state) => state.fields);
  const profileStore = useSelector((state) => state.profile);
  const matches = useSelector((state) => state.matches);
  const priceField = fields?.responsePriceField?.length ? fields?.responsePriceField[0]?.price : 0;
  const dispatch = useDispatch();
  const [haveField, setHaveField] = useState(false);
  const [fieldChoose, setFieldChoose] = useState(false);
  const [IdField, setIdField] = useState('');
  const [typeField, setTypeField] = useState(5);
  const [childField, setChildField] = useState(false);
  var id_field_choose = props.data;
  const listChidField = fields?.responseGetChildField;
  const listField = fields?.responseField;

  const [error, setError] = useState('');
  const [checkModel, setCheckModel] = useState(false);
  const [payment, setPayment] = useState('');
  const [date, setDate] = useState(new Date());
  const [nameRoom, setNameRoom] = useState('');
  const [descriptionRoom, setDescriptionRoom] = useState('');
  const [membersHave, setMembersHave] = useState(false);
  const [opttion, setOpttion] = useState(false);
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
  }, [dispatch, id_field_choose, listChidField, listField, typeField]);
  const listFieldScreen = () => {
    pushScreen(props.componentId, 'ListField', typeField, 'ListField', false, '', '');
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
  const numberFormat = new Intl.NumberFormat('vi-VN', {
    currency: 'VND',
    style: 'currency',
  });
  const handleCreateMatch = async () => {
    var id_field = '';
    if (haveField) {
      id_field = 7;
    } else {
      if (id_field_choose) {
        id_field = id_field_choose;
      }
    }
    if (!id_field) {
      setError('Bạn chưa chọn sân, nếu bạn có sân rồi hãy chọn đã có sân');
    } else if (!nameRoom || !membersHave || !opttion || !descriptionRoom) {
      setError('Bạn phải cung cấp đầy đủ thông tin được yêu cầu !');
    } else {
      const data = {
        id_field_play: id_field,
        price: priceField,
        type_field: typeField,
        time_start_play: date,
        time_end_play: date,
        name_room: nameRoom,
        id_child_field: typeField ? typeField : 1,
        description: descriptionRoom,
        lose_pay: payment,
        numbers_user_added: membersHave,
      };
      createNewMatch(data);
    }
  };
  const createNewMatch = (data) => {
    dispatch(MatchesAction.userPostMatch(data));
    setCheckModel(true);
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
      {fields?.loading && <Loading />}
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.elementMatches}>
          <View style={styles.itemElementLock}>
            <View style={styles.viewIconLock}>
              <Icon name="lock" style={styles.iconLock} />
            </View>
            <View style={styles.viewContentLock}>
              <Text style={styles.txtViewContent}>{Math.floor(Math.random() * 10 + 1)}</Text>
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
                    <Picker.Item style={styles.itemChooseChildField} />
                  )}
                </Picker>
              </View>
            </View>
          </View>
        )}
        <View style={styles.titleInfo}>
          <Text style={styles.txtInfo}>Thông Tin Trận Đấu</Text>
        </View>
        <View style={styles.informationUser}>
          <View style={styles.itemInfo}>
            <View style={styles.infomationMatches}>
              <TextInput
                style={styles.txtInputNameMatches}
                placeholder="Tên đội"
                placeholderTextColor="grey"
                onChangeText={(text) => setNameRoom(text)}
              />
              <Picker
                style={styles.chosePayment}
                selectedValue={payment}
                onValueChange={(itemValue) => setPayment(itemValue)}
              >
                <Picker.Item label="Tỷ Lệ" value="0" />
                <Picker.Item label="7 / 3" value="7 / 3" />
                <Picker.Item label="6 / 4" value="6 / 4" />
                <Picker.Item label="5 / 5" value="5 / 5" />
                <Picker.Item label="100" value="100" />
              </Picker>
              <TextInput
                style={styles.txtInputNameMatcheses}
                placeholder="Số cầu thủ đã có"
                placeholderTextColor="grey"
                onChangeText={(text) => setMembersHave(text)}
                keyboardType="number-pad"
              />
              <TextInput
                style={styles.txtInputNameMatches}
                placeholder="Hình thức"
                placeholderTextColor="grey"
                onChangeText={(text) => setOpttion(text)}
              />
            </View>
          </View>
          <View style={styles.itemInfos}>
            <View style={styles.itemTitleInfoField}>
              <Text style={styles.txtInfoField}>
                Người Tạo: {profileStore?.responseProfile?.full_name}
              </Text>
              <Text style={styles.txtInfoField}>
                Điện thoại: {profileStore?.responseProfile?.phone_numbers}
              </Text>
              <Text style={styles.txtInfoField}>
                Sân Bóng: {fieldChoose?.name ? fieldChoose?.name : 'Chưa có'}
              </Text>
              <Text style={styles.txtInfoField}>Giá sân: {numberFormat.format(priceField)}</Text>
              <Text style={styles.txtInfoField}>
                Địa Chỉ: {fieldChoose?.address ? fieldChoose?.address : 'Không xác định'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.descriptionRoom}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Mô tả !"
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
  txtTitleInfo: {
    fontSize: Font.font_description,
    fontWeight: 'bold',
  },
  descriptionRoom: {
    height: 110,
    margin: (20 / startWidth) * width,
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
  titleInfo: {
    width: width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInfo: {
    fontSize: 20,
    fontWeight: '700',
  },
  informationUser: {
    flexDirection: 'row',
    width: width,
  },
  itemInfo: {
    flex: 1,
    alignItems: 'center',
    borderColor: Color.error,
    borderRightWidth: 2,
  },
  itemInfos: {
    flex: 1,
    alignItems: 'center',
  },
  infomationMatches: {
    width: '80%',
  },
  txtInputNameMatches: {
    borderColor: Color.txtLevel3,
    borderBottomWidth: 0.5,
    height: 50,
    borderRadius: 4,
    color: Color.txtLevel1,
  },
  txtInputNameMatcheses: {
    borderColor: Color.txtLevel3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    height: 50,
    borderRadius: 4,
    color: Color.txtLevel1,
  },
  chosePayment: {
    backgroundColor: Colors.backgroud,
    height: 40,
    borderColor: Color.txtLevel3,
    borderBottomWidth: 0.5,
  },
  itemTitleInfoField: {
    width: '90%',
  },
  txtInfoField: {
    fontSize: Font.font_description,
    lineHeight: 30,
  },
});
