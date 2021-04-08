import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import MatchesAction from '../../redux/MatchesRedux/actions';
import Loading from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { goBack } from '../../navigation/pushScreen';
import RoomItem from '../../components/Room';
import ItemRoom from '../../components/ItemRoom';
import SearchActions from '../../redux/SearchRedux/actions';
const ResultSearch = (props) => {
  const [checkView, setCheckView] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      txtSearch: props.data,
    };
    dispatch(MatchesAction.userSearchMatches(data));
     dispatch(SearchActions.userPostHistoriesSearch(data));
  }, [dispatch, props.data]);
  var resultSearch = [];
  var listMatch = [];
  const search = useSelector((state) => state.matches);
  if (search.responseSearch) {
    resultSearch = search.responseSearch;
  }
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  const setViewTrue = () => {
    setCheckView(true);
  };
  const setViewFail = () => {
    setCheckView(false);
  };
  if (search.responseMatches) {
    listMatch = search.responseMatches;
  }
  return (
    <View style={styles.container}>
      {search.loadingSearch ? (
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
          {resultSearch.match ? (
            checkView ? (
              <ScrollView style={styles.viewRoom}>
                {resultSearch.map((item, index) => {
                  return (
                    <RoomItem
                      id={item.match.id}
                      idComponent={props.componentId}
                      key={index}
                      nameRoom={item.match.name_room}
                      typeField={item.match.type_field}
                      timeStart={item.match.time_start_play}
                      timeEnd={item.match.time_end_play}
                      nameTeam1="Bách Khoa"
                      nameTeam2="Sư Phạm"
                      datePlay="01-04-2021"
                      nameFiled={item.match.field}
                      address="101B Lê Hữu Trác, Quận Sơn Trà"
                    />
                  );
                })}
              </ScrollView>
            ) : (
              <ScrollView style={styles.viewRoom}>
                <View style={styles.listRoom}>
                  {resultSearch.map((item, index) => {
                    return (
                      <ItemRoom
                        key={index}
                        nameRoom={item.match.name_room}
                        member1={item.team_a.length}
                        member2={item.team_b.length}
                        nameTeam1="Bách Khoa"
                        nameTeam2="Sư Phạm"
                        starTeam1={4.5}
                        starTeam2={2.5}
                        historyTeam1={2}
                        historyTeam2={5}
                        id={item.match.id}
                        idComponent={props.componentId}
                      />
                    );
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
                  {listMatch.map((item, index) => {
                    return (
                      <RoomItem
                        id={item.match.id}
                        idComponent={props.componentId}
                        key={index}
                        nameRoom={item.match.name_room}
                        typeField={item.match.type_field}
                        timeStart={item.match.time_start_play}
                        timeEnd={item.match.time_end_play}
                        nameTeam1="Bách Khoa"
                        nameTeam2="Sư Phạm"
                        datePlay="01-04-2021"
                        nameFiled={item.match.field}
                        address="101B Lê Hữu Trác, Quận Sơn Trà"
                      />
                    );
                  })}
                </ScrollView>
              ) : (
                <ScrollView style={styles.viewRoom}>
                  <View style={styles.listRoom}>
                    {listMatch.map((item, index) => {
                      return (
                        <ItemRoom
                          key={index}
                          nameRoom={item.match.name_room}
                          member1={item.team_a.length}
                          member2={item.team_b.length}
                          nameTeam1="Bách Khoa"
                          nameTeam2="Sư Phạm"
                          starTeam1={4.5}
                          starTeam2={2.5}
                          historyTeam1={2}
                          historyTeam2={5}
                          id={item.match.id}
                          idComponent={props.componentId}
                        />
                      );
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
