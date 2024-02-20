import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Main from './screens/Main';
import Login from './screens/Login';
import Settings from './screens/Settings';
import Summary from './screens/Summary';
import Finish from './screens/Finish';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Tab.Screen name="Principal" component={Main} options={{ headerShown: false }} />
        <Tab.Screen name="Configurações" component={Settings} options={{ headerTitleAlign: 'center' }} />
        <Tab.Screen name="Resumo" component={Summary} options={{ headerTitleAlign: 'center' }} />
        <Tab.Screen name="Finalizar" component={Finish} options={{ headerTitleAlign: 'center' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}