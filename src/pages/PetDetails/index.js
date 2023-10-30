import React from 'react';
import { Text, StatusBar, View, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './styles';
import Colors from '../../components/Colors/Colors';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function PetDetails({ navigation }) {
 return (
  <SafeAreaView style={styles.prmryContainer}>
    <StatusBar barStyle={'default'}/>

    <View style={[styles.profilePet, styles.borderBottomBrown]}>
        <View style={styles.row}>
        <MaterialIcons style={styles.petIcon} name="pets" size={60} color={Colors.white} />
           
        <View style={[styles.container, styles.horizontal, styles.justifyCenter]}>

          <View style={[styles.justifyCenter, styles.containerPet]}>
            <Text style={styles.textName}></Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPet2]}>
            <Text style={styles.numberConst}>00</Text>
            <Text style={styles.numberDesc}>Anos</Text>
          </View>

        </View>
      
      </View>

      <View>
          <Text style={styles.textDesc}>Description*</Text>
      </View>

      <View style={styles.horizontal}>

        <TouchableOpacity
          style={[styles.editButton, styles.container, styles.row]}
          onPress={() => navigation.navigate('EditPet')}>
            <Feather name="edit" size={24} color={Colors.white} style={styles.ico}/>
            <Text style={styles.textButton}>Editar TeraPet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.dltButton, styles.container, styles.row]}
          onPress={() => ('')}>
            <FontAwesome5 name='heart-broken' size={24} color={Colors.white} style={styles.ico}/>
            <Text style={styles.textButton}>Deletar TeraPet</Text>
        </TouchableOpacity>

      </View>
    </View>


    <View>
      <View style={styles.petInfo}>
        
        <View style={styles.row}>
          <View style={[styles.container, styles.horizontal, styles.justifyCenter, styles.paddingBottom]}>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
            <Text style={styles.titleInfo}>Tipo:</Text>
            <Text style={styles.textInfo}>Felino ou Canino*</Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
            <Text style={styles.titleInfo}>Raça:</Text>
            <Text style={styles.textInfo}>Nome da Raça*</Text>
          </View>

          </View>

        </View>

        <View style={styles.row}>
          <View style={[styles.container, styles.horizontal, styles.justifyCenter, styles.paddingBottom]}>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
          <Text style={styles.titleInfo}>Data de Nascimento:</Text>
            <Text style={styles.textInfo}>00/00/0000*</Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
          <Text style={styles.titleInfo}>Gênero:</Text>
            <Text style={styles.textInfo}>Gender*</Text>
          </View>

          </View>

        </View>

        <View style={styles.row}>
          <View style={[styles.container, styles.horizontal, styles.justifyCenter]}>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
            <Text style={styles.titleInfo}>Castrado:</Text>
            <Text style={styles.textInfo}>Sim ou Não*</Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
            <Text style={styles.titleInfo}>Adestrado:</Text>
            <Text style={styles.textInfo}>Sim ou Não*</Text>
          </View>

          </View>

        </View>

      </View>
    </View>


  </SafeAreaView>
  );
}