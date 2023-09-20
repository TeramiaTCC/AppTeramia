import { React, useState, useEffect }from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'

import styles from './styles';


export default function Pett({ navigation }) {
  const [teraPet, setTeraPet] = useState([])

  //aqui tu vai fazer uns trampo do banco de dados vê no video ai: https://www.youtube.com/watch?v=0AM6AXlFwxM
  useEffect (() =>{

  }, [])

  return (
  <SafeAreaView style={styles.container}>
  <StatusBar barStyle={'default'}/>

    <FlatList
      showsVerticalScrollIndicator={false}
      data={teraPet}
      renderItem={(item) => {
      return (
        <View style={styles.contextAllPets}>
          <TouchableOpacity style= {styles.deletePet}
            onPress={() => ('')} /*bota a função de deletar aqui*/
          >
            <FontAwesome5 name='heart-broken' size={24} color={'#F16520'}/>
          </TouchableOpacity>
          <Text style={styles.descriptionPet}
            onPress={() => {
              navigation.navigate ('PetDetails', {
              id: item.id, /*id do pet q ele pega do banco*/
              nome: item.nome /*nome do pet q ele pega do banco*/
              })
            }}
          >

              </Text>
        </View>
      )
      }}
    >

    </FlatList>

    <TouchableOpacity style= {styles.buttonNewpet}
      onPress={() => navigation.navigate('NewPet')}
    >
      <Text style={styles.iconButton}>+</Text>
    </TouchableOpacity>

   </SafeAreaView>
  );
}