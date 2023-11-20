import React, { useState, useRef, useMemo, useCallback } from 'react';
import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';
import { FontAwesome, FontAwesome5, AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import Colors from '../../components/Colors/Colors';

import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth'; 
import auth from '../../config/firebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import app from "../../config/firebaseconfig"


export default function EditPet({navigation, route}) {

  const [image, setImage] = useState('');

  const [nome] = useState('Nome*')
  const [tipo] = useState('Tipo*')
  const [data] = useState('00/00/0000*')
  const [bio, setBio] = useState('');

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



  async function deletePet(){
    console.log('Deteltado');
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

        <Text style={styles.label}>Tipo</Text>
        <TextInput
          style={[styles.input, styles.inputHeight]}
          editable={false}
          value={tipo}
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


        <View style={styles.horizontal}>

          <TouchableOpacity
            style={[styles.buttonSave, styles.cont, styles.row]}
            activeOpacity={0.8}
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

      </ScrollView>
      </KeyboardAvoidingView>
      </View>

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