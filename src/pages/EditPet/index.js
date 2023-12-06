import React, { useState, useRef, useMemo, useCallback } from 'react';
import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';
import { FontAwesome, FontAwesome5, AntDesign, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../components/Colors/Colors';

import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth'; 
import auth from '../../config/firebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import app from "../../config/firebaseconfig"

import PetCastRadio from '../../components/PetCastRadio';
import PetAdesRadio from '../../components/PetAdesRadio';


export default function EditPet(props, { navigation }) {
  //console.log(props.route.params)

  const [image, setImage] = useState('');

  const [photo, setPhoto] = useState(props.route.params.imagem);

  //console.log(photo)

  const [nome] = useState(props.route.params.nome);
  const [tipo] = useState(props.route.params.tipo);
  const [raca] = useState(props.route.params.raca);
  const [data] = useState(props.route.params.data);
  const [genero] = useState(props.route.params.genero);
  const [adestramento, setAdestranmento] = useState('');
  const [selectedAdes, setSelectedAdes] = useState ('');
  const [castrado, setCastrado] = useState('');
  const [selectedCast, setSelectedCast] = useState ('');
  const [bio, setBio] = useState('');

  const petid = props.route.params.id;
  
  const [save, setSave] = useState(null);
  const db = getFirestore(app);

  const snapPoints = useMemo( () => ["22%", "25%"], []);
  const snapPoints2 = useMemo( () => ["28%", "32%"], []);

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
    if (image){
      setImage("");
    } else {
      setPhoto("");
    }
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
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const dmiss = useCallback(() => {
    bottomSheetModalRef2.current?.dismiss();
  }, []);

  const bottomSheetModalRef2 = useRef(null);

  const handlePresentPress = useCallback(() => {
    bottomSheetModalRef2.current?.present();
  }, []);
  const handleChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

 
  async function deletePet() {
    try {
      // Obtenha as credenciais do usuário do AsyncStorage
      const credentials = JSON.parse(await AsyncStorage.getItem('userId'));
  
      // Construa a referência do documento do pet
      const petRef = doc(db, 'pet', credentials.uid, 'userPets', petid);
  
      // Exclua o documento do pet
      await deleteDoc(petRef)
        
      console.log('Pet excluído com sucesso!')
      props.navigation.navigate('Meus Terapets')
    } catch (error) {
      console.error('Erro ao excluir o pet:', error);
    }
  }


  async function salvarAlt(){
    setSave(!save);
  }

    

 return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle={'default'}/>
        
        <KeyboardAvoidingView
          keyboardVerticalOffset={190}
        >
        <ScrollView
          style={[styles.margin, {paddingTop: Platform.OS === 'ios' ? 0 : 25}]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.picAlt}>

            { !photo
            ?
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handlePresentModalPress}
              >
                <View style={styles.petImage}>
                  <MaterialIcons name="pets" size={90} color={Colors.brown}/>
                </View>
              </TouchableOpacity>
            :
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handlePresentModalPress}
              >
                { !image
                ?
                 <Image source={{uri: photo}} style={styles.petImage} />
                :
                  <Image source={{uri: image}} style={styles.petImage} />
                }
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

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.inputHeight2]}
          multiline
          numberOfLines={3}
          maxLength={150}
          onChangeText={(text) => {
            setBio(text)
            setSave(null)
          }}
          value={bio}
        />

        <Text style={styles.label}>Tipo</Text>
        <TextInput
          style={[styles.input, styles.inputHeight]}
          editable={false}
          value={tipo}
        />

        <Text style={styles.label}>Gênero</Text>
        <TextInput
          style={[styles.input, styles.inputHeight]}
          editable={false}
          value={genero}
        />

        <Text style={styles.label}>Raça</Text>
        <TextInput
          style={[styles.input, styles.inputHeight]}
          editable={false}
          value={raca}
        />

        <Text style={styles.label}>Data de nascimento</Text>
        <TextInput
          style={[styles.input, styles.inputHeight]}
          editable={false}
          value={data}
        />

        <Text style={styles.label}>Adestrado(a)?*</Text>
        <PetAdesRadio
        selected={selectedAdes}
        options={['Sim', 'Não']}
        horizontal={true}
        onChangeSelect={(opt, i)=> {
          setAdestranmento(opt);
          setSelectedAdes(i);
          setSave(null);
        }}
        value={adestramento}
        />

        <Text style={styles.label}>Castrado(a)?*</Text>
        <PetCastRadio
        selected={selectedCast}
        options={['Sim', 'Não']}
        horizontal={true}
        onChangeSelect={(opt, i)=> {
          setCastrado(opt);
          setSelectedCast(i);
          setSave(null);
        }}
        value={castrado}
        />

        { setSave && (
          <Text style={styles.saveNtf}>As alterações foram salvas com sucesso</Text>
        )}


        <View style={styles.horizontal}>

          <TouchableOpacity
            style={[styles.buttonSave, styles.cont, styles.row]}
            activeOpacity={0.8}
            onPress={salvarAlt}
          >
            <Feather name="check" size={24} color={Colors.white} />
            <Text style={styles.textButtonSave}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonDelete, styles.cont, styles.row]}
            activeOpacity={0.8}
            onPress={handlePresentPress}
          >
            <FontAwesome5 name='heart-broken' size={24} color={Colors.white}/>
              <Text style={styles.textButtonDelete}>Excluir TeraPet</Text>
          </TouchableOpacity>

        </View>
        <View style={{height:60}}/>
        

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

          <Text style={styles.titleModal}>Tem certeza de que deseja excluir o seu TeraPet?</Text>

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
            onPress={deletePet}
          >
            <FontAwesome5 name="heart-broken" size={20} color={Colors.white} />
            <Text style={styles.btmText}>Sim, excluir TeraPet </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
      </BottomSheetModalProvider>

      
   </SafeAreaView >
  );
}