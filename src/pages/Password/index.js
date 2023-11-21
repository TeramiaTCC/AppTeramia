import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import {  View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../components/Colors/Colors';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, useBottomSheetModal } from '@gorhom/bottom-sheet'

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';  

import styles from './style';

export default function Password({ navigation }) {
  const [email, setEmail] = useState("");
  const [ErrorPass, setErrorPass] = useState("");

  async function VerificaEmail(){
    const auth = getAuth()
    
        await sendPasswordResetEmail(auth, email)
        .then(function(){
          setErrorPass(false)
            handlePresentModalPress()
        }).catch(function(erro){
        setErrorPass(true)
          console.log("Ocorreu um erro ao enviar o email", erro)
      })
  }

  const snapPoints = useMemo( () => ["22%", "25%"], []);

  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const close = useCallback(() => {
    bottomSheetModalRef.current?.dismisss();
  }, []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

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

    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor: Colors.orange}}
        handleIndicatorStyle={{backgroundColor: Colors.brown}}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
      >
        <View style={styles.margin}>

          <Text style={styles.titleModal}>Email de recuperação</Text>

          <Text style={styles.textModal}>email enviado para: {email}</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.mdlButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btmText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
      </BottomSheetModalProvider>
    </KeyboardAvoidingView>
  );
}