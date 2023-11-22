import { React, useState, useEffect }from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';

import { Feather, Entypo, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import Colors from '../../components/Colors/Colors';
import styles from './styles';
import results from './results';


export default function Pett({ navigation }) {
  const [teraPet, setTeraPet] = useState('')

  const listPets = results;

  //aqui tu vai fazer uns trampo do banco de dados vê no video ai: https://www.youtube.com/watch?v=0AM6AXlFwxM
  useEffect (() =>{

  }, [])

  return (
  <SafeAreaView style={styles.prmyContainer}>
  <StatusBar barStyle={'default'}/>

    <FlatList
      showsVerticalScrollIndicator={false}
      styles={styles.list}
      data={listPets}
      ListFooterComponent={<View style={{height: 80}} />}
      ListEmptyComponent={
        <View style={styles.advice}>
          <Text style={styles.adviceText}>Não foram encontrados TeraPets.</Text>
        </View>
      }
      keyExtractor={(item) => item.id}
      renderItem={({item}) => {
      return (
        <View style={[styles.petInfo, styles.margin]}>
        <View style={styles.row}>
          <View>
            { item.foto
            ?
            <Image source={{ uri: item.foto }} style={styles.petIcon} />
            :
            <View style={styles.petIcon}>
              <MaterialIcons name="pets" size={35} color={Colors.backColor}/>
            </View>
            }
          </View>

            <View style={[styles.container, styles.horizontal, styles.justifyCenter]}>

              <View style={[styles.justifyCenter, styles.containerName]}>
                <Text style={styles.textName}>{item.name}</Text>
              </View>

              <View style={[styles.justifyCenter, styles.containerIcons]}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate ('PetDetails', {
                      nome: item.name,
                      desc: item.desc,
                      tipo: item.tipo,
                      adestrado: item.adestrado,
                      castrado: item.castrado,
                      raca: item.raca,
                      foto: item.foto,
                      data: item.data,
                      genero: item.genero
                    })
                  }}
                  activeOpacity={0.4}
                >
                  <FontAwesome5 name="list-alt" size={24} color={Colors.brown} />
                </TouchableOpacity>
              </View>
            </View>

          </View>

          <View>
            <Text style={styles.textDesc}>
              {item.desc}
            </Text>
          </View>

      </View>
      )
      }}
    >

    </FlatList>

    <TouchableOpacity style= {styles.buttonNewpet}
      onPress={() => navigation.navigate('NewPet')}
    >
      <Entypo name="plus" size={24} color="#fff" />
    </TouchableOpacity>

   </SafeAreaView>
  );
}