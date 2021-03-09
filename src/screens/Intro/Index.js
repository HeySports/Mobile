import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import ItemIntro from './Item';
import intro1 from '../../image/player.png';
import intro2 from '../../image/field.png';
import intro3 from '../../image/logo.png';
import Colors from '../../themes/colors';
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
  const _renderItem = ({ item, index }) => {
    return <ItemIntro key={index} inform={item} />;
  };
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
              <TouchableOpacity style={styles.btnStart}>
                <Text style={styles.txtStart}>Bắt đầu</Text>
              </TouchableOpacity>
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
    marginBottom: (142.5 / startHeight) * height,
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
