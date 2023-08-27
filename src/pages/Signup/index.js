import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image, StatusBar, } from 'react-native';

import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Signup() {
 return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
      <Text style={styles.title}>Cria uma conta Teramia</Text>

      <Text style={styles.inputTitle}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu nome'
        type='text'
      /> 

      <Text style={styles.inputTitle}>Sobrenome</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu sobrenome'
        type='text'
      /> 

      <Text style={styles.inputTitle}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu E-mail'
        type='text'
        keyboardType='email-address'
      /> 

      <Text style={styles.inputTitle}>Senha</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder='Insira sua senha'
        type='text'
      /> 

      <Text style={styles.inputTitle}>Data de Nascimento</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira sua data de nascimento'
        type='text'
      /> 

      <Text style={styles.inputTitle}>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu telefone'
        type='text'
        inputMode='tel'
      /> 

    </KeyboardAvoidingView>
  );
}