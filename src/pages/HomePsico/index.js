import React, {useState} from 'react';
import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../../components/Colors/Colors';

import { FontAwesome, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import { useDispatch, useSelector } from 'react-redux';
import { fetchComents } from '../../redux/features/userComents'

export default function HomePsico({ navigation }) {

  const [numberFollows] = useState('10');

  const dataCmts = useSelector((state) => state);
  console.log(dataCmts)


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
        >
          <FontAwesome name="user-circle-o" size={100} color={Colors.brown} style={styles.itemPhoto} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemP1}>Nome*</Text>
            <Text style={styles.itemP2}>TeraPets: XXX</Text>
            <Text style={styles.itemP3}>Descrição*</Text>
          </View>
        </TouchableOpacity>

        <FlatList
          ListFooterComponent={<View style={{height: 80}} />}
          ListEmptyComponent={
            <View style={styles.advice}>
              <Text style={styles.adviceText}>Não foram encontrados comentários.</Text>
            </View>
          }
          keyExtractor={(item) => item.id}
          data={{}}
          style={{}}
          renderItem={({item}) => {
            return (
              <View style={[styles.margin]}>
              <View style={styles.boxComent}>
              <View style={[styles.row2]}>
                    { item.pfp
                    ?
                    <Image source={{uri : item.pfp}} style={styles.profilePic} />
                    :
                    <FontAwesome name="user-circle-o" size={40} color={Colors.brown} style={styles.profilePic} />
                    }
                    
                  <View>
                      <View style={[styles.row]}>
                          <Text style={styles.comentName}>{item.nome} {item.sobrenome}</Text>
                          <Text style={styles.comentDate}>{item.data}</Text>
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