import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import ThemeScrollView from '../../ui/theme-scroll-view/ThemeScrollView';
import {IMAGES} from '../../images';
import WidthContainer from '../../ui/width-container/WidthContainer';
import Typography from '../../ui/typography/Typography';
import InputOtpField from '../../ui/otp-input/InputOtpField';
import {COLORS} from '../../colors/index.color';
import Button from '../../ui/button/Button';

const VerifyOTPScreen = () => {
  const handler = useForm({
    defaultValues: {
      otp: '',
    },
  });

  return (
    <ThemeScrollView>
      <Image source={IMAGES.LoginBanner} style={styles.image} />
      <View style={styles.root}>
        <WidthContainer>
          <View style={styles.container}>
            <View>
              <Typography variant="title" style={styles.title}>
                Code Verification
              </Typography>
              <Typography variant="description12" style={styles.description}>
                We have sent the verification code to mobile number
              </Typography>
              <InputOtpField
                length={4}
                onChange={otp => handler.setValue('otp', otp)}
                onComplete={otp => handler.setValue('otp', otp)}
                inputStyles={{
                  borderColor: handler.formState.errors.otp
                    ? COLORS.red
                    : COLORS.placeholder,
                }}
              />
              <View style={styles.row}>
                <Typography variant="description12">
                  Didn’t Receive OTP?
                </Typography>
                <TouchableOpacity style={styles.resendOtp}>
                  <Typography variant="description12" color="primary">
                    Resend OTP
                  </Typography>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Verify" onPress={() => {}} />
            </View>
          </View>
        </WidthContainer>
      </View>
    </ThemeScrollView>
  );
};

export default VerifyOTPScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '30%',
  },
  root: {
    backgroundColor: COLORS.whiteSmoke,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    flex: 1,
  },
  title: {
    marginBottom: 26,
    marginTop: 36,
  },
  description: {
    width: '70%',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  resendOtp: {
    marginLeft: 20,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  buttonContainer: {
    paddingBottom: 40,
  },
});
