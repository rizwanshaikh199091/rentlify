import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {IMAGES} from '../../images';
import {COLORS} from '../../colors/index.color';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SplashScreen = () => {

  const navigation =
  useNavigation<NativeStackNavigationProp<TAuthNavigatorParams>>();

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={IMAGES.Logo} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.appName}>Welcome To Rentlify</Text>
          <Text style={styles.description}>
            Find the tenant, list your property in just a simple steps, in your
            hand. 
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  img: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    fontStyle:"italic",
    color: COLORS.secondaryBlue,
    marginBottom: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: COLORS.secondaryBlue,
    textAlign: 'center',
    lineHeight: 22,
    marginHorizontal: 10,
    marginBottom: 40,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 60,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});

export default SplashScreen;
