import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function User({navigation}) {
 return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle={'default'}/>

      <TouchableOpacity
        style={styles.buttonLogout}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Signin')}
      >
        <Text style={styles.textButtonLogout}>SAIR DA CONTA</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonDelete}
        activeOpacity={0.7}
      >
        <Text style={styles.textButtonDelete}>EXCLUIR CONTA</Text>
      </TouchableOpacity>


   </SafeAreaView>
  );
}