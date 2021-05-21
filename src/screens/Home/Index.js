import React, { useState, useEffect, useCallback } from 'react';
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
import imageUser from '../../image/thanh.jpg';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Slide from './ItemSlide';
import slide1 from '../../image/slide1.png';
import ItemRoom from '../../components/ItemRoom';
import Title from '../../components/TitleView';
import { pushScreen } from '../../navigation/pushScreen';
import Pitch from '../../components/Pitch';
import { useSelector, useDispatch } from 'react-redux';
import MatchesAction from '../../redux/MatchesRedux/actions';
import ProfileAction from '../../redux/ProfileRedux/actions';
import FieldAction from '../../redux/FieldRedux/actions';
import Player from '../../components/Player';
import UserAction from '../../redux/UserRedux/actions';
import SplashScreen from 'react-native-splash-screen';
import ItemFindMembers from '../../components/ItemFindMembers';
import LoadingView from '../../components/Loading';
const data = {
  dataSlide: [
    {
      image: slide1,
    },
    {
      image: slide1,
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
    dispatch(ProfileAction.userGetProfile());
    dispatch(UserAction.getAllUsers());
  }, [dispatch]);
  // selector
  var fields = [];
  const users = useSelector((state) => state.users);
  const listMatches = useSelector((state) => state.matches);
  const listField = useSelector((state) => state.fields);
  // data of all list
  var listUsers = [];
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
  if (users.responseUser) {
    const userRating = users.responseUser;
    userRating.forEach((element) => {
      const rating = (Number(element.skill_rating) + Number(element.attitude_rating)) / 2;
      let user = {
        id: element.id,
        full_name: element.full_name,
        image: element.image,
        position_play: element.position_play,
        skill_rating: rating,
      };
      listUsers.push(user);
    });
  }
  var usersRating = [];
  if (listUsers.length > 0) {
    usersRating = listUsers.sort((a, b) => (a.skill_rating < b.skill_rating ? 1 : -1));
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.borderProfile}>
          <View style={styles.imageProfile}>
            <Image source={imageUser} style={styles.imgUser} />
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

            <ScrollView
              style={styles.listScrolls}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {fields.map((item, index) => {
                return (
                  <Pitch
                    key={index}
                    id={item.id}
                    nameField={item.name}
                    address={item.address}
                    timeStart="06:00"
                    timeEnd="22:00"
                    idProps={props.componentId}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.listRoom}>
            <Text style={styles.row} />
            <Title title="Cầu thủ tiềm năng" checkTitle={true} />

            <ScrollView
              style={styles.listUserRating}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {usersRating?.slice(0, 10).map((item, index) => {
                return (
                  <Player
                    idComponent={props.componentId}
                    items={item}
                    key={index}
                    image={imageUser}
                  />
                );
              })}
            </ScrollView>
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
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.txtLevel2,
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
    backgroundColor: '#0E5CF4',
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
    paddingBottom: 5,
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
});
