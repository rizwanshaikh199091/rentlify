import React, { useState } from 'react';
import ThemeScrollView from '../../ui/theme-scroll-view/ThemeScrollView';
import { IMAGES } from '../../images';
import { COLORS } from '../../colors/index.color';
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

const SignUpScreen = () => {
  const [selectedRole, setSelectedRole] = useState('Owner');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = () => {
    console.log('Registration Data:', { ...form, role: selectedRole });
  };

  return (
    <ThemeScrollView>
      <Image source={IMAGES.LoginBanner} style={styles.image} />
      <View style={styles.root}>
        <WidthContainer>
          <View style={styles.container}>

            <View style={styles.headingContainer}>
              <Typography variant="description12" style={styles.mainHeading}>
                Welcome to Rentlify
              </Typography>
              <Typography variant="description16" style={styles.subHeading}>
                Join us to explore endless renting possibilities!
              </Typography>
            </View>

            <View style={styles.roleTabs}>
              <TouchableOpacity
                style={[
                  styles.tab,
                  selectedRole === 'Owner' && styles.activeTab,
                ]}
                onPress={() => setSelectedRole('Owner')}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedRole === 'Owner' && styles.activeTabText,
                  ]}
                >
                  Owner
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tab,
                  selectedRole === 'Tenant' && styles.activeTab,
                ]}
                onPress={() => setSelectedRole('Tenant')}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedRole === 'Tenant' && styles.activeTabText,
                  ]}
                >
                  Tenant
                </Text>
              </TouchableOpacity>
            </View>

            <Typography variant="title" style={styles.roleHeading}>
              Register as {selectedRole}
            </Typography>

         
            <TextInput
              placeholder="Full Name"
              style={styles.input}
              value={form.name}
              onChangeText={(value) => handleInputChange('name', value)}
            />
            <TextInput
              placeholder="Email Address"
              style={styles.input}
              keyboardType="email-address"
              value={form.email}
              onChangeText={(value) => handleInputChange('email', value)}
            />
            <TextInput
              placeholder="Phone Number"
              style={styles.input}
              keyboardType="phone-pad"
              value={form.phoneNumber}
              onChangeText={(value) => handleInputChange('phoneNumber', value)}
            />
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
            >
              <Text style={styles.registerText}>Register</Text>
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
  },
  image: {
    width: '100%',
    height: 220,
  },
  container: {
    flex: 1,
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 14,
    color: COLORS.grey,
    textAlign: 'center',
    marginTop: 8,
  },
  roleTabs: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-evenly',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: COLORS.grayd2d2d2,
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.grey,
    fontWeight: '600',
    fontSize: 16,
  },
  activeTabText: {
    color: COLORS.white,
  },
  roleHeading: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 16,
    color: COLORS.primary,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  registerButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
  },
  registerText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
