import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { IMAGES } from '../../images';
import styles from './sideDrawerStyle'; // Assuming styles file has necessary styles
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';

const SideDrawer: React.FC = () => {
  const navigation = useNavigation<NavigationProp<TDrawerNavigatorParams>>();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={IMAGES.person} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Alfaiz Rangrez</Text>
          <Text style={styles.profileNumber}>+91 7804064484</Text>
        </View>
      </View>


      <View style={styles.screenContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('SettingScreen')}
        >
          <Icon
            name="settings-sharp"
            size={20}
            color="rgba(91, 91, 91, 1)"
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('otherServiceScreen')}
        >
          <Icons
            name="design-services"
            size={20}
            color="rgba(91, 91, 91, 1)"
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Other Services</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.versionText}>Version: 0.1.2.2</Text>
    </View>
  );
};

export default SideDrawer;
