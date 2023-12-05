import React, {useEffect} from 'react';
import { SafeAreaView, Text, StatusBar, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import styles from './styles';

import Colors from '../../components/Colors/Colors';
import { Feather } from '@expo/vector-icons';
import Banner from '../../components/Ads/banner';

export default function Activity(props, {navigation}) {
    //console.log(props.route.params.desc);
    //console.log(props.route.params.name);
    //console.log(props.route.params.image);

    const image = props.route.params.image;

    const value = props.route.params.name;

    useEffect(() => {
      props.navigation.setOptions({
        title: value === '' ? 'No title' : value,
      });
    }, [navigation, value]);
 return (
   <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'}/>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View
            style={styles.containerContent}
          >
          <View style={{height: 25}} />

          <View>
            <Text style={styles.title}>{props.route.params.title} <Text style={styles.sub}>{props.route.params.sub}</Text></Text>
            <View style={[styles.row, {justifyContent: 'flex-end', marginBottom: 10}]}>
              <Feather name="clock" size={24} color={Colors.brownAlpha2} />
              <Text style={styles.time}>{props.route.params.tempo}</Text>
            </View>
          </View>

          <Image source={{uri : image}} style={{aspectRatio: 1, borderRadius: 15, borderWidth: 4, borderColor: Colors.orange}} />

          <View style={styles.boxPropaganda}>
            <Banner/>
          </View>


          <Text style={styles.desc}>{props.route.params.desc}</Text>
          <View style={{height: 20}} />
        </View>

        </ScrollView>
   </SafeAreaView>
  );
}