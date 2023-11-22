import React, { useState } from 'react';
import { SafeAreaView, Text, StatusBar, FlatList, TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';


export default function Community({ navigation }) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [image, setImage] = useState('');
  const [legenda, setLegenda] = useState('');


 return (
  <SafeAreaView style={styles.container}>
  <StatusBar barStyle={'default'}/>



    <FlatList
      ListFooterComponent={<View style={{height: 80}} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      keyExtractor={(item) => item.id}
      data={''}
      renderItem={({item}) => {
        return (
          <View style={styles.post}>
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('UserPrf', {id: 'item.id'})} //tira as '' dos ngcs
              style={styles.row}
            >
                { item.profilePic
                  ?
                  <Image source={{uri : profilePic}} style={styles.profileImage}/>
                  :
                  <FontAwesome style={styles.profileImage} name="user-circle-o" size={30} color={Colors.orange} />
                }
                <Text style={styles.name}>{nome} {sobrenome}</Text>
            </TouchableOpacity>
          </View>
    
          <View style={styles.imagepost} >
            <Image source={{uri : 'item.image'}} style={styles.imageSize} />
          </View>
    
          <View style={styles.description}>
            { legenda
              ?
              <View style={styles.horizontal}>
                <Text style={styles.descText}><Text style={styles.descTextName}>{item.nome}:</Text> {item.legenda}</Text>
              </View>
              :
              <Text></Text>
            }
          </View>
        </View>
        );
      }}
    />

    <TouchableOpacity style= {styles.buttonNewPost}
      onPress={() => navigation.navigate('Camera')}
    >
      <MaterialIcons name="post-add" size={24} color="#fff" />
    </TouchableOpacity>


   </SafeAreaView>
  );
}