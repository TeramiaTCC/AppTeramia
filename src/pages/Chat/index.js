import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { View } from 'react-native';



export default function Chat(props, {navigation}) {
    console.log(props.route.params)
    const value = props.route.params.nome

    useEffect(() => {
        props.navigation.setOptions({
          title: value === '' ? 'No title' : value,
        });
      }, [navigation, value]);
    
 return (
    <View/>
  );
}