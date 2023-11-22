import React, { useState } from 'react';
import { SafeAreaView, Text, StatusBar, View, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../../components/Colors/Colors';

import { FontAwesome, AntDesign, Feather, Ionicons } from '@expo/vector-icons';

export default function ComentPsico({ navigation }) {

 return (
  <SafeAreaView style={styles.container}>
  <StatusBar barStyle={'default'}/>

      <View style={styles.avaliCont}>
        <View style={styles.row}>
          <Text style={styles.titleAv}>Você possui: </Text>
          <Text style={styles.starValue}>0</Text>
          <Text style={styles.starValue}> avaliações</Text>
        </View>
      </View>

    <View style={styles.containerContent}>
      
      <View style={styles.boxPropaganda}>
        <Text>Propaganda</Text>
      </View>

      <Text style={styles.title}>Avaliações</Text>

        <FlatList
        ListFooterComponent={<View style={{height: 80}} />}
        ListEmptyComponent={
          <View style={styles.advice}>
            <Text style={styles.adviceText}>Não foram encontrados comentários.</Text>
          </View>
        }
        keyExtractor={(item) => item.id}
        data={''}
        style={styles.list}
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
                        <Text style={styles.comentName}>{item.nome}</Text>
                    </View>
                    <Text style={styles.comentText}>{item.comentario}</Text>
                </View>
            </View>
            </View>
          </View>
          );
        }}
      />
      </View>
 </SafeAreaView>
  );
}