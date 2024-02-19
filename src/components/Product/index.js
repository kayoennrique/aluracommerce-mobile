import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export function Product({ item, add }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={1}>{item.text}</Text>
        <Text style={styles.price}>R$ {item.price}</Text>
      </View>
      {add &&
        <TouchableOpacity style={styles.buttonAdd} onPress={() => { }}>
          <Text style={styles.buttonTExt}>+</Text>
        </TouchableOpacity>}
    </View>
  );
}
