import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Product } from '../../components/Product';
import { styles } from './styles';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { ContextTheme } from '../../contexts/ContextTheme';
import { ContextAuth } from '../../contexts/ContextAuth';
import { ContextProducts } from '../../contexts/ContextProducts';


export default function Summary({ navigation }) {

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
      <View style={style.titleArea}>
        <Text style={style.title}>Olá, {user.name}</Text>
        <View style={style.cartArea}>
          <TouchableOpacity onPress={() => { }}>
            <Feather name="shopping-cart" size={30} color="#fff" style={style.cartIcon} />
          </TouchableOpacity>
          {amount > 0 && <View style={style.cartQuantityArea}>
            <Text style={style.cartQuantity}>{amount}</Text>
          </View>}
          <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={style.iconArea} >
            <MaterialCommunityIcons name="settings" size={30} color="#fff" style={style.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={cart}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Product item={item} add={false} />}
        style={style.list}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('Finalizar')}
      >
        <Text style={style.buttonText}>Finalizar</Text>
      </TouchableOpacity>

    </View>
  );
}