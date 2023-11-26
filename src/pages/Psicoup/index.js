import React, { useRef, useState, useMemo, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar, Pressable, Linking, SafeAreaView, Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaskInput from 'react-native-mask-input';
import { CheckBox } from '@rneui/themed';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ImagePicker from 'expo-image-picker'

import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, deleteUser } from 'firebase/auth'; 
import { getFirestore, doc, deleteDoc, setDoc, Firestore } from 'firebase/firestore';
import app from "../../config/firebaseconfig"

import Colors from '../../components/Colors/Colors';
import styles from './styles';
import { FontAwesome, FontAwesome5, AntDesign, Ionicons, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Radio from '../../components/Radio';
import { ScrollView } from 'react-native-gesture-handler';

export default function Psicoup({ navigation }) {
  const db = getFirestore(app);
  
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [selected, setSelected] = useState ("");
  const [genero, setGenero] = useState ("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [crp, setCrp] = useState("");
  const [cell, setCell] = useState("");
  const [image, setImage] = useState("");

  const [viewPass, setViewPass] = useState(true);

  const UserType = "1";
  const Analize = "0";

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  dataFormatada = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();  

  const [isChecked, setChecked] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const [errorEmail, setErrorEmail] = useState (null);
  const [errorSenha, setErrorSenha] = useState (null);
  const [errorNome, setErrorNome] = useState (null);
  const [errorSobrenome, setErrorSobrenome] = useState (null);
  const [errorTel, setErrorTel] = useState (null);
  const [errorCRP, setErrorCRP] = useState (null);

  const validarEmail = () => {
    let error = false
    setErrorEmail(null)

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(email).toLowerCase())){
    setErrorEmail('Preencha seu email corretamente')
    error = true
    }
    return !error
  }

  const validarSenha = () => {
    let error = false
    setErrorSenha(null)

    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;

    if (!re.test(String(senha).toLowerCase())){
    setErrorSenha('Sua senha deve conter pelo menos 8 caracteres\nSua senha deve possuir ao menos uma letra e um número')
    error = true
    }
    return !error
  }

  const validarNome = () => {
    let error = false
    setErrorNome(null)

    const re = /^([a-zA-Zà-úÀ-Ú\s]){4,}$/;

    if (!re.test(String(nome).toLowerCase())){
    setErrorNome('Preencha seu nome corretamente')
    error = true
    }
    return !error
  }

  const validarSobrenome = () => {
    let error = false
    setErrorSobrenome(null)

    const re = /^[a-zA-Zà-úÀ-Ú\s]{4,}$/;

    if (!re.test(String(sobrenome).toLowerCase())){
    setErrorSobrenome('Preencha seu sobrenome corretamente')
    error = true
    }
    return !error
  }

  const validarTel = () => {
    let error = false
    setErrorTel(null)

    const re = /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/;

    if (!re.test(String(cell).toLowerCase())){
    setErrorTel('Preencha seu número corretamente')
    error = true
    }
    return !error
  }

  const validarCrp = () => {
    let error = false
    setErrorCRP(null)

    const re = /^(\d{2})\/?(\d{6})$/;

    if (!re.test(String(crp).toLowerCase())){
    setErrorCRP('Preencha seu CRP corretamente')
    error = true
    }
    return !error
  }


  const salvar = () =>{
    if (validarEmail() & validarSenha() & validarNome() & validarSobrenome() & validarCrp() & validarTel()){
      console.log('Salvou')
    }
  }

  async function signUpPsico(){
    const auth = getAuth(app)
    if (validarEmail() & validarSenha() & validarNome() & validarSobrenome() & validarCrp() & validarTel()){
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(async(userCredential)=>{

      await setDoc(doc(db, "usuario", userCredential.user.uid), {
        nome: nome,
        sobrenome: sobrenome,
        genero: genero,
        datanascimento: dataNascimento,
        cell: cell,
        crp: crp,
        usertype: UserType,
        analizeSitu: Analize,
        imagem: ('')

      }).then(async() => {
        handlePresentPress()
        console.log('foi')

        await AsyncStorage.setItem("typeUser", JSON.stringify({
          UserType: UserType,
          analizeSitu: Analize,
         
        }));

      }).catch(async(error) => {
        console.log(error.code)
            await deleteDoc(doc(db, "usuario", userCredential.user.uid))
            await deleteUser(userCredential.user)
      })
      
          
    }).catch(error => {
      console.log(error.code)

    })
  }
  }

  const onChange = ({ type }, selectedDate) => {
    if (type == 'set'){
      const currentDate = selectedDate;
      setDate(currentDate);

    if (Platform.OS === 'android'){
      toggleDatepicker();
      setDataNascimento(currentDate.toDateString());
      setDataNascimento(dataFormatada);
    }

    } else {
      toggleDatepicker();
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      bottomSheetModalRef.current?.dismiss();
      setImage(result.assets[0].uri);
    }
  };

  function noPick() {
    setImage("");
    bottomSheetModalRef.current?.dismiss();
  }


  const snapPoints = useMemo( () => ["22%", "25%"], []);

  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const dmiss = useCallback(() => {
    bottomSheetModalRef2.current?.dismiss();
  }, []);

  const bottomSheetModalRef2 = useRef(null);

  const handlePresentPress = useCallback(() => {
    bottomSheetModalRef2.current?.present();
  }, []);
  const handleChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
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
      keyboardVerticalOffset={90}
      style={{flex: 1}}
    >
      <ScrollView
        style={[styles.margin]}
        showsVerticalScrollIndicator={false}
      >
        <View style={{height: 25}}/>

        <View style={[styles.horizontal, {marginBottom: 15}]}>
          <TouchableOpacity
            style={styles.boxDisable}
            onPress={() => navigation.navigate('Signup')}
            activeOpacity={0.8}
          >
             <Text style={styles.textDisable}>Paciente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boxEnable}
            activeOpacity={1}
          >
          <Text style={styles.textEnable}>Psicólogo</Text>
          </TouchableOpacity>

        </View>


       <View style={styles.picAlt}>
        { !image
        ?
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePresentModalPress}
          >
            <FontAwesome style={styles.userImage} name="user-circle-o" size={100} color={Colors.brown}/>
          </TouchableOpacity>
        :
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePresentModalPress}
          >
            <Image source={{uri: image}} style={styles.userImage} />
          </TouchableOpacity>
        }
        
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePresentModalPress}
          >
            <Text style={styles.altText}>Adicionar foto de perfil</Text>
          </TouchableOpacity>
        </View>
       
        <Text style={styles.label}>Nome*</Text>
        <TextInput
          style={styles.input}
          placeholder='Insira seu primeiro nome'
          maxLength={40}
          type='text'
          onChangeText={(text) => {
            setNome(text)
            setErrorNome(null)
          }}
          value={nome}
        />
        { errorNome && (
          <Text style={styles.errorMessage}>{errorNome}</Text>
        )}

        <Text style={styles.label}>Sobrenome*</Text>
        <TextInput
          style={styles.input}
          placeholder='Insira seu sobrenome'
          maxLength={40}
          type='text'
          onChangeText={(text) => {
            setSobrenome(text)
            setErrorSobrenome(null)
          }}
          value={sobrenome}
        />
        { errorSobrenome && (
          <Text style={styles.errorMessage}>{errorSobrenome}</Text>
        )}

        <Text style={styles.label}>E-mail*</Text>
        <TextInput
          style={styles.input}
          placeholder='Insira seu E-mail'
          type='text'
          maxLength={35}
          keyboardType='email-address'
          onChangeText={(text) => {
            setEmail(text) 
            setErrorEmail(null)
          }}
          value={email}
        />
        { errorEmail && (
          <Text style={styles.errorMessage}>{errorEmail}</Text>
        )}

        <Text style={styles.label}>Senha*</Text>
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
        { errorSenha && (
          <Text style={styles.errorMessage}>{errorSenha}</Text>
        )}

        <Text style={styles.label}>CRP*</Text>
        <MaskInput
          placeholder='99/999999'
          keyboardType='numeric'
          style={styles.input}
          maxLength={9}
          value={crp}
          onChangeText={(text) => {
            setCrp(text)
            setErrorCRP(null)
          }}
          mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
        />
        { errorCRP && (
            <Text style={styles.errorMessage}>{errorCRP}</Text>
        )}
      

      <Text style={styles.label}>Gênero*</Text>
      <Radio
        selected={selected}
        options={['Masculino', 'Feminino', 'Prefiro não dizer']}
        horizontal={true}
        onChangeSelect={(opt, i)=> {
          setGenero(opt);
          setSelected(i);
        }}
        value={genero}
      />

      <Text style={styles.label}>Data de Nascimento*</Text>

      {showPicker && (
        <DateTimePicker 
          mode='date' 
          display='spinner'
          value={date}
          onChange={onChange}
        />
      )}

      {!showPicker && (
        <Pressable
          onPress={toggleDatepicker}
          style={styles.input}
        >
          <TextInput
            style={{color: '#000',}}
            placeholder='Selecione sua data de nascimento'
            autoComplete='birthdate-full'
            onChangeText={setDataNascimento}
            value={dataNascimento}
            editable={false}
          />
        </Pressable>
        )}

        <Text style={styles.label}>Telefone*</Text>
        <MaskInput
          placeholder='(99) 99999-9999'
          keyboardType='numeric'
          maxLength={15}
          style={styles.input}
          value={cell}
          onChangeText={(text) => {
            setCell(text)
            setErrorTel(null)
          }}
          mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        />
        { errorTel && (
          <Text style={styles.errorMessage}>{errorTel}</Text>
        )}

      <View style={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <CheckBox
          title={(<Text style={styles.checkText}>Eu li e aceito os <Text style={styles.useTerms} onPress={() => {Linking.openURL('https://teramiatcc.github.io/pages/eula');}}>Termos de Uso</Text>*</Text>)}
          checkedIcon={(<MaterialCommunityIcons name="check-bold" color={'#F16520'} size={20} />)}
          uncheckedIcon={(<MaterialCommunityIcons name="square-rounded-outline" color={'#1F0500'} size={20} />)}
          checked={isChecked}
          onPress={() => setChecked(!isChecked)}
        />
      </View>

      { nome === "" || sobrenome === "" || email === "" || senha === "" || genero === "" || dataNascimento === "" || crp === "" || cell === "" || isChecked === false
      ?
        <TouchableOpacity
          disabled={true}
          style={styles.Button}
        >
            <Text style={styles.btmText}>CADASTRAR</Text>
        </TouchableOpacity>
      :
      <TouchableOpacity
        style={styles.Button}
        activeOpacity={0.8}
        onPress={signUpPsico}
      >
        <Text style={styles.btmText}>CADASTRAR</Text>
      </TouchableOpacity>
      }

      <Text style={styles.login}>Já possui cadastro? <Text style={styles.linkLogin} onPress={() => navigation.navigate('Signin')}>Acesse Aqui!</Text>
      </Text>
      <View style={{height: 50}}/>
      </ScrollView>
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
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.altButton, styles.row]}
            onPress={pickImage}
          >
            <Feather name="image" size={20} color={Colors.white} />
            <Text style={styles.btmText}> Adicionar foto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.delButton, styles.row]}
            onPress={noPick}
          >
            <Feather name="trash-2" size={20} color={Colors.white} />
            <Text style={styles.btmText}> Remover foto</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
      </BottomSheetModalProvider>


      <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef2}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor: Colors.orange}}
        handleIndicatorStyle={{backgroundColor: Colors.brown}}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        onChange={handleChanges}
      >
        <View style={styles.margin}>

        <Text style={styles.titleModal}>Em análise!</Text>
          <Text style={styles.textModal}>O seu cadastro está em situação de análise, aguarde no maximo 72 horas para a verificação.</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.mdlButton}
            onPress={() => navigation.navigate("Signin")}
          >
            <Text style={styles.btmText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
      </BottomSheetModalProvider>

  </SafeAreaView>
  
  );
}