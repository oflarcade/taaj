import { Dimensions, PixelRatio } from 'react-native';

const width = Dimensions.get('window').width * PixelRatio.get();
const height = Dimensions.get('window').height * PixelRatio.get() ;
const widthS = Dimensions.get('screen').width * PixelRatio.get() ;
const heightS = Dimensions.get('screen').height * PixelRatio.get();

export default {
  window: {
    width,
    height,
    widthS,
    heightS
  },
  isSmallDevice: width < 375,
};
