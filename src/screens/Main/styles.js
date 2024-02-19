import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { theme } from '../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bottom,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.title,
  },
  list: {
    flex: 1,
    width: '100%',
  },
  latestVisas: {
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: theme.latestVisas,
  },
  titleLatestVisas: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.title,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  cartArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  cartIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.title,
  },
  cartQuantityArea: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartQuantity: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#fff",
  },
  iconArea: {
    marginLeft: 16,
  },
  icon: {
    color: theme.text,
    fontSize: 30,
  },
});