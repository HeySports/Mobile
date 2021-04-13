import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import image from '../image/duytan.jpg';
import Fonts from '../themes/font';
import Colors from '../themes/colors';
import Button from './DoubleButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../navigation/pushScreen';
import Star from '../components/Star';
const ItemField = (props) => {
  const field = props.field;
  const chooseField = () => {
    pushScreen(props.idProps, 'Room', field.id, 'Room', false, '', '');
  };
  const detailField = () => {
    pushScreen(props.idProps, 'Detail', field.id, 'Detail', false, '', '');
  };
  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <View style={styles.imageField}>
          <Image source={image} style={styles.image} />
          <View style={styles.rating}>
            <Star star={field?.rating} />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.nameField}>{field?.name.toUpperCase()}</Text>
          <View style={styles.itemContent}>
            <View style={styles.itemIcon}>
              <Icon name="envelope" style={styles.icon} />
            </View>
            <View style={styles.description}>
              <Text style={styles.txtDescription}>{field?.email_field}</Text>
            </View>
          </View>
          <View style={styles.itemContent}>
            <View style={styles.itemIcon}>
              <Icon name="phone" style={styles.icon} />
            </View>
            <View style={styles.description}>
              <Text style={styles.txtDescription}>{field?.phone_numbers}</Text>
            </View>
          </View>
          <View style={styles.itemContent}>
            <View style={styles.itemIcon}>
              <Icon name="map-marker-alt" style={styles.icon} />
            </View>
            <View style={styles.description}>
              <Text style={styles.txtDescription}>{field?.address}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.action}>
        <Button
          txtTitleBtn2="Chi Tiết"
          txtTitleBtn1="Chọn"
          functionBtn1={chooseField}
          functionBtn2={detailField}
        />
      </View>
    </View>
  );
};
export default ItemField;
const { width } = Dimensions.get('screen');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginLeft: (20 / startWidth) * width,
    marginRight: (20 / startWidth) * width,
    width: width - (40 / startWidth) * width,
    backgroundColor: '#E5E5E5',
    height: 150,
  },
  information: {
    flex: 2.5,
    flexDirection: 'row',
  },
  imageField: {
    height: '100%',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 8,
    width: '100%',
  },
  rating: {
    flex: 1.2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 3,
  },
  nameField: {
    height: 20,
    textAlign: 'center',
    width: '100%',
    marginTop: 2,
    fontSize: Fonts.font_description,
    fontWeight: '700',
  },
  itemContent: {
    flexDirection: 'row',
    flex: 1,
  },
  itemIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  description: {
    flex: 4,
    justifyContent: 'center',
  },
  icon: {
    fontSize: Fonts.font_description,
    color: Colors.primary,
  },
  action: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
