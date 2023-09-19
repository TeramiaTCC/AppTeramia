import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Psicoup from '../pages/Psicoup';
import TabBar from './tabbar';
import Password from '../pages/Password';
import NewPet from '../pages/NewPet';

const Stack = createStackNavigator();

export default function StackNav () {
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
        name='NewPet'
        component={NewPet}
        options={{
          title: 'Adicionar Pet', 
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
        name='Rotation'
        component={TabBar}
        options={{
          headerShown: false
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
