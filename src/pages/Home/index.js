import React from 'react';
import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Feather } from '@expo/vector-icons';
import Colors from '../../components/Colors/Colors';

export default function Home({ navigation }) {

  const Atividades = [
    { name: 'Passeio no Parque', description: 'Levar seu pet para um passeio no parque é uma excelente maneira de proporcionar estimulação sensorial. Seu pet terá a oportunidade de explorar novos ambientes, interagir com outros animais e desfrutar do ar livre. Esse tempo de qualidade ajuda a manter a saúde física e mental do seu companheiro peludo, fortalecendo o vínculo entre vocês.', time: '30 minutos a 1 hora', image: '', },

    { name: 'Treinamento de Comandos', description: 'Investir tempo em treinamento de comandos não apenas aprimora o comportamento do seu pet, mas também fortalece a conexão entre vocês. Dedique sessões curtas e positivas para ensinar comandos básicos ou até mesmo truques divertidos. Use recompensas para incentivar e reforçar o comportamento desejado.', time: 'Entre 15 a 30 minutos.', image: '',},
    
    { name: 'Jogos Interativos em Casa', description: 'Brinquedos interativos, como quebra-cabeças para pets, oferecem desafios mentais que estimulam a inteligência do seu animal de estimação. Esconda petiscos nos brinquedos para tornar a atividade ainda mais envolvente e recompensadora.', time: 'Entre 20 a 30 minutos.', image: '' },
    
    { name: 'Sessão de Escovação', description: 'Além de manter a pelagem do seu pet saudável, a escovação é um momento íntimo de cuidado. Use esse tempo para inspecionar a pele do seu pet em busca de irregularidades, enquanto proporciona a ele carinho e atenção.', time: 'Entre 15 a 20 minutos.', image: '' },
    
    { name: 'Dia de Spa', description: 'Proporcione ao seu pet uma experiência de spa em casa, incluindo banho, corte de unhas e limpeza de orelhas. Isso não só mantém a higiene, mas também cria uma rotina positiva em torno dos cuidados pessoais.', time: 'Cerca de 1 hora', image: '' },
    
    { name: 'Sessão de Fotografias', description: 'Capture momentos preciosos do seu pet em uma sessão de fotos. Além de criar memórias duradouras, a fotografia permite explorar a expressão única e a personalidade do seu animal de estimação.', time: 'Entre 20 a 30 minutos.', image: '' },
    
    { name: 'Brincadeiras de Busca', description: 'Estimule o instinto de caça do seu pet com jogos de busca. Use brinquedos ou até mesmo petiscos escondidos pela casa ou no jardim. Isso não apenas fornece exercício, mas também promove a satisfação mental.', time: 'Entre 15 a 20 minutos.', image: '' },
    
    { name: 'Socialização com Outros Pets', description: 'Organize encontros regulares com outros pets para promover a socialização e interação saudável. Isso é especialmente importante para animais que apreciam a companhia de outros membros da sua espécie.', time: 'Entre 30 minutos a 1 hora.', image: '' },
    
    { name: 'Trilha ao Ar Livre', description: 'Se possível, faça trilhas ao ar livre com seu pet. Esse tipo de atividade proporciona uma experiência sensorial rica, permitindo que seu animal explore novos odores e ambientes naturais.', time: 'Entre 1 a 2 horas', image: '' },
    
    { name: 'Sessão de Carinho e Relaxamento', description: 'Reserve um tempo dedicado apenas ao carinho e relaxamento com seu pet. Isso não só fortalece os laços emocionais, mas também proporciona um momento de tranquilidade para ambos.', time: 'Entre 15 a 30 minutos.', image: '' },
    
    { name: 'Caminhada Urbana', description: 'Explore áreas urbanas durante uma caminhada com seu pet. Isso pode incluir a vizinhança local ou parques urbanos. Permita que seu animal de estimação descubra novos cheiros e ambientes urbanos.', time: 'Entre 30 minutos a 1 hora.', image: '' },
    
    { name: 'Aula de Agility em Casa', description: 'Transforme sua casa ou quintal em um percurso de agility com obstáculos simples. Além de proporcionar exercícios físicos, o agility estimula a mente do seu pet, promovendo um ambiente divertido e desafiador.', time: 'Entre 20 a 30 minutos.', image: '' },
    
    { name: 'Sessão de Massagem', description: 'Proporcione ao seu pet uma massagem suave para relaxar músculos e aliviar o estresse. Além dos benefícios físicos, a massagem também fortalece o vínculo emocional entre vocês.', time: 'Entre 15 a 20 minutos.', image: '' },
    
    { name: 'Dia do Brinquedo Novo', description: 'Introduza um novo brinquedo para seu pet, estimulando a curiosidade e oferecendo uma novidade para explorar. Observe a reação e o interesse do seu animal ao experimentar algo diferente.', time: 'Variável, dependendo do interesse do pet.', image: '' },
    
    { name: 'Sessão de Yoga para Pets', description: 'Pratique exercícios de yoga adaptados para pets, focando em movimentos suaves que promovem a flexibilidade e o relaxamento. Essa atividade beneficia tanto o corpo quanto a mente do seu animal de estimação.', time: 'Entre 15 a 20 minutos.', image: '' },
    
    { name: 'Caça ao Tesouro em Casa', description: 'Organize uma caça ao tesouro dentro de casa, escondendo petiscos ou brinquedos para seu pet encontrar. Essa atividade estimula o olfato e oferece entretenimento enquanto seu animal procura pelos "tesouros".', time: 'Entre 20 a 30 minutos.', image: '' },
    
    { name: 'Noite de Filmes para Pets', description: 'Reserve um tempo para assistir a vídeos ou programas de TV desenvolvidos para entreter pets. Essa atividade visual e auditiva pode ser relaxante para alguns animais e oferece uma experiência diferente.', time: 'Cerca de 1 hora.', image: '' },
    
    { name: 'Visita a Cafeteria Pet-Friendly', description: 'Se houver cafeterias ou locais pet-friendly na sua área, leve seu pet para uma tarde relaxante. Isso proporciona uma experiência social positiva e permite que seu animal interaja com outros pets.', time: 'Entre 1 a 2 horas.', image: '' },
    
    { name: 'Aula de Natação', description: 'Se seu pet gosta de água, considere aulas de natação. Essa atividade é particularmente benéfica para raças que apreciam a água, proporcionando exercício físico e promovendo a diversão aquática.', time: 'Entre 30 minutos a 1 hora.', image: '' },
    
    { name: 'Percuso com Obstáculos', description: 'Crie um curso de obstáculos em casa ou no jardim para desafiar seu pet. Essa atividade não só promove o exercício físico, mas também estimula a mente do seu animal de estimação, oferecendo uma experiência divertida e envolvente.', time: 'Entre 30 minutos a 1 hora.', image: '' },

  ];


 return (
   <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'}/>

        <View style={styles.containerContent}>
        <View style={styles.boxPropaganda}>
          <Text>Propaganda</Text>
        </View>

          <Text style={styles.title}>Atividades</Text>

          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >

            <View style={{height: 15}} />

            {Atividades.map((item) => {
                return (
                    <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.boxActivity}
                    onPress={() => navigation.navigate('Activity', { name: item.name, desc: item.description , tempo: item.time})}
                    >

                            <View>
                              <Text style={styles.titleAct}>{item.name}</Text>
                
                                  <View style={[styles.row, {justifyContent: 'flex-end'}]}>
                                    <Feather name="clock" size={24} color={Colors.brown} />
                                    <Text style={styles.time}>{item.time}</Text>
                                  </View>
                            </View>

       
                  </TouchableOpacity>
                )
              }
            )} 
            
            <View style={{height: 195}} />

            </ScrollView>
        </View>
   </SafeAreaView>
  );
}