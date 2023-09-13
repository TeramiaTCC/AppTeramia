import { React, useState } from 'react';
import {  View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';  

import styles from './style';

export default function Password() {
  const [email, setEmail] = useState("");
  const [ErrorPass, setErrorPass] = useState("");

  async function VerificaEmail(){
    const auth = getAuth()
    
        await sendPasswordResetEmail(auth, email)
        .then(function(){
          setErrorPass(false)
            Alert.alert("email enviado para: ", email)

        }).catch(function(erro){
        setErrorPass(true)
          console.log("Ocorreu um erro ao enviar o email", erro)
      })
  }

  return (
  
  <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}
  >

    <StatusBar hidden/>

    <Text style={styles.inputTitle}>Informe o seu endereço de E-mail</Text>
    <TextInput
      style={styles.input}
      placeholder='Insira seu E-mail'
      type='text'
      keyboardType='email-address'
      autoComplete='email'
      onChangeText={(text) => setEmail (text)} 
      value={email}
    />

    {ErrorPass === true
      ?
      <View style={styles.contentAlert}>
        <MaterialCommunityIcons
          name='alert-circle'
          size={24}
          color={'#F16520'}
        />
        <Text style={styles.warningAlert}>E-mail de usuario não encontrado.</Text>
      </View>
      :
      <View/>
    }

    { email === ""
    ?
      <TouchableOpacity
        disabled={true}
        style={styles.buttonBusca}
      >
          <Text style={styles.textButtonBusca}>BUSCAR</Text>
      </TouchableOpacity>
    :
    <TouchableOpacity
      style={styles.buttonBusca}
      activeOpacity={0.7}
      onPress={VerificaEmail}
    >
      <Text style={styles.textButtonBusca}>ENTRAR</Text>
    </TouchableOpacity>
    }
    </KeyboardAvoidingView>
  );
}