import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StatusBar, FlatList, TouchableOpacity, View, Image, Animated } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';
import { MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from '../../redux/features/posts';

import { store } from '../../redux/store/store'; // Import your Redux store


export default function Community({ navigation }) {
  const posts = useSelector((state) => state.posts.posts.postsArray);
  //console.log('DataPosts: ',posts)

  const listUsers = posts

  const scrollY = new Animated.Value(0)

  const translateY = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0.3],
    extrapolate: 'identity',
  })
  
  const dispatch = useDispatch();


  
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
      onScroll={(e) => {
        scrollY.setValue(e.nativeEvent.contentOffset.y)
      }}
      renderItem={({item}) => {
        return (
          <View style={styles.post}>
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('UserPrf', {
                id: item.userid,
                nome: item.nome,
                sobrenome: item.sobrenome,
                avatar: item.pfp,
                bio: item.bio,
                crp: item.crp,
              })} //tira as '' dos ngcs
              style={styles.row}
            >
                { item.pfp
                  ?
                  <Image source={{uri : item.pfp }} style={styles.profileImage}/>
                  :
                  <FontAwesome style={styles.profileImage} name="user-circle-o" size={30} color={Colors.orange} />
                }
                <Text style={styles.name}>{item.nome} {item.sobrenome}</Text>
            </TouchableOpacity>
          </View>
    
          <View style={styles.imagepost} >
            <Image source={{ uri : item.imagem }} style={styles.imageSize} />
          </View>
    
          <View style={styles.description}>
            { item.caption && (
              <View style={styles.horizontal}>
                <Text style={styles.descText}><Text style={styles.descTextName}>{item.nome}:</Text> {item.caption}</Text>
              </View>
            )}
          </View>
        </View>
        );
      }}
    />

    <Animated.View
      style={{
        transform:[
          {translateY}
        ]
      }}
    >
      <TouchableOpacity style= {styles.buttonNewPost}
        onPress={() => navigation.navigate('Camera')}
      >
        <MaterialCommunityIcons name="camera-plus-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </Animated.View>



   </SafeAreaView>
  );
}