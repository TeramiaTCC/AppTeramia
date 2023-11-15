import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

import { AntDesign } from '@expo/vector-icons';
import { Alert } from 'react-native';

export default function ListItem ({ data, navigation}) {

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.item}
    >
      <Image source={{ uri: data.avatar }} style={styles.itemPhoto} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.name}</Text>
        <Text style={styles.itemP2}>CRP: {data.crp}</Text>
        <View style={styles.row}>
          <AntDesign name="star" size={25} color={Colors.yellowT} />
          <Text style={styles.itemP3}>{data.stars}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: Colors.brown,
    padding: 15,
    backgroundColor: Colors.whiteGold,
    borderRadius: 25,
    marginTop: 15,
    elevation: 3,
  },
  itemPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.orange
  },
  itemInfo: {
    marginLeft: 20,
  },
  itemP1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.orange,
    marginBottom: 5
  },
  itemP2: {
    fontSize: 15,
    color: Colors.brownAlpha2,
  },
  itemP3:{
    paddingLeft: 5,
    fontSize: 25,
    color: Colors.brown,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
});