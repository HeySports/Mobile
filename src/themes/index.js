import { Dimensions } from 'react-native';
import Colors from './colors';
import Fonts from './font';
const { width, height } = Dimensions.get('screen');
const ScreenSize = {
  Screen_Width: width,
  Screen_Height: height,
};
export { Colors, Fonts, ScreenSize };
