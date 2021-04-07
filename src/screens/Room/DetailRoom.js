import React, { useEffect } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import Color from '../../themes/colors';
import Font from '../../themes/font';
import { useDispatch, useSelector } from 'react-redux';
import Back from '../../components/Back';
import MatchesAction from '../../redux/MatchesRedux/actions';
import { goBack } from '../../navigation/pushScreen';
import sanbong from '../../image/sanbong.jpg';
import Field11 from '../../components/Field11';
import Field5 from '../../components/Field5';
import Field7 from '../../components/Field7';
import Loading from '../../components/Loading';
import profile from '../../image/thanh.jpg';
import Player from '../../components/Player';
const DetailRoom = (props) => {
  const idRoom = props.data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MatchesAction.userGetDetailMatch(idRoom));
  }, [dispatch, idRoom]);
  var detail = [];
  const storeDetail = useSelector((state) => state.matches);
  var typeField = false;
  if (storeDetail.responseDetailMatches) {
    detail = storeDetail.responseDetailMatches;
    if (detail.match.type_field === 5) {
      typeField = <Field5 />;
    } else if (detail.match.type_field === 7) {
      typeField = <Field7 />;
    } else {
      typeField = <Field11 />;
    }
  }
  const goBackScreen = () => {
    goBack(props.componentId);
  };
  return (
    <View style={styles.container}>
      {storeDetail.loadingDetailMatches ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <View style={styles.headerDetailMatches}>
            <Back goBack={goBackScreen} />
            <View style={styles.titleDetailMatches}>
              <Text style={styles.txtTitle}>CHI TIẾT TRẬN ĐẤU</Text>
            </View>
          </View>
          <ScrollView style={styles.viewScroll}>
            <View style={styles.backgroundDetailMatches}>
              <ImageBackground source={sanbong} style={styles.image}>
                {typeField && typeField}
              </ImageBackground>
            </View>
            <View style={styles.bottomDetail}>
              <View style={styles.nameMatches}>
                <Text style={styles.txtNameMatches}>{detail.match && detail.match.name_room}</Text>
              </View>
            </View>
            <View style={styles.ViewListTeam}>
              <View style={styles.titleListTeam}>
                <Text style={styles.txtTitleListTeam}>Danh Sách Đội NameTeamA</Text>
              </View>
              <ScrollView
                style={styles.listPlayer}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                {detail.match &&
                  detail.team_a.map((item, index) => {
                    return (
                      <Player
                        key={index}
                        image={profile}
                        name={item.full_name}
                        id={item.id}
                        position={item.team_name}
                        rating={item.skill_rating}
                        idComponent={props.componentId}
                      />
                    );
                  })}
              </ScrollView>
            </View>
            <View style={styles.ViewListTeam}>
              <View style={styles.titleListTeam}>
                <Text style={styles.txtTitleListTeam}>Danh Sách Đội NameTeamB</Text>
              </View>
              <ScrollView
                style={styles.listPlayer}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                {detail.match &&
                  detail.team_b.map((item, index) => {
                    return (
                      <Player
                        key={index}
                        image={profile}
                        id={item.id}
                        name={item.full_name}
                        position={item.team_name}
                        rating={item.skill_rating}
                        idComponent={props.componentId}
                      />
                    );
                  })}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default DetailRoom;
const { width, height } = Dimensions.get('screen');
const startWidth = 360;
const styles = StyleSheet.create({
  container: { height: height, width: width },
  headerDetailMatches: {
    height: 50,
    flexDirection: 'row',
    borderWidth: 0.5,
  },
  titleDetailMatches: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ' 85%',
  },
  txtTitle: {
    fontSize: Font.title_child2,
    fontWeight: 'bold',
  },
  image: {
    margin: (1 / startWidth) * width,
    width: width - (1 / startWidth) * width * 2,
    height: 550,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backgroundDetailMatches: {
    height: 550,
    width: width,
    flex: 1,
  },
  nameMatches: {
    width: width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNameMatches: {
    fontSize: Font.title_child,
    fontWeight: 'bold',
  },
  titleListTeam: {
    height: 40,
    justifyContent: 'center',
  },
  txtTitleListTeam: {
    fontSize: Font.title_child3,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  listPlayer: {
    width: width,
    height: 100,
  },
  viewScroll: {
    marginBottom: 100,
  },
});
