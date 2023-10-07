import { React, useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image, StatusBar, Animated, Keyboard, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../config/firebaseconfig';

import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { Splash } from '../../components/Splash/Splash';

export default function Login ({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [ErrorLogin, setErrorLogin] = useState("");
  const auth = getAuth(app)


  const callback = useCallback(() => {
    (async()=>{
      const credentials = JSON.parse(await AsyncStorage.getItem("userId"));
      if(credentials !== null){

        await signInWithEmailAndPassword(auth, credentials.email, credentials.senha)
      .then(async (userCredentials) => {
        setErrorLogin(false)
        navigation.navigate('Rotation')
      })

      .catch((error) =>{
        console.log(error)
      })
    }
    })()

  });


  useFocusEffect(callback);

  async function singIn(){
 
    await signInWithEmailAndPassword(auth, email, senha)
    .then(async (userCredentials) => {

      setErrorLogin(false)
      await AsyncStorage.setItem("userId", JSON.stringify({
        email: email,
        senha: senha
      }));

      navigation.navigate('Rotation')
    })
    
    .catch((error) => {
      console.log(error)
      setErrorLogin(true)
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    }

  

  const [logo] = useState(new Animated.ValueXY({x: 250, y: 250}));



  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  });



  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 150,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  function keyboardDidHide(){
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

  return (
    
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar hidden/>
      <Splash/>
      
      <View style={styles.viewLogo}>
        <Animated.Image  style={[
          styles.imageLogo, {
            height: logo.x, 
            width: logo.y,
            padding: 50,
          }
          ]} 
        source={require('../../../assets/img/logo/teramia-logo.png')}/>
      </View>

      <Text style={styles.inputTitle}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu E-mail'
        type='text'
        keyboardType='email-address'
        autoComplete='email'
        onChangeText={(text) => setEmail (text)} 
        value={email}
      /> 

      <Text style={styles.inputTitle}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder='Insira sua senha'
        type='text'
        autoComplete='current-password'
        onChangeText={(text) => setSenha (text)} 
        value={senha}
      /> 
      <Text style={styles.linkForget} onPress={() => navigation.navigate('Password')}>Esqueci minha senha</Text>
    
    {ErrorLogin === true
      ?
      <View style={styles.contentAlert}>
        <MaterialCommunityIcons
          name='alert-circle'
          size={24}
          color={'#F16520'}
        />
        <Text style={styles.warningAlert}>E-mail ou senha inválidos.</Text>
      </View>
      :
      <View/>
    }

    { email === "" || senha === ""
    ?
      <TouchableOpacity
        disabled={true}
        style={styles.buttonLogin}
      >
          <Text style={styles.textButtonLogin}>ENTRAR</Text>
      </TouchableOpacity>
    :
    <TouchableOpacity
      style={styles.buttonLogin}
      activeOpacity={0.7}
      onPress={singIn}
    >
      <Text style={styles.textButtonLogin}>ENTRAR</Text>
    </TouchableOpacity>
    }

    <Text style={styles.registration}>Não possui cadastro? <Text style={styles.linkSubscribe} onPress={() => navigation.navigate('Signup')}>Cadastre-se Aqui!</Text>
    </Text>
    
    <View style={{height: 100}}/>
    </KeyboardAvoidingView>
  );
}