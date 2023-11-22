import React, { useState } from 'react';
import { Text, StatusBar, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';

import { FontAwesome, AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TextComponent } from 'react-native';
import { CheckBoxIcon } from '@rneui/base/dist/CheckBox/components/CheckBoxIcon';


export default function PsicoPrf(props, { navigation }) {
  //console.log(props.route)
  //console.log(image)

  const [userPosts, setUserPosts] = useState([]);

  const nome = props.route.params.nome;
  const crp = props.route.params.crp;
  const desc = props.route.params.desc;
  const image = props.route.params.foto;



return (

    <SafeAreaView style={styles.prmryContainer}>

    <StatusBar barStyle={'default'}/>
    <TouchableOpacity style= {styles.buttonAddComent}
      onPress={() => navigation.navigate('AddComent')}
    >
      <MaterialIcons name="post-add" size={24} color="#fff" />
    </TouchableOpacity>

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
          <Text style={styles.textName}>{nome}</Text>
          <Text style={styles.textCRP}>{crp}</Text>
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
        <Text style={styles.comentTitle} >Comentários</Text>
    </View>



    <FlatList
      ListFooterComponent={<View style={{height: 80}} />}
      ListEmptyComponent={
        <View style={styles.advice}>
          <Text style={styles.adviceText}>Não foram encontrados comentários.</Text>
        </View>
      }
      keyExtractor={(item) => item.id}
      data={''}
      style={{}}
      renderItem={({item}) => {
        return (
          <View style={[styles.margin]}>
          <View style={styles.boxComent}>
          <View style={[styles.row2]}>
                { item.avatar
                ?
                <Image source={{uri : item.avatar}} style={styles.profilePic} />
                :
                <FontAwesome name="user-circle-o" size={40} color={Colors.brown} style={styles.profilePic} />
                }
                
              <View>
                  <View style={[styles.row]}>
                      <Text style={styles.comentName}>item.nome</Text>
                  </View>
                  <Text style={styles.comentText}>item.comentario</Text>
              </View>
          </View>
          </View>
        </View>
        );
      }}
    />

    </SafeAreaView >
   
  );
}