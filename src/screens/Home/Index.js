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
import logo from '../../image/logo.png';
import user from '../../image/profile.jpg';
import Font from '../../themes/font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import Slide from './ItemSlide';
import slide1 from '../../image/slide1.png';
import imageGroup from '../../image/room.png';
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
const Home = () => {
  const [dataSlide, setdataSlide] = useState(data.dataSlide);
  const [activity, setActivity] = useState(0);
  const _renderItem = ({ item, index }) => {
    return <Slide key={index} inform={item} />;
  };
  const search = () => {
    alert('Search');
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={logo} style={styles.imgLogo} />
        <View style={styles.search}>
          <TextInput style={styles.inputSearch} />
          <TouchableOpacity style={styles.btnIconSearch} onPress={() => search()}>
            <Icon name="search" style={styles.iconSearch} />
          </TouchableOpacity>
        </View>
        <Image source={user} style={styles.imgUser} />
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
          <View style={styles.titleListRoom}>
            <Text style={styles.txtTitleListRoom}>Đội bóng Đang chờ</Text>
            <TouchableOpacity style={styles.btnListRoom}>
              <Icon name="angle-double-right" style={styles.iconView} />
              <Text style={styles.txtBtnView}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.listScroll} horizontal={true}>
            <View style={styles.room}>
              <Text style={styles.nameRoom}>Phòng 1</Text>
              <View style={styles.groupRoom}>
                <View style={styles.logoGoup}>
                  <Image source={imageGroup} style={styles.imageLogoGroup} />
                </View>
                <View style={styles.iconMatch}>
                  <Icon name="futbol" style={styles.iconFootball} />
                </View>
                <View style={styles.logoGoup}>
                  <Image source={imageGroup} style={styles.imageLogoGroup} />
                </View>
              </View>
              <View style={styles.descriptionRoom}>
                <View style={styles.descriptionDetail}>
                  <Text style={styles.txtNameGroup}>Trường Bách Khoa</Text>
                  <View style={styles.listIcon}>
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                  </View>
                  <Text style={styles.txtNumberMatch}>Số trận tham gia</Text>
                  <Text style={styles.txtNumberMatch}>1</Text>
                </View>
                <View style={styles.descriptionDetail}>
                  <Text style={styles.txtNameGroup}>Trường Bách Khoa</Text>
                  <View style={styles.listIcon}>
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                  </View>
                  <Text style={styles.txtNumberMatch}>Số trận tham gia</Text>
                  <Text style={styles.txtNumberMatch}>1</Text>
                </View>
              </View>
            </View>
            <View style={styles.room}>
              <Text style={styles.nameRoom}>Phòng 1</Text>
              <View style={styles.groupRoom}>
                <View>
                  <Text>1</Text>
                </View>
                <Text>2</Text>
                <View>
                  <Text>1</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.listRoom}>
          <Text style={styles.row} />
          <View style={styles.titleListRoom}>
            <Text style={styles.txtTitleListRoom}>Đội bóng Đang chờ</Text>
            <TouchableOpacity style={styles.btnListRoom}>
              <Icon name="angle-double-right" style={styles.iconView} />
              <Text style={styles.txtBtnView}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.listScroll} horizontal={true}>
            <View style={styles.room}>
              <Text style={styles.nameRoom}>Phòng 1</Text>
              <View style={styles.groupRoom}>
                <View style={styles.logoGoup}>
                  <Image source={imageGroup} style={styles.imageLogoGroup} />
                </View>
                <View style={styles.iconMatch}>
                  <Icon name="futbol" style={styles.iconFootball} />
                </View>
                <View style={styles.logoGoup}>
                  <Image source={imageGroup} style={styles.imageLogoGroup} />
                </View>
              </View>
              <View style={styles.descriptionRoom}>
                <View style={styles.descriptionDetail}>
                  <Text style={styles.txtNameGroup}>Trường Bách Khoa</Text>
                  <View style={styles.listIcon}>
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                  </View>
                  <Text style={styles.txtNumberMatch}>Số trận tham gia</Text>
                  <Text style={styles.txtNumberMatch}>1</Text>
                </View>
                <View style={styles.descriptionDetail}>
                  <Text style={styles.txtNameGroup}>Trường Bách Khoa</Text>
                  <View style={styles.listIcon}>
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                  </View>
                  <Text style={styles.txtNumberMatch}>Số trận tham gia</Text>
                  <Text style={styles.txtNumberMatch}>1</Text>
                </View>
              </View>
            </View>
            <View style={styles.room}>
              <Text style={styles.nameRoom}>Phòng 1</Text>
              <View style={styles.groupRoom}>
                <View>
                  <Text>1</Text>
                </View>
                <Text>2</Text>
                <View>
                  <Text>1</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.listRoom}>
          <Text style={styles.row} />
          <View style={styles.titleListRoom}>
            <Text style={styles.txtTitleListRoom}>Đội bóng Đang chờ</Text>
            <TouchableOpacity style={styles.btnListRoom}>
              <Icon name="angle-double-right" style={styles.iconView} />
              <Text style={styles.txtBtnView}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.listScroll} horizontal={true}>
            <View style={styles.room}>
              <Text style={styles.nameRoom}>Phòng 1</Text>
              <View style={styles.groupRoom}>
                <View style={styles.logoGoup}>
                  <Image source={imageGroup} style={styles.imageLogoGroup} />
                </View>
                <View style={styles.iconMatch}>
                  <Icon name="futbol" style={styles.iconFootball} />
                </View>
                <View style={styles.logoGoup}>
                  <Image source={imageGroup} style={styles.imageLogoGroup} />
                </View>
              </View>
              <View style={styles.descriptionRoom}>
                <View style={styles.descriptionDetail}>
                  <Text style={styles.txtNameGroup}>Trường Bách Khoa</Text>
                  <View style={styles.listIcon}>
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                  </View>
                  <Text style={styles.txtNumberMatch}>Số trận tham gia</Text>
                  <Text style={styles.txtNumberMatch}>1</Text>
                </View>
                <View style={styles.descriptionDetail}>
                  <Text style={styles.txtNameGroup}>Trường Bách Khoa</Text>
                  <View style={styles.listIcon}>
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                    <Icons name="star" style={styles.iconRating} />
                  </View>
                  <Text style={styles.txtNumberMatch}>Số trận tham gia</Text>
                  <Text style={styles.txtNumberMatch}>1</Text>
                </View>
              </View>
            </View>
            <View style={styles.room}>
              <Text style={styles.nameRoom}>Phòng 1</Text>
              <View style={styles.groupRoom}>
                <View>
                  <Text>1</Text>
                </View>
                <Text>2</Text>
                <View>
                  <Text>1</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    width: width,
  },
  topBar: {
    width: width,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
  },
  imgUser: {
    width: 49,
    height: 49,
    borderRadius: 49 / 2,
    borderWidth: 2,
    borderColor: Color.primary,
  },
  search: {
    marginLeft: (2 / startWidth) * width,
    marginRight: (5 / startWidth) * width,
    flexDirection: 'row',
    width: (235 / startWidth) * width,
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
  // for naow
  listRoom: {
    marginBottom: 20,
  },
  titleListRoom: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: (20 / startWidth) * width,
    marginRight: (20 / startWidth) * width,
  },
  txtTitleListRoom: {
    flex: 2,
    fontSize: Font.title_child2,
    fontWeight: '700',
  },
  btnListRoom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    fontSize: Font.font_description,
    color: Color.primary,
  },
  txtBtnView: {
    marginLeft: 5,
    fontSize: Font.font_description,
    color: Color.primary,
  },
  listScroll: {
    marginTop: 10,
    height: (120 / startWidth) * startWidth,
  },
  room: {
    width: (160 / startWidth) * width,
    height: (120 / startWidth) * startWidth,
    backgroundColor: Color.backgroud,
    marginLeft: 14,
    // eslint-disable-next-line no-dupe-keys
    backgroundColor: Color.field,
    borderRadius: 4,
  },
  nameRoom: {
    color: Color.white,
    fontSize: Font.font_description,
    fontWeight: '700',
    width: '100%',
    textAlign: 'center',
    marginTop: 2,
    height: '15%',
  },
  groupRoom: {
    flexDirection: 'row',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  descriptionRoom: {
    flexDirection: 'row',
    flex: 1,
  },
  descriptionDetail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNameGroup: {
    fontSize: 9,
    fontWeight: '700',
    textAlign: 'center',
  },
  listIcon: {
    flexDirection: 'row',
  },
  iconRating: {
    fontSize: 9,
    color: Color.icon,
  },
  txtNumberMatch: {
    fontSize: 9,
    fontWeight: '700',
    textAlign: 'center',
    color: Color.white,
  },
  logoGoup: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  iconMatch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFootball: {
    fontSize: Font.title_child2,
  },
  imageLogoGroup: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
