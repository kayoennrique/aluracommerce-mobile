import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useContext } from 'react';
import { ContextTheme } from '../../contexts/ContextTheme';
import { ContextAuth } from '../../contexts/ContextAuth';
import { ContextProducts } from '../../contexts/ContextProducts';

export default function Finish({ navigation }) {

  const {
    themeChosen
  } = useContext(ContextTheme)
  const style = styles(themeChosen)

  const {
    user
  } = useContext(ContextAuth)

  const {
    amount,
    cart
  } = useContext(ContextProducts)

  return (
    <View style={style.container}>
      <StatusBar />

      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('Principal')}
      >
        <Text style={style.buttonText}>Finalizar</Text>
      </TouchableOpacity>

    </View>
  );
}