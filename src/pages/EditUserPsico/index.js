import React, { useState, useRef, useMemo, useCallback } from 'react';
import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';
import { FontAwesome, AntDesign, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../components/Colors/Colors';

import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth'; 
import auth from '../../config/firebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import app from "../../config/firebaseconfig"


export default function EditUserPsico(props, {navigation, route}) {

  //console.log(props.route.params)

  const [image, setImage] = useState('');

  const uid = props.route.params.id;
  console.log(uid)

  const [nome] = useState(props.route.params.nome)
  const [sobrenome] = useState(props.route.params.sobrenome)
  const [crp, setCrp] = useState(props.route.params.crp)
  const [data] = useState(props.route.params.data)
  const [telefone, setTelefone] = useState(props.route.params.cell);
  const [bio, setBio] = useState(props.route.params.bio);

  const db = getFirestore(app);

  const snapPoints = useMemo( () => ["22%", "25%"], []);
  const snapPoints2 = useMemo( () => ["25%", "28%"], []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
    bottomSheetModalRef.current?.dismiss();

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  function noPick() {
    setImage("");
    bottomSheetModalRef.current?.dismiss();
  }

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

  const bottomSheetModalRef3 = useRef(null);

  const dimiss = useCallback(() => {
    bottomSheetModalRef3.current?.dismiss();
  }, []);

  const handlePresentPres = useCallback(() => {
    bottomSheetModalRef3.current?.present();
  }, []);
  const handleChange = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


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
    props.navigation.reset({
      index:0, 
      routes: [{
        name:"Signin"
      }]
    })
  }

 return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.picAlt}>

          { !image
          ?
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handlePresentModalPress}
            >
              <FontAwesome style={styles.profileImage} name="user-circle-o" size={100} color={Colors.brown}/>
            </TouchableOpacity>
          :
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handlePresentModalPress}
            >
              <Image source={{uri: image}} style={styles.profileImage} />
            </TouchableOpacity>
          }


          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePresentModalPress}
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

        <Text style={styles.label}>CRP</Text>
        <MaskInput
          style={[styles.input, styles.inputHeight]}
          keyboardType='numeric'
          onChangeText={(text) => setCrp(text)}
          maxLength={9}
          value={crp}
          mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
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

        <TouchableOpacity
          style={[styles.buttonPass, styles.cont, styles.row]}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('PasswordAlt')}
        >
          <MaterialCommunityIcons name="form-textbox-password" size={24} color={Colors.white} />
          <Text style={styles.textButtonDelete}>Alterar senha</Text>
        </TouchableOpacity>

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
            onPress={handlePresentPres}
          >
              <Ionicons name="exit-outline" size={24} color={Colors.white} />
              <Text style={styles.textButtonLogout}>Sair da conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonDelete, styles.cont, styles.row]}
            activeOpacity={0.8}
            onPress={handlePresentPress}
          >
              <Feather name="trash-2" size={24} color={Colors.white} />
              <Text style={styles.textButtonDelete}>Excluir conta</Text>
          </TouchableOpacity>

      </View>
      <View style={{height: 25}}/>
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
      </BottomSheetModal>
      </BottomSheetModalProvider>

      <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef2}
        index={0}
        snapPoints={snapPoints2}
        backgroundStyle={{backgroundColor: Colors.orange}}
        handleIndicatorStyle={{backgroundColor: Colors.brown}}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        onChange={handleChanges}
      >
        <View style={styles.margin}>

          <Text style={styles.titleModal}>Tem certeza de que deseja excluir a sua conta?</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.altButton, styles.row]}
            onPress={dmiss}
          >
            <Feather name="x-circle" size={20} color={Colors.white} />
            <Text style={styles.btmText}>Não, mudei de ideia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.delButton, styles.row]}
            onPress={deleteUsuario}
          >
            <Feather name="trash-2" size={20} color={Colors.white} />
            <Text style={styles.btmText}>Sim, excluir conta </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
      </BottomSheetModalProvider>

      <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef3}
        index={0}
        snapPoints={snapPoints2}
        backgroundStyle={{backgroundColor: Colors.orange}}
        handleIndicatorStyle={{backgroundColor: Colors.brown}}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        onChange={handleChange}
      >
        <View style={styles.margin}>

          <Text style={styles.titleModal}>Tem certeza de que deseja sair da conta?</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.altButton, styles.row]}
            onPress={dimiss}
          >
            <Feather name="x-circle" size={20} color={Colors.white} />
            <Text style={styles.btmText}>Não, mudei de ideia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.delButton, styles.row]}
            onPress={exit}
          >
            <Ionicons name="exit-outline" size={20} color={Colors.white} />
            <Text style={styles.btmText}>Sim, sair conta </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
      </BottomSheetModalProvider>
   </SafeAreaView >
  );
}