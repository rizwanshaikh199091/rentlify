import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderProps> = ({title}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TAuthNavigatorParams>>();


  return (
    <View style={styles.headerContainer}>
      <View style={styles.headingContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        {title && (
          <View >
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      </View>
      <TouchableOpacity onPress={()=>{}} style={styles.logoutButton}>
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
    backgroundColor: '#F00F89',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 60,
    elevation: 5,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems:"center"
  },
  title: {
    paddingLeft:10,
    color: '#fff',
    fontSize: 20,
    fontWeight:"500"
  },
  backButton: {
    padding: 5,
  },
  logoutButton: {
    padding: 5,
  },
});
