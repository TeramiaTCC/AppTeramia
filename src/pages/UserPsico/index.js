import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth'; 
import auth from '../../config/firebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import app from "../../config/firebaseconfig"
import { Alert } from 'react-native-web';

export default function UserPsico({ navigation, route }) {

    const db = getFirestore(app);

    async function deleteUsuario(){
        const credentials = JSON.parse(await AsyncStorage.getItem("userId"))

        await deleteDoc(doc(db, "usuario", credentials.uid))
        await deleteUser(auth.currentUser)
        .then(Alert.alert("Realizado com sucesso", "Conta apagada."))

        await AsyncStorage.clear();
        navigation.reset({
        index:0, 
        routes: [{
            name:"Signin"
        }]
        })
    }

    async function exit(){
        await AsyncStorage.clear();
        navigation.reset({
        index:0, 
        routes: [{
            name:"Signin"
        }]
        })
    }

 return (
<SafeAreaView style={styles.container}>
    <StatusBar barStyle={'default'}/>

      <TouchableOpacity
        style={styles.buttonLogout}
        activeOpacity={0.7}
        onPress={exit}
      >
        <Text style={styles.textButtonLogout}>SAIR DA CONTA</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonDelete}
        activeOpacity={0.7}
        onPress={deleteUsuario}
      >
        <Text style={styles.textButtonDelete}>EXCLUIR CONTA</Text>
      </TouchableOpacity>


   </SafeAreaView>
  );
}