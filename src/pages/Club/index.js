import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StatusBar, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import Colors from '../../components/Colors/Colors';

import { AntDesign, FontAwesome } from '@expo/vector-icons';

import results from './results';

export default function Club({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(results);

  useEffect(() => {
    if (searchText === '') {
      setList(results);
    } else {
         
      setList(
        results.filter((item) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1),
      );
      
    } 
  }, [searchText]);

 return (
   <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'}/>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.input}
            placeholder="Procurar..."
            placeholderTextColor={Colors.brownAlpha2}
            autoCorrect={true}
            value={searchText}
            onChangeText={(t) => setSearchText(t)}
          />
        </View>
        
        <FlatList
          data={list}
          style={styles.list}
          ListFooterComponent={<View style={{height: 80}} />}
          ListEmptyComponent={
            <View style={styles.advice}>
              <Text style={styles.adviceText}>Não foram encontrados cadastros.</Text>
            </View>
          }
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.item}
                onPress={() => navigation.navigate('Psicologo') }
              >

                { item.avatar 
                ?
                  <Image source={{ uri: item.avatar }} style={styles.itemPhoto} />
                :
                  <FontAwesome name="user-circle-o" size={100} color={Colors.orange} style={styles.itemPhoto}/>
                }

                <View style={styles.itemInfo}>
                  <Text style={styles.itemP1}>{item.name}</Text>
                  <Text style={styles.itemP2}>CRP: {item.crp}</Text>
                  <View style={styles.row}>
                    <AntDesign name="star" size={25} color={Colors.yellowT} />
                    <Text style={styles.itemP3}>{item.stars}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
      />

   </SafeAreaView>
  );
}