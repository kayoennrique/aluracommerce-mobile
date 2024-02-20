import { Text, View, Switch } from 'react-native';
import { styles } from './styles';
import { useContext } from 'react';
import { ContextTheme } from '../../contexts/ContextTheme';

export default function Settings({ navigation }) {
  const {
    currentTheme,
    themeChosen,
    saveThemeOnDevice
  } = useContext(ContextTheme);
  const style = styles(themeChosen);

  return (
    <View style={style.container}>
      <Text style={style.title}>Configuração</Text>

      <View style={style.inputArea}>
        <Text style={style.subtitle}>Tema: {currentTheme}</Text>
        <Switch
          onValueChange={() =>
            currentTheme === 'dark' ?
              saveThemeOnDevice('light') :
              saveThemeOnDevice('dark')
          }
          value={currentTheme === 'dark' ? true : false}
        />
      </View>
    </View>
  );
}
