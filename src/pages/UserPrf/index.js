import React, { useState, useEffect } from 'react';
import { Text, StatusBar, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';

import { FontAwesome, Feather } from '@expo/vector-icons';

import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../config/firebaseconfig';


export default function UserPrf(props, { navigation }) {
  //console.log(props.route.params)
  const [userPosts, setUserPosts] = useState([]);

  const id = props.route.params.id
  const nome = props.route.params.nome;
  const sobrenome = props.route.params.sobrenome;
  const avatar = props.route.params.avatar;
  const bio =  props.route.params.bio;
  const crp = props.route.params.crp;

  useEffect(() => {
    props.navigation.setOptions({
      title: nome === '' || sobrenome === '' ? 'No title' : nome + ' ' + sobrenome,
    });
  }, [navigation, nome]);

  const db = getFirestore(app);
  const postagensRef = collection(db, 'postagens');

  useEffect(() => {
    const fetchData = async () => {
      const q = query(postagensRef, where('userid', '==', id));
      const querySnapshot = await getDocs(q);

      const postsData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        postsData.push({
          id: doc.id,
          ...data // replace with your actual field name
        });
      });

      setUserPosts(postsData);
    };

    fetchData();
  }, [id]);

return (

    <SafeAreaView style={styles.prmryContainer}>

    <StatusBar barStyle={'default'}/>

      <View style={styles.profileInfo}>
        <View style={styles.row}>

          { avatar
          ?
            <Image source={{uri: avatar}} style={styles.profileImage}/>
          :
            <FontAwesome style={styles.profileImage} name="user-circle-o" size={80} color="white"/>
          }
           
        <View style={[styles.container, styles.horizontal, styles.justifyCenter]}>

         <View style={[styles.justifyCenter, styles.containerPrf]}>
            <Text style={styles.numberConst}></Text>
            <Text style={styles.numberDesc}></Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPrf]}>
            <Text style={styles.numberConst}></Text>
            <Text style={styles.numberDesc}></Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPrf]}>
            <Text style={styles.numberConst}>{userPosts.length}</Text>
            {userPosts.length === 1
            ?
            <Text style={styles.numberDesc}>Publicação</Text>
            :
            <Text style={styles.numberDesc}>Publicações</Text>
            }
          </View>



        </View>
          
      </View>
      <View style={{height: 10}} />
      <View>
          <Text style={styles.textName}>{nome} {sobrenome}</Text>
          {crp && (
            <Text style={styles.textCrp}>{crp}</Text>
          )}
          {bio 
          ?
            <Text style={styles.textDesc}>{bio}</Text>
          :
            <View style={{height: 10}} />
          }
      </View>

    </View>

    {/* Lista de Posts */}

    <View style={[styles.borderTopGray]}>
        <FlatList
          ListFooterComponent={<View style={{height: 325}} />}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          horizontal={false}
          data={userPosts}
          style={{}}
          keyExtractor={(item) => item.id}
          refreshing={false}
          onRefresh={() => (
            <View/>
          )}
          renderItem={({ item }) => (

          <TouchableOpacity
            style={[styles.containerImage, styles.borderWhite]}
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('Post', {
              nome: item.nome,
              sobrenome: item.sobrenome,
              uid: item.userid,
              pfp: item.pfp
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