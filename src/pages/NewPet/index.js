import {React, useState} from 'react';
import { SafeAreaView, View, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, Pressable, } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';

import { FontAwesome } from '@expo/vector-icons';

import { getFirestore, doc, deleteDoc, setDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import app from "../../config/firebaseconfig";
import { Alert } from 'react-native';


import PetGenRadio from '../../components/PetGenRadio';
import PetAdesRadio from '../../components/PetAdesRadio';
import PetCastRadio from '../../components/PetCastRadio';
import PetTypeRadio from '../../components/PetTypeRadio';

import styles from './styles';

export default function NewPet({ navigation })  {

    const db = getFirestore(app);

    const [nome, setNome] = useState ('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [tipo, setTipo] = useState ('');
    const [selectedTipo, setSelectedTipo] = useState ('');
    const [genero, setGenero] = useState('');
    const [raca, setRaca] = useState('');
    const [selectedGen, setSelectedGen] = useState ('');
    const [adestramento, setAdestranmento] = useState('');
    const [selectedAdes, setSelectedAdes] = useState ('');
    const [castrado, setCastrado] = useState('');
    const [selectedCast, setSelectedCast] = useState ('');

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
   
    dataFormatada = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()  

    const catRaces = [
        {key:'Abissínio', value:'Abissínio'},
        {key:'Balinês', value:'Balinês'},
        {key:'Chartreux', value:'Chartreux'},
        {key:'Cornish Rex', value:'Cornish Rex'},
        {key:'Curl Americano', value:'Curl Americano'},
        {key:'Devon Rex', value:'Devon Rex'},
        {key:'Angorá', value:'Angorá'},
        {key:'Gato Birmanês', value:'Gato Birmanês'},
        {key:'Gato de bengala', value:'Gato de bengala'},
        {key:'Persa', value:'Persa'},
        {key:'Gato Siamês', value:'Gato Siamês'},
        {key:'Himalaio', value:'Himalaio'},
        {key:'Maine Coon', value:'Maine Coon'},
        {key:'Munchkin', value:'Munchkin'},
        {key:'Napoleon', value:'Napoleon'},
        {key:'Norueguês', value:'Norueguês'},
        {key:'Ocicat', value:'Ocicat'},
        {key:'Pelo Curto Americano', value:'Pelo Curto Americano'},
        {key:'Pelo Curto Oriental', value:'Pelo Curto Oriental'},
        {key:'Ragdoll', value:'Ragdoll'},
        {key:'Russian Blue', value:'Russian Blue'},
        {key:'Scottish Fold', value:'Scottish Fold'},
        {key:'Selkirk Rex', value:'Selkirk Rex'},
        {key:'Singapura', value:'Singapura'},
        {key:'Russian Blue', value:'Russian Blue'},
        {key:'Scottish Fold', value:'Scottish Fold'},
        {key:'Selkirk Rex', value:'Selkirk Rex'},
        {key:'Singapura', value:'Singapura'},
        {key:'Vira-latas', value: 'Vira-latas'}
    ];
    
    const dogRaces = [
        {key:'Afegão', value:'Afegão'},
        {key:'Hound', value:'Hound'},
        {key:'Affenpinscher', value:'Affenpinscher'},
        {key:'Airedale Terrier', value:'Airedale Terrier'},
        {key:'Akita', value:'Akita'},
        {key:'American Staffordshire Terrier', value:'American Staffordshire Terrier'},
        {key:'Basenji', value:'Basenji'},
        {key:'Basset Hound', value:'Basset Hound'},
        {key:'Beagle', value:'Beagle'},
        {key:'Beagle Harrier', value:'Beagle Harrier'},
        {key:'Bearded Collie', value:'Bearded Collie'},
        {key:'Bedlington Terrier', value:'Bedlington Terrier'},
        {key:'Bichon Frisé', value:'Bichon Frisé'},
        {key:'Bloodhound', value:'Bloodhound'},
        {key:'Bobtail', value:'Bobtail'},
        {key:'Boiadeiro Australiano', value:'Boiadeiro Australiano'},
        {key:'Boiadeiro Bernês', value:'Boiadeiro Bernês'},
        {key:'Border Collie', value:'Border Collie'},
        {key:'Border Terrier', value:'Border Terrier'},
        {key:'Borzoi', value:'Borzoi'},
        {key:'Boston Terrier', value:'Boston Terrier'},
        {key:'Boxer', value:'Boxer'},
        {key:'Buldogue Francês', value:'Buldogue Francês'},
        {key:'Buldogue Inglês', value:'Buldogue Inglês'},
        {key:'Bull Terrier', value:'Bull Terrier'},
        {key:'Bulmastife', value:'Bulmastife'},
        {key:'Cairn Terrier', value:'Cairn Terrier'},
        {key:'Cane Corso', value:'Cane Corso'},
        {key:'Cão de Água Português', value:'Cão de Água Português'},
        {key:'Cão de Crista Chinês', value:'Cão de Crista Chinês'},
        {key:'Cavalier King Charles Spaniel', value:'Cavalier King Charles Spaniel'},
        {key:'Chesapeake Bay Retriever', value:'Chesapeake Bay Retriever'},
        {key:'Chihuahua', value:'Chihuahua'},
        {key:'Chow Chow', value:'Chow Chow'},
        {key:'Cocker Spaniel Americano', value:'Cocker Spaniel Americano'},
        {key:'Cocker Spaniel Inglês', value:'Cocker Spaniel Inglês'},
        {key:'Collie', value:'Collie'},
        {key:'Coton de Tuléar', value:'Coton de Tuléar'},
        {key:'Dachshund', value:'Dachshund'},
        {key:'Dálmata', value:'Dálmata'},
        {key:'Dandie Dinmont Terrier', value:'Dandie Dinmont Terrier'},
        {key:'Dobermann', value:'Dobermann'},
        {key:'Dogo Argentino', value:'Dogo Argentino'},
        {key:'Dogue Alemão', value:'Dogue Alemão'},
        {key:'Fila Brasileiro', value:'Fila Brasileiro'},
        {key:'Fox Terrier (Pelo Duro e Pelo Liso)', value:'Fox Terrier (Pelo Duro e Pelo Liso)'},
        {key:'Foxhound Inglês', value:'Foxhound Inglês'},
        {key:'Galgo Escocês', value:'Galgo Escocês'},
        {key:'Galgo Irlandês', value:'Galgo Irlandês'},
        {key:'Golden Retriever', value:'Golden Retriever'},
        {key:'Grande Boiadeiro Suiço', value:'Grande Boiadeiro Suiço'},
        {key:'Greyhound', value:'Greyhound'},
        {key:'Grifo da Bélgica', value:'Grifo da Bélgica'},
        {key:'Husky Siberiano', value:'Husky Siberiano'},
        {key:'Jack Russell Terrier', value:'Jack Russell Terrier'},
        {key:'King Charles', value:'King Charles'},
        {key:'Komondor', value:'Komondor'},
        {key:'Labradoodle', value:'Labradoodle'},
        {key:'Labrador Retriever', value:'Labrador Retriever'},
        {key:'Lakeland Terrier', value:'Lakeland Terrier'},
        {key:'Leonberger', value:'Leonberger'},
        {key:'Lhasa Apso', value:'Lhasa Apso'},
        {key:'Lulu da Pomerânia', value:'Lulu da Pomerânia'},
        {key:'Malamute do Alasca', value:'Malamute do Alasca'},
        {key:'Maltês', value:'Maltês'},
        {key:'Mastife', value:'Mastife'},
        {key:'Mastim Napolitano', value:'Mastim Napolitano'},
        {key:'Mastim Tibetano', value:'Mastim Tibetano'},
        {key:'Norfolk Terrier', value:'Norfolk Terrier'},
        {key:'Norwich Terrier', value:'Norwich Terrier'},
        {key:'Papillon', value:'Papillon'},
        {key:'Pastor Alemão', value:'Pastor Alemão'},
        {key:'Pastor Australiano', value:'Pastor Australiano'},
        {key:'Pinscher Miniatura', value:'Pinscher Miniatura'},
        {key:'Poodle', value:'Poodle'},
        {key:'Pug', value:'Pug'},
        {key:'Rottweiler', value:'Rottweiler'},
        {key:'Sem Raça Definida (SRD)', value:'Sem Raça Definida (SRD)'},
        {key:'ShihTzu', value:'ShihTzu'},
        {key:'Silky Terrier', value:'Silky Terrier'},
        {key:'Skye Terrier', value:'Skye Terrier'},
        {key:'Staffordshire Bull Terrier', value:'Staffordshire Bull Terrier'},
        {key:'Terra Nova', value:'Terra Nova'},
        {key:'Terrier Escocês', value:'Terrier Escocês'},
        {key:'Tosa', value:'Tosa'},
        {key:'Vira-latas', value:'Vira-latas'},
        {key:'Weimaraner', value:'Weimaraner'},
        {key:'Welsh Corgi (Cardigan)', value:'Welsh Corgi (Cardigan)'},
        {key:'Welsh Corgi (Pembroke)', value:'Welsh Corgi (Pembroke)'},
        {key:'West Highland White Terrier', value:'West Highland White Terrier'},
        {key:'Whippet', value:'Whippet'},
        {key:'Xoloitzcuintli', value:'Xoloitzcuintli'},
        {key:'Yorkshire Terrier', value:'Yorkshire Terrier'}        
    ];

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
        setDataNascimento(dataFormatada);
      }
  
      } else {
        toggleDatepicker();
      }
    };

    async function addPet(){

      const credentials = JSON.parse(await AsyncStorage.getItem("userId"))

      await setDoc(doc(db, "pet", credentials.uid), {
        nome: nome,
        tipo: tipo,
        raca: raca,
        adestramento: adestramento,
        castramento: castrado,
        genero: genero,
        datanascimento: dataNascimento,
        
      }).then(() => {
        Alert.alert("Terapet", "Cadastrado com sucesso")
        navigation.navigate('Pet')
        
      }).catch(async(error) => {
        console.log(error)
        await deleteDoc(doc(db, "pet", credentials.uid))
          
      })
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

        <Text style={styles.inputTitle}>Data de Nascimento*</Text>
        {showPicker && (
        <DateTimePicker 
          mode='date' 
          display='spinner'
          dateFormat='DD/MM/YYYY'
          value={date}
          onChange={onChange}
          minimumDate={new Date(1950, 0, 1)}
          maximumDate={new Date(2023, 11, 31)}
        />
      )}

      {!showPicker && (
        <Pressable
          onPress={toggleDatepicker}
          style={styles.input}
        >
          <TextInput
            style={{color: '#000',}}
            placeholder='Selecione a data de nascimento'
            autoComplete='birthdate-full'
            onChangeText={setDataNascimento}
            value={dataNascimento}
            editable={false}
          />
        </Pressable>
      )}

        <Text style={styles.inputTitle}>Tipo*</Text>
        <PetTypeRadio
        selected={selectedTipo}
        options={['Felino', 'Canino']}
        horizontal={true}
        onChangeSelect={(opt, i)=> {
          setTipo(opt);
          setSelectedTipo(i);
        }}
        value={tipo}
        />

        <Text style={styles.inputTitle}>Raça*</Text>
        {tipo === 'Canino'
        ?
        <SelectList
          setSelected={setRaca}
          data={dogRaces}
          placeholder='Selecione uma Raça'
          searchPlaceholder='Procurar uma Raça'
          notFoundText='Raça não encontrada! Por favor verique se está escrito corretamente.'
          value={raca}
          arrowicon={<FontAwesome name="chevron-down" size={15} color={'#F16520'} />} 
          searchicon={<FontAwesome name="search" size={15} color={'#F16520'} />} 
          closeicon={<FontAwesome name="close" size={15} color={'#F16520'} />}
          boxStyles= {styles.boxList}
          dropdownStyles= {styles.dropdownList}
        />
        :
        <SelectList
          setSelected={setRaca}
          data={catRaces}
          placeholder='Selecione uma Raça'
          searchPlaceholder='Procurar uma Raça'
          notFoundText='Raça não encontrada! Por favor verique se está escrito corretamente.'
          value={raca}
          arrowicon={<FontAwesome name="chevron-down" size={15} color={'#F16520'} />} 
          searchicon={<FontAwesome name="search" size={15} color={'#F16520'} />} 
          closeicon={<FontAwesome name="close" size={15} color={'#F16520'} />}
          boxStyles= {styles.boxList}
          dropdownStyles= {styles.dropdownList}
        />
        }

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

        <View style={{height: 25}}/>

        { nome === "" || genero === "" || adestramento === "" || castrado === "" || raca === "" || dataNascimento === ""
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