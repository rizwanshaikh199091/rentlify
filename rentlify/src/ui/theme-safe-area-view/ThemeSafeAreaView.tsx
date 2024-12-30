import {SafeAreaView, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import { COLORS } from '../../colors/index.color';

interface Props {
  children: React.ReactNode;
}
const ThemeSafeAreaView = ({children}: Props) => {
  return <SafeAreaView style={{...styles.root}}>{children}</SafeAreaView>;
};

export default memo(ThemeSafeAreaView);

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  loadingBlock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});
