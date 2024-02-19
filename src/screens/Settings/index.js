import { Text, View, Switch } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function Settings({ navigation }) {
  const [state, setState] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuração</Text>

      <View style={styles.inputArea}>
        <Text style={styles.subtitle}>Tema: Escuro</Text>
        <Switch
          onValueChange={() => setState(!state)}
          value={state}
        />
      </View>
    </View>
  );
}
