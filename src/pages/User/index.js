import React, { useState, useEffect } from 'react';
import { Text, StatusBar, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../../components/Colors/Colors';

import { FontAwesome, Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import CachedImage from '../../components/CachedImage/CachedImage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/features/userPosts';
import { fetchUser } from '../../redux/features/user';


export default function User({ navigation }) {

  const dataPosts = useSelector((state) => state.userPosts.userPosts.publicacoesArray);
  //console.log('DataPostsUser: ',dataPosts)

  const dataUser = useSelector((state) => state.userData.userData.usuarioData);
  //console.log('DataUser: ',dataUser)

  const dataPets = useSelector((state) => state.userPets.userPets.petsArray);
  //console.log('Data: ',dataPets)

  const [photo] = useState(dataUser.imagem)
  const [crp] = useState(dataUser.crp)
  const [bio] = useState(dataUser.bio)

  const dispatch = useDispatch();



  useEffect(() => {
    const fetchInterval = setInterval(() => {
      dispatch(fetchUser());
    }, 60 * 1000); // 1 miliseconds interval

    // Clear the interval when the component unmounts
    return () => clearInterval(fetchInterval);
  }, [dispatch]);


  useEffect(() => {
    const fetchInterval = setInterval(() => {
      dispatch(fetchPosts());
    }, 60 * 1000); // 1 miliseconds interval

    // Clear the interval when the component unmounts
    return () => clearInterval(fetchInterval);
  }, [dispatch]);


return (

    <SafeAreaView style={styles.prmryContainer}>

    <StatusBar barStyle={'default'}/>

      <View style={styles.profileInfo}>
        <View style={styles.row}>

          { photo
          ?
          <Image source={{uri : photo}} style={styles.profileImage}/>
          :
          <FontAwesome style={styles.profileImage} name="user-circle-o" size={80} color="white"/>
          }
           
        <View style={[styles.container, styles.horizontal, styles.justifyCenter]}>
          <View style={[styles.justifyCenter, styles.containerPrf]}>
            <Text style={styles.numberConst}></Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPrf]}>
            <Text style={styles.numberConst}>{dataPosts.length}</Text>
            {dataPosts.length === 1
            ?
            <Text style={styles.numberDesc}>Publicação</Text>
            :
            <Text style={styles.numberDesc}>Publicações</Text>
            }

          </View>
          

          <View style={[styles.justifyCenter, styles.containerPrf]}>
            <Text style={styles.numberConst}>{dataPets.length}</Text>
            {dataPets.length === 1
            ?
            <Text style={styles.numberDesc}>TeraPet</Text>
            :
            <Text style={styles.numberDesc}>TeraPets</Text>
            }
          </View>

        </View>
      
      </View>

      <View>
          <Text style={styles.textName}>{dataUser.nome} {dataUser.sobrenome}</Text>
          {crp && (
            <Text style={styles.textCrp}>{dataUser.crp}</Text>
          )}
          {bio 
          ?
            <Text style={styles.textDesc}>{bio}</Text>
          :
            <View style={{height: 10}} />
          }
      </View>

      <View style={styles.horizontal}>
        <TouchableOpacity
          style={[styles.editButton, styles.container, styles.row]}
          onPress={() => {
            {!crp
            ?
            navigation.navigate('EditUser', {
              id: dataUser.id,
              cell: dataUser.cell,
              data: dataUser.datanascimento,
              genero: dataUser.genero,
              nome: dataUser.nome,
              sobrenome: dataUser.sobrenome,
              imagem: dataUser.Imagem,
              bio: dataUser.bio,
              })
            :
            navigation.navigate('EditUserPsico', {
              id: dataUser.id,
              cell: dataUser.cell,
              data: dataUser.datanascimento,
              genero: dataUser.genero,
              nome: dataUser.nome,
              sobrenome: dataUser.sobrenome,
              imagem: dataUser.Imagem,
              bio: dataUser.bio,
              crp: dataUser.crp
              })
            }
          }}
          activeOpacity={0.8}
        >
            <Feather name="edit" size={24} color={Colors.white} style={styles.ico}/>
            <Text style={styles.textEdit}>Editar perfil</Text>
        </TouchableOpacity>
      </View>
    </View>

    {/* Lista de Posts */}

    <View style={[styles.borderTopGray]}>
        <FlatList
          ListFooterComponent={<View style={{height: 325}} />}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          horizontal={false}
          data={dataPosts}
          style={{}}
          refreshing={false}
          onRefresh={() => (
            <View/>
          )}
          renderItem={({ item }) => (

          <TouchableOpacity
            style={[styles.containerImage, styles.borderWhite]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Post', {
              uid: item.userid,
              nome: item.nome,
              sobrenome: item.sobrenome,
              imagem: item.nome
            })}
          >
            <Image source={{uri: item.imagem}} style={{aspectRatio: 1}} />
          </TouchableOpacity>
        )}

      />
    </View>


    </SafeAreaView >
   
  );
}