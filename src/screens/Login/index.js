import { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';
import { ContextTheme } from "../../contexts/ContextTheme";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { themeChosen } = useContext(ContextTheme);

  const style = styles(themeChosen);

  return (
    <View style={style.container}>
      <StatusBar />
      <Text style={style.title}>Login</Text>

      <View style={style.inputArea}>
        <TextInput
          style={style.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={style.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('Principal')}
      >
        <Text style={style.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

