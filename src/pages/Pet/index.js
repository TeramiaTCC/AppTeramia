import { React, useState, useEffect }from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';

import { Feather, Entypo, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../components/Colors/Colors';
import styles from './styles';
import { fetchPets } from '../../redux/features/userPets';


export default function Pett({ navigation }) {
  const dataPets = useSelector((state) => state.userPets.userPets.petsArray);
  //console.log('Data: ',dataPets)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPets());
  }, [dispatch])


  return (
  <SafeAreaView style={styles.prmyContainer}>
  <StatusBar barStyle={'default'}/>

    <FlatList
      showsVerticalScrollIndicator={false}
      styles={styles.list}
      data={dataPets}
      ListFooterComponent={<View style={{height: 80}} />}
      ListEmptyComponent={
        <View style={styles.advice}>
          <Text style={styles.adviceText}>Não foram encontrados TeraPets.</Text>
        </View>
      }
      refreshing={false}
      onRefresh={() => (
        <View/>
      )}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => {
      return (
        <View style={[styles.petInfo, styles.margin]}>
        <View style={styles.row}>
          <View>
            { item.imagem
            ?
            <Image source={{ uri: item.imagem }} style={styles.petIcon} />
            :
            <View style={styles.petIcon}>
              <MaterialIcons name="pets" size={35} color={Colors.backColor}/>
            </View>
            }
          </View>

            <View style={[styles.container, styles.horizontal, styles.justifyCenter]}>

              <View style={[styles.justifyCenter, styles.containerName]}>
                <Text style={styles.textName}>{item.nome}</Text>
              </View>

              <View style={[styles.justifyCenter, styles.containerIcons]}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate ('PetDetails', {
                      nome: item.nome,
                      desc: item.description,
                      tipo: item.tipo,
                      adestrado: item.adestramento,
                      castrado: item.castramento,
                      raca: item.raca,
                      foto: item.imagem,
                      data: item.datanascimento,
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

          { item.description && (
            <View style={{paddingBottom: 10}}>
              <Text style={styles.textDesc}>
                {item.description}
              </Text>
            </View>
          )}

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