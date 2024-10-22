import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, Dimensions, TouchableOpacity } from 'react-native';
import Color from '../themes/colors';
import Font from '../themes/font';
const ModelComment = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
  const closeModel = () => {
    setModalVisible(false);
    props.showModel();
  };
  const handleCloseModel = () => {
    setModalVisible(false);
    props.showModel();
    props.function();
  };
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <View style={styles.title}>
            <Text style={styles.txtTitle}>{props.description ? 'THẤT BẠI' : 'THÀNH CÔNG'}</Text>
          </View>
          <View style={styles.bodyModel}>
            <Text style={styles.txtDescription}>
              {props.description ? props.description : props.checkMessage}
            </Text>
          </View>
          {props.checkMessage ? (
            <View style={styles.bottomDoubleButton}>
              <View style={styles.itemBtn}>
                <TouchableOpacity onPress={closeModel} style={styles.itemBtnModel}>
                  <Text style={styles.txtButton}>{props.titleBtnLeft}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemBtn}>
                <TouchableOpacity onPress={handleCloseModel} style={styles.itemBtnModel}>
                  <Text style={styles.txtButton}>{props.titleBtnRight}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.bottomModel}>
              <TouchableOpacity
                onPress={props.description ? closeModel : handleCloseModel}
                style={styles.btnModel}
              >
                <Text style={styles.txtButton}>Xác Nhận</Text>
              </TouchableOpacity>
            </View>
          )}
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
    marginTop: (400 / startHeight) * height,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: 150,
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
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  bottomModel: {
    width: '100%',
    flex: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtError: {
    color: Color.error,
    fontSize: 12,
    textAlign: 'center',
  },
  btnModel: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    height: 40,
    borderRadius: 8,
  },
  txtButton: {
    fontSize: 16,
    fontWeight: '700',
  },
  txtDescription: {
    fontSize: Font.font_description,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomDoubleButton: {
    width: '100%',
    flexDirection: 'row',
    flex: 1.2,
  },
  itemBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
  },
  itemBtnModel: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    height: 35,
    borderRadius: 4,
  },
});
