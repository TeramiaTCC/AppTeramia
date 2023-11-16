import React, { useRef, useState, useMemo, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar, Pressable, Linking } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaskInput from 'react-native-mask-input';
import { CheckBox } from '@rneui/themed';
import { Alert } from 'react-native';

import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, deleteUser } from 'firebase/auth'; 
import { getFirestore, doc, deleteDoc, setDoc, Firestore } from 'firebase/firestore';
import app from "../../config/firebaseconfig"

import Colors from '../../components/Colors/Colors';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  dataFormatada = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();  

  const [isChecked, setChecked] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const snapPoints = useMemo( () => ["22%", "25%"], []);

  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
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

  async function signUpPsico(){
    const auth = getAuth(app)
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(async(userCredential)=>{

      await setDoc(doc(db, "usuarioPsico", userCredential.user.uid), {
        nome: nome,
        sobrenome: sobrenome,
        genero: genero,
        datanascimento: dataNascimento,
        cell: cell,
        crp: crp,

      }).then(() => {
        handlePresentModalPress()
        console.log('foi')
      }).catch(async(error) => {
        console.log(error.code)
            await deleteDoc(doc(db, "usuarioPsico", userCredential.user.uid))
            await deleteUser(userCredential.user)
      })
      
          
    }).catch(error => {
      console.log(error.code)

    })

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
 
  return (
  
  <KeyboardAvoidingView
    keyboardVerticalOffset={60}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
  <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

      <StatusBar hidden/>

      <Text style={styles.title}>Criar uma conta Teramia</Text>
      <Text>* significa obrigatório.</Text>

      <View style={styles.containerOpt}>
        <TouchableOpacity style={styles.buttonOptLeft} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.textSelected}>Paciente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOptRight} activeOpacity={1}>
          <Text style={styles.textNotSelected}>Psicólogo</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.inputTitle}>Nome*</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu primeiro nome'
        type='text'
        onChangeText={(text) => setNome(text)}
        value={nome}
      /> 

      <Text style={styles.inputTitle}>Sobrenome*</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu sobrenome'
        type='text'
        onChangeText={(text) => setSobrenome(text)}
        value={sobrenome}
      /> 

      <Text style={styles.inputTitle}>E-mail*</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira seu E-mail'
        type='text'
        keyboardType='email-address'
        onChangeText={(text) => setEmail(text)}
        value={email}
      /> 

      <Text style={styles.inputTitle}>Senha*</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder='Insira sua senha'
        type='text'
        onChangeText={(text) => setSenha(text)}
        value={senha}
      /> 

      <Text style={styles.inputTitle}>CRP*</Text>
      <MaskInput
        placeholder='99/999999'
        keyboardType='numeric'
        style={styles.input}
        value={crp}
        onChangeText={(text) => setCrp(text)}
        mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      />
      
      <Text style={styles.inputTitle}>Gênero*</Text>
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

      <Text style={styles.inputTitle}>Data de Nascimento*</Text>

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

      <Text style={styles.inputTitle}>Telefone*</Text>
      <MaskInput
        placeholder='(99) 99999-9999'
        keyboardType='numeric'
        style={styles.input}
        value={cell}
        onChangeText={(text) => setCell(text)}
        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      />

      <CheckBox
        title={(<Text style={styles.checkText}>Eu li e aceito os <Text style={styles.useTerms} onPress={() => {Linking.openURL('https://teramiatcc.github.io/pages/eula');}}>Termos de Uso</Text>*</Text>)}
        checkedIcon={(<MaterialCommunityIcons name="check-bold" color={'#F16520'} size={20} />)}
        uncheckedIcon={(<MaterialCommunityIcons name="square-rounded-outline" color={'#1F0500'} size={20} />)}
        checked={isChecked}
        onPress={() => setChecked(!isChecked)}
      />

    { nome === "" || sobrenome === "" || email === "" || senha === "" || genero === "" || dataNascimento === "" || cell === "" || isChecked === false || crp === ""
    ?
      <TouchableOpacity
        disabled={true}
        style={styles.buttonRegister}
      >
          <Text style={styles.textButtonRegister}>CADASTRAR</Text>
      </TouchableOpacity>
    :
    <TouchableOpacity
      style={styles.buttonRegister}
      activeOpacity={0.7}
      onPress={signUpPsico}
    >
      <Text style={styles.textButtonRegister}>CADASTRAR</Text>
    </TouchableOpacity>
    }

    <Text style={styles.login}>Já possui cadastro? <Text style={styles.linkLogin} onPress={() => navigation.navigate('Signin')}>Acesse Aqui!</Text>
    </Text>

    <View style={{height: 50}}/>

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

          <Text style={styles.titleModal}>Cadastro realizado com sucesso!</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.mdlButton}
            onPress={() => navigation.navigate("Signin")}
          >
            <Text style={styles.btmText}>Efutuar login</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
      </BottomSheetModalProvider>
    
  </ScrollView>
  </KeyboardAvoidingView>
  );
}