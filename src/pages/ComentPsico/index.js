import React, { useState } from 'react';
import { SafeAreaView, Text, StatusBar, View, FlatList, TouchableOpacity } from 'react-native';
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
          <Text style={styles.titleAv}>Sua avaliação é de: </Text>
          <AntDesign name='star' size={40} color={Colors.oryelow} />
          <Text style={styles.starValue}>X.X/5</Text>
        </View>
      </View>

    <View style={styles.containerContent}>
      
      <View style={styles.boxPropaganda}>
        <Text>Propaganda</Text>
      </View>

      <Text style={styles.title}>Avaliações</Text>


      <TouchableOpacity
        style={styles.boxComent}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('UserPrf')}
      >
        <View style={[styles.row2]}>
          <FontAwesome name="user-circle-o" size={40} color={Colors.brown} />
            <View>
              <View style={[styles.row]}>
                <Text style={styles.comentName}>Nome*</Text>
                <View style={[styles.row]}>
                  <AntDesign name='star' color={Colors.brownAlpha2} style={styles.comentStar}/>
                  <Text style={styles.comentDate}>XX/5</Text>
                </View>
              </View>
              <Text style={styles.comentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>
 </SafeAreaView>
  );
}