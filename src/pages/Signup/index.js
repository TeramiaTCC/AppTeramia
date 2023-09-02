import {React, useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaskInput from 'react-native-mask-input';

import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Radio from '../../components/Radio';
import CheckBox from '../../components/Checkbox';

export default function Signup({ navigation }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [selected, setSelected] = useState ("");
  const [genero, setGenero] = useState ("");
  const [dataNasimento, setDataNascimento] = useState("");
  
  
  const [cell, setCell] = useState("");

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const optCB = [{text: 'Termos de Uso', id: 1}];
  const [check, setCheck] = useState("");

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
    }

    } else {
      toggleDatepicker();
    }
  };

 return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>

      <StatusBar hidden/>
      <Text style={styles.title}>Cria uma conta Teramia</Text>
      <Text><Text>*</Text> significa obrigatório.</Text>

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
            placeholder='Insira sua data de nascimento'
            autoComplete='birthdate-full'
            onChangeText={setDataNascimento}
            value={dataNasimento}
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
        options={optCB}
        onChange={() => setCheck(!check)}
        value={check}
      />

    { nome === "" || sobrenome === "" || email === "" || senha === "" || genero === "" || dataNasimento === "" || cell === "" || check === false
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
    >
      <Text style={styles.textButtonRegister}>CADASTRAR</Text>
    </TouchableOpacity>
    }

    <Text style={styles.login}>Já possui cadastro? <Text style={styles.linkLogin} onPress={() => navigation.navigate('Signin')}>Acesse Aqui!</Text>
    </Text>


    </KeyboardAvoidingView>
  );
}