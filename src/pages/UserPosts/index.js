import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StatusBar, FlatList, TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';
import { MaterialIcons, FontAwesome, Entypo, Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import { collection, query, where, getDocs, getFirestore, doc, deleteDoc } from 'firebase/firestore';
import app from '../../config/firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserPost(props, { navigation }) {
  const dataPosts = useSelector((state) => state.userPosts.userPosts.publicacoesArray);
  //console.log('DataPosts: ',dataPosts)

  //console.log(props.route.params)
  const id = props.route.params.uid
  const nome = props.route.params.nome;
  const sobrenome = props.route.params.sobrenome;


  useEffect(() => {
    props.navigation.setOptions({
      title: nome === '' || sobrenome === '' ? 'No title' : nome + ' ' + sobrenome,
    });
  }, [navigation, nome]);

  async function deletePost(id){
    const db = getFirestore(app);
    await deleteDoc(doc(db, "postagens", id))
    .then(
        console.log("Foi deletado")
    )
  }
    


 return (
  <SafeAreaView style={styles.container}>
  <StatusBar barStyle={'default'}/>

    <FlatList
      ListFooterComponent={<View style={{}} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      refreshing={false}
      onRefresh={() => (
        <View/>
      )}
      keyExtractor={(item) => item.id}
      data={dataPosts}
      renderItem={({item}) => {
        return (
          <View style={styles.post}>
          <View style={styles.header}>
            <View
              style={styles.row}
            >
                { item.pfp
                  ?
                  <Image source={{uri : item.pfp }} style={styles.profileImage}/>
                  :
                  <FontAwesome style={styles.profileImage} name="user-circle-o" size={30} color={Colors.orange} />
                }
                <Text style={styles.name}>{nome} {sobrenome}</Text>
            </View>
          </View>
    
          <View style={styles.imagepost} >
            <Image source={{ uri: item.imagem }} style={styles.imageSize} />
          </View>
    
          <View style={styles.description}>
            { item.caption && (
              <View style={styles.horizontal}>
                <Text style={styles.descText}><Text style={styles.descTextName}>{nome}:</Text> {item.caption}</Text>
              </View>
            )}
          </View>
          <View style={[styles.excluir]}>
            <Feather name="trash-2" size={24} color={Colors.redDel} style={{marginLeft: 'auto', marginRight: 'auto'}} onPress={() => deletePost(item.id)}/>
          </View>
        </View>
        );
      }}
    />

   </SafeAreaView>
  );
}