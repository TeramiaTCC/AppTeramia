import React, { useState } from 'react';
import { Text, StatusBar, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';

import { FontAwesome, Feather } from '@expo/vector-icons';
import CachedImage from '../../components/CachedImage/CachedImage';


export default function UserPrf(props, { navigation }) {
  //console.log(props)
  const [userPosts, setUserPosts] = useState([]);

  const nome = props.route.params.nome;
  const sobrenome = props.route.params.sobrenome;
  const avatar = props.route.params.avatar;
  const desc = props.route.params.desc;

return (

    <SafeAreaView style={styles.prmryContainer}>

    <StatusBar barStyle={'default'}/>

      <View style={styles.profileInfo}>
        <View style={styles.row}>

          { avatar
          ?
            <Image source={{uri: avatar}} style={styles.profileImage}/>
          :
            <FontAwesome style={styles.profileImage} name="user-circle-o" size={80} color="white"/>
          }
           
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
      <View style={{height: 10}} />
      <View>
          <Text style={styles.textName}>{nome} {sobrenome}</Text>

          {desc
          ?
          <Text style={styles.textDesc}>{desc}</Text>
          :
          <Text />
          }
          
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