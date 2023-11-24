import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Button, Text, TouchableOpacity, View, Image, Modal, TextInput, SafeAreaView, TouchableHighlight, StatusBar, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import { Ionicons, MaterialIcons, Entypo, Feather, FontAwesome } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import app from '../../config/firebaseconfig';
import { getAuth, snapshot } from "firebase/auth";
import { getFirestore, doc, setDoc, addDoc, Firestore, collection, Timestamp, serverTimestamp, FieldValue } from "firebase/firestore";
import { getStorage, uploadString, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";

import Colors from '../../components/Colors/Colors';

export default function NewPost(props, { navigation }) {
  //console.log('foto que chegou:', props.route.params.image)

  const image = props.route.params.image;


  const [legenda, setLegenda]=useState("")

  const uploadImage = async () => {
    const credentials = JSON.parse(await AsyncStorage.getItem("userId"))
    const uri = props.route.params.image;

    const metadata = {
      contentType: 'image/png'
    };

    filename = Math.random().toString(36);

    const storage = getStorage();
    const storageRef = ref(storage, `publicacoes/${credentials.uid}/${filename}`);

    const response = await fetch(uri);
    const blob = await response.blob();

    const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

    const taskProgress = snapshot => {
      console.log(`transferred: ${snapshot.bytesTransferred}`)
    }

    const taskCompleted = () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          savePostData(downloadURL);
          console.log('File available at', downloadURL);
        });
    }

    const taskError = snapshot => {
      console.log(snapshot)
      console.log('foi não')
    }

    uploadTask.on('state_changed', taskProgress, taskError, taskCompleted);
  
  }

 

  async function savePostData (downloadURL)  {
    const credentials = JSON.parse(await AsyncStorage.getItem("userId"))
    const db = getFirestore(app);
    const new_date = new Date();
    dataFormatada = new_date.getDate() + "/" + (new_date.getMonth() + 1) + "/" + new_date.getFullYear();

    const querry = collection(db, 'publicacoes', credentials.uid, 'userPosts');
    await addDoc(querry, {        
      imagem: downloadURL,
      caption: legenda,
      date: dataFormatada

    }, { merge: true })
    .then(async() => {
      props.navigation.goBack();
      console.log('foi pro firestore')
  });
    
  }

    return (
      <SafeAreaView style={styles.container}>

            <View style={styles.margin}> 
              <Image source={{uri: image}} style={[styles.imageSize]}/>


            <View style={styles.row}>
            <KeyboardAvoidingView
              keyboardVerticalOffset={90}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={[styles.margin, styles.row, styles.marginTop]}
            >
                <FontAwesome name="user-circle-o" size={40} color={Colors.brown} />
                <TextInput
                  style={styles.input}
                  placeholder="Adicione uma legenda..."
                  placeholderTextColor={Colors.brownAlpha2}
                  multiline
                  maxLength={50}
                  numberOfLines={3}
                  onChangeText={(text) => setLegenda(text)}
                  value={legenda}
                />
            </KeyboardAvoidingView>

            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.send}
              onPress={uploadImage}
            >
              <View style={styles.row}>
                <Text style={styles.saveText}>Publicar</Text>
                <Ionicons name="send" size={18} color={Colors.white} />
              </View>
            </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
}