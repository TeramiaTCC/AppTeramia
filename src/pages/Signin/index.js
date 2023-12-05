import React, {  useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image, StatusBar, Animated, Keyboard, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../config/firebaseconfig';

import styles from './styles';
import Colors from '../../components/Colors/Colors';

import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, useBottomSheetModal } from '@gorhom/bottom-sheet'

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/features/userPosts';
import { fetchUser } from '../../redux/features/user';
import { fetchPets } from '../../redux/features/userPets';
import { fetchUsers } from '../../redux/features/usersData';
import { fetchAllPosts } from '../../redux/features/posts';

import { Splash } from '../../components/Splash/Splash';

export default function Login ({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const auth = getAuth(app)

  const [viewPass, setViewPass] = useState(true);

  const snapPoints = useMemo( () => ["22%", "25%"], []);

  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
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

  const [errorEmail, setErrorEmail] = useState (null);
  const [errorSenha, setErrorSenha] = useState (null);

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

  const validarSenha = () => {
    let error = false
    setErrorSenha(null)

    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;

    if (!re.test(String(senha).toLowerCase())){
    setErrorSenha('Insira uma senha valida')
    error = true
    }
    return !error
  }



  const callback = useCallback(() => {
    (async()=>{
      const credentials = JSON.parse(await AsyncStorage.getItem("userId"));

      const UserType = JSON.parse(await AsyncStorage.getItem("typeUser"));

      if(credentials !== null){

        await signInWithEmailAndPassword(auth, credentials.email, credentials.senha)
      .then(async (userCredentials) => {

        dispatch(fetchPosts());
        dispatch(fetchAllPosts());
        dispatch(fetchUser());
        dispatch(fetchUsers());
        dispatch(fetchPets());

        setErrorLogin(false)
        navigation.navigate('RotationPsico')
        navigation.navigate('Rotation')

       /* if (UserType.UserType == "0"){
          navigation.navigate('Rotation');
        }
        navigation.navigate('RotationPsico'); */
   
        
       /* if (UserType.analizeSitu == "0"){
          handlePresentModalPress()
        } /* Não Analizado */ 
       /* navigation.navigate('RotationPsico'); /* Analizado*/ 
    
      })
      .catch((error) =>{
        console.log(error)
      })
    }
    })()

  });


  useFocusEffect(callback);

  async function singIn(){
 
    if (validarEmail()){
      await signInWithEmailAndPassword(auth, email, senha)
      .then(async (userCredentials) => {

        setErrorLogin(false)
        await AsyncStorage.setItem("userId", JSON.stringify({
          email: email,
          senha: senha,
          uid: userCredentials.user.uid,
        }));

        navigation.navigate('RotationPsico')
        navigation.navigate('Rotation')
      })
      
      .catch((error) => {
        console.log(error)
        setErrorLogin(true)
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      }
    }

    function goPass() {
      if (validarEmail()){
        navigation.navigate('Password', {email: email})
      }
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

    <SafeAreaView
      style={styles.container}
    >
    <StatusBar barStyle={'default'}/>
    <Splash/>
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        style={{flex: 1, marginLeft: 10, marginRight: 10, paddingTop: Platform.OS === 'ios' ? 0 : 25,}}
      >
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

        <Text style={styles.label}>Senha</Text>
        <View style={styles.rowInput}>
          <TextInput
            secureTextEntry={viewPass}
            style={styles.input2}
            placeholder='Insira sua senha'
            maxLength={15}
            type='text'
            onChangeText={(text) => {
              setSenha(text)
              setErrorSenha(null)
              setErrorLogin(null)
            }}
            value={senha}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setViewPass(!viewPass)
            }}
          >
            { viewPass === true
            ?
            <Ionicons name='eye' size={20} color={Colors.brownAlpha2} style={styles.eyeIcon} />
            :
            <Ionicons name='eye-off' size={20} color={Colors.brownAlpha2} style={styles.eyeIcon} />
            }
          </TouchableOpacity>
        </View>

        <Text
          style={styles.linkForget}
          onPress={() => goPass()}
        >
          Esqueci minha senha
        </Text>

        { errorLogin && (
            <View style={[{marginTop: 15}, styles.row, styles.justifyCenter]}>
              <MaterialCommunityIcons name='alert-circle' size={20} color={Colors.redDel2} />
              <Text style={styles.errorPass}> Email ou senha invalidos</Text>
            </View>
        )}


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
            activeOpacity={0.8}
            onPress={singIn}
          >
            <Text style={styles.textButtonLogin}>ENTRAR</Text>
          </TouchableOpacity>
        }


      <View style={styles.row}>
        <Text style={styles.registration}>Não possui cadastro? <Text style={[styles.linkSubscribe]} onPress={() => navigation.navigate('Signup')}>Cadastre-se Aqui!</Text></Text>
        
      </View>

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

          <Text style={styles.titleModal}>Tenha calma!</Text>

          <Text style={styles.textModal}>A sua conta ainda está em momento de análise, por favor aguarde no máximo 72 horas</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.mdlButton}
            onPress={close}
          >
            <Text style={styles.btmText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
      </BottomSheetModalProvider>


    </SafeAreaView>
 
  );
}