import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from './icons';
import { Icons } from './icons';
import Colors from './Colors';

import Home from '../pages/Home';
import User from '../pages/User';
import Pett from '../pages/Pet';
import Club from '../pages/Club';
import Community from '../pages/Community';

const TabArr = [
    { route: 'Página Incial', label: 'Página Incial', type: Icons.Foundation, icon: 'home', component: Home, color: Colors.primary, alphaClr: Colors.primaryAlpha },
    { route: 'Comunidade', label: 'Comunidade', type: Icons.Ionicons, icon: 'chatbubbles', component: Community, color: Colors.green, alphaClr: Colors.greenAlpha },
    { route: 'Clube do Mia', label: 'Clube do Mia', type: Icons.FontAwesome5, icon: 'certificate', component: Club, color: Colors.red, alphaClr: Colors.redAlpha },
    { route: 'Meus TeraPets', label: 'Meus TeraPets', type: Icons.Ionicons, icon: 'paw', component: Pett, color: Colors.purple, alphaClr: Colors.purpleAlpha },
    { route: 'Conta', label: 'Conta', type: Icons.FontAwesome5, icon: 'user-circle', component: User, color: Colors.purple, alphaClr: Colors.purpleAlpha },
  ];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    return(
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
            <Icon type={item.type} name={item.icon} color={focused ? Colors.colorAct : Colors.colorInAct}/>
        </TouchableOpacity>
    )
}

export default function TabBar2() {
 return (

    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                height: 60,
                position: "absolute",
                bottom: 16,
                right: 16,
                left: 16,
                borderRadius: 50,
                backgroundColor: Colors.backColor,
            }
        }}
    >
        {TabArr.map((item, index) => {
            return (
                <Tab.Screen 
                    name={item.route}
                    component={item.component}
                    options={{
                        tabBarShowLabel: false,
                        headerTintColor: Colors.colorAct,
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                        headerStyle: {
                          backgroundColor: Colors.backColor
                        },
                        //tabBarLabel: item.label,
                        tabBarIcon: ({color, focused}) => (
                            <Icon type={item.type} name={item.icon} color={color} />
                        ),
                        tabBarButton: (props) => <TabButton {...props} item={item} />
                    }}
                />
            )
        })}
    </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})