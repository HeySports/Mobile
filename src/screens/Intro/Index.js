import React from 'react';
import { View, Text } from 'react-native';

const Intro = () => {
  const data = {
    dataIntro: [
      {
        title: 'Tìm Người Cùng Chơi Bóng',
        description:
          'Bạn có thể tìm kiếm thêm người cùng chơi bóng cùng bạn, bạn có thể muốn tìm một đối bóng phù hợp với bạn, bạn tìm một đối thủ vừa sức với đội của bạn.',
        image: 'intro1',
        button: false,
      },
      {
        title: 'Tìm Kiếm Sân Bóng',
        description:
          'Bạn có thể tìm kiếm một sân bóng phù hợp với bạn, bạn có thể đặt sân bóng online với giá ưu đãi.',
        image: 'intro2',
        button: false,
      },
      {
        title: 'Thỏa Sức Đam Mê',
        description: 'Hãy cùng mọi người thỏa sức đam mê với ứng dụng Hey Sports.',
        image: 'intro3',
        button: true,
      },
    ],
  };
  return (
    <View>
      <Text>Skip1</Text>
    </View>
  );
};
export default Intro;
