import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../themes/colors';
import Fonts from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemField from '../../components/ItemField';
import { goBack } from '../../navigation/pushScreen';
import { useSelector } from 'react-redux';
const ListField = (props) => {
  const fields = useSelector((state) => state.fields.responseField);
  const [listField, setListField] = useState(fields);
  const [txtSearch, setTxtSearch] = useState('');
  useEffect(() => {
    if (fields) {
      setListField(fields);
    }
  }, [fields]);
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const searchField = () => {
    const dataSearch = txtSearch;
    const resultSearch = [];
    fields?.forEach((element) => {
      if (element.name.indexOf(dataSearch) > -1) {
        resultSearch.push(element);
      }
    });
    setListField(resultSearch);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchHeader}>
          <View style={styles.iconSearch}>
            <TouchableOpacity style={styles.btnICon} onPress={goBackScreen}>
              <Icon name="long-arrow-alt-left" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.txtSearchIcon}>
            <TextInput
              style={styles.txtSearch}
              placeholder="Tìm kiếm sân bóng"
              onChangeText={(text) => setTxtSearch(text)}
            />
          </View>
          <View style={styles.iconSearch}>
            <TouchableOpacity style={styles.btnICon} onPress={searchField}>
              <Icon name="search" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={styles.containerListField}>
        {listField?.map((item, index) => {
          return <ItemField key={index} field={item} idProps={props.componentId} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ListField;
const { width } = Dimensions.get('screen');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    width: width,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.txtLevel2,
    justifyContent: 'center',
  },
  searchHeader: {
    marginLeft: (15 / startWidth) * width,
    marginRight: (15 / startWidth) * width,
    width: width - (30 / startWidth) * width,
    height: '70%',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: Colors.txtLevel2,
    borderRadius: 15,
  },
  iconSearch: {
    flex: 1.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
    color: Colors.txtLevel3,
  },
  txtSearchIcon: {
    flex: 7,
    justifyContent: 'center',
  },
  txtSearch: {
    paddingVertical: 0,
    fontSize: Fonts.font_description,
  },
  containerListField: {
    marginTop: 20,
    marginBottom: 60,
  },
});
