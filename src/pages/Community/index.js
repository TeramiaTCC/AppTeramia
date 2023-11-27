import React, { useState } from 'react';
import { SafeAreaView, Text, StatusBar, FlatList, TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import results from './results';


export default function Community({ navigation }) {

  const listUsers = results

 return (
  <SafeAreaView style={styles.container}>
  <StatusBar barStyle={'default'}/>



    <FlatList
      ListFooterComponent={<View style={{height: 75}} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View style={styles.advice}>
          <Text style={styles.adviceText}>Não foram encontrados posts.</Text>
        </View>
      }
      style={styles.list}
      refreshing={false}
      onRefresh={() => (
        <View/>
      )}
      keyExtractor={(item) => item.id}
      data={listUsers}
      renderItem={({item}) => {
        return (
          <View style={styles.post}>
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('UserPrf', {
                id: item.id,
                nome: item.nome,
                sobrenome: item.sobrenome,
                avatar: item.avatar,
                desc: item.description
              })} //tira as '' dos ngcs
              style={styles.row}
            >
                { item.avatar
                  ?
                  <Image source={{uri : item.avatar }} style={styles.profileImage}/>
                  :
                  <FontAwesome style={styles.profileImage} name="user-circle-o" size={30} color={Colors.orange} />
                }
                <Text style={styles.name}>{item.nome} {item.sobrenome}</Text>
            </TouchableOpacity>
          </View>
    
          <View style={styles.imagepost} >
            <Image source={{ uri : item.imagePost }} style={styles.imageSize} />
          </View>
    
          <View style={styles.description}>
            { item.caption
              ?
              <View style={styles.horizontal}>
                <Text style={styles.descText}><Text style={styles.descTextName}>{item.nome}:</Text> {item.caption}</Text>
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