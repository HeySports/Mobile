import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, PermissionsAndroid } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useDispatch } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import { makeSkipIntro } from '../../redux/AppRedux/actions';
import AsyncStorage from '@react-native-community/async-storage';
import ItemIntro from './Item';
import Button from '../../components/Button';
import intro1 from '../../image/player.jpg';
import intro2 from '../../image/field.png';
import intro3 from '../../image/logo.png';
import Colors from '../../themes/colors';
import SplashScreen from 'react-native-splash-screen';
const data = {
  dataIntro: [
    {
      title: 'Tìm Người Cùng Chơi Bóng',
      description:
        'Bạn có thể tìm kiếm thêm người cùng chơi bóng cùng bạn, bạn có thể muốn tìm một đối bóng phù hợp với bạn, bạn tìm một đối thủ vừa sức với đội của bạn.',
      image: intro1,
      button: false,
    },
    {
      title: 'Tìm Kiếm Sân Bóng',
      description:
        'Bạn có thể tìm kiếm một sân bóng phù hợp với bạn, bạn có thể đặt sân bóng online với giá ưu đãi.',
      image: intro2,
      button: false,
    },
    {
      title: 'Thỏa Sức Đam Mê',
      description: 'Hãy cùng mọi người thỏa sức đam mê với ứng dụng Hey Sports.',
      image: intro3,
      button: true,
    },
  ],
};

const Intro = () => {
  const [dataIntro, setDataIntro] = useState(data.dataIntro);
  const [activity, setActivity] = useState(0);
  const dispatch = useDispatch();
  const _renderItem = ({ item, index }) => {
    return <ItemIntro key={index} inform={item} />;
  };
  const userGetLocation = async () => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            (position) => {
              const currentLong = position.coords.longitude;
              const currentLat = position.coords.latitude;
              const location = {
                currentLong: currentLong,
                currentLat: currentLat,
              };
              AsyncStorage.setItem('location', JSON.stringify(location));
            },
            (error) => {
              console.log(error);
            },
          );
        } else {
          console.log('fails');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();
  };
  const StartApp = () => {
    dispatch(makeSkipIntro());
    try {
      userGetLocation();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <View style={styles.containerIntro}>
      <Carousel
        style={styles.container}
        data={dataIntro}
        renderItem={_renderItem}
        onSnapToItem={(index) => setActivity(index)}
        sliderWidth={width}
        itemWidth={width}
        windowSize={1}
      />
      {(() => {
        if (activity === 2) {
          return (
            <View style={styles.paginationBtn}>
              <Pagination
                dotsLength={dataIntro.length}
                activeDotIndex={activity}
                dotStyle={styles.styleDot}
                inactiveDotStyle={styles.dot}
                inactiveDotScale={0.6}
              />
              <Button titleBtn="Bắt đầu" checkBtn={true} function={StartApp} />
            </View>
          );
        } else {
          return (
            <View style={styles.pagination}>
              <Pagination
                dotsLength={dataIntro.length}
                activeDotIndex={activity}
                dotStyle={styles.styleDot}
                inactiveDotStyle={styles.dot}
                inactiveDotScale={0.6}
              />
            </View>
          );
        }
      })()}
    </View>
  );
};
const { height, width } = Dimensions.get('window');
const startWidth = 360;
const startHeight = 640;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIntro: {
    width: width,
    height: height,
  },
  pagination: {
    alignItems: 'center',
    marginBottom: (180 / startHeight) * height,
  },
  paginationBtn: {
    alignItems: 'center',
    marginBottom: (122.5 / startHeight) * height,
  },
  btnStart: {
    width: (150 / startWidth) * width,
    height: (40 / startHeight) * height,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  txtStart: {
    fontSize: (14 / startWidth) * width,
    fontWeight: '600',
    color: '#fff',
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
});
export default Intro;
