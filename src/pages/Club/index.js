import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StatusBar, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import Colors from '../../components/Colors/Colors';

import results from './results';
import ListItem  from './listitem';

export default function Club({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(results);

  useEffect(() => {
    if (searchText === '') {
      setList(results);
    } else {
      setList(
        results.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
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
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
              <ListItem data={item} />
          );
        }}
      />

   </SafeAreaView>
  );
}