import { View, StyleSheet, Image } from 'react-native';
import * as React from 'react';
import ThemeScrollView from '../../ui/theme-scroll-view/ThemeScrollView';
import WidthContainer from '../../ui/width-container/WidthContainer';
import Typography from '../../ui/typography/Typography';
import InputText from '../../ui/input-text/InputText';
import Button from '../../ui/button/Button';
import { COLORS } from '../../colors/index.color';
import CustomCarousel from '../../ui/custom-carousel/CustomCarousel';
import { loginBannerData } from '../../utils/loginBannerData';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IMAGES } from '../../images';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
 
  const LOGIN = object().shape({
    mobile: string()
      .required('Mobile Number is required')
      .length(10, 'Please enter valid mobile number')
      .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
      .test(
        'not-start-with-zero',
        'Please enter valid mobile number',
        value => !!value && !value.startsWith('0')
      ),
  });

   const navigation =
      useNavigation<NativeStackNavigationProp<TAuthNavigatorParams>>();
  
    const navigateToOTPSceen = () => {
      navigation.navigate('VerifyOTP');
    };


  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      mobile: '',
    },
    resolver: yupResolver(LOGIN),
  });

  const onSubmit = (data: any) => {
    
  };

  return (
    <ThemeScrollView>
      <CustomCarousel data={loginBannerData} height={320} autoPlay />
      <View style={styles.root}>
        <WidthContainer>
          <View style={styles.container}>
            <View>
              <Typography variant="title" style={styles.title}>
                Let’s get started
              </Typography>
              <InputText
                keyboardType="numeric"
                control={control}
                name="mobile"
                placeholder="Mobile Number"
              
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                onPress={navigateToOTPSceen}
                title="Send OTP"  
              />
              <Typography
                variant="description12"
                color="placeholder"
                style={styles.orText}>
                OR
              </Typography>
              <TouchableOpacity style={styles.googleContainer}>
                <Image
                  source={IMAGES.googleLogo}
                  style={styles.googleIcon}
                />
                <Typography variant="description16" color="grey787878">
                  Login with Google
                </Typography>
              </TouchableOpacity>
            </View>
            
          </View>
        </WidthContainer>
      </View>
    </ThemeScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.whiteSmoke,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    marginTop: 36,
    marginBottom: 26,
  },
  buttonContainer: {
    paddingVertical: 26,
  },
  orText: {
    paddingVertical: 8,
    textAlign: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  googleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: '#e2e2e2',
    borderWidth: 1,
  },
});
