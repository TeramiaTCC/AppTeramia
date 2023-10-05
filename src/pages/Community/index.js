import React from 'react';
import { SafeAreaView, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Community({ navigation }) {
 return (
  <SafeAreaView style={styles.container}>
  <StatusBar barStyle={'default'}/>

    <FlatList>

    </FlatList>

    <TouchableOpacity style= {styles.buttonNewPost}
      onPress={() => navigation.navigate('NewPost')}
    >
      <MaterialIcons name="post-add" size={34} color="#fff" />
    </TouchableOpacity>

   </SafeAreaView>
  );
}