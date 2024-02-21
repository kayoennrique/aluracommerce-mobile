import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { ContextTheme } from '../../contexts/ContextTheme';
import { ContextAuth } from '../../contexts/ContextAuth';
import { ContextProducts } from '../../contexts/ContextProducts';

export default function Finish({ navigation }) {
  const { themeChosen } = useContext(ContextTheme);
  const style = styles(themeChosen)
  const { user } = useContext(ContextAuth);
  const { amount, cart, deletarProdutos } = useContext(ContextProducts);

  async function finish() {
    await deletarProdutos();
    navigation.navigate('Principal');
  }

  return (
    <View style={style.container}>
      <StatusBar />
      <View>
        <View style={style.titleArea}>
          <Text style={style.title}>Confirme os dados do seu pedido</Text>
        </View>
        <View style={style.viewComponent}>
          <View style={style.finishAreaTitle}>
            <MaterialCommunityIcons name="user" style={style.finishIcon} />
            <Text style={style.finishTitle}>Destinatário</Text>
          </View>
          <Text style={style.finishTxt}>{user.name}</Text>
          <Text style={style.finishTxt}>{user.email}</Text>
          <Text style={style.finishTxt}>{user.address}</Text>
          <Text style={style.finishTxt}>{user.telephone}</Text>
        </View>
        <View style={style.viewComponent}>
          <View style={style.finishAreaTitle}>
            <MaterialCommunityIcons name="info" style={style.finishIcon} />
            <Text style={style.finishTitle}>Produtos</Text>
          </View>
          <Text style={style.finishTxt}>Total de itens: {amount}</Text>
          <Text style={style.finishTxt}>Total a pagar: R$
            {cart.reduce((total, item) => total + item.price, 0).toFixed(2).replace('.', ',')}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={style.button} onPress={() => finish()}>
        <Text style={style.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}
