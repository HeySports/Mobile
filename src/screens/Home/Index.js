/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Color from '../../themes/colors';
import user from '../../image/thanh.jpg';
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
  const [dataSlide, setdataSlide] = useState(data.dataSlide);
  const [activity, setActivity] = useState(0);
  const _renderItem = ({ item, index }) => {
    return <Slide key={index} inform={item} />;
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MatchesAction.getListMatches());
    dispatch(FieldAction.getListField());
    dispatch(ProfileAction.userGetProfile());
  }, [dispatch]);
  // selector
  var matches = [];
  var fields = [];
  const listMatches = useSelector((state) => state.matches);
  const listField = useSelector((state) => state.fields);
  // function
  if (listMatches.responseMatches) {
    matches = listMatches.responseMatches;
  }
  if (listField.responseField) {
    fields = listField.responseField;
  }
  const search = () => {
    pushScreen(props.componentId, 'Search', '', 'Search', false, '', '');
  };
  const viewMoreRoom = () => {
    pushScreen(props.componentId, 'ListRoom', matches, 'ListRoom', false, '', '');
  };
  const viewMorePitch = () => {
    pushScreen(props.componentId, 'Field', '', 'Field', false, '', '');
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.borderProfile}>
          <View style={styles.imageProfile}>
            <Image source={user} style={styles.imgUser} />
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
      <ScrollView style={styles.containerHome}>
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
        <View style={styles.listRoom}>
          <Text style={styles.row} />
          <Title title="Đội bóng đang chờ" functionViewMore={viewMoreRoom} />
          {listMatches.loadingMatches ? (
            <View style={styles.containerLoading}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <ScrollView
              style={styles.listScroll}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {matches.map((item, index) => {
                return <ItemRoom key={index} idComponent={props.componentId} room={item} />;
              })}
            </ScrollView>
          )}
        </View>
        <View style={styles.listRoom}>
          <Text style={styles.row} />
          <Title title="Danh sách sân bóng" functionViewMore={viewMorePitch} />
          {listField.loadingField ? (
            <View style={styles.containerLoading}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <ScrollView style={styles.listScrolls} horizontal={true}>
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
          )}
        </View>
        <View style={styles.listRoom}>
          <Text style={styles.row} />
          <Title title="Đội bóng đang chờ" />
          <ScrollView style={styles.listScroll} horizontal={true}>
            <ItemRoom />
            <ItemRoom />
            <ItemRoom />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
const { width } = Dimensions.get('window');
const startWidth = 360;
const styles = StyleSheet.create({
  container: {
    width: width,
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
    marginTop: 10,
    width: width,
    marginBottom: 80,
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
  listScroll: {
    marginTop: 10,
    height: (140 / startWidth) * startWidth,
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
});
