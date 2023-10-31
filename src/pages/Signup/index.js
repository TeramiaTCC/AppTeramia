import { React, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar, Pressable, Linking } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaskInput from 'react-native-mask-input';
import { CheckBox } from '@rneui/themed';

import ModalCad from '../../components/Modal/ModalCad';

import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Radio from '../../components/Radio';
import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, deleteUser } from 'firebase/auth'; 
import { getFirestore, doc, deleteDoc, setDoc } from 'firebase/firestore';

import app from "../../config/firebaseconfig"

export default function Signup({ navigation }) {
  const db = getFirestore(app);

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [selected, setSelected] = useState ("");
  const [genero, setGenero] = useState ("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cell, setCell] = useState("");

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  dataFormatada = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();  

  const [isChecked, setChecked] = useState(false);

  const [errorEmail, setErrorEmail] = useState (null);
  const [errorSenha, setErrorSenha] = useState (null);
  const [errorTel, setErrorTel] = useState (null);

  const validar = () => {
    let error = false
    setErrorEmail(null)

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(email).toLowerCase())){
    setErrorEmail('preencha seu email corretamente')
    error = true
    }
    return !error
  }

  const salvar = () =>{
    if (validar()){
      console.log('Salvou')
    }
  }
 
  async function singUpUser(){
    const auth = getAuth(app)
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(async(userCredential)=>{

      await setDoc(doc(db, "usuario", userCredential.user.uid), {
        nome: nome,
        sobrenome: sobrenome,
        genero: genero,
        datanascimento: dataNascimento,
        cell: cell,
        
      }).then(() => {
        
          <ModalCad visible={true}/>
        
        //Alert.alert("Cadastro feito com sucesso")
        navigation.navigate('Signin')
        
      }).catch(async(error) => {
        console.log(error.code)
            await deleteDoc(doc(db, "usuario", userCredential.user.uid))
            await deleteUser(userCredential.user)
      })
      
          
    }).catch(error => {
      console.log(error.code)

    })


    
  
  }
  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == 'set'){
      const currentDate = selectedDate;
      setDate(currentDate);

    if (Platform.OS === 'android'){
      toggleDatepicker();
      setDataNascimento(currentDate.toDateString());
      setDataNascimento(dataFormatada)
    }

    } else {
      toggleDatepicker();
    }
  };

  

 return (

  <KeyboardAvoidingView
    keyboardVerticalOffset={60}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}
  >
  <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
    

      <StatusBar hidden/>

      <Text style={styles.title}>Criar uma conta Teramia</Text>
      <Text style={styles.obrigation}>* significa obrigatório.</Text>

      <View style={styles.containerOpt}>
        <TouchableOpacity style={styles.buttonOptLeft} activeOpacity={1}>
          <Text style={styles.textSelected}>Paciente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOptRight} onPress={() => navigation.navigate('SignupPsico')}>
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
        onChangeText={(text) => {
          setEmail(text) 
          setErrorEmail(null)
        }}
        value={email}
      /> 
      <Text style={styles.errorMessage}>{errorEmail}</Text>

      <Text style={styles.inputTitle}>Senha*</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder='Insira sua senha'
        type='text'
        onChangeText={(text) => setSenha(text)}
        value={senha}
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
        title={(<Text style={styles.checkText}>Eu li e aceito os <Text style={styles.useTerms} onPress={() => {Linking.openURL('https://teramiatcc.github.io/pages/eula.html');}}>Termos de Uso</Text>*</Text>)}
        checkedIcon={(<MaterialCommunityIcons name="check-bold" color={'#F16520'} size={20} />)}
        uncheckedIcon={(<MaterialCommunityIcons name="square-rounded-outline" color={'#1F0500'} size={20} />)}
        checked={isChecked}
        onPress={() => setChecked(!isChecked)}
      />

    { nome === "" || sobrenome === "" || email === "" || senha === "" || genero === "" || dataNascimento === "" || cell === "" || isChecked === false
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
      onPress={singUpUser}
    >
      <Text style={styles.textButtonRegister}>CADASTRAR</Text>
    </TouchableOpacity>
    }

    <Text style={styles.login}>Já possui cadastro? <Text style={styles.linkLogin} onPress={() => navigation.navigate('Signin')}>Acesse Aqui!</Text>
    </Text>

    <View style={{height: 50}}/>

    
  </ScrollView>
  </KeyboardAvoidingView>
  );
}