import React, { useState, useLayoutEffect, useMemo, useRef, useCallback, useEffect } from 'react';
import { Text, StatusBar, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, Image } from 'react-native';

import styles from './styles';
import Colors from '../../components/Colors/Colors';

import { FontAwesome, AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import app from '../../config/firebaseconfig';
import { getAuth, snapshot } from "firebase/auth";
import { getFirestore, doc, setDoc, addDoc, Firestore, collection, Timestamp, serverTimestamp, FieldValue, getDoc, } from "firebase/firestore";

import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/features/user';

export default function CommentPage(props, { navigation }) {
    //console.log(props.route.params)

    const dataUser = useSelector((state) => state.userData.userData.usuarioData);
    //console.log('DataUser: ',dataUser)
  
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);


    const psicoid = props.route.params.uid;
    const nome = props.route.params.nome;
    const sobrenome = props.route.params.sobrenome;
    const foto = props.route.params.foto;
    const crp = props.route.params.crp;


    const [coment, setComent] = useState('');

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
            <TouchableOpacity
                onPress={() => AddComent()} 
                activeOpacity={0.4}
              >
                <Ionicons style={{ padding: 20 }} name="send" size={17.7} color={Colors.white} />
            </TouchableOpacity>
            ),
        });
     }, [coment]);

    const snapPoints = useMemo( () => ["35%", "45%"], []);

    const bottomSheetModalRef = useRef(null);

    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    }, []);
  
    const dmiss = useCallback(() => {
      bottomSheetModalRef.current?.dismiss();
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
    
    const [errorCmt, setErrorCmt] = useState(null);
    
    async function AddComent ()  {
        const credentials = JSON.parse(await AsyncStorage.getItem("userId"))
        psId = psicoid;
        uid = credentials.uid;
        const db = getFirestore(app);
        const new_date = new Date();
        dataFormatada = new_date.getDate() + "/" + (new_date.getMonth() + 1) + "/" + new_date.getFullYear();

        const userImg = dataUser.imagem;
        const userNm = dataUser.nome;
        const userSn = dataUser.sobrenome;


    
        const querry = collection(db, 'avaliacoes', psicoid, 'comentarios');
        const docRef = doc(querry, credentials.uid); // Definindo o ID do documento como credentials.uid

        try {
          const existingDocSnapshot = await getDoc(docRef);
      
          if (existingDocSnapshot.exists()) {
            // Se o documento já existir, atualizar o conteúdo
            await setDoc(docRef, {
              psicoid: psId,
              data: dataFormatada,
              pfp: userImg || '',
              nome: userNm,
              sobrenome: userSn,
              userId: uid,
              comentario: coment,
            });
          } else {
            // Se o documento não existir, adicionar um novo
            await setDoc(docRef, {  // Usando setDoc para garantir que o documento tenha o ID definido
              psicoid: psId,
              data: dataFormatada,
              pfp: userImg || '',
              nome: userNm,
              sobrenome: userSn,
              userId: uid,
              comentario: coment,
            });
          }
      
          // Ação comum para ambas as operações bem-sucedidas
          handlePresentModalPress();
        } catch (error) {
          console.error('Erro ao adicionar ou atualizar o comentário:', error);
          setErrorCmt(true);
        }
      }

 return (
   <SafeAreaView style={styles.prmryContainer} >
    <StatusBar barStyle={'default'}/>
        <KeyboardAvoidingView
          keyboardVerticalOffset={100}
          style={{flex: 1,paddingTop: Platform.OS === 'ios' ? 0 : 25,}}
        >
        <View style={styles.margin}>
            
            <Text style={styles.title}>Você está avaliando:</Text>

            <View style={[styles.horizontal, styles.backPs]}>
                { foto 
                ?
                <Image source={{uri: foto}} style={styles.profileImage} />
                :
                <FontAwesome style={styles.profileImage} name="user-circle-o" size={55} color={Colors.brown}
                />
                }

                <View>
                    <Text style={styles.psicoName}>{nome} {sobrenome}</Text>
                    <Text style={styles.psicoCrp}>CRP: {crp}</Text>
                </View>

            </View>

            <TextInput
                style={styles.comentInput}
                multiline
                maxLength={150}
                placeholder='Escreva sua avaliação...'
                placeholderTextColor={Colors.brownAlpha2}
                onChangeText={(text) => {
                    setComent(text)
                    setErrorCmt(null)
                }}
                value={coment}
            />
            { errorCmt && (
                <Text style={styles.errorMessage}>Antes de enviar, escreva a sua avaliação.</Text>
            )}

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

            <Text style={styles.titleModal}>Avaliação enviada</Text>

            <Text style={styles.textModal}>Sua avialiação em relação ao {nome} {sobrenome} foi enviada</Text>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.mdlButton}
                onPress={() => props.navigation.goBack()}
            >
                <Text style={styles.btmText}>Ok</Text>
            </TouchableOpacity>

        </View>
      </BottomSheetModal>
      </BottomSheetModalProvider>

   </SafeAreaView>
  );
}