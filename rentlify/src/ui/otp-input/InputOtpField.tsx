import React, {useState, useRef, memo} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  ViewStyle,
  KeyboardTypeOptions,
} from 'react-native';
import { COLORS } from '../../colors/index.color';


interface InputOtpFieldProps {
  length: number;
  onComplete: (otp: string) => void;
  containerStyles?: ViewStyle;
  inputStyles?: ViewStyle;
  onChange?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

const InputOtpField: React.FC<InputOtpFieldProps> = ({
  length,
  onComplete,
  containerStyles,
  inputStyles,
  onChange,
  keyboardType,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<TextInput[]>([]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);
    onChange?.(newOtp.toString().replaceAll(',', ''));

    if (value !== '' && index < length - 1) {
      // Move to the next input field
      inputRefs.current[index + 1]?.focus();
    }

    if (!newOtp.includes('')) {
      // All OTP fields are filled, trigger onComplete
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && index > 0) {
      // Move to the previous input field on backspace
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={{...styles.container, ...containerStyles}}>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <TextInput
            key={index + '#'}
            style={{...styles.input, ...inputStyles}}
            value={otp[index]}
            onChangeText={value => handleChange(value, index)}
            onKeyPress={({nativeEvent}) =>
              handleKeyPress(index, nativeEvent.key)
            }
            keyboardType={keyboardType ?? 'numeric'}
            maxLength={1}
            ref={ref => (inputRefs.current[index] = ref as TextInput)}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.placeholder,
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.black,
    borderRadius: 10,
  },
});

export default memo(InputOtpField);
