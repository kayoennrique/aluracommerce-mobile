import { Text, View, Switch } from 'react-native';
import { styles } from './styles';
import { useState, useContext } from 'react';
import { ContextTheme } from '../../contexts/ContextTheme';

export default function Settings({ navigation }) {
  const { currentTheme, setCurrentTheme, themeChosen } = useContext(ContextTheme);
  const style = styles(themeChosen);

  return (
    <View style={style.container}>
      <Text style={style.title}>Configuração</Text>

      <View style={style.inputArea}>
        <Text style={style.subtitle}>Tema: {currentTheme}</Text>
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
