import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import http from '../../api/http';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import Colors from '../../themes/colors';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import fonts from '../../themes/font';
import Images from '../../image';
import ModelNotification from '../../components/modelNotification';
import moment from 'moment';
import OrderAction from '../../redux/OrdersRedux/actions';
import Loading from '../../components/Loading';
import { pushScreen } from '../../navigation/pushScreen';
import { Navigation } from 'react-native-navigation';
import { Platform, DeviceEventEmitter, NativeModules, NativeEventEmitter } from 'react-native';
import RNMomosdk from 'react-native-momosdk';
const EventEmitter = new NativeEventEmitter(NativeModules.RNMomosdk);

const Orders = (props) => {
  var nameField = '';
  var listChildField = useSelector((state) => state.fields.responseGetChildField);
  const listField = useSelector((state) => state.fields);
  var field = '';
  const [childField, setChildField] = useState(0);
  const [idField] = useState(props?.data?.id_field);
  const price = useSelector((state) => state.fields?.responsePriceField);
  const [momo, setMomo] = useState(false);
  const [payment, setPayment] = useState(false);
  const [card, setCard] = useState(false);
  const [typePayment, setTypePayment] = useState(false);
  const [model, setModel] = useState(false);
  var pricePayment = (price?.[0]?.price * 30) / 100;
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const [modelOrders, setModelOrders] = useState(false);
  const merchantname = 'Hey Sport momo';
  const merchantcode = 'CGV01';
  const merchantNameLabel = 'Nhà cung cấp';
  const billdescription = 'Thanh toán 30% tiền cọc sân';
  const enviroment = '0';
  listChildField?.forEach((element) => {
    if (element.id === childField) {
      nameField = element.name_field;
    }
  });
  listField?.responseField.forEach((element) => {
    if (element.id === idField) {
      field = element;
    }
  });
  const momoHandleResponse = async (response) => {
    try {
      if (response && response.status === 0) {
        await setMomo(true);
        await onPaymentByMomoText();
      } else {
        //let message = response.message;
        //Has Error: show message here
      }
    } catch (ex) {}
  };
  const onPaymentByMomo = async () => {
    let jsonData = {};
    jsonData.enviroment = enviroment;
    jsonData.action = 'gettoken';
    jsonData.merchantname = merchantname;
    jsonData.merchantcode = merchantcode;
    jsonData.merchantnamelabel = merchantNameLabel;
    jsonData.description = billdescription;
    jsonData.amount = pricePayment;
    jsonData.orderId = 'ID20181123192300';
    jsonData.orderLabel = 'Ma don hang';
    jsonData.appScheme = 'momocgv20170101';
    if (Platform.OS === 'android') {
      let dataPayment = await RNMomosdk.requestPayment(jsonData);
      await momoHandleResponse(dataPayment);
    } else {
      RNMomosdk.requestPayment(JSON.stringify(jsonData));
    }
  };
  const handleMomo = () => {
    setMomo(!momo);
    setCard(false);
    setPayment(false);
    setTypePayment(0);
    onPaymentByMomo();
  };
  const handleCard = () => {
    setMomo(false);
    setCard(!card);
    setPayment(false);
    setTypePayment(1);
  };
  const handlePayment = () => {
    setMomo(false);
    setCard(false);
    setPayment(!payment);
    setTypePayment(2);
  };
  const ItemTypePayment = ({ image, handleAction, title, color }) => {
    return (
      <TouchableOpacity style={styles.containerTypePayment} onPress={handleAction}>
        <View style={styles.image}>
          <Image source={image} style={styles.imagePayment} />
        </View>
        <View style={styles.titleItemPayment}>
          <Text style={styles.txtTitleItemPayment}>{title}</Text>
        </View>
        <View style={styles.activeItem} backgroundColor={color} />
      </TouchableOpacity>
    );
  };
  const onPaymentByMomoText = async () => {
    const idLastMatch = await http.get('/match/lastMatch');
    var time_start = props?.data?.time;
    var time_end = moment(time_start).add(1, 'hours');
    const dataOrder = await {
      id_match: idLastMatch?.data?.id_match,
      id_child_field: childField,
      time_start: moment(time_start).format('YYYY-MM-DD hh:mm:ss'),
      time_end: moment(time_end).format('YYYY-MM-DD hh:mm:ss'),
      method_pay: typePayment ? typePayment : 0,
      price: price?.[0]?.price,
      deposit: pricePayment,
    };
    await dispatch(OrderAction.userOrderField(dataOrder));
    setTimeout(function () {
      setModelOrders(true);
    }, 1000);
  };
  const handleOrder = async () => {
    if (!payment && !card) {
      setModel('Bạn chưa chọn hình thức thanh toán !');
    } else {
      const idLastMatch = await http.get('/match/lastMatch');
      var time_start = props?.data?.time;
      var time_end = moment(time_start).add(1, 'hours');
      const dataOrder = await {
        id_match: idLastMatch?.data?.id_match,
        id_child_field: childField,
        time_start: moment(time_start).format('YYYY-MM-DD hh:mm:ss'),
        time_end: moment(time_end).format('YYYY-MM-DD hh:mm:ss'),
        method_pay: typePayment ? typePayment : 0,
        price: price?.[0]?.price,
        deposit: pricePayment,
      };
      await dispatch(OrderAction.userOrderField(dataOrder));
      setTimeout(function () {
        setModelOrders(true);
      }, 1000);
    }
  };
  const handleModel = () => {
    setModel(false);
  };
  const handleModelOrder = () => {
    setModelOrders(false);
  };
  const handleAccept = () => {
    Navigation.popTo('FindMember');
  };
  console.log('................................................................', props);
  return (
    <SafeAreaView style={styles.container}>
      {model && <ModelNotification description={model} showModel={handleModel} />}
      {modelOrders && (
        <ModelNotification
          description={orders?.orders?.error}
          showModel={handleModelOrder}
          titleBtnLeft="Xác Nhận"
          checkMessage="Bạn đã đặt sân thành công, Hãy chọn Tạo Trận để tiếp tục tạo trận ! "
          function={handleAccept}
          titleBtnRight="Tạo Trận"
        />
      )}
      {orders.loading && <Loading />}
      {listField.loading && <Loading />}
      <Header title="Thanh Toán" idComponent={props.componentId} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.bodyPaymentField}>
        <View style={styles.chooseField}>
          <View style={styles.itemChooseField}>
            <Text style={styles.txtNameField}>{field?.name?.toUpperCase()}</Text>
          </View>
          <View style={styles.chooseChildField}>
            <Picker selectedValue={childField} onValueChange={(item) => setChildField(item)}>
              {listChildField?.map((item, index) => {
                console.log(
                  'item....................' +
                    props.data.type_field +
                    '............................................',
                  item.type,
                );

                return <Picker.Item key={index} label={item.name_field} value={item.id} />;
              })}
            </Picker>
          </View>
        </View>
        <View style={styles.bodyPayment}>
          <ItemPayment
            icons="soccer-field"
            label={
              'Loại sân ' +
              props?.data?.type_field +
              ' người sân ' +
              nameField +
              ' của sân ' +
              field?.name
            }
          />
          <ItemPayment icon="map-marked-alt" label={'Địa chỉ sân: ' + field?.address} />
          <ItemPayment icon="envelope" label={'Email: ' + field?.email_field} />
          <ItemPayment icon="phone-alt" label={'Số điện thoại: ' + field?.phone_numbers} />
          <ItemPayment icon="money-bill-wave" label={'Giá Sân: ' + price?.[0]?.price + ' VND'} />
          <ItemPayment
            icon="cc-paypal"
            label={'Tiền cọc: 30% tương ứng với ' + pricePayment + ' VND'}
          />
        </View>
        <View style={styles.typePayment}>
          <Text style={styles.txtTitleTypePayment}>HÌNH THỨC THANH TOÁN</Text>
        </View>
        <View style={styles.bodyTypePayment}>
          <ItemTypePayment
            image={Images.momo}
            title="Ví Điện Tử Momo"
            handleAction={handleMomo}
            color={momo ? Colors.primary : null}
          />
          <ItemTypePayment
            image={Images.card}
            title="Thẻ Ngân Hàng"
            handleAction={handleCard}
            color={card ? Colors.primary : null}
          />
          <ItemTypePayment
            image={Images.payment}
            title="Thanh Toán Khi Tới Sân"
            handleAction={handlePayment}
            color={payment ? Colors.primary : null}
          />
        </View>
        {card && (
          <View style={styles.notification}>
            <Text style={styles.txtNotification}>
              {'Bạn phải thanh toán 30% phí cọc đặt sân tương ừng với ' +
                pricePayment +
                ' VND vào số tài khoản ' +
                field?.credit +
                ' là số tài khoản của chủ sân trước khi đặt sân'}
            </Text>
          </View>
        )}
        <View style={styles.bottomPayment}>
          <TouchableOpacity style={styles.btnPayment} onPress={momo ? null : handleOrder}>
            <Text style={styles.txtBtnPayment}>ĐẶT SÂN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const ItemPayment = ({ icon, icons, label }) => {
  return (
    <View style={styles.itemPayment}>
      <View style={styles.iconPayment}>
        {icons && <Icons name={icons} style={styles.icon} />}
        {icon && <Icon name={icon} style={styles.icon} />}
      </View>
      <View style={styles.txtPayment}>
        <Text style={styles.txtText}>{label}</Text>
      </View>
    </View>
  );
};
export default Orders;
const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width: width,
  },
  chooseField: {
    height: 40,
    width: width,
    flexDirection: 'row',
    backgroundColor: Colors.secondary,
  },
  itemChooseField: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseChildField: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  txtNameField: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.black,
  },
  itemPayment: {
    height: 40,
    flexDirection: 'row',
    width: width,
  },
  iconPayment: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  txtPayment: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '86%',
    marginLeft: '4%',
  },
  icon: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '700',
  },
  txtText: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.txtLevel3,
    fontWeight: '700',
  },
  bodyPayment: {
    marginTop: 20,
  },
  typePayment: {
    height: 50,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitleTypePayment: {
    fontSize: fonts.title_child2,
    fontWeight: '700',
  },
  containerTypePayment: {
    height: 60,
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.txtLevel2,
  },
  image: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroud,
    borderRadius: 4,
  },
  imagePayment: {
    height: '70%',
    width: '70%',
  },
  titleItemPayment: {
    flex: 1,
  },
  activeItem: {
    height: 20,
    width: 20,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.txtLevel2,
  },
  txtTitleItemPayment: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700',
  },
  bottomPayment: {
    width: width,
    height: 70,
    paddingLeft: '15%',
    paddingRight: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  btnPayment: {
    height: 40,
    width: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnPayment: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.white,
  },
  notification: {
    height: 70,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  txtNotification: {
    fontSize: fonts.font_description,
    lineHeight: 20,
    textAlign: 'center',
  },
});
