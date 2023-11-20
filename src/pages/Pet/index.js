import { React, useState, useEffect }from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';

import { Feather, Entypo, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import Colors from '../../components/Colors/Colors';
import styles from './styles';


export default function Pett({ navigation }) {
  const [teraPet, setTeraPet] = useState([])

  //aqui tu vai fazer uns trampo do banco de dados vê no video ai: https://www.youtube.com/watch?v=0AM6AXlFwxM
  useEffect (() =>{

  }, [])

  return (
  <SafeAreaView style={styles.prmyContainer}>
  <StatusBar barStyle={'default'}/>

  <View style={[styles.petInfo, styles.margin]}>
            <View style={styles.row}>
              <MaterialIcons style={styles.petIcon} name="pets" size={50} color={Colors.backColor} />

              <View style={[styles.container, styles.horizontal, styles.justifyCenter]}>

                <View style={[styles.justifyCenter, styles.containerName]}>
                  <Text style={styles.textName}>Nome*</Text>
                </View>

                <View style={[styles.justifyCenter, styles.containerIcons]}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate ('PetDetails', {

                      })
                    }}
                    activeOpacity={0.4}
                  >
                    <FontAwesome5 name="list-alt" size={24} color={Colors.brown} />
                  </TouchableOpacity>
                </View>
              </View>

            </View>

            <View>
              <Text style={styles.textDesc}>
                Description*
              </Text>
            </View>

        </View>

    <FlatList
      showsVerticalScrollIndicator={false}
      data={teraPet}
      renderItem={(item) => {
      return (
          <View style={styles.petInfo}>
            <View style={styles.row}>
              <MaterialIcons style={styles.petIcon} name="pets" size={50} color={Colors.backColor} />

              <View style={[styles.container, styles.horizontal, styles.justifyCenter]}>

                <View style={[styles.justifyCenter, styles.containerName]}>
                  <Text style={styles.textName}>Nome*</Text>
                </View>

                <View style={[styles.justifyCenter, styles.containerIcons]}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate ('PetDetails', {
                      id: item.id, //id do pet q ele pega do banco
                      nome: item.nome //nome do pet q ele pega do banco
                      })
                    }}
                    activeOpacity={0.4}
                  >
                    <Feather name="list" size={24} color={Colors.brown} />
                  </TouchableOpacity>
                </View>

                <View style={[styles.justifyCenter, styles.containerIcons]}>
                  <TouchableOpacity
                    onPress={() => ('')} //bota a função de deletar aqui
                    activeOpacity={0.6}
                  >
                    <FontAwesome5 name='heart-broken' size={24} color={Colors.redDel2}/>
                  </TouchableOpacity>
                </View>

              </View>

            </View>

            <View>
              <Text style={styles.textDesc}>
                Description*
              </Text>
            </View>

        </View>
      )
      }}
    >

    </FlatList>

    <TouchableOpacity style= {styles.buttonNewpet}
      onPress={() => navigation.navigate('NewPet')}
    >
      <Entypo name="plus" size={24} color="#fff" />
    </TouchableOpacity>

   </SafeAreaView>
  );
}