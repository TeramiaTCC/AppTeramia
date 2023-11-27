import React, { useState } from 'react';
import { SafeAreaView, Text, StatusBar, FlatList, TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';
import { MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export default function Post() {
  const dataPosts = useSelector((state) => state.userPosts.userPosts.publicacoesArray);
  //console.log('DataPosts: ',dataPosts)



 return (
  <SafeAreaView style={styles.container}>
  <StatusBar barStyle={'default'}/>

    <FlatList
      ListFooterComponent={<View style={{}} />}
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
      data={dataPosts}
      renderItem={({item}) => {
        return (
          <View style={styles.post}>
          <View style={styles.header}>
            <View
              style={styles.row}
            >
                { item.avatar
                  ?
                  <Image source={{uri : item.avatar }} style={styles.profileImage}/>
                  :
                  <FontAwesome style={styles.profileImage} name="user-circle-o" size={30} color={Colors.orange} />
                }
                <Text style={styles.name}>Nome Sobrenome</Text>
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
                <Text style={styles.descText}><Text style={styles.descTextName}>Nome:</Text> {item.caption}</Text>
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