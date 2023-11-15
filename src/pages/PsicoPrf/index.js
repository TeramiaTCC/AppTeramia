import React, { useState } from 'react';
import { Text, StatusBar, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';

import { FontAwesome, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { TextComponent } from 'react-native';
import { CheckBoxIcon } from '@rneui/base/dist/CheckBox/components/CheckBoxIcon';


export default function PsicoPrf({ navigation, props }) {

  const [userPosts, setUserPosts] = useState([]);


return (

    <SafeAreaView style={styles.prmryContainer}>

    <StatusBar barStyle={'default'}/>

      <View style={styles.profileInfo}>
        <View style={styles.row}>
          <FontAwesome
            style={styles.profileImage}
            name="user-circle-o" size={80} color="white"
		      />
           
        <View style={[styles.container, styles.horizontal, styles.justifyCenter]}>

        <View style={[styles.justifyCenter, styles.containerPrf]}/>

          <View style={[styles.justifyCenter, styles.containerPrf]}>
            <AntDesign name="star" size={70} color={Colors.yellowT} style={styles.star} />
            <Text style={styles.numberNote}>0.0/5</Text>
          </View>

        </View>
      
      </View>

      <View>
          <Text style={styles.textName}>Name</Text>
          <Text style={styles.textCRP}>CRP</Text>
      </View>

    </View>

    <View style={styles.boxInfo}>
        <Text style={styles.textDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </View>
   
    <View style={[styles.row, styles.margin, styles.borderBottom]}>
        <FontAwesome name="comment" size={25} color={Colors.orange} />
        <Text style={styles.comentTitle} >Comentários</Text>
    </View>

    <View style={[styles.margin, styles.row, styles.marginBottom]}>
        <FontAwesome name="user-circle-o" size={40} color={Colors.brown} />
        <TextInput
            style={styles.comentInput}
            multiline
            placeholder='Adicione um comentário...'
            placeholderTextColor={Colors.brownAlpha2}
        />
        <TouchableOpacity
            activeOpacity={0.8}
        >
            <Ionicons style={styles.send} name="send" size={15} color={Colors.white} />
        </TouchableOpacity>
    </View>

    <View style={[styles.margin]}>
        <View style={styles.boxComent}>
        <View style={[styles.row2]}>
            <FontAwesome name="user-circle-o" size={40} color={Colors.brown} />
            <View>
                <View style={[styles.row]}>
                    <Text style={styles.comentName}>Nome*</Text>
                    <Text style={styles.comentDate}>XX/XX/XXXX</Text>
                </View>
                <Text style={styles.comentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </View>

        </View>
        </View>
    </View>
    </SafeAreaView >
   
  );
}