import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '../components/Icons/icons';
import { Icons } from '../components/Icons/icons';
import Colors from '../components/Colors/Colors';

import * as Animatable from 'react-native-animatable';

import Home from '../pages/Home';
import User from '../pages/User';
import Pett from '../pages/Pet';
import Club from '../pages/Club';
import Community from '../pages/Community';

const TabArr = [
    { route: 'Página Incial', label: 'Atividades', type: Icons.Entypo, icon: 'home', component: Home, color: Colors.brown, alphaClr: Colors.brownAlpha },
    { route: 'Comunidade', label: 'Comunidade', type: Icons.Ionicons, icon: 'chatbubbles', component: Community, color: Colors.brown, alphaClr: Colors.brownAlpha },
    { route: 'Psicólogos', label: 'Psicólogos', type: Icons.FontAwesome5, icon: 'certificate', component: Club, color: Colors.brown, alphaClr: Colors.brownAlpha },
    { route: 'Meus TeraPets', label: 'TeraPets', type: Icons.Ionicons, icon: 'paw', component: Pett, color: Colors.brown, alphaClr: Colors.brownAlpha },
    { route: 'Conta', label: 'Conta', type: Icons.FontAwesome5, icon: 'user-circle', component: User, color: Colors.brown, alphaClr: Colors.brownAlpha },
  ];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const textViewRef = useRef(null);
    const iconeViewRef = useRef(null);

    useEffect(() => {
        if (focused) { // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 }, 0: { scale: 0 }, 1: { scale: 1 } }
          viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
          textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
          iconeViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
        } else {
          viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
          textViewRef.current.animate({0: {scale: 1 }, 1: {scale: 0}});
          iconeViewRef.current.animate({0: {scale: 1}, 1: {scale: 1}});
        }
      }, [focused])

    return(
        <TouchableOpacity style={[styles.container, {flex: focused ? 1 : 0.4}]} onPress={onPress} activeOpacity={1}>
            <View>
                <Animatable.View
                    ref={viewRef}
                    style={[StyleSheet.absoluteFillObject, {backgroundColor: item.color, borderRadius: 16}]}
                />
                <View style={[styles.btn, {backgroundColor: focused ? null : item.alphaClr}]}>
                    <Animatable.View
                        ref={iconeViewRef}
                    >
                    <Icon type={item.type} name={item.icon} color={focused ? Colors.colorAct : Colors.colorInAct}/>
                    </Animatable.View>

                    <Animatable.View
                        ref={textViewRef}
                    >
                    { focused && <Text style={{color: Colors.white, paddingHorizontal: 8}}>{item.label}</Text> }
                    </Animatable.View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default function TabBar() {
 return (

    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                height: 60,
                position: "absolute",
                bottom: 8,
                right: 8,
                left: 8,
                borderRadius: 50,
                backgroundColor: Colors.backColor,
            }
        }}
    >
        {TabArr.map((item) => {
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
                        tabBarIcon: ({color}) => (
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        borderRadius: 16
    }
})