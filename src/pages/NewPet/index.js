import {React, useState} from 'react';
import { SafeAreaView, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { getFirestore, doc, deleteDoc, setDoc } from 'firebase/firestore';
import { getAuth, deleteUser } from 'firebase/auth'; 
import app from "../../config/firebaseconfig"


import PetGenRadio from '../../components/PetGenRadio';
import PetAdesRadio from '../../components/PetAdesRadio';
import PetCastRadio from '../../components/PetCastRadio';

import styles from './styles';

export default function NewPet({useRoute}) {

    const [nome, setNome] = useState ('');
    const [raca, setRaca] = useState ('');
    const [genero, setGenero] = useState('');
    const [selectedGen, setSelectedGen] = useState ('');
    const [adestramento, setAdestranmento] = useState('');
    const [selectedAdes, setSelectedAdes] = useState ('');
    const [castrado, setCastrado] = useState('');
    const [selectedCast, setSelectedCast] = useState ('');

    async function addPet (){

    }

 return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={60}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}
    >
   <SafeAreaView style={styles.safeArea} contentContainerStyle={styles.contentContainer}>
    <StatusBar barStyle={'default'}/>
        
    <Text style={styles.title}>Adicionar novo TeraPet</Text>
    <Text style={styles.obrigation}>* significa obrigatório.</Text>

        <Text style={styles.inputTitle}>Nome*</Text>
        <TextInput
        style={styles.input}
        placeholder='Insira o nome do seu pet'
        type='text'
        onChangeText={(text) => setNome(text)}
        value={nome}
        />

        <Text style={styles.inputTitle}>Raça*</Text>
        <TextInput
        style={styles.input}
        placeholder='Insira a raça do pet'
        type='text'
        onChangeText={(text) => setRaca(text)}
        value={raca}
        />
        
        <Text style={styles.inputTitle}>Gênero*</Text>
        <PetGenRadio
        selected={selectedGen}
        options={['Macho', 'Fêmea']}
        horizontal={true}
        onChangeSelect={(opt, i)=> {
          setGenero(opt);
          setSelectedGen(i);
        }}
        value={genero}
        />

        <Text style={styles.inputTitle}>Possui adestramento?*</Text>
        <PetAdesRadio
        selected={selectedAdes}
        options={['Sim', 'Não']}
        horizontal={true}
        onChangeSelect={(opt, i)=> {
          setAdestranmento(opt);
          setSelectedAdes(i);
        }}
        value={adestramento}
        />

        <Text style={styles.inputTitle}>Já foi castrado(a)?*</Text>
        <PetCastRadio
        selected={selectedCast}
        options={['Sim', 'Não']}
        horizontal={true}
        onChangeSelect={(opt, i)=> {
          setCastrado(opt);
          setSelectedCast(i);
        }}
        value={castrado}
        />

        { nome === "" || raca === "" || genero === "" || adestramento === "" || castrado === ""
        ?
        <TouchableOpacity
            disabled={true}
            style={styles.buttonAdd}
        >
            <Text style={styles.textButtonAdd}>ADICIONAR</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
        style={styles.buttonAdd}
        activeOpacity={0.7}
        onPress={addPet}
        >
        <Text style={styles.textButtonAdd}>ADICIONAR</Text>
        </TouchableOpacity>
        }


   </SafeAreaView>
   </KeyboardAvoidingView>
  );
}