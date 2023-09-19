import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import styles from '../Pet/styles';

export default function Home() {
 return (
   <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'}/>
        <Text>Home page</Text>
   </SafeAreaView>
  );
}