import React from 'react';
import { SafeAreaView, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

import { Post, Header, Avatar, Name, PostImage, Description } from './styles';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Community({ navigation }) {
 return (
  <SafeAreaView style={styles.container}>
  <StatusBar barStyle={'default'}/>
{/* 
  <Post>
    <Header>
      <Avatar source={''}/>
      <Name>Nome</Name>
    </Header>

    <PostImage source={''}/>

    <Description>
      <Name>Nome</Name> Descrição
    </Description>
  </Post>
*/}

    <FlatList
      keyExtractor={''}
      data={''}
      style={{}}
      renderItem={() => {}}
    />

    <TouchableOpacity style= {styles.buttonNewPost}
      onPress={() => navigation.navigate('NewPost')}
    >
      <MaterialIcons name="post-add" size={24} color="#fff" />
    </TouchableOpacity>

   </SafeAreaView>
  );
}