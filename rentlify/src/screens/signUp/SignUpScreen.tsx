import React, {useState} from 'react';
import ThemeScrollView from '../../ui/theme-scroll-view/ThemeScrollView';
import {IMAGES} from '../../images';
import {COLORS} from '../../colors/index.color';
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import WidthContainer from '../../ui/width-container/WidthContainer';
import Typography from '../../ui/typography/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUpScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setForm(prev => ({...prev, [field]: value}));
  };

  const handleRegister = () => {
    console.log('Registration Data:', {...form});
  };

  return (
    <ThemeScrollView>
      <Image source={IMAGES.LoginBanner} style={styles.image} />
      <View style={styles.root}>
        <WidthContainer>
          <View style={styles.container}>
            <Typography variant="title" style={styles.title}>
            Sign Up & Begin Your Adventure
            </Typography>

            <View style={styles.inputContainer}>
              <Icon
                name="person-outline"
                size={24}
                color={COLORS.placeholder}
                style={styles.icon}
              />
              <TextInput
                placeholder="Name"
                style={styles.input}
                value={form.name}
                onChangeText={value => handleInputChange('name', value)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="attach-email"
                size={24}
                color={COLORS.placeholder}
                style={styles.icon}
              />
              <TextInput
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
                value={form.email}
                onChangeText={value => handleInputChange('email', value)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="phone"
                size={24}
                color={COLORS.placeholder}
                style={styles.icon}
              />
              <TextInput
                placeholder="Phone"
                style={styles.input}
                keyboardType="phone-pad"
                value={form.phoneNumber}
                onChangeText={value => handleInputChange('phoneNumber', value)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="lock-outline"
                size={24}
                color={COLORS.placeholder}
                style={styles.icon}
              />
              <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry
                value={form.password}
                onChangeText={value => handleInputChange('password', value)}
              />
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.divider} />
            </View>

            <TouchableOpacity style={styles.googleContainer}>
              <Image source={IMAGES.googleLogo} style={styles.googleIcon} />
              <Typography variant="description16" color="grey787878">
                Login with Google
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleContainer}>
              <Image source={IMAGES.faceBookLogo} style={styles.googleIcon} />
              <Typography variant="description16" color="grey787878">
                Login with Facebook
              </Typography>
            </TouchableOpacity>
          </View>
        </WidthContainer>
      </View>
    </ThemeScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.whiteSmoke,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 220,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    marginBottom: 26,
    color:COLORS.primary
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.placeholder,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: COLORS.black,
  },
  registerButton: {
    backgroundColor: COLORS.primary,
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 20,
    elevation: 3,
  },
  registerText: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  googleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: '#e2e2e2',
    borderWidth: 1,
    marginBottom: 30,
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: COLORS.grey,
  },
});
