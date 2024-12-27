import {RefreshControlProps, ScrollView} from 'react-native';
import React, {memo} from 'react';
interface Props {
  children: React.ReactNode;
  refreshControl?: React.ReactElement<
    RefreshControlProps,
    string | React.JSXElementConstructor<any>
  >;
}
const ThemeScrollView = ({children, refreshControl}: Props) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      refreshControl={refreshControl}
      keyboardShouldPersistTaps="never"
      automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={{flexGrow: 1}}>
      {children}
    </ScrollView>
  );
};

export default memo(ThemeScrollView);
