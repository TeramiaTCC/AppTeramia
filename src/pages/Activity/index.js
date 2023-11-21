import React from 'react';
import { SafeAreaView, Text, StatusBar, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';
import { Feather } from '@expo/vector-icons';

export default function Activity(props) {
    //console.log(props.route.params.desc);
    //console.log(props.route.params.name);
 return (
   <ScrollView style={styles.container}>
        <StatusBar barStyle={'default'}/>

        <View style={styles.containerContent}>

          <View style={styles.boxTexts}>
            <Text style={styles.title}>{props.route.params.name}</Text>
            <View style={[styles.row, {justifyContent: 'flex-end', marginBottom: 10}]}>
              <Feather name="clock" size={24} color={Colors.brown} />
              <Text style={styles.time}>{props.route.params.tempo}</Text>
            </View>
            <Text style={styles.desc}>{props.route.params.desc}</Text>
          </View>

          <View style={styles.boxPropaganda}>
            <Text>Propaganda</Text>
          </View>

          <View style={styles.boxPropaganda}>
            <Text>Propaganda</Text>
          </View>

        </View>
   </ScrollView>
  );
}