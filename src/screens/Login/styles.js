import { StyleSheet } from 'react-native';
import { theme } from '../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bottom,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 20,
  },
  inputArea: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    backgroundColor: theme.input,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    color: theme.preto,
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: theme.button,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: theme.black,
  }
});