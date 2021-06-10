import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchActions from '../../redux/SearchRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import Back from '../../components/Back';
import { goBack } from '../../navigation/pushScreen';
import RoomItem from '../../components/Room';
import ItemRoom from '../../components/ItemRoom';
const Index = (props) => {
  const { responseMatches } = useSelector((state) => state.matches);
  const { getHistories, loading } = useSelector((state) => state.search);
  const [listMatches, setListMatches] = useState(responseMatches);
  const [typeViews, setTypeViews] = useState(true);
  const [txtSearch, setTxtSearch] = useState('');
  const dispatch = useDispatch();
  const handleSearch = (txt) => {
    setTxtSearch(txt);
    const dataSearch = txtSearch.toLowerCase();
    const resultSearch = [];
    responseMatches?.forEach((element) => {
      if (
        element?.match.name_room?.toLowerCase()?.indexOf(dataSearch) > -1 ||
        element?.match?.address?.toLowerCase()?.indexOf(dataSearch) > -1 ||
        (element?.field_play &&
          element?.field_play?.[0]?.name?.toLowerCase()?.indexOf(dataSearch) > -1) ||
        element?.team_a?.members?.[0]?.full_name?.toLowerCase()?.indexOf(dataSearch) > -1 ||
        element?.team_a?.members[0]?.team_name?.toLowerCase()?.indexOf(dataSearch) > -1
      ) {
        resultSearch.push(element);
      }
    });
    setListMatches(resultSearch);
  };
  const searchResult = () => {
    dispatch(SearchActions.userPostHistoriesSearch({ description: txtSearch }));
    Keyboard.dismiss();
  };
  useEffect(() => {
    dispatch(SearchActions.userGetHistoriesSearch());
  }, [dispatch]);

  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const getTextSearch = (text) => {
    setTxtSearch(text);
  };
  const setTypeView = () => {
    setTypeViews(!typeViews);
  };
  const deleteHistories = (id) => {
    dispatch(SearchActions.userDeleteHistories(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back goBack={goBackScreen} />
        <View style={styles.viewSearch}>
          <View style={styles.viewTxtSearch}>
            <TextInput
              style={styles.txtSearch}
              placeholder="Tìm Kiếm"
              onChangeText={(txt) => handleSearch(txt)}
              defaultValue={txtSearch}
              onSubmitEditing={searchResult}
            />
          </View>
          <View style={styles.viewBtnSearch}>
            <TouchableOpacity style={styles.btnSearch} onPress={searchResult}>
              <Icon name="search" style={styles.iconSearch} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {txtSearch ? (
        <View style={styles.result}>
          <View style={styles.headerResult}>
            <View style={styles.resultTxt}>
              <Text style={styles.txtResult}>KẾT QUẢ CHO: {txtSearch}</Text>
            </View>
            <View style={styles.typeViews}>
              <TouchableOpacity style={styles.btnIcon} onPress={setTypeView}>
                <Icon name={typeViews ? 'list' : 'th-large'} style={styles.iconTypes} />
              </TouchableOpacity>
            </View>
          </View>
          {typeViews ? (
            <ScrollView style={styles.viewRoom}>
              {listMatches?.map((item, index) => {
                return <RoomItem room={item} idComponent={props.componentId} key={index} />;
              })}
            </ScrollView>
          ) : (
            <ScrollView style={styles.viewRoom}>
              <View style={styles.listRoom}>
                {listMatches?.map((item, index) => {
                  return <ItemRoom key={index} idComponent={props.componentId} room={item} />;
                })}
              </View>
            </ScrollView>
          )}
        </View>
      ) : (
        <View style={styles.historiesSearch}>
          {loading ? (
            <Loading />
          ) : (
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
              {getHistories?.map((item, index) => {
                return (
                  <View style={styles.itemHistories} key={index}>
                    <View style={styles.historiesItem}>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.btnHistories}
                        onPress={() => getTextSearch(item.description)}
                      >
                        <View style={styles.viewIconHistories}>
                          <Icon name="history" style={styles.historiesIcon} />
                        </View>
                        <View style={styles.description}>
                          <Text style={styles.txtDescription}>{item.description}</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.viewIconDelete}>
                        <TouchableOpacity
                          style={styles.btnDeleteHistories}
                          onPress={() => deleteHistories(item.id)}
                        >
                          <Icon name="times" style={styles.historiesIcons} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
};
export default Index;
const { height, width } = Dimensions.get('screen');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.txtLevel2,
  },
  viewSearch: {
    width: width - 40,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewTxtSearch: {
    flex: 8,
  },
  txtSearch: {
    height: 40,
    width: '100%',
    paddingLeft: 10,
    fontSize: Font.font_description,
    paddingVertical: 0,
  },
  viewBtnSearch: {
    flex: 2,
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
  historiesSearch: {
    height: height - 50,
    width: width,
    marginTop: 5,
  },
  itemHistories: {
    width: width,
    height: 40,
    justifyContent: 'center',
  },
  historiesItem: {
    flexDirection: 'row',
    marginLeft: (25 / startWidth) * width,
    marginRight: (10 / startWidth) * width,
    height: '100%',
    alignItems: 'center',
    width: '90%',
  },
  btnHistories: {
    flex: 9,
    flexDirection: 'row',
    height: '80%',
    alignItems: 'center',
  },
  description: {
    flex: 8,
  },
  viewIconHistories: {
    flex: 1,
  },
  viewIconDelete: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  btnDeleteHistories: {
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  historiesIcon: {
    fontSize: 15,
    color: Color.txtLevel3,
  },
  historiesIcons: {
    fontSize: 15,
    color: Color.error,
  },
  headerResult: {
    height: 40,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultTxt: {
    flex: 9,
    justifyContent: 'center',
  },
  txtResult: {
    fontSize: Font.font_description,
    fontWeight: '700',
    marginLeft: 15,
  },
  typeViews: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconTypes: {
    fontSize: 20,
  },
  listRoom: {
    flexDirection: 'row',
    alignContent: 'stretch',
    flexWrap: 'wrap',
  },
});
