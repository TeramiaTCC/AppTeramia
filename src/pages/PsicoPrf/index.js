import React, { useState, useEffect } from 'react';
import { Text, StatusBar, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';

import { FontAwesome, AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TextComponent } from 'react-native';
import { CheckBoxIcon } from '@rneui/base/dist/CheckBox/components/CheckBoxIcon';

import { getFirestore, collection, getDocs, onSnapshot } from 'firebase/firestore';
import app from '../../config/firebaseconfig';


export default function PsicoPrf(props, { navigation }) {
  //console.log(props.route)
  //console.log(image)

  const [userPosts, setUserPosts] = useState([]);

  const uid = props.route.params.id;
  const nome = props.route.params.nome;
  const sobrenome = props.route.params.sobrenome;
  const crp = props.route.params.crp;
  const desc = props.route.params.desc;
  const image = props.route.params.foto;

  const [follow, setFollow] = useState(null);

  const [coments, setComents] = useState(null);

  useEffect(() => {
    const db = getFirestore(app);
    const comentariosRef = collection(db, 'avaliacoes', uid, 'comentarios');
  
    const unsubscribe = onSnapshot(comentariosRef, (querySnapshot) => {
      const comentariosData = [];
      querySnapshot.forEach((doc) => {
        comentariosData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setComents(comentariosData);
    });
  
    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    props.navigation.setOptions({
      title: nome === '' || sobrenome === '' ? 'No title' : nome + ' ' + sobrenome,
    });
  }, [navigation, nome]);

return (

    <SafeAreaView style={styles.prmryContainer}>

    <StatusBar barStyle={'default'}/>

      <View style={styles.profileInfo}>
        <View style={styles.row}>
        { image 
        ?
          <Image source={{uri: image}} style={styles.profileImage} />
        :
          <FontAwesome style={styles.profileImage} name="user-circle-o" size={80} color="white"
        />
        }
      </View>

      <View>
          <Text style={styles.textCRP}>{crp}</Text>
      </View>

      <View style={styles.horizontal}>
        { follow === true
        ?
          <TouchableOpacity
            style={[styles.unfollowButton, styles.container, styles.row]}
            onPress={()=>setFollow(false)}
            activeOpacity={0.8}
          >
            <Feather name="user-minus" size={24} color={Colors.white} style={styles.ico}/>
            <Text style={styles.textEdit}>Deixar de seguir</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity
            style={[styles.followButton, styles.container, styles.row]}
            onPress={()=>setFollow(true)}
            activeOpacity={0.8}
          >
              <Feather name="user-plus" size={24} color={Colors.white} style={styles.ico}/>
              <Text style={styles.textEdit}>Seguir</Text>
          </TouchableOpacity>
        }

      </View>


    </View>

    { desc
    ?
      <View style={styles.boxInfo}>
        <Text style={styles.textDesc}>{desc}</Text>
      </View>
    :
      <View style={{height: 15}} />
    }



   
    <View style={[styles.row, styles.margin, styles.borderBottom]}>
        <FontAwesome name="comment" size={25} color={Colors.orange} />
        <Text style={styles.comentTitle}>Comentários</Text>
    </View>



    <FlatList
      ListFooterComponent={<View style={{height: 80}} />}
      ListEmptyComponent={
        <View style={styles.advice}>
          <Text style={styles.adviceText}>Não foram encontrados comentários.</Text>
        </View>
      }
      keyExtractor={(item) => item.id}
      data={coments}
      style={{}}
      renderItem={({item}) => {
        return (
          <View style={[styles.margin]}>
          <View style={styles.boxComent}>
          <View style={[styles.row2]}>
                { item.pfp
                ?
                <Image source={{uri : item.pfp}} style={styles.profilePic} />
                :
                <FontAwesome name="user-circle-o" size={40} color={Colors.brown} style={styles.profilePic} />
                }
                
              <View>
                  <View style={[styles.row]}>
                      <Text style={styles.comentName}>{item.nome} {item.sobrenome}</Text>
                      <Text style={styles.comentDate}>{item.data}</Text>
                  </View>
                  <Text style={styles.comentText}>{item.comentario}</Text>
              </View>
          </View>
          </View>
        </View>
        );
      }}
    />

    {follow && (
      <TouchableOpacity
        style= {styles.buttonChat}
        onPress={() => props.navigation.navigate('Chat', {
          nome: nome,
          sobrenome: sobrenome,
          uid: uid
        })}
        activeOpacity={0.8}
      >
        <Ionicons name="chatbubble-ellipses-outline"  size={24} color="#fff" />
      </TouchableOpacity>
    )}


    
    <TouchableOpacity
      style= {styles.buttonAddComent}
      onPress={() => props.navigation.navigate('AddComent', {
        nome: nome,
        sobrenome: sobrenome,
        uid: uid,
        foto: image,
        crp: crp
      })}
      activeOpacity={0.8}
    >
      <MaterialIcons name='post-add' size={24} color="#fff" />
    </TouchableOpacity>

    </SafeAreaView >
   
  );
}