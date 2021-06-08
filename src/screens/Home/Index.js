import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Color from '../../themes/colors';
import logo from '../../image/logo.png';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Slide from './ItemSlide';
import slide1 from '../../image/slide1.png';
import slide2 from '../../image/slide2.jpg';
import slide3 from '../../image/slide3.jpg';
import ItemRoom from '../../components/ItemRoom2';
import Title from '../../components/TitleView';
import { pushScreen } from '../../navigation/pushScreen';
import Pitch from '../../components/Pitch';
import { useSelector, useDispatch } from 'react-redux';
import MatchesAction from '../../redux/MatchesRedux/actions';
import ProfileAction from '../../redux/ProfileRedux/actions';
import FieldAction from '../../redux/FieldRedux/actions';
import UserAction from '../../redux/UserRedux/actions';
import SplashScreen from 'react-native-splash-screen';
import ItemFindMembers from '../../components/ItemFindMembers';
import LoadingView from '../../components/Loading';
import TeamActions from '../../redux/TeamRedux/actions';
import ItemTeam from '../../components/team/ItemTeam';
import messaging from '@react-native-firebase/messaging';
const data = {
  dataSlide: [
    {
      image: slide2,
    },
    {
      image: slide3,
    },
    {
      image: slide1,
    },
  ],
};
const Home = (props) => {
  const [dataSlide] = useState(data.dataSlide);
  const [activity, setActivity] = useState(0);
  const _renderItem = ({ item, index }) => {
    return <Slide key={index} inform={item} />;
  };
  const dispatch = useDispatch();
  useEffect(() => {
    SplashScreen.hide();
    dispatch(MatchesAction.getListMatches());
    dispatch(MatchesAction.getListMatchFindMember());
    dispatch(FieldAction.getListField());
    dispatch(UserAction.getAllUsers());
    dispatch(ProfileAction.userGetProfile());
    dispatch(TeamActions.getListTeam());
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);
  // selector
  var fields = [];
  const listMatches = useSelector((state) => state.matches);
  const listField = useSelector((state) => state.fields);
  const listTeam = useSelector((state) => state.team?.listTeam);
  // data of all list
  if (listField.responseField) {
    fields = listField.responseField;
  }
  const search = () => {
    pushScreen(props.componentId, 'Search', '', 'Search', false, '', '');
  };
  const viewMoreRoom = () => {
    pushScreen(
      props.componentId,
      'ListRoom',
      listMatches?.responseMatches,
      'ListRoom',
      false,
      '',
      '',
    );
  };
  const viewMorePitch = () => {
    pushScreen(props.componentId, 'Field', '', 'Field', false, '', '');
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.borderProfile}>
          <View style={styles.imageProfile}>
            <Image source={logo} style={styles.imgUser} />
          </View>
        </View>
        <View style={styles.searchHeader}>
          <TouchableOpacity style={styles.btnSearch} onPress={() => search()}>
            <View style={styles.viewTxtSearch}>
              <Text style={styles.txtSearch}>Tìm kiếm</Text>
            </View>
            <View style={styles.viewIconSearch}>
              <Icon name="search" style={styles.iconSearch} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {listMatches?.loadingMatches || listMatches?.loadingMatchFindMember ? (
        <LoadingView />
      ) : (
        <ScrollView style={styles.containerHome} showsVerticalScrollIndicator={false}>
          <View style={styles.slider}>
            <Carousel
              style={styles.containerSlide}
              data={dataSlide}
              renderItem={_renderItem}
              onSnapToItem={(index) => setActivity(index)}
              sliderWidth={width}
              itemWidth={width}
              windowSize={1}
            />
            {(() => {
              return (
                <View style={styles.pagination}>
                  <Pagination
                    dotsLength={dataSlide.length}
                    activeDotIndex={activity}
                    dotStyle={styles.styleDot}
                    inactiveDotStyle={styles.dot}
                    inactiveDotScale={1}
                  />
                </View>
              );
            })()}
          </View>
          <View style={styles.listRoomFirst}>
            <Text style={styles.row} />
            <Title title="Cáp Kèo" functionViewMore={viewMoreRoom} />
            <FlatList
              data={listMatches?.responseMatches}
              renderItem={({ item, index }) => (
                <ItemRoom room={item} idComponent={props.componentId} key={index} />
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.listRoom}>
            <Text style={styles.row} />
            <Title title="Các đội tìm thành viên" functionViewMore={viewMoreRoom} />
            <FlatList
              data={listMatches?.responseMatchFindMember}
              renderItem={({ item, index }) => (
                <ItemFindMembers room={item} idComponent={props.componentId} key={index} />
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.listRoom}>
            <Text style={styles.row} />
            <Title title="Sân Bóng" functionViewMore={viewMorePitch} />
            <View style={styles.team}>
              <FlatList
                data={fields}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => <Pitch item={item} key={index} />}
              />
            </View>
          </View>
          <View style={styles.listRoom}>
            <Title title="Đội Bóng Tiềm Năng" checkTitle={true} />
            <View style={styles.team}>
              <FlatList
                data={listTeam}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => <ItemTeam item={item} key={index} />}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
export default Home;
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
  },
  styleHomepage: {
    flexDirection: 'row',
    flex: 1,
    margin: 0,
    width: 160,
    backgroundColor: Color.field,
    height: 130,
    marginTop: 15,
    marginBottom: 0,
    marginHorizontal: 7.5,
  },
  topBar: {
    width: width,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.txtLevel2,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  borderProfile: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageProfile: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.primary,
    borderWidth: 2,
    borderRadius: 22.5,
  },
  imgUser: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchHeader: {
    flex: 8,
    height: '100%',
    justifyContent: 'center',
  },
  btnSearch: {
    height: 30,
    borderRadius: 15,
    borderWidth: 0.5,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Color.txtLevel3,
  },
  viewTxtSearch: {
    flex: 9,
    justifyContent: 'center',
  },
  txtSearch: {
    marginLeft: 10,
    fontSize: Font.font_description,
    color: Color.txtLevel3,
  },
  viewIconSearch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSearch: {
    fontSize: Font.font_description,
    color: Color.txtLevel3,
  },
  containerHome: {
    flex: 1,
    marginTop: 5,
  },
  slider: {
    height: 200,
    width: width,
  },
  styleDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: Color.secondary,
    elevation: 1,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e9e9e9',
  },
  pagination: {
    marginTop: -20,
    justifyContent: 'center',
  },

  row: { borderTopWidth: 1, borderColor: Color.txtLevel3, width: '70%', marginLeft: '15%' },
  listRoom: {
    marginBottom: 20,
  },
  listRoomFirst: {
    marginBottom: 20,
    // paddingBottom: 5,
  },
  listScroll: {
    height: 140,
  },
  listScrolls: {
    marginTop: 10,
    height: 220,
  },
  containerLoading: {
    width: width,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listUserRating: {
    width: width,
    marginTop: 20,
    height: 110,
  },
  team: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 20,
  },
});
