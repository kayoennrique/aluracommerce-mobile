import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Product } from '../../components/Product';
import { products } from './products';
import { styles } from './styles';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { ContextTheme } from '../../contexts/ContextTheme';
import { ContextAuth } from '../../contexts/ContextAuth';
import { ContextProducts } from '../../contexts/ContextProducts';

export default function Main({ navigation }) {
  const { themeChosen } = useContext(ContextTheme);
  const style = styles(themeChosen);

  const {
    user
  } = useContext(ContextAuth)

  const {
    amount,
    latestVisas
  } = useContext(ContextProducts)

  return (
    <View style={style.container}>
      <StatusBar />
      <View style={style.titleArea}>
        <Text style={style.title}>Olá, {user.name}</Text>
        <View style={style.cartArea}>
          <TouchableOpacity onPress={() => navigation.navigate('Resumo')}>
            <Feather name="shopping-cart" size={30} color="#fff" style={style.cartIcon} />
          </TouchableOpacity>
          {amount > 0 &&
            <View style={style.cartQuantityArea}>
              <Text style={style.cartQuantity}>{amount}</Text>
            </View>}
          <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={style.iconArea} >
            <MaterialCommunityIcons name="settings" size={30} color="#fff" style={style.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Product item={item} add={true} />}
        style={style.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() =>
          <View>
            {latestVisas.length > 0 &&
              <View style={style.latestVisas}>
                <Text style={style.titleLatestVisas}>Últimos vistos</Text>
                <FlatList
                  data={latestVisas}
                  keyExtractor={item => Math.random()}
                  renderItem={({ item }) => <Product item={item} add={false} />}
                  style={style.list}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>}
            <Text style={[style.title, { paddingLeft: 16 }]}>Produtos</Text>
          </View>
        }
      />
    </View>
  );
}