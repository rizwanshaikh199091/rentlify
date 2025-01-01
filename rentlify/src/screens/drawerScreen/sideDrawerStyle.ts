import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors/index.color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:50,
    paddingHorizontal:20,
    backgroundColor:COLORS.primary,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  profileNumber: {
    fontSize: 14,
    color: COLORS.whiteSmoke,
  },
  screenContainer: {
    flex: 1,
    padding:15
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  versionText: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'right',
    marginBottom: 10,
  },
});

export default styles;
