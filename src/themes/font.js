import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const startWidth = 360;
const Font = {
  title_main: (30 / startWidth) * width,
  title_child: (25 / startWidth) * width,
  title_child3: (18 / startWidth) * width,
  title_child2: (20 / startWidth) * width,
  font_description: (14 / startWidth) * width,
};
export default Font;
