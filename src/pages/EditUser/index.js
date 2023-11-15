import React, { useState } from 'react';
import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import MaskInput from 'react-native-mask-input';

import styles from './styles';
import { FontAwesome, AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import Colors from '../../components/Colors/Colors';

import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth'; 
import auth from '../../config/firebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import app from "../../config/firebaseconfig"
import { Alert } from 'react-native-web';
import { ScrollView } from 'react-native';

export default function EditUser({navigation, route}) {

  const [image, setImage] = useState('');

  const [nome] = useState('Nome*')
  const [sobrenome] = useState('Sobrenome*')
  const [data] = useState('00/00/0000*')
  const [telefone, setTelefone] = useState('');
  const [bio, setBio] = useState('');

  const db = getFirestore(app);

  async function deleteUsuario(){
    const credentials = JSON.parse(await AsyncStorage.getItem("userId"))

    await deleteDoc(doc(db, "usuario", credentials.uid))
    await deleteUser(auth.currentUser)
    .then(Alert.alert("Realizado com sucesso", "Conta apagada."))

    await AsyncStorage.clear();
    navigation.reset({
      index:0, 
      routes: [{
        name:"Signin"
      }]
    })
  }

  async function exit(){
    await AsyncStorage.clear();
    navigation.reset({
      index:0, 
      routes: [{
        name:"Signin"
      }]
    })
  }

 return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle={'default'}/>

      <View style={styles.margin}>

        <View style={styles.picAlt}>
          <TouchableOpacity
            activeOpacity={0.8}
          >
            <FontAwesome style={styles.profileImage} name="user-circle-o" size={80} color={Colors.brown}/>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
          >
            <Text style={styles.altText}>Alterar foto de perfil</Text>
          </TouchableOpacity>
        </View>
        
        <KeyboardAvoidingView
          keyboardVerticalOffset={90}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <ScrollView>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={[styles.input, styles.inputHeight]}
          editable={false}
          value={nome}
        />

        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          style={[styles.input, styles.inputHeight]}
          editable={false}
          value={sobrenome}
        />

        <Text style={styles.label}>Data de nascimento</Text>
        <TextInput
          style={[styles.input, styles.inputHeight]}
          editable={false}
          value={data}
        />

        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, styles.inputHeight2]}
          multiline
          numberOfLines={3}
          maxLength={150}
          onChangeText={(text) => setBio(text)}
          value={bio}
        />

        <Text style={styles.label}>Telefone</Text>
        <MaskInput
          style={[styles.input, styles.inputHeight]}
          keyboardType='numeric'
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
          mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        />

        <View style={styles.horizontal}>

          <TouchableOpacity
            style={[styles.buttonSave, styles.cont, styles.row]}
            activeOpacity={0.8}
          >
            <Feather name="check" size={24} color={Colors.white} />
            <Text style={styles.textButtonSave}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonLogout, styles.cont, styles.row]}
            activeOpacity={0.8}
            onPress={exit}
          >
              <Ionicons name="exit-outline" size={24} color={Colors.white} />
              <Text style={styles.textButtonLogout}>Sair da conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonDelete, styles.cont, styles.row]}
            activeOpacity={0.8}
            onPress={deleteUsuario}
          >
              <AntDesign name="delete" size={24} color={Colors.white} />
              <Text style={styles.textButtonDelete}>Excluir conta</Text>
          </TouchableOpacity>

      </View>
      </ScrollView>
      </KeyboardAvoidingView>
      </View>

   </SafeAreaView>
  );
}