import {Dimensions} from 'react-native';
const baseScreenWidth = 500;

export const calculateResponsiveFontSize = (baseFontSize: any) => {
  const screenWidth = Dimensions.get('window').width;
  const scaleFactor = screenWidth / baseScreenWidth;
  return baseFontSize * scaleFactor;
};
