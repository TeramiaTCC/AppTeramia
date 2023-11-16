import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import MaskInput from 'react-native-mask-input';
import BottomSheet from '@gorhom/bottom-sheet'
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';
import { FontAwesome, AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import Colors from '../../components/Colors/Colors';

import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth'; 
import auth from '../../config/firebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import app from "../../config/firebaseconfig"


export default function EditUser({navigation, route}) {

  const [image, setImage] = useState('');

  const [nome] = useState('Nome*')
  const [sobrenome] = useState('Sobrenome*')
  const [data] = useState('00/00/0000*')
  const [telefone, setTelefone] = useState('11912345678');
  const [bio, setBio] = useState('');

  const [isOpen, setOpen] = useState(false);

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const toggleSheet = () => {
    setOpen(!isOpen);
  };

  const db = getFirestore(app);

  const [open, setOpen] = useState(false);

  const bottomSheetRef = useRef(null);
  const snapPoints = [1, "25%"];

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
      setImage(result.assets[0].uri);
    }
  };

  function noPick() {
    setImage("");
  }

  function handlePresentModal() {
    bottomSheetRef.current?.expand();
  }

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
        
        <KeyboardAvoidingView
          keyboardVerticalOffset={90}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <ScrollView>

        <View style={styles.picAlt}>

          { !image
          ?
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handlePresentModal}
            >
              <FontAwesome style={styles.profileImage} name="user-circle-o" size={100} color={Colors.brown}/>
            </TouchableOpacity>
          :
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handlePresentModal}
            >
              <Image source={{uri: image}} style={styles.profileImage} />
            </TouchableOpacity>
          }


          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePresentModal}
          >
            <Text style={styles.altText}>Alterar foto de perfil</Text>
          </TouchableOpacity>
        </View>


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
              <Feather name="trash-2" size={24} color={Colors.white} />
              <Text style={styles.textButtonDelete}>Excluir conta</Text>
          </TouchableOpacity>

      </View>
      </ScrollView>
      </KeyboardAvoidingView>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor: Colors.orange}}
        handleIndicatorStyle={{backgroundColor: Colors.brown}}
      >
        <View style={styles.margin}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.altButton, styles.row]}
            onPress={pickImage}
          >
            <Feather name="image" size={20} color={Colors.white} />
            <Text style={styles.btmText}>Alterar foto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.delButton, styles.row]}
            onPress={noPick}
          >
            <Feather name="trash-2" size={20} color={Colors.white} />
            <Text style={styles.btmText}>Remover foto</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>

   </SafeAreaView >
  );
}