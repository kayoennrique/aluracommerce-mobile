import { Text, View, Switch } from 'react-native';
import { styles } from './styles';
import { useState, useContext } from 'react';
import { ContextTheme } from '../../contexts/ContextTheme';

export default function Settings({ navigation }) {
  const [state, setState] = useState(true);
  const { currentTheme, setCurrentTheme } = useContext(ContextTheme)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuração</Text>

      <View style={styles.inputArea}>
        <Text style={styles.subtitle}>Tema: {currentTheme}</Text>
        <Switch
          onValueChange={() =>
            currentTheme === 'dark' ?
              setCurrentTheme('light') :
              setCurrentTheme('dark')
          }
          value={currentTheme === 'dark' ? true : false}
        />
      </View>
    </View>
  );
}
