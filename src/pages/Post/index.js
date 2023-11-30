import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StatusBar, FlatList, TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';
import { MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../config/firebaseconfig';

export default function Post(props, { navigation }) {
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

  const db = getFirestore(app);
  const postagensRef = collection(db, 'postagens');
  const [userPosts, setUserPosts] = useState([]);

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
      data={userPosts}
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
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{justifyContent: 'flex-end'}}
                >
                  <Entypo name="dots-three-vertical" size={15} color={Colors.white} />
                </TouchableOpacity>
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
        </View>
        );
      }}
    />

   </SafeAreaView>
  );
}