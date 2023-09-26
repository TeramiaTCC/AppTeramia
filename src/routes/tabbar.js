import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import Home from '../pages/Home';
import User from '../pages/User';
import Pett from '../pages/Pet';
import Club from '../pages/Club';
import Community from '../pages/Community';

const Tab = createBottomTabNavigator();

export default function TabBar() {
 return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor: '#F16520',
            tabBarInactiveTintColor: '#f7b08d',
            tabBarStyle: { backgroundColor: '#EEE7D9', },
        }}
    >

        <Tab.Screen
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
                tabBarIcon: ({size, color}) => (<Ionicons name="ios-home-sharp" size={size} color={color} />),
                
            }}
        />

        <Tab.Screen
            name='Community'
            component={Community}
            options={{
                title: 'Comunidade', 
                headerTintColor: "#F16520",
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerStyle: {
                  backgroundColor: '#EEE7D9'
                },
                tabBarIcon: ({size, color}) => (<Ionicons name="chatbubbles" size={size} color={color} />),
            }}
        />

        <Tab.Screen
            name='Club'
            component={Club}
            options={{
                title: 'Clube do Mia', 
                headerTintColor: "#F16520",
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerStyle: {
                  backgroundColor: '#EEE7D9'
                },
                tabBarIcon: ({size, color}) => (<Ionicons name="logo-octocat" size={size} color={color} />),
            }}
        />

        <Tab.Screen
            name='Pet'
            component={Pett}
            options={{
                title: 'Meus Pets', 
                headerTintColor: "#F16520",
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerStyle: {
                  backgroundColor: '#EEE7D9'
                },
                tabBarIcon: ({size, color}) => (<Ionicons name="paw" size={size} color={color} />),
            }}
        />

        <Tab.Screen
            name='User'
            component={User}
            options={{
                title: 'Usuario', 
                headerTintColor: "#F16520",
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerStyle: {
                  backgroundColor: '#EEE7D9'
                },
                tabBarIcon: ({size, color}) => (<FontAwesome5 name="user-circle" size={size} color={color} />),
            }}
        />
    </Tab.Navigator>
  );
}