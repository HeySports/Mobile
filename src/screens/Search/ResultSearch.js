import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import SearchActions from '../../redux/SearchRedux/actions';
import Loading from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { goBack } from '../../navigation/pushScreen';
import RoomItem from '../../components/Room';
import ItemRoom from '../../components/ItemRoom';
const ResultSearch = (props) => {
  const { loading, resultSearch } = useSelector((state) => state.search);
  const { responseMatches } = useSelector((state) => state.matches);
  const [checkView, setCheckView] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SearchActions.userSearchMatches({ txtSearch: props.data }));
  }, [dispatch, props.data]);

  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const setViewTrue = () => {
    setCheckView(true);
  };
  const setViewFail = () => {
    setCheckView(false);
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <Header
            title={props.data}
            function_goBack={goBackScreen}
            iconRight={true}
            typeView={true}
            checkView={checkView}
            functionFail={setViewFail}
            functionTrue={setViewTrue}
          />
          {resultSearch ? (
            checkView ? (
              <ScrollView style={styles.viewRoom}>
                {resultSearch?.map((item, index) => {
                  return <RoomItem idComponent={props.componentId} key={index} room={item} />;
                })}
              </ScrollView>
            ) : (
              <ScrollView style={styles.viewRoom}>
                <View style={styles.listRoom}>
                  {resultSearch?.map((item, index) => {
                    return <ItemRoom key={index} idComponent={props.componentId} room={item} />;
                  })}
                </View>
              </ScrollView>
            )
          ) : (
            <View style={styles.containers}>
              <View style={styles.ViewError}>
                <Text style={styles.txtResult}>KẾT QUẢ CHO {props.data.toUpperCase()} : </Text>
                <Text style={styles.result}>0</Text>
              </View>
              <View style={styles.differentMatches}>
                <Text style={styles.txtDifferentMatches}>CÁC TRẬN KHÁC </Text>
              </View>
              {checkView ? (
                <ScrollView style={styles.viewRoom}>
                  {responseMatches?.map((item, index) => {
                    return <RoomItem room={item} idComponent={props.componentId} key={index} />;
                  })}
                </ScrollView>
              ) : (
                <ScrollView style={styles.viewRoom}>
                  <View style={styles.listRoom}>
                    {responseMatches?.map((item, index) => {
                      return <ItemRoom key={index} idComponent={props.componentId} room={item} />;
                    })}
                  </View>
                </ScrollView>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default ResultSearch;
const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  viewRoom: {
    marginBottom: 100,
  },
  listRoom: {
    flexDirection: 'row',
    alignContent: 'stretch',
    flexWrap: 'wrap',
  },
  ViewError: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 15,
  },
  txtResult: {
    fontSize: 16,
    fontWeight: '700',
  },
  result: {
    fontSize: 16,
    fontWeight: '700',
    color: 'red',
  },
  txtDifferentMatches: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700',
  },
});
