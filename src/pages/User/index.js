import React, { useState } from 'react';
import { Text, StatusBar, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CachedImage from '../../components/CachedImage/CachedImage';


export default function User({ navigation, props }) {

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

          <View style={[styles.justifyCenter, styles.containerPrf]}>
            <Text style={styles.numberConst}>00</Text>
            <Text style={styles.numberDesc}>Publicações</Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPrf]}>
            <Text style={styles.numberConst}>00</Text>
            <Text style={styles.numberDesc}>TeraPets</Text>
          </View>

        </View>
      
      </View>

      <View>
          <Text style={styles.textName}>Name</Text>
          <Text style={styles.textDesc}>Description</Text>
      </View>

      <View style={styles.horizontal}>
        <TouchableOpacity
          style={[styles.editButton, styles.container, styles.row]}
          onPress={() => navigation.navigate('EditUser')}>
            <Feather name="edit" size={24} color={Colors.white} style={styles.ico}/>
            <Text style={styles.textEdit}>Editar perfil</Text>
        </TouchableOpacity>
      </View>
    </View>

    {/* Lista de Posts */}

    <View style={[styles.borderTopGray]}>
        <FlatList
          numColumns={3}
          horizontal={false}
          data={userPosts}
          style={{}}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.containerImage, styles.borderWhite]}
              onPress={() => props.navigation.navigate("Post", { //item, user 
              })}>
                {item.type == 0 ?

                  <CachedImage
                    cacheKey={''}
                    style={container.image}
                    source={{ //uri: item.downloadURLStill 
                    }}
                  />
                :
                  <CachedImage
                    cacheKey={''}
                    style={container.image}
                    source={{ //uri: item.downloadURL
                     }}
                  />
                }
            </TouchableOpacity>
        )}

      />
    </View>


    </SafeAreaView >
   
  );
}