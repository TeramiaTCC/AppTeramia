import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import styles from './styles';

export default function Club() {
 return (
   <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'}/>
        <Text>Club page</Text>
   </SafeAreaView>
  );
}