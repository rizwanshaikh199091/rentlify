import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import HeaderBar from '../../ui/header/Header';
import ThemeSafeAreaView from '../../ui/theme-safe-area-view/ThemeSafeAreaView';
import WidthContainer from '../../ui/width-container/WidthContainer';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedDateFilter, setSelectedDateFilter] = useState('today');

  const stats = [
    { id: '1', label: 'Total Properties', value: '120', bgColor: '#ff6b6b' },
    { id: '2', label: 'Total Rent Collected', value: '$15,000', bgColor: '#1dd1a1' },
    { id: '3', label: 'Total Rent Due', value: '$5,000', bgColor: '#48dbfb' },
    { id: '4', label: 'Total Tenants', value: '85', bgColor: '#feca57' },
  ];

  const dateFilters = [
    { label: 'Today', value: 'today' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'This Month', value: 'thisMonth' },
    { label: 'Custom Date', value: 'custom' },
  ];

  return (
    <ThemeSafeAreaView>
     <HeaderBar title='dashBoard'/>

    <WidthContainer>
    <View style={styles.container}>
    <View style={styles.statsContainer}>
        {stats.map((stat) => (
          <View key={stat.id} style={[styles.statCard, { backgroundColor: stat.bgColor }]}>
            <Text style={styles.statLabel}>{stat.label}</Text>
            <Text style={styles.statValue}>{stat.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.filterContainer}>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <View style={styles.dateFilter}>
          <Text style={styles.filterLabel}>Date Filter:</Text>
          <Picker
            selectedValue={selectedDateFilter}
            onValueChange={(itemValue) => setSelectedDateFilter(itemValue)}
            style={styles.datePicker}
          >
            {dateFilters.map((filter) => (
              <Picker.Item key={filter.value} label={filter.label} value={filter.value} />
            ))}
          </Picker>
        </View>

        {selectedDateFilter === 'custom' && (
          <View style={styles.customDateContainer}>
            <Text style={styles.customDateText}>Custom Date Picker Placeholder</Text>
          </View>
        )}
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>View Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonSecondary}>
          <Text style={styles.actionButtonTextSecondary}>Export Data</Text>
        </TouchableOpacity>
      </View>
    </View>
    </WidthContainer>
    </ThemeSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  filterContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchBox: {
    marginBottom: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  dateFilter: {
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 14,
    color: '#2c3e50',
    marginBottom: 8,
  },
  datePicker: {
    height: 40,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  customDateContainer: {
    marginTop: 16,
  },
  customDateText: {
    fontSize: 14,
    color: '#2c3e50',
    fontStyle: 'italic',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  actionButton: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  actionButtonSecondary: {
    backgroundColor: '#dfe6e9',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  actionButtonTextSecondary: {
    color: '#2c3e50',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
