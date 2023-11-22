import React, { useState } from 'react';
import { Text, StatusBar, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';

import styles from './styles';
import Colors from '../../components/Colors/Colors';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore, doc, deleteDoc, setDoc, Firestore } from 'firebase/firestore';
import app from "../../config/firebaseconfig"

import { FontAwesome, AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function CommentPage({navigation}) {
    const db = getFirestore(app);
    const [coment, setComent] = useState('');

    async function comentar(){

    const credentials = JSON.parse(await AsyncStorage.getItem("userId"));

    await setDoc(doc(db, "comentarios", credentials.uid), {
        comentario: coment,

      }).then(() => {
        navigation.navigate("Club")
        console.log('foi')
      })
    }

 return (
   <SafeAreaView style={styles.prmryContainer} >
        <StatusBar barStyle={'default'}/>

        <KeyboardAvoidingView
            keyboardVerticalOffset={90}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.margin, styles.row, styles.marginBottom]}
        >
        <FontAwesome name="user-circle-o" size={40} color={Colors.brown} />
        <TextInput
            style={styles.comentInput}
            multiline
            maxLength={150}
            placeholder='Adicione um comentário...'
            placeholderTextColor={Colors.brownAlpha2}
            onChangeText={(text) => setComent(text)}
            value={coment}
        />
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={comentar}
        >
            <Ionicons style={styles.send} name="send" size={15} color={Colors.white} />
        </TouchableOpacity>
    </KeyboardAvoidingView>

   </SafeAreaView>
  );
}