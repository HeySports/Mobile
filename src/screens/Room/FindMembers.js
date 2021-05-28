import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Colors, Fonts, ScreenSize } from '../../themes';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import field from '../../image/duytan.jpg';
import logo from '../../image/logo.png';
import { pushScreen } from '../../navigation/pushScreen';
import { useDispatch, useSelector } from 'react-redux';
import ActionMatch from '../../redux/MatchesRedux/actions';
import Star from '../../components/Star';
import Loading from '../../components/Loading';
import ModelNotification from '../../components/modelNotification';
const FindMembers = (props) => {
  const dataTypeField = [
    {
      title: '5 vs 5',
      value: 5,
    },
    {
      title: 'Loại Sân',
      value: 5,
    },

    {
      title: '7 vs 7',
      value: 7,
    },
    {
      title: '11 vs 11',
      value: 11,
    },
  ];
  const dataPayment = [
    {
      title: 'Tỉ lệ',
      value: '5/ 5',
    },
    {
      title: '5/ 5',
      value: '5/ 5',
    },

    {
      title: '6/ 4',
      value: '6/ 4',
    },
    {
      title: '7/ 3',
      value: '7/ 3',
    },
    {
      title: '8/ 2',
      value: '8/ 2',
    },
  ];
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields);
  const user = useSelector((state) => state.profile?.responseProfile);
  const matches = useSelector((state) => state.matches);
  const orders = useSelector((state) => state.orders.orders);
  const team = useSelector((state) => state.team?.team);
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [optionMatch] = useState(props?.data);
  const [checkField, setCheckField] = useState(false);
  const [description, setDescription] = useState('');
  const [typeField, setTypeField] = useState(5);
  const [members, setMembers] = useState('');
  const [error, setError] = useState(false);
  const [childFieldChoose, setChildFieldChoose] = useState('');
  const [losePayment, setLosePayment] = useState('5/5');
  const [nameRoom, setNameRoom] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState(0);
  const [nameField, setNameField] = useState('');
  const [checkModel, setCheckModel] = useState(false);
  const listField = fields?.responseField;
  const priceField = fields?.responsePriceField;
  const listChildFields = fields?.responseGetChildField;
  var dataListChildField = [{ title: 'Chọn sân đá', value: 'Chọn sân đá' }];
  if (listChildFields?.[0]?.name_field) {
    listChildFields.forEach((element) => {
      let data = {
        title: element.name_field,
        value: element.id,
      };
      dataListChildField.push(data);
    });
  }
  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');
    if (mode === 'time') {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setMode('date');
      setShow(Platform.OS !== 'ios');
    } else {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setShow(Platform.OS === 'ios');
      setMode('time');
    }
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showTimepicker = () => {
    showMode('time');
  };
  const HaveField = () => {
    return (
      <View style={styleComponent.haveField}>
        <View style={styleComponent.haveFieldTitle}>
          <Text>Đã Có Sân</Text>
        </View>
        <View style={styleComponent.buttonHaveFile}>
          <TouchableOpacity
            style={styleComponent.btnHaveField}
            onPress={orders?.orderInfo ? () => null : () => setCheckField(!checkField)}
          >
            <Icons
              name="check"
              style={styleComponent.iconHaveField}
              color={checkField ? Colors.secondary : Colors.txtLevel2}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const TypeField = (props) => {
    return (
      <View style={styleComponent.chooseTypeField}>
        <Picker
          selectedValue={
            (props.chooseTypeField && typeField) ||
            (props.listChild && childFieldChoose) ||
            (props.paymentType && losePayment)
          }
          onValueChange={(item) =>
            (props.chooseTypeField && setTypeField(item)) ||
            (props.listChild && setChildFieldChoose(item)) ||
            (props.paymentType && setLosePayment(item))
          }
        >
          {props.data?.map((item, index) => {
            return <Picker.Item key={index} label={item.title} value={item.value} />;
          })}
        </Picker>
      </View>
    );
  };
  const ItemTime = () => {
    return (
      <View style={styleComponent.containerChooseTime}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            minimumDate={new Date()}
            onChange={onChange}
          />
        )}
        <View
          style={styleComponent.rightChooseTime}
          backgroundColor={orders?.orderInfo ? Colors.txtLevel2 : null}
        >
          <TouchableOpacity
            style={styleComponent.btnChooseTime}
            onPress={orders?.orderInfo ? null : showTimepicker}
          >
            <Text style={styleComponent.txtBtnChooseTime}>
              {orders?.orderInfo
                ? moment(orders?.orderInfo?.time_start).format('hh:mm') +
                  ' ngày ' +
                  moment(time).format('DD') +
                  ' tháng ' +
                  moment(time).format('MM') +
                  ' năm ' +
                  moment(time).format('YYYY')
                : moment(time).format('hh:mm') +
                  ' ngày ' +
                  moment(time).format('DD') +
                  ' tháng ' +
                  moment(time).format('MM') +
                  ' năm ' +
                  moment(time).format('YYYY')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  // field
  const ChooseField = (props) => {
    return (
      <View style={styleComponent.chooseField}>
        <TouchableOpacity style={styleComponent.btnChooseField} onPress={props.function}>
          <Text style={styleComponent.txtTitleBtnChooseField}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const ItemMatches = (props) => {
    return (
      <View style={styleComponent.itemMatches}>
        {props.icon && (
          <View style={styleComponent.leftItemMatches}>
            <Icons name={props.icon} style={styleComponent.iconItemMatches} />
          </View>
        )}
        {props.title && (
          <View style={styleComponent.centerItemMatches}>
            <Text style={styleComponent.titleMatches}>{props.title}</Text>
          </View>
        )}
        {props.render && (
          <View
            style={
              props.checkRender ? styleComponent.rightItemMatches : styleComponent.rightItemMatch
            }
          >
            {props.render}
          </View>
        )}
      </View>
    );
  };
  //  function
  const pushScreenToScreen = (screen, data, time) => {
    if (time) {
      const dataChoose = {
        type: typeField,
        time: time,
        option: optionMatch,
      };
      pushScreen(props.componentId, screen, dataChoose, screen, false, '', '');
    } else {
      pushScreen(props.componentId, screen, data, screen, false, '', '');
    }
  };
  const handleCreateMatch = async () => {
    if (checkField) {
      if (!nameRoom) {
        setError('Bạn cần nhập tên của trận đấu!');
      } else if (!price) {
        setError('Bạn phải nhập giá sân bóng của bạn chơi!');
      } else if (!address) {
        setError('Bạn phải nhập địa chỉ sân bóng bạn chơi!');
      } else {
        if (optionMatch) {
          if (!matches) {
            setError('Bạn Cần phải nhấp số cầu thủ hiện tại bạn có!');
          } else {
            setError(null);
            const dataMatch = {
              name_room: nameRoom,
              user_id: user?.id,
              time_start_play: moment(time).format('YYYY-MM-DD hh:mm:ss'),
              price: price,
              type: optionMatch ? 0 : 1,
              lose_pay: losePayment,
              method_pay: 0,
              type_field: typeField,
              numbers_user_added: members,
              description: description,
              lock: 0,
              address: address,
              field_name: nameField,
            };
            await dispatch(ActionMatch.userPostMatch(dataMatch));
            setTimeout(function () {
              setCheckModel(true);
            }, 2000);
          }
        } else {
          if (!matches) {
            setError('Bạn Cần phải nhấp số cầu thủ hiện tại bạn có!');
          } else {
            setError(null);
            const dataMatch = {
              name_room: nameRoom,
              user_id: user?.id,
              time_start_play: moment(time).format('YYYY-MM-DD hh:mm:ss'),
              price: price,
              type: optionMatch ? 0 : 1,
              lose_pay: losePayment,
              method_pay: 0,
              type_field: typeField,
              numbers_user_added: members,
              description: description,
              lock: 0,
              address: address,
              field_name: nameField,
            };
            await dispatch(ActionMatch.userPostMatch(dataMatch));
            setTimeout(function () {
              setCheckModel(true);
            }, 2000);
          }
        }
      }
    } else {
      if (orders?.orderInfo) {
        if (!nameRoom) {
          setError('Bạn cần nhập tên của trận đấu !');
        } else {
          if (optionMatch) {
            if (!members) {
              setError('Bạn Cần phải nhập số cầu bạn hiện tại đac có!');
            } else {
              setError(null);
              const dataMatch = {
                name_room: nameRoom,
                user_id: user?.id,
                time_start_play: moment(time).format('YYYY-MM-DD hh:mm:ss'),
                price: orders?.orderInfo?.price,
                type: optionMatch ? 0 : 1,
                lose_pay: losePayment,
                method_pay: 0,
                type_field: typeField,
                numbers_user_added: members,
                description: description,
                lock: 0,
                address: fieldHaveChoose?.[0]?.address,
                field_name: fieldHaveChoose?.[0]?.name,
              };
              await dispatch(ActionMatch.userPostMatch(dataMatch));
              setTimeout(function () {
                setCheckModel(true);
              }, 2000);
            }
          } else {
            setError(null);
            const dataMatch = {
              name_room: nameRoom,
              user_id: user?.id,
              time_start_play: moment(time).format('YYYY-MM-DD hh:mm:ss'),
              price: orders?.orderInfo?.price,
              type: optionMatch ? 0 : 1,
              lose_pay: losePayment,
              method_pay: 0,
              type_field: typeField,
              numbers_user_added: members,
              description: description,
              lock: 0,
              address: fieldHaveChoose?.[0]?.address,
              field_name: fieldHaveChoose?.[0]?.name,
            };
            await dispatch(ActionMatch.userPostMatch(dataMatch));
            setTimeout(function () {
              setCheckModel(true);
            }, 2000);
          }
        }
      } else {
        setError(
          'Bạn chưa chọn sân, nếu bạn có sân rồi hãy chọn đã có sân và nhập thông tin sân của bạn!',
        );
      }
    }
  };
  const setModel = () => {
    setCheckModel(false);
  };
  var childFieldHaveChose = '';
  var fieldHaveChoose = [];
  listChildFields?.forEach((element) => {
    if (orders?.orderInfo?.id_child_field === element.id) {
      childFieldHaveChose = element.name_field;
    }
  });
  listField?.forEach((element) => {
    if (priceField?.[0]?.id_field === element.id) {
      let data = {
        name: element?.name,
        address: element?.address,
      };
      fieldHaveChoose.push(data);
    }
  });
  const handlePopToScreen = () => {
    pushScreen(props.componentId, 'Room', '', '', false, true, '', '');
  };
  const match_id = useSelector((state) => state.matches?.responsePostMatch?.data?.id);
  const handleDetailScreen = async () => {
    if (match_id) {
      pushScreen(
        props.componentId,
        optionMatch ? 'DetailRoom' : 'RoomDetail',
        match_id,
        '',
        false,
        true,
        '',
        '',
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {checkModel && (
        <ModelNotification
          showModel={setModel}
          function={handleDetailScreen}
          description={matches?.error?.data?.error}
          checkMessage={matches?.error?.data?.error ? null : 'Bạn đã tạo trận thành công !'}
          titleBtnLeft="Xác Nhận"
          titleBtnRight="Xem Chi Tiết"
        />
      )}
      {matches?.loading && <Loading />}
      <View style={styleComponent.header}>
        <View style={styleComponent.leftHeader}>
          <TouchableOpacity onPress={handlePopToScreen} style={styleComponent.btnBackScreen}>
            <Icons name="caret-left" style={styleComponent.iconHeader} />
          </TouchableOpacity>
        </View>
        <View style={styleComponent.titleHeader}>
          <Text style={styleComponent.txtTitleHeader}>Tạo Trận</Text>
        </View>
      </View>
      <ScrollView style={styles.containerBody} showsVerticalScrollIndicator={false}>
        <View style={styles.headerCreateRoom}>
          <ChooseOption
            icon="users"
            content={
              orders?.orderInfo ? (
                <Text>{'Loại sân ' + priceField?.[0].type_field + ' người'}</Text>
              ) : (
                <TypeField data={dataTypeField} chooseTypeField={true} />
              )
            }
          />
          <ChooseOption content={<HaveField />} />
        </View>
        <View style={styles.chooseTime}>
          <ChooseOption content={<ItemTime />} />
        </View>
        {checkField ? null : (
          <View
            style={styles.chooseTime}
            backgroundColor={orders?.orderInfo ? Colors.backgroud : null}
          >
            <ChooseField
              title={orders?.orderInfo ? fieldHaveChoose?.[0]?.name : 'Chọn Sân'}
              function={
                orders?.orderInfo ? null : () => pushScreenToScreen('ListField', typeField, time)
              }
            />
            <ChooseOption
              content={
                orders?.orderInfo ? (
                  <Text>{childFieldHaveChose}</Text>
                ) : (
                  <TypeField data={dataListChildField} listChild={true} />
                )
              }
            />
          </View>
        )}
        <View style={styles.title}>
          <Text style={styles.txtTitle}>THÔNG TIN TRẬN ĐẤU</Text>
        </View>
        {optionMatch ? (
          <View style={styles.bodyRoom}>
            <View style={styles.leftBodyRoom}>
              <Image source={field} style={styles.imageField} />
            </View>
            <View style={styles.rightBodyRoom}>
              {checkField ? (
                <View style={styleComponent.itemMatches}>
                  <View style={styleComponent.leftItemMatches}>
                    <Icons name="futbol" style={styleComponent.iconItemMatches} />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Nhập tên sân bóng"
                      onChangeText={(text) => setNameField(text)}
                    />
                  </View>
                </View>
              ) : (
                <ItemMatches
                  icon="futbol"
                  title={
                    orders?.orderInfo
                      ? 'Sân ' + childFieldHaveChose + ' sân ' + fieldHaveChoose?.[0]?.name
                      : 'Sân bóng bạn chọn'
                  }
                />
              )}
              {checkField ? (
                <View style={styleComponent.itemMatches}>
                  <View style={styleComponent.leftItemMatches}>
                    <Icons name="map-marked-alt" style={styleComponent.iconItemMatches} />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Nhập địa chỉ bạn chơi"
                      onChangeText={(text) => setAddress(text)}
                    />
                  </View>
                </View>
              ) : (
                <ItemMatches
                  icon="map-marked-alt"
                  title={orders?.orderInfo ? fieldHaveChoose?.[0]?.address : 'Địa chỉ sân'}
                />
              )}
              {checkField ? (
                <View style={styleComponent.itemMatches}>
                  <View style={styleComponent.leftItemMatches}>
                    <Icons name="money-bill-wave" style={styleComponent.iconItemMatches} />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Nhập giá sân bóng"
                      onChangeText={(text) => setPrice(text)}
                    />
                  </View>
                </View>
              ) : (
                <ItemMatches
                  icon="money-bill-wave"
                  title={orders?.orderInfo ? orders?.orderInfo?.price + ' đ' : 0 + ' đ'}
                />
              )}
              <ItemMatches
                icon="balance-scale"
                checkRender={true}
                render={<TypeField data={dataPayment} paymentType={true} />}
              />
              <View style={styleComponent.itemMatches}>
                <View style={styleComponent.leftItemMatches}>
                  <Icons name="users" style={styleComponent.iconItemMatches} />
                </View>
                <View>
                  <TextInput
                    placeholder="Nhập số cầu bạn đã có"
                    keyboardType="number-pad"
                    onChangeText={(text) => setMembers(text)}
                  />
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.bodyRoom}>
            <View style={styles.leftBodyRoom}>
              <View style={styles.borderImage}>
                <Image source={logo} style={styles.imgLogo} />
              </View>
              <View style={styles.informationTeam}>
                <Star star={team?.[0]?.rating} />
                <Text style={styles.txtNameTeam}>{team?.[0]?.name?.toUpperCase()}</Text>
              </View>
            </View>
            <View style={styles.rightBodyRoom}>
              <ItemMatches icon="phone" title={user?.phone_numbers} />
              {checkField ? (
                <View style={styleComponent.itemMatches}>
                  <View style={styleComponent.leftItemMatches}>
                    <Icons name="futbol" style={styleComponent.iconItemMatches} />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Nhập tên sân bóng"
                      onChangeText={(text) => setNameField(text)}
                    />
                  </View>
                </View>
              ) : (
                <ItemMatches
                  icon="futbol"
                  title={
                    orders?.orderInfo
                      ? 'Sân ' + childFieldHaveChose + ' sân ' + fieldHaveChoose?.[0]?.name
                      : 'Sân bóng bạn chọn'
                  }
                />
              )}
              {checkField ? (
                <View style={styleComponent.itemMatches}>
                  <View style={styleComponent.leftItemMatches}>
                    <Icons name="map-marked-alt" style={styleComponent.iconItemMatches} />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Nhập địa chỉ bạn chơi"
                      onChangeText={(text) => setAddress(text)}
                    />
                  </View>
                </View>
              ) : (
                <ItemMatches
                  icon="map-marked-alt"
                  title={orders?.orderInfo ? fieldHaveChoose?.[0]?.address : 'Địa chỉ sân'}
                />
              )}
              {checkField ? (
                <View style={styleComponent.itemMatches}>
                  <View style={styleComponent.leftItemMatches}>
                    <Icons name="money-bill-wave" style={styleComponent.iconItemMatches} />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Nhập giá sân bóng"
                      onChangeText={(text) => setPrice(text)}
                    />
                  </View>
                </View>
              ) : (
                <ItemMatches
                  icon="money-bill-wave"
                  title={orders?.orderInfo ? orders?.orderInfo?.price + ' đ' : 0 + ' đ'}
                />
              )}
              <ItemMatches
                icon="balance-scale"
                checkRender={true}
                render={<TypeField data={dataPayment} paymentType={true} />}
              />
            </View>
          </View>
        )}
        <View style={styles.descriptionMatches}>
          <View style={styles.roomName}>
            <TextInput
              style={styles.nameRoom}
              placeholder="Tên Trận đấu"
              placeholderTextColor="grey"
              onChangeText={(text) => setNameRoom(text)}
            />
          </View>

          <TextInput
            style={styles.inputDescription}
            placeholder="Mô tả !"
            placeholderTextColor="grey"
            defaultValue="Mô tả !"
            numberOfLines={10}
            multiline={true}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        {error && (
          <View style={styles.error}>
            <Text style={styles.txtError}>{error}</Text>
          </View>
        )}
        <View style={styles.bottomRoom}>
          <TouchableOpacity style={styles.btnCreateMatches} onPress={handleCreateMatch}>
            <Text style={styles.txtBtnCreateMatches}>TẠO TRẬN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default FindMembers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBody: {
    flex: 1,
  },
  headerCreateRoom: {
    flexDirection: 'row',
    height: 40,
    width: ScreenSize.Screen_Width,
  },
  chooseTime: {
    height: 40,
    flexDirection: 'row',
    width: ScreenSize.Screen_Width,
  },
  title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  txtTitle: {
    fontSize: Fonts.title_child3,
    color: '#000000',
    fontWeight: '700',
  },
  bodyRoom: {
    padding: 10,
    flexDirection: 'row',
  },
  leftBodyRoom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  imageField: {
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
  rightBodyRoom: {
    flex: 1.5,
  },
  descriptionMatches: {
    width: ScreenSize.Screen_Width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roomName: {
    height: 40,
    width: ScreenSize.Screen_Width - 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.txtLevel2,
  },
  inputDescription: {
    marginTop: 20,
    width: '80%',
    height: 120,
    borderColor: Colors.txtLevel3,
    borderWidth: 1,
    textAlignVertical: 'top',
    borderRadius: 4,
    color: Colors.txtLevel1,
  },
  bottomRoom: {
    width: ScreenSize.Screen_Width,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCreateMatches: {
    width: '70%',
    height: 40,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnCreateMatches: {
    fontSize: Fonts.font_description,
    fontWeight: '700',
  },
  error: {
    width: ScreenSize.Screen_Width,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  txtError: {
    fontSize: Fonts.font_description,
    color: Colors.error,
    textAlign: 'center',
  },
  imgLogo: {
    height: 80,
    width: 80,
  },
  borderImage: {
    height: 120,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 60,
  },
  informationTeam: {
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNameTeam: {
    textAlign: 'center',
    fontSize: Fonts.font_description,
    fontWeight: '700',
  },
});
export const ChooseOption = (props) => {
  return (
    <View
      style={props.content ? styleComponent.itemChooseOption : styleComponent.itemChooseOptions}
    >
      {props.icon && (
        <View style={props.content ? styleComponent.icon : styleComponent.icons}>
          <Icons name={props.icon} style={styleComponent.iconComponent} />
        </View>
      )}
      <View style={styleComponent.contentComponent}>
        {props.content ? (
          props.content
        ) : (
          <Text> {props.title ? props.title : Math.floor(Math.random() * 1000)}</Text>
        )}
      </View>
    </View>
  );
};
const styleComponent = StyleSheet.create({
  itemChooseOption: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    borderWidth: 0.5,
    borderColor: Colors.txtLevel3,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  itemChooseOptions: {
    flex: 0.4,
    flexDirection: 'row',
    height: '100%',
    borderWidth: 0.5,
    borderColor: Colors.txtLevel3,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  icons: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  iconComponent: {
    color: Colors.primary,
    fontSize: Fonts.font_description,
  },
  contentComponent: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseTypeField: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  haveField: {
    flexDirection: 'row',
    height: '100%',
  },
  haveFieldTitle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonHaveFile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnHaveField: {
    height: 25,
    width: 25,
    backgroundColor: Colors.txtLevel2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconHaveField: {
    fontSize: 14,
  },
  containerChooseTime: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftChooseTime: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  rightChooseTime: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  iconChooseTime: {
    fontSize: 25,
    color: Colors.primary,
  },
  btnChooseTime: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnChooseTime: {
    fontSize: Fonts.title_child4,
  },
  chooseField: {
    flex: 1,
    backgroundColor: Colors.backgroud,
  },
  btnChooseField: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.txtLevel3,
  },
  txtTitleBtnChooseField: {
    fontSize: Fonts.title_child4,
    color: Colors.primary,
    fontWeight: '700',
  },
  itemMatches: {
    height: 40,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.txtLevel2,
  },
  leftItemMatches: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerItemMatches: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightItemMatches: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightItemMatch: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconItemMatches: {
    fontSize: 14,
    color: Colors.primary,
  },
  header: {
    height: 45,
    width: ScreenSize.Screen_Width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.txtLevel2,
  },
  leftHeader: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitleHeader: {
    fontSize: Fonts.title_child,
    fontWeight: '700',
  },
  btnBackScreen: {
    height: 40,
    width: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconHeader: {
    fontSize: 20,
  },
});
