import { StyleSheet } from "react-native";
import { COLORS } from "../../colors/index.color";

export const styles = StyleSheet.create({
    container: {
      marginTop: 20,
    },
    statsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      position: 'relative',
      marginBottom: 10,
    },
    statCard: {
      width: '48%',
      borderRadius: 16,
      paddingHorizontal: 16,
      paddingVertical: 35,
      marginBottom: 16,
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    IconStyle: {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 8,
      borderTopRightRadius: 16,
      borderBottomLeftRadius: 16,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    statLabel: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    AttendanceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: 20,
    },
    imageContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 25,
    },
    statValue: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    filterContainer: {
      zIndex: 1,
    },
    filterLabel: {
      fontSize: 14,
      color: COLORS.black,
      marginBottom: 8,
    },
    datePicker: {
      height: 40,
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
    },
    dropDownStyle: {
      borderWidth: 1,
      borderColor: COLORS.primary,
      backgroundColor: '#f9f9f9',
    },
    dropDownContainer: {
      height: 40,
      width: '100%',
    },
    invoiceImage: {
      width: 40,
      height: 40,
      borderRadius: 50,
      marginRight: 15,
    },
    invoiceTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    invoiceCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    showMoreButton: {
      alignItems: 'center',
      paddingVertical: 8,
    },
    showMoreText: {
      fontSize: 14,
      color: COLORS.primary,
      fontWeight: 'bold',
    },
  });