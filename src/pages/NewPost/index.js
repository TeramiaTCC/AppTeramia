import React, { useState, useEffect, useMemo, useCallback, useRef, useLayoutEffect, } from 'react';
import { Button, Text, TouchableOpacity, View, Image, Modal, TextInput, SafeAreaView, TouchableHighlight, StatusBar, KeyboardAvoidingView, Animated, Keyboard } from 'react-native';

import styles from './styles';

import { Ionicons, MaterialIcons, Entypo, Feather, FontAwesome } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import app from '../../config/firebaseconfig';
import { getAuth, snapshot } from "firebase/auth";
import { getFirestore, doc, setDoc, addDoc, Firestore, collection, Timestamp, serverTimestamp, FieldValue, getDoc, } from "firebase/firestore";
import { getStorage, uploadString, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";

import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/features/user';

import Colors from '../../components/Colors/Colors';

export default function NewPost(props, { navigation }) {
  //console.log('foto que chegou:', props.route.params.image)

  const image = props.route.params.image;

  const [legenda, setLegenda]=useState("")

  const dataUser = useSelector((state) => state.userData.userData.usuarioData);
  console.log('DataUser: ',dataUser)

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchUser());
  }, [dispatch]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => { uploadImage() }} 
            activeOpacity={0.4}
            style={{}}
          >
            <Ionicons style={{ padding: 20 }} name="send" size={17.7} color={Colors.white} />
          </TouchableOpacity>

        ),
    });
  }, [legenda]);

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
    uid = credentials.uid;
  
    const uNome = dataUser.nome;
    const uSobrenome = dataUser.sobrenome;
    const uPfp = dataUser.imagem;
    const uBio = dataUser.bio;
    const uCrp = dataUser.crp;

    dataFormatada = new_date.getDate() + "/" + (new_date.getMonth() + 1) + "/" + new_date.getFullYear();
  
    const querry = collection(db, 'postagens');
    await addDoc(querry, {        
      imagem: downloadURL,
      caption: legenda,
      timestamp: dataFormatada,
      userid: uid,
      nome: uNome,
      sobrenome: uSobrenome,
      pfp: uPfp,
      bio: uBio,
      crp: uCrp,
    }, { merge: true })
    .then(async() => {
      props.navigation.goBack('Community');
      console.log('foi pro firestore')
  });
    
  }


  const [logo] = useState(new Animated.ValueXY({x: 370, y: 370}));



  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  });



  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 250,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 250,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 370,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 370,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

    return (
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'}/>
        <KeyboardAvoidingView
          keyboardVerticalOffset={100}
          style={{flex: 1,paddingTop: Platform.OS === 'ios' ? 0 : 25,}}
        >

          <View style={styles.margin}>

            <View style={styles.viewImage}>
            <Animated.Image  style={[
                styles.imageSize, {
                  height: logo.x, 
                  width: logo.y,
              }
              ]} 
              source={{uri: image}}/>
            </View>
            


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

            




          </View>

        </KeyboardAvoidingView>

      </SafeAreaView>
    );
}