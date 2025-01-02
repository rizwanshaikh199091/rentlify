import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { COLORS } from '../../colors/index.color';

interface HeaderProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation<DrawerNavigationProp<TMainNavigatorParams>>();


  return (
    <View style={styles.headerContainer}>
      <View style={styles.headingContainer}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()} 
          style={styles.menuButton}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        {title && (
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.logoutButton}>
        <Icon name="exit" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 60,
    elevation: 5,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingLeft: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  backButton: {
    padding: 5,
  },
  menuButton: {
    padding: 5,
  },
  logoutButton: {
    padding: 5,
  },
});
