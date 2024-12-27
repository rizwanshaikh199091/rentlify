import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {memo} from 'react';

import {Control, Controller} from 'react-hook-form';
import {calculateResponsiveFontSize} from '../../helper/calculateResponsiveFontSize';
import Typography from '../typography/Typography';
import { IMAGES } from '../../images';
import { COLORS } from '../../colors/index.color';
import { FONTS } from '../../fonts/index.font';

interface IInputText {
  keyboardType?: 'numeric' | 'default';
  control: Control<any>;
  name: string;
  placeholder: string;
  variant?: 'primary' | 'secondary';
  title?: string;
  editable?: boolean;
}

const InputText = ({
  keyboardType = 'default',
  control,
  name,
  placeholder,
  variant = 'primary',
  title,
  editable,
}: IInputText) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View>
          {variant === 'primary' ? (
            <View style={styles.root}>
              <View style={styles.textContainer}>
                <Image source={IMAGES.flag} style={styles.icon} />
                <Text style={styles.text}>+91</Text>
                <View style={styles.borderLeft} />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  placeholderTextColor={COLORS.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={editable}
                />
              </View>
            </View>
          ) : (
            <View>
              <Typography
                variant="description12Bold"
                style={styles.secondaryTitle}>
                {title}
              </Typography>
              <View>
                <TextInput
                  style={styles.secondaryInput}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  placeholderTextColor={COLORS.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={editable}
                />
              </View>
            </View>
          )}

          {error?.message && <Text style={styles.error}>{error.message}</Text>}
        </View>
      )}
      name={name}
    />
  );
};

export default memo(InputText);

const styles = StyleSheet.create({
  root: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.placeholder,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  text: {
    fontSize: calculateResponsiveFontSize(16),
    fontFamily: FONTS.nunitoRegular,
    color: COLORS.placeholder,
    flex: 0,
  },
  input: {
    height: 40,
    padding: 10,
    color: COLORS.placeholder,
    fontSize: calculateResponsiveFontSize(16),
    fontFamily: FONTS.nunitoRegular,
  },
  icon: {
    width: 20,
    height: 16,
    marginRight: 6,
  },
  borderLeft: {
    borderLeftWidth: 0.5,
    borderBottomColor: COLORS.placeholder,
    marginLeft: 6,
    height: 21,
  },
  error: {
    color: COLORS.red,
    marginTop: 6,
    marginLeft: 2,
    fontSize: calculateResponsiveFontSize(14),
  },
  secondaryTitle: {
    marginTop: 15,
  },
  secondaryInput: {
    fontSize: calculateResponsiveFontSize(16),
    color: COLORS.placeholder,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayd2d2d2,
    paddingVertical: 4,
  },
});
