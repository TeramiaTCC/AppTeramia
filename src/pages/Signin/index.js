import { React, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image, StatusBar } from 'react-native';
import * as Svg from 'react-native-svg';


import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Signin ( navigation ) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [ErrorLogin, setErrorLogin] = useState("");

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >

      <StatusBar hidden/>
      
      <Image source={require('../../../assets/teramia-logo.png')} style={styles.imageLogo} />

      <Text style={styles.inputTitle}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu E-mail'
        type='text'
        onChangeText={(text) => setEmail (text)} 
        value={email}
      /> 

      <Text style={styles.inputTitle}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder='Insira sua senha'
        type='text'
        onChangeText={(text) => setSenha (text)} 
        value={senha}
      /> 
    
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
    >
      <Text style={styles.textButtonLogin}>ENTRAR</Text>
    </TouchableOpacity>
    }

    <Text style={styles.registration}>Não possui cadastro?
      <Text style={styles.linkSubscribe} onPress={() => navigation.navigate('Signup')}> Cadastre-se Aqui!</Text>
    </Text>
    
    <View style={{height: 100}}/>
    </KeyboardAvoidingView>
  );
}