import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Font from '../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../themes/colors';
const Input = (props) => {
  const [checkInput, setCheckInput] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.txtInput}>
        {props.title + ' '}
        {props.required && <Text style={styles.txtInputRequired}>(*)</Text>}
      </Text>
      {props.checkPass ? (
        <View style={styles.itemInput}>
          <TextInput
            style={styles.input}
            secureTextEntry={checkInput}
            onChangeText={props.txtChange}
            keyboardType={props.checkTypeInput}
            returnKeyType={'next'}
          />
          {checkInput ? (
            <TouchableOpacity style={styles.btnIcon} onPress={() => setCheckInput(false)}>
              <Icon
                name={props.icon}
                style={[styles.iconInputs, props.tinColorIcon && { color: props.tinColorIcon }]}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btnIcon} onPress={() => setCheckInput(true)}>
              <Icon
                name="eye"
                style={[styles.iconInputs, props.tinColorIcon && { color: props.tinColorIcon }]}
              />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={[styles.itemInput, props.style && props.style]}>
          <TextInput
            style={styles.input}
            secureTextEntry={props.checkPass}
            onChangeText={props.txtChange}
            keyboardType={props.checkTypeInput}
            returnKeyType={'next'}
            multiline={props.multiline ? true : false}
            numberOfLines={props.numberOfLines && props.numberOfLines}
            textAlignVertical={props.textAlignVertical && props.textAlignVertical}
          />
          <Icon
            name={props.icon}
            style={[styles.iconInput, props.tinColorIcon && { color: props.tinColorIcon }]}
          />
        </View>
      )}
    </View>
  );
};
const { width } = Dimensions.get('window');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  txtInput: {
    fontSize: Font.font_description,
  },
  txtInputRequired: {
    color: Colors.error,
    fontSize: Font.font_description,
  },
  input: {
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 25,
    height: 40,
    width: '100%',
    backgroundColor: '#F5EFEF',
    borderColor: Colors.txtLevel3,
    fontSize: Font.font_description,
    paddingLeft: 20,
  },
  iconInput: {
    fontSize: 18,
    right: (30 / startWidth) * width,
    top: 20,
    color: Colors.primary,
  },
  itemInput: {
    flexDirection: 'row',
  },
  btnIcon: {
    width: 40,
    height: 40,
    marginTop: 10,
    fontSize: 18,
    right: (45 / startWidth) * width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInputs: {
    fontSize: 18,
    color: Colors.primary,
  },
});
export default Input;
