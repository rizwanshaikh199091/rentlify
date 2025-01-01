import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import HeaderBar from '../../ui/header/Header';
import ThemeSafeAreaView from '../../ui/theme-safe-area-view/ThemeSafeAreaView';
import WidthContainer from '../../ui/width-container/WidthContainer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLORS} from '../../colors/index.color';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IMAGES} from '../../images';
import { recentInvoices, stats } from '../../utils/cardData';
import Typography from '../../ui/typography/Typography';
import { styles } from './homeScreenStyle';

const HomeScreen = () => {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<TMainNavigatorParams>>();

 

  return (
    <ThemeSafeAreaView>
      <HeaderBar title="Dashboard" />
      <WidthContainer>
        <View style={styles.container}>
          <View style={styles.filterContainer}>
            <DropDownPicker
              open={open}
              value={value}
              items={[
                {label: 'Today', value: 'today'},
                {label: 'Yesterday', value: 'yesterday'},
                {label: 'This Month', value: 'thisMonth'},
                {label: 'Custom Date', value: 'custom'},
              ]}
              setOpen={setOpen}
              setValue={setValue}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: COLORS.whiteSmoke,
              }}
              placeholder="Select an Date "
              containerStyle={{
                marginBottom: 16,
              }}
              dropDownContainerStyle={{
                borderWidth: 1,
                borderColor: COLORS.placeholder,
                paddingVertical: 5,
                backgroundColor: '#fff',
              }}
            />
          </View>

          <View style={styles.statsContainer}>
            {stats.map(stat => (
              <View
                key={stat.id}
                style={[styles.statCard, {backgroundColor: stat.bgColor}]}>
                <View style={styles.cardHeader}>
                  <Text
                    style={[
                      styles.statLabel,
                      {color: stat.textColor || '#000'},
                    ]}>
                    {stat.label}
                  </Text>
                </View>
                <Text
                  style={[styles.statValue, {color: stat.textColor || '#000'}]}>
                  {stat.value}
                </Text>
                <Icon
                  name={stat.icon}
                  size={14}
                  color={stat.bgColor || '#000'}
                  style={[
                    styles.IconStyle,
                    {backgroundColor: stat.IconBackground},
                  ]}
                />
              </View>
            ))}
          </View>

          <View>
            <View style={styles.AttendanceContainer}>
            <Typography color="primary" variant='subTitle' >Recent Invoice</Typography>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('InvoiceScreen');
                }}>
                 <Typography color="primary" variant='subTitle' >Show More</Typography>
              </TouchableOpacity>
            </View>

            {recentInvoices.slice(0, 4).map((invoice, index) => (
              <View key={index} style={styles.invoiceCard}>
                <View style={styles.imageContainer}>
                  <Image
                    source={IMAGES.LoginBanner}
                    style={styles.invoiceImage}
                  />
                <Typography color="primary" variant='subTitle' >{invoice.date}</Typography>
                </View>

               <Typography color='black' variant='description14'>{invoice.amount}</Typography> 
              </View>
            ))}
          </View>
        </View>
      </WidthContainer>
    </ThemeSafeAreaView>
  );
};



export default HomeScreen;
