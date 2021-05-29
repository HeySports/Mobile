import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Colors, Fonts } from '../../themes';
const ModelJoinTeam = ({
  handleModel,
  labelBtn1,
  labelBtn2,
  checkModel,
  title,
  description,
  styleInput1,
  styleInput2,
  styleDescription,
  styleBtn1,
  styleBtn2,
  styleTxtBtn1,
  styleTxtBtn2,
  styleBodyModel,
  placeholderTxt1,
  placeholderTxt2,
  multiline,
  numberOfLines,
  value1,
  value2,
  setValueText1,
  setValueText2,
  handleAction,
  styleDescriptionView,
  checkBtn,
  keyboardType,
}) => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleSetModel = () => {
    setModalVisible(false);
    handleModel();
  };
  const handleActionBtn = () => {
    setModalVisible(false);
    handleAction();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          style={styles.bodyModel}
        >
          <View style={[styles.bodyModel, styleBodyModel]}>
            <View style={styles.title}>
              <Text style={styles.txtTitle}>{title}</Text>
            </View>
            {checkModel ? (
              <View style={[styles.bodyModelInfo, styleDescriptionView]}>
                <Text style={[styles.description, styleDescription]}>{description}</Text>
              </View>
            ) : (
              <View style={styles.bodyModelInfo}>
                <TextInput
                  style={[styles.txtInput, styleInput1]}
                  placeholder={placeholderTxt1}
                  defaultValue={value1}
                  keyboardType={keyboardType}
                  returnKeyType={'next'}
                  onChangeText={(text) => setValueText1(text)}
                />
                <TextInput
                  style={[styles.txtInput, styleInput2, { marginTop: 10 }]}
                  placeholder={placeholderTxt2}
                  multiline={multiline}
                  numberOfLines={numberOfLines}
                  lineHeight={20}
                  defaultValue={value2}
                  onChangeText={(text) => setValueText2(text)}
                />
              </View>
            )}
            {checkModel ? (
              <View style={styles.btnBottom}>
                <TouchableOpacity
                  onPress={handleSetModel}
                  style={[styles.btn, styleBtn1, { backgroundColor: Colors.secondary }]}
                >
                  <Text style={[styles.txtBtn, styleTxtBtn1]}>{labelBtn1}</Text>
                </TouchableOpacity>
                {checkBtn && (
                  <TouchableOpacity
                    onPress={handleActionBtn}
                    style={[
                      styles.btn,
                      styleBtn2,
                      { marginLeft: '10%', backgroundColor: Colors.primary },
                    ]}
                  >
                    <Text style={[styles.txtBtn, styleTxtBtn2]}>{labelBtn2}</Text>
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              <View style={styles.btnBottom}>
                <TouchableOpacity
                  onPress={handleSetModel}
                  style={[styles.btn, styleBtn1, { backgroundColor: Colors.secondary }]}
                >
                  <Text style={[styles.txtBtn, styleTxtBtn1]}>{labelBtn1}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleActionBtn}
                  style={[
                    styles.btn,
                    styleBtn2,
                    { marginLeft: '10%', backgroundColor: Colors.primary },
                  ]}
                >
                  <Text style={[styles.txtBtn, styleTxtBtn2]}>{labelBtn2}</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default ModelJoinTeam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  bodyModel: {
    height: 250,
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '60%',
    borderRadius: 4,
    backgroundColor: Colors.white,
  },
  title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroud,
    borderRadius: 4,
  },
  txtTitle: {
    fontSize: Fonts.title_child2,
    fontWeight: 'bold',
  },
  bodyModelInfo: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  btnBottom: {
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  btn: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    borderRadius: 4,
  },
  txtBtn: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
  },
  description: {
    fontSize: Fonts.font_description,
    lineHeight: 20,
    textAlign: 'center',
  },
  txtInput: {
    height: 40,
    borderWidth: 0.5,
    width: '100%',
    borderRadius: 4,
    borderColor: Colors.txtLevel2,
  },
});
