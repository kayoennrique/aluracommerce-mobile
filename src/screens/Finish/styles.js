import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.bottom,
      alignItems: 'stretch',
      justifyContent: 'space-between',
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
    button: {
      marginBottom: 32,
      paddingVertical: 16,
      borderRadius: 10,
      backgroundColor: theme.button,
      justifyContent: 'flex-end',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.black,
      textAlign: 'center',
    },
    viewComponent: {
      backgroundColor: theme.gray,
      padding: 16,
      width: '100%',
      marginBottom: 16,
    },
    finishAreaTitle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    finishTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.title,
      marginLeft: 8,
    },
    finishIcon: {
      marginBottom: 8,
      color: theme.title,
      fontSize: 26,
    },
    titleArea: {
      width: '100%',
      marginBottom: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.title,
    },
    finishTxt: {
      fontSize: 16,
      color: theme.title,
    }
  });
};