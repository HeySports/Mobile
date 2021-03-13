import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Color from '../../themes/colors';
import user from '../../image/profile.jpg';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Slide from './ItemSlide';
import slide1 from '../../image/slide1.png';
import ItemRoom from '../../components/ItemRoom';
import Title from '../../components/TitleView';
import { pushScreen } from '../../navigation/pushScreen';
import Pitch from '../../components/Pitch';
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
  const search = (props) => {
    alert('Search');
  };
  const viewMoreRoom = () => {
    pushScreen(props.componentId, 'ListRoom', '', 'ListRoom', false, '', '');
  };
  const viewMorePitch = () => {
    pushScreen(props.componentId, 'Field', '', 'Field', false, '', '');
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={user} style={styles.imgUser} />
        <View style={styles.search}>
          <TextInput style={styles.inputSearch} />
          <TouchableOpacity style={styles.btnIconSearch} onPress={() => search()}>
            <Icon name="search" style={styles.iconSearch} />
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
          <ScrollView style={styles.listScroll} horizontal={true}>
            <ItemRoom />
            <ItemRoom />
            <ItemRoom />
          </ScrollView>
        </View>
        <View style={styles.listRoom}>
          <Text style={styles.row} />
          <Title title="Danh sách sân bóng" functionViewMore={viewMorePitch} />
          <ScrollView style={styles.listScrolls} horizontal={true}>
            <Pitch />
            <Pitch />
            <Pitch />
            <Pitch />
          </ScrollView>
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
  imgUser: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Color.primary,
  },
  search: {
    marginLeft: (5 / startWidth) * width,
    flexDirection: 'row',
    width: (290 / startWidth) * width,
  },
  inputSearch: {
    width: '100%',
    borderWidth: 0.5,
    height: 30,
    borderRadius: 30 / 2,
    borderColor: Color.txtLevel3,
    padding: 0,
    paddingLeft: 10,
    fontSize: Font.font_description,
  },
  btnIconSearch: {
    width: (30 / startWidth) * width,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: (30 / startWidth) * width,
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
    height: (120 / startWidth) * startWidth,
  },
  listScrolls: {
    marginTop: 10,
    height: 220,
  },
});
