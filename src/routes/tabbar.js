import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';

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
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FFF',
            tabBarInactiveTintColor: 'rgba(240, 240, 240, 0.35)',
            tabBarStyle: { backgroundColor: '#F16520', },
        }}
    >

        <Tab.Screen
            name='Home'
            component={Home}
            options={{
                title: 'Página inicial', 
                headerTintColor: "#FFF",
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerStyle: {
                  backgroundColor: '#F16520'
                },
                tabBarIcon: ({size, color}) => (<Foundation name="home" size={size} color={color} />),
                
            }}
        />

        <Tab.Screen
            name='Community'
            component={Community}
            options={{
                title: 'Comunidade', 
                headerTintColor: "#FFF",
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerStyle: {
                  backgroundColor: '#F16520'
                },
                tabBarIcon: ({size, color}) => (<Ionicons name="chatbubbles" size={size} color={color} />),
            }}
        />

        <Tab.Screen
            name='Club'
            component={Club}
            options={{
                title: 'Clube do Mia', 
                headerTintColor: "#FFF",
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerStyle: {
                  backgroundColor: '#F16520'
                },
                tabBarIcon: ({size, color}) => (<FontAwesome5 name="certificate" size={size} color={color} />),
            }}
        />

        <Tab.Screen
            name='Pet'
            component={Pett}
            options={{
                title: 'Meus Pets', 
                headerTintColor: "#FFF",
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerStyle: {
                  backgroundColor: '#F16520'
                },
                tabBarIcon: ({size, color}) => (<Ionicons name="paw" size={size} color={color} />),
            }}
        />

        <Tab.Screen
            name='User'
            component={User}
            options={{
                title: 'Usuario', 
                headerTintColor: "#FFF",
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerStyle: {
                  backgroundColor: '#F16520'
                },
                tabBarIcon: ({size, color}) => (<FontAwesome5 name="user-circle" size={size} color={color} />),
            }}
        />
    </Tab.Navigator>
  );
}