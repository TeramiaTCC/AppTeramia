import React, {useState} from 'react';
import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../../components/Colors/Colors';

import { FontAwesome, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

export default function HomePsico({ navigation }) {

  const [numberFollows] = useState('10');

 return (
   <SafeAreaView style={styles.container}>
    <StatusBar barStyle={'default'}/>
      <View style={styles.containerContent}>

        <View style={styles.boxPropaganda}>
          <Text>Propaganda</Text>
        </View>

        <Text style={styles.title}>Seguidores: {numberFollows} </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.item}
          onPress={() => navigation.navigate('UserPrf')}
        >
          <FontAwesome name="user-circle-o" size={100} color={Colors.brown} style={styles.itemPhoto} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemP1}>Nome*</Text>
            <Text style={styles.itemP2}>TeraPets: XXX</Text>
            <Text style={styles.itemP3}>Descrição*</Text>
          </View>
        </TouchableOpacity>

        <FlatList
          data={''}
          style={styles.list}
          keyExtractor={(item) => ''}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.item}
                onPress={() => navigation.navigate('UserPrf')}
              >
                <FontAwesome name="user-circle-o" size={100} color={Colors.brown} style={styles.itemPhoto} />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemP1}>Nome*</Text>
                  <Text style={styles.itemP2}>TeraPets: XXX</Text>
                  <Text style={styles.itemP3}>Descrição*</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />

      </View>
   </SafeAreaView>
  );
}