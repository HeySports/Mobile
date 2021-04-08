import React, { useState } from 'react';
import { Dimensions, Keyboard, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pushScreen } from '../../navigation/pushScreen';
const Index = (props) => {
  const [txtSearch, setTxtSearch] = useState('');
  const searchResult = () => {
    pushScreen(props.componentId, 'ResultSearch', txtSearch, 'ResultSearch', false, '', '');
    Keyboard.dismiss;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.viewSearch}>
          <View style={styles.viewTxtSearch}>
            <TextInput
              style={styles.txtSearch}
              placeholder="Tìm Kiếm"
              onChangeText={(text) => setTxtSearch(text)}
              value={txtSearch}
            />
          </View>
          <View style={styles.viewBtnSearch}>
            <TouchableOpacity style={styles.btnSearch} onPress={() => searchResult()}>
              <Icon name="search" style={styles.iconSearch} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Index;
const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  header: {
    width: width,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewSearch: {
    width: width - 40,
    height: 30,
    marginLeft: 20,
    borderRadius: 15,
    marginRight: 20,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: Color.txtLevel3,
  },
  viewTxtSearch: {
    flex: 8.5,
  },
  txtSearch: {
    height: 30,
    width: '100%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingLeft: 15,
    fontSize: Font.font_description,
    paddingVertical: 0,
  },
  viewBtnSearch: {
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  btnSearch: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  iconSearch: {
    fontSize: Font.font_description,
    color: Color.txtLevel3,
  },
});
