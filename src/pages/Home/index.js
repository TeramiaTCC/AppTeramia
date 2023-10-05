import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import styles from './styles';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

 return (
   <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'}/>
        <Text>Home page</Text>
   </SafeAreaView>
  );
}