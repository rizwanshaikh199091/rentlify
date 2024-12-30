import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {IMAGES} from '../../images';
import {COLORS} from '../../colors/index.color';
import Button from '../../ui/button/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const WelcomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    'A Tenant',
  );

  const navigation =
    useNavigation<NativeStackNavigationProp<TAuthNavigatorParams>>();

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
        <Icon
          name="arrow-back"
          size={24}
          color={COLORS.black}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Thank you for being Part of us...</Text>
      <Text style={styles.subtitle}>
        Select what service you are looking as
      </Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'A Tenant' && styles.optionSelected,
          ]}
          onPress={() => setSelectedOption('A Tenant')}>
          <Image source={IMAGES.tenant} style={styles.icon} />
          <Text
            style={[
              styles.optionText,
              selectedOption === 'A Tenant' && styles.optionTextSelected,
            ]}>
            A Tenant
          </Text>
          {selectedOption === 'A Tenant' && (
            <Icon name="checkmark-circle" size={24} color="#3fbe84" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'A Landlord' && styles.optionSelected,
          ]}
          onPress={() => setSelectedOption('A Landlord')}>
          <Image source={IMAGES.landloard} style={styles.icon} />
          <Text
            style={[
              styles.optionText,
              selectedOption === 'A Landlord' && styles.optionTextSelected,
            ]}>
            A Landlord
          </Text>
          {selectedOption === 'A Landlord' && (
            <Icon name="checkmark-circle" size={24} color="#3fbe84" />
          )}
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button title="Continue To Login " onPress={navigateToLogin} />
        </View>
      </View>

      <Image source={IMAGES.vectorImage} style={styles.illustration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.whiteSmoke,
  },
  backIcon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.secondaryBlue,
    textAlign: 'center',
    marginBottom: 30,
  },
  optionsContainer: {
    marginBottom: 30,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.grayd2d2d2,
    marginBottom: 15,
    backgroundColor: COLORS.white,
  },
  optionSelected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.success,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    color: COLORS.grey,
  },
  optionTextSelected: {
    color: COLORS.complete,
  },
  illustration: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    marginTop: 'auto',
  },
  buttonContainer: {
    marginVertical: 26,
  },
});

export default WelcomeScreen;
