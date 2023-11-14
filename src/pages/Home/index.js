import React from 'react';
import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Feather } from '@expo/vector-icons';
import Colors from '../../components/Colors/Colors';

export default function Home({ navigation }) {

 return (
   <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'}/>

        <View style={styles.containerContent}>
          <View style={styles.boxPropaganda}>
            <Text>Propaganda</Text>
          </View>

          <Text style={styles.title}>Atividades</Text>

          <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

            <View style={{height: 15}} />
            
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.navigate('Activity', { name: 'Passeio ao Ar Livre', desc: 'Para os pets, passear é uma atividade que traz muita alegria e diversão. É algo que os torna verdadeiramente felizes. A mera menção da palavra envia uma pulsação de excitação pelo ar, quando suas caudas começam a sacudir-se implacavelmente e eles começam a andar empolgados para lá e para cá. Isso geralmente é seguido por um gemido e grito assim que eles veem sua coleira. Tal excitação e alegria não podem ser confundidas.', tempo: '30 minutos'})}
            >
              <View style={styles.boxActivity}>
                <View style={styles.row}>
                  <Image  source={require('../../../assets/img/logo/teramia-logo.png')} style={styles.imageStyle}/>

                    <View style={[styles.containerFlex, styles.justifyCenter]}>
                      
                      <View>
                        <Text style={styles.titleAct}>Passeio ao Ar Livre</Text>
          
                            <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                              <Feather name="clock" size={24} color={Colors.brown} />
                              <Text style={styles.time}>30 minutos</Text>
                            </View>
                      </View>

                    </View>
                    
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.navigate('Activity', { name: 'Brincar com o Pet', desc: 'Para os pets, passear é uma atividade que traz muita alegria e diversão. É algo que os torna verdadeiramente felizes. A mera menção da palavra envia uma pulsação de excitação pelo ar, quando suas caudas começam a sacudir-se implacavelmente e eles começam a andar empolgados para lá e para cá. Isso geralmente é seguido por um gemido e grito assim que eles veem sua coleira. Tal excitação e alegria não podem ser confundidas.', tempo: '40 minutos'})}
            >
              <View style={styles.boxActivity}>
                <View style={styles.row}>
                  <Image  source={require('../../../assets/img/logo/teramia-logo.png')} style={styles.imageStyle}/>

                    <View style={[styles.containerFlex, styles.justifyCenter]}>
                      
                      <View>
                        <Text style={styles.titleAct}>Brincar com o Pet</Text>
          
                            <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                              <Feather name="clock" size={24} color={Colors.brown} />
                              <Text style={styles.time}>40 minutos</Text>
                            </View>
                      </View>
                      
                    </View>
                    
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.navigate('Activity', { name: 'Passeio ao Ar Livre', desc: 'Para os pets, passear é uma atividade que traz muita alegria e diversão. É algo que os torna verdadeiramente felizes. A mera menção da palavra envia uma pulsação de excitação pelo ar, quando suas caudas começam a sacudir-se implacavelmente e eles começam a andar empolgados para lá e para cá. Isso geralmente é seguido por um gemido e grito assim que eles veem sua coleira. Tal excitação e alegria não podem ser confundidas.', tempo: '30 minutos'})}
            >
              <View style={styles.boxActivity}>
                <View style={styles.row}>
                  <Image  source={require('../../../assets/img/logo/teramia-logo.png')} style={styles.imageStyle}/>

                    <View style={[styles.containerFlex, styles.justifyCenter]}>
                      
                      <View>
                        <Text style={styles.titleAct}>Passeio ao Ar Livre</Text>
          
                            <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                              <Feather name="clock" size={24} color={Colors.brown} />
                              <Text style={styles.time}>30 minutos</Text>
                            </View>
                      </View>

                    </View>
                    
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.navigate('Activity', { name: 'Brincar com o Pet', desc: 'Para os pets, passear é uma atividade que traz muita alegria e diversão. É algo que os torna verdadeiramente felizes. A mera menção da palavra envia uma pulsação de excitação pelo ar, quando suas caudas começam a sacudir-se implacavelmente e eles começam a andar empolgados para lá e para cá. Isso geralmente é seguido por um gemido e grito assim que eles veem sua coleira. Tal excitação e alegria não podem ser confundidas.', tempo: '40 minutos'})}
            >
              <View style={styles.boxActivity}>
                <View style={styles.row}>
                  <Image  source={require('../../../assets/img/logo/teramia-logo.png')} style={styles.imageStyle}/>

                    <View style={[styles.containerFlex, styles.justifyCenter]}>
                      
                      <View>
                        <Text style={styles.titleAct}>Brincar com o Pet</Text>
          
                            <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                              <Feather name="clock" size={24} color={Colors.brown} />
                              <Text style={styles.time}>40 minutos</Text>
                            </View>
                      </View>
                      
                    </View>
                    
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.navigate('Activity', { name: 'Passeio ao Ar Livre', desc: 'Para os pets, passear é uma atividade que traz muita alegria e diversão. É algo que os torna verdadeiramente felizes. A mera menção da palavra envia uma pulsação de excitação pelo ar, quando suas caudas começam a sacudir-se implacavelmente e eles começam a andar empolgados para lá e para cá. Isso geralmente é seguido por um gemido e grito assim que eles veem sua coleira. Tal excitação e alegria não podem ser confundidas.', tempo: '30 minutos'})}
            >
              <View style={styles.boxActivity}>
                <View style={styles.row}>
                  <Image  source={require('../../../assets/img/logo/teramia-logo.png')} style={styles.imageStyle}/>

                    <View style={[styles.containerFlex, styles.justifyCenter]}>
                      
                      <View>
                        <Text style={styles.titleAct}>Passeio ao Ar Livre</Text>
          
                            <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                              <Feather name="clock" size={24} color={Colors.brown} />
                              <Text style={styles.time}>30 minutos</Text>
                            </View>
                      </View>

                    </View>
                    
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.navigate('Activity', { name: 'Brincar com o Pet', desc: 'Para os pets, passear é uma atividade que traz muita alegria e diversão. É algo que os torna verdadeiramente felizes. A mera menção da palavra envia uma pulsação de excitação pelo ar, quando suas caudas começam a sacudir-se implacavelmente e eles começam a andar empolgados para lá e para cá. Isso geralmente é seguido por um gemido e grito assim que eles veem sua coleira. Tal excitação e alegria não podem ser confundidas.', tempo: '40 minutos'})}
            >
              <View style={styles.boxActivity}>
                <View style={styles.row}>
                  <Image  source={require('../../../assets/img/logo/teramia-logo.png')} style={styles.imageStyle}/>

                    <View style={[styles.containerFlex, styles.justifyCenter]}>
                      
                      <View>
                        <Text style={styles.titleAct}>Brincar com o Pet</Text>
          
                            <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                              <Feather name="clock" size={24} color={Colors.brown} />
                              <Text style={styles.time}>40 minutos</Text>
                            </View>
                      </View>
                      
                    </View>
                    
                </View>
              </View>
            </TouchableOpacity>

            <View style={{height: 200}} />

            </ScrollView>
        </View>
   </SafeAreaView>
  );
}