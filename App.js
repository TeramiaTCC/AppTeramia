import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from './src/pages/Signin';
import Signup from './src/pages/Signup';
import Psicoup from './src/pages/Psicoup';
import Home from './src/pages/Home';
import Password from './src/pages/Password';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin'>
        
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            title: 'Entrar', 
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
          name="Signup"
          component={Signup}
          options={{
            title: 'Cadastrar', 
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
          name="SignupPsico"
          component={Psicoup}
          options={{
            title: 'Cadastrar', 
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
        name='Password'
        component={Password}
        options={{
          title: 'Esqueci minha senha', 
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
        name='Home'
        component={Home}
        options={{
          title: 'Página inicial', 
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
