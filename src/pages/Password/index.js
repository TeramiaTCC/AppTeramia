import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../components/Colors/Colors';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, useBottomSheetModal } from '@gorhom/bottom-sheet'

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';  

import styles from './styles';

export default function Password({ navigation }) {
  const [email, setEmail] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [errorEmail, setErrorEmail] = useState (null);

  const validarEmail = () => {
    let error = false
    setErrorEmail(null)

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(email).toLowerCase())){
    setErrorEmail('Insira um email valido')
    error = true
    }
    return !error
  }

  async function VerificaEmail(){
    const auth = getAuth()
      if (validarEmail()){
        await sendPasswordResetEmail(auth, email)
        .then(function(){
          setErrorLogin(false)
            handlePresentModalPress()
        }).catch(function(erro){
          setErrorLogin(true)
          console.log("Ocorreu um erro ao enviar o email", erro)
      })
    }
  }

  const snapPoints = useMemo( () => ["35%", "45%"], []);

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
  
  <SafeAreaView 
    style={styles.container}
  >
  <StatusBar barStyle={'default'}/>
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      style={{flex: 1, marginLeft: 10, marginRight: 10, paddingTop: Platform.OS === 'ios' ? 0 : 25,}}
    >
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu E-mail'
        type='text'
        keyboardType='email-address'
        autoComplete='email'
        onChangeText={(text) => {
          setEmail (text)
          setErrorEmail(null)
          setErrorLogin(null)
        }} 
        value={email}
      />
      { errorEmail && (
        <Text style={styles.errorMessage}>{errorEmail}</Text>
      )}


      { errorLogin && (
        <View style={[{marginTop: 15}, styles.row, styles.justifyCenter]}>
          <MaterialCommunityIcons name='alert-circle' size={20} color={Colors.redDel2} />
          <Text style={styles.errorPass}> Email não encontrado em nossa base de dados</Text>
        </View>
      )}

        { email === "" 
        ?
          <TouchableOpacity
            disabled={true}
            style={styles.buttonBusca}
          >
              <Text style={styles.textButtonBusca}>ENTRAR</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity
            style={styles.buttonBusca}
            activeOpacity={0.8}
            onPress={VerificaEmail}
          >
            <Text style={styles.textButtonBusca}>ENTRAR</Text>
          </TouchableOpacity>
        }

    </KeyboardAvoidingView>

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

  </SafeAreaView>
  );
}