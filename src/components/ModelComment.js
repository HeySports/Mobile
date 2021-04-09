import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, Dimensions, TextInput } from 'react-native';
import { Rating } from 'react-native-ratings';
import Color from '../themes/colors';
import Font from '../themes/font';
import Button from '../components/DoubleButton';
const ModelComment = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [star, setStar] = useState(0);
  const closeModel = () => {
    setModalVisible(false);
    props.showModel();
  };
  const closeModels = () => {
    setModalVisible(false);
    props.showModel();
  };
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <View style={styles.title}>
            <Text style={styles.txtTitle}>{props.title}</Text>
          </View>
          <View style={styles.bodyModel}>
            <View style={styles.rating}>
              <Rating
                type="custom"
                ratingColor="#daa520"
                ratingBackgroundColor="#c8c7c8"
                ratingCount={5}
                imageSize={25}
                style={styles.itemRating}
                onFinishRating={setStar}
              />
            </View>
            <View style={styles.comment}>
              <TextInput
                style={styles.txtComment}
                placeholder={props.description}
                numberOfLines={10}
                multiline={true}
              />
            </View>
          </View>
          <View style={styles.bottomModel}>
            <Button
              functionBtn1={closeModel}
              functionBtn2={closeModels}
              txtTitleBtn1="Hủy Bỏ"
              txtTitleBtn2="Đánh Giá"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModelComment;
const { height, width } = Dimensions.get('screen');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: (20 / startWidth) * width,
    marginTop: (178 / startHeight) * height,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: 250,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    width: '100%',
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: Font.title_child2,
    fontWeight: '700',
  },
  bodyModel: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  rating: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  itemRating: {
    paddingVertical: 10,
    marginTop: -15,
  },
  comment: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  txtComment: {
    width: '100%',
    height: '100%',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Color.txtLevel3,
    textAlignVertical: 'top',
  },
  bottomModel: {
    width: '100%',
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
