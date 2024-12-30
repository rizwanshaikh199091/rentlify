import {StyleSheet, View} from 'react-native';
import React, {memo} from 'react';

interface IProps {
  children: React.ReactNode;
}

const WidthContainer = ({children}: IProps) => {
  return <View style={styles.root}>{children}</View>;
};

export default memo(WidthContainer);

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    flex: 1,
  },
});
