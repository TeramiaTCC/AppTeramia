import { React, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet, StatusBar } from 'react-native';

//import { styles } from './styles';
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

      <Text style={styles.title}>Teramia</Text>

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

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFDFA',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === 'ios' ? 0 : 50,
  },
  title: {
      fontSize: 40,
      color: '#F16520',
      marginBottom: '20',
      fontWeight: 'Bold',
  },
  input: {
      width: 300,
      height: 40,
      marginTop: 10,
      padding: 10,
      borderWidth: 2,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#EEE7D9',
  },
  buttonLogin: {
      width: 200,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F16520',
      borderRadius: 25,
      marginTop: 30,
  },
  textButtonLogin: {
      color: '#FFFDFA',
      fontWeight: 'Bold',
  },
  contentAlert: {
      marginTop: 20,
      flexDirection: 'roll',
      justifyContent: 'center',
      alignItems: 'center',
  },
  warningAlert: {
      paddingLeft: 10,
      color: '#F16520',
      fontSize: 16,
  },
  registration: {
      marginTop: 20,
      color: '#4d5156',
  },
  linkSubscribe: {
      color: '#F16520',
      fontSize: 16,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: -5,
    paddingTop: 10,
    marginLeft: '15%',
    marginRight: 'auto',
  },

});