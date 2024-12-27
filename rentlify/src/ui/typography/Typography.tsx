import React, {memo} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

import {calculateResponsiveFontSize} from '../../helper/calculateResponsiveFontSize';
import { COLORS, TColors } from '../../colors/index.color';
import { FONTS } from '../../fonts/index.font';

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  variant?:
    | 'title'
    | 'description12'
    | 'subTitle'
    | 'description14'
    | 'description16'
    | 'description12Bold'
    | 'description18'
    | 'tableHeader'
    | 'tableList';
  color?: TColors;
  numberOfLines?: number;
}

const Typography = (props: IProps) => {
  const {color = 'black', variant, style, numberOfLines} = props;
  const styles = StyleSheet.create({
    title: {
      fontSize: calculateResponsiveFontSize(26),
      // fontWeight: '700',
      color: COLORS[color],
      fontFamily: FONTS.oswaldBold,
    },
    subTitle: {
      fontSize: calculateResponsiveFontSize(20),
      // fontWeight: '700',
      color: COLORS[color],
      fontFamily: FONTS.nunitoBold,
    },
    description12: {
      fontSize: calculateResponsiveFontSize(18),
      color: COLORS[color],
      // fontWeight: '400',
      fontFamily: FONTS.nunitoRegular,
    },
    description12Bold: {
      fontSize: calculateResponsiveFontSize(18),
      color: COLORS[color],
      // fontWeight: '700',
      fontFamily: FONTS.nunitoBold,
    },
    description14: {
      fontSize: calculateResponsiveFontSize(20),
      color: COLORS[color],
      // fontWeight: '500',
      fontFamily: FONTS.nunitoRegular,
    },
    description16: {
      fontSize: calculateResponsiveFontSize(18),
      color: COLORS[color],
      // fontWeight: '700',
      fontFamily: FONTS.nunitoBold,
    },
    description18: {
      fontSize: calculateResponsiveFontSize(20),
      color: COLORS[color],
      // fontWeight: '700',
      fontFamily: FONTS.nunitoBold,
    },
    tableHeader: {
      fontSize: calculateResponsiveFontSize(22),
      // fontWeight: '700',
      color: COLORS[color],
      fontFamily: FONTS.nunitoBold,
    },
    tableList: {
      fontSize: calculateResponsiveFontSize(18),
      color: COLORS[color],
      fontFamily: FONTS.nunitoRegular,
    },
  });

  return (
    <Text
      style={[styles[variant ?? 'description12'], style]}
      numberOfLines={numberOfLines}>
      {props.children}
    </Text>
  );
};

export default memo(Typography);