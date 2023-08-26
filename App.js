import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from './src/pages/Signin';
import Signup from './src/pages/Signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin'>
        
        <Stack.Screen
          name="Entrar"
          component={Signin}
          options={{
            headerTintColor: "#F16520",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#EEE7D9'
            },
          }}
        />

      <Stack.Screen
          name="Cadastrar"
          component={Signup}
          options={{
            headerTintColor: "#F16520",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#EEE7D9'
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
