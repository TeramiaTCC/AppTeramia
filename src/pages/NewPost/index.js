import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Button, Text, TouchableOpacity, View, Image, Modal, TextInput, SafeAreaView, TouchableHighlight, StatusBar, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import { Ionicons, MaterialIcons, Entypo, Feather, FontAwesome } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import app from '../../config/firebaseconfig';
import { getAuth, getFirestore, snapshot } from "firebase/auth";
import { getStorage, uploadString, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";


import Colors from '../../components/Colors/Colors';

export default function NewPost(props) {
  //console.log('foto que chegou:', props.route.params.image)
  const image = props.route.params.image;
  

  const [legenda, setLegenda]=useState("")

  const uploadImage = async () => {
    const credentials = JSON.parse(await AsyncStorage.getItem("userId"))
    const uri = props.route.params.image;

    const metadata = {
      contentType: 'image/png'
    };



    const storage = getStorage();
    const storageRef = ref(storage, `publicacoes/${credentials.uid}/${Math.random().toString(36)}`);

    const uploadTask = uploadBytesResumable(storageRef, uri, metadata);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
        console.error(error);
        console.log('deu erro pae');
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
    
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