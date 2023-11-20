import React from 'react';
import { Text, StatusBar, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
import Colors from '../../components/Colors/Colors';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function PetDetails({ navigation }) {

  const Dicas = [
    { name: 'Alimentação balanceada', description: 'Uma alimentação cuidadosamente planejada, adaptada às especificidades de idade, raça e condição de saúde do seu pet, não apenas promove a saúde física, mas também contribui para uma vida mais longa e vibrante. Consultar regularmente um veterinário para ajustes na dieta garante que as necessidades nutricionais em constante mudança do seu animal sejam atendidas.' },

    { name: 'Água fresca e limpa', description: 'A disponibilidade constante de água fresca e limpa vai além de apenas saciar a sede do seu pet. Essa prática simples é fundamental para a saúde dos órgãos, regulação da temperatura corporal e manutenção de uma hidratação adequada, elementos cruciais para uma vida saudável e ativa.' },

    { name: 'Exercícios regulares', description: 'Estabelecer uma rotina consistente de atividades físicas vai muito além de manter um peso saudável. Passeios diários, brincadeiras interativas e exercícios direcionados não apenas fortalecem músculos e articulações, mas também desempenham um papel fundamental na saúde mental, proporcionando estimulação cognitiva e prevenindo comportamentos indesejados.' },

    { name: 'Consulta veterinária periódica', description: 'As consultas regulares ao veterinário não são apenas para tratar problemas existentes, mas sim para prevenir possíveis complicações. Check-ups periódicos permitem a identificação precoce de condições de saúde, possibilitando intervenções antes que se tornem sérias, contribuindo para uma vida mais longa e saudável.' },

    { name: 'Vacinação em dia', description: 'Manter as vacinas atualizadas é uma forma eficaz de proteger seu pet contra uma variedade de doenças potencialmente fatais. Ao seguir rigorosamente o calendário de vacinação recomendado, você oferece uma camada adicional de segurança para a saúde do seu animal de estimação.' },

    { name: 'Higiene dental', description: 'A prática da escovação dental, muitas vezes subestimada, é uma medida essencial para prevenir problemas dentários que podem afetar não apenas a saúde bucal, mas também ter ramificações em outros sistemas do corpo. A saúde cardiovascular e a prevenção de complicações sistêmicas começam com uma boa higiene oral.' },

    { name: 'Banho e tosa', description: 'Banhos e tosas regulares não são apenas para manter a estética do seu pet, mas também são fundamentais para a saúde da pele e do pelo. Adaptar a frequência conforme a pelagem específica assegura não apenas um visual agradável, mas também previne problemas dermatológicos que podem surgir com o acúmulo de sujeira e umidade.' },

    { name: 'Ambiente seguro', description: 'Criar um ambiente seguro é uma expressão tangível de amor e cuidado pelo seu pet. Eliminar potenciais perigos, como plantas tóxicas e objetos pequenos, e garantir que o ambiente seja enriquecedor contribui para a segurança e o bem-estar do animal em seu lar.' },

    { name: 'Identificação', description: 'Dotar seu pet de uma identificação clara, como uma coleira com tag contendo informações de contato, é mais do que uma formalidade. Em momentos de emergência, essa medida simples pode ser crucial para garantir o retorno rápido e seguro do seu pet ao lar.' },

    { name: 'Brinquedos adequados', description: 'Escolher brinquedos adequados não é apenas uma questão de entretenimento; é uma estratégia para promover a saúde mental e física do seu pet. Brinquedos interativos estimulam a mente, aliviam o tédio e fortalecem a relação entre o animal e seu dono.' },

    { name: 'Treinamento comportamental', description: 'Investir tempo no treinamento comportamental não é apenas uma maneira de corrigir comportamentos indesejados, mas sim de fortalecer a comunicação e a confiança entre você e seu pet. O reforço positivo cria uma atmosfera de respeito mútuo e cooperação.' },

    { name: 'Controle de parasitas', description: 'Implementar um plano eficaz de controle de parasitas é uma medida proativa que vai além de garantir o conforto do seu pet. Prevenir infestações de pulgas, carrapatos e vermes é fundamental para a saúde a longo prazo e a vitalidade do animal.' },

    { name: 'Descanso adequado', description: 'Proporcionar um espaço tranquilo e confortável para o descanso não é um mero luxo, mas sim uma necessidade para a saúde física e mental. Garantir que seu pet tenha um local seguro e relaxante contribui para um sono reparador e para a regeneração física e emocional.' },

    { name: 'Monitoramento do peso', description: 'Manter um olhar atento sobre o peso do seu pet não é apenas sobre a estética; é uma prática preventiva contra uma série de problemas de saúde relacionados à obesidade. Ajustar a dieta e o exercício conforme necessário garante uma condição física ideal e previne complicações a longo prazo.' },

    { name: 'Socialização', description: 'Expor seu animal de estimação a diferentes situações sociais desde cedo é uma estratégia para construir uma personalidade equilibrada. A socialização não apenas reduz comportamentos agressivos ou medrosos, mas também promove uma interação saudável com o ambiente e outras pessoas e animais.' },

    { name: 'Acessórios adequados', description: 'Escolher acessórios confortáveis e seguros para seu pet vai além da estética; é uma medida de cuidado. Itens como coleiras, guias e roupas (se necessário) garantem não apenas o conforto, mas também a segurança e a prevenção de lesões.' },

    { name: 'Proteção contra intempéries', description: 'Garantir que seu pet tenha abrigo adequado e proteção contra as condições climáticas adversas é uma demonstração tangível de cuidado. Proteger contra calor excessivo, frio intenso e exposição à chuva contribui para o bem-estar do animal em todas as estações.' },

    { name: 'Respeito ao espaço pessoal', description: 'Reconhecer e respeitar os momentos em que seu pet precisa de espaço pessoal é uma demonstração de empatia. Isso não apenas cria um ambiente seguro, mas também fortalece a confiança entre o animal e seu dono.' },

    { name: 'Estímulo mental', description: 'Proporcionar brinquedos e atividades que desafiem mentalmente seu pet é mais do que uma estratégia de entretenimento; é uma prática preventiva contra o tédio e comportamentos indesejados. Estimular a mente contribui para um animal mentalmente saudável, ativo e curioso.' },

    { name: 'Amor e atenção', description: 'Dedicar tempo diariamente para demonstrar afeto e atenção ao seu pet vai além de apenas satisfazer necessidades básicas. A relação emocional entre o dono e o animal é o alicerce para uma convivência harmoniosa e feliz. Investir emocionalmente contribui para a saúde mental e emocional do pet, criando um laço indestrutível de confiança e carinho.' }

  ];


 return (
  <SafeAreaView style={styles.prmryContainer}>
    <StatusBar barStyle={'default'}/>

    <View style={[styles.profilePet, styles.borderBottomBrown]}>
        <View style={styles.row}>
        <MaterialIcons style={styles.petIcon} name="pets" size={60} color={Colors.white} />
           
        <View style={[styles.container, styles.horizontal, styles.justifyCenter]}>

          <View style={[styles.justifyCenter, styles.containerPet]}>
            <Text style={styles.textName}></Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPet2]}>
            <Text style={styles.numberConst}>00</Text>
            <Text style={styles.numberDesc}>Anos</Text>
          </View>

        </View>
      
      </View>

      <View>
          <Text style={styles.textDesc}>Description*</Text>
      </View>

      <View style={styles.horizontal}>

        <TouchableOpacity
          style={[styles.editButton, styles.container, styles.row]}
          onPress={() => navigation.navigate('EditPet')}>
            <Feather name="edit" size={24} color={Colors.white}/>
            <Text style={styles.textButton}>Editar TeraPet</Text>
        </TouchableOpacity>

      </View>
    </View>


    <View>
      <View style={styles.petInfo}>
        
        <View style={styles.row}>
          <View style={[styles.container, styles.horizontal, styles.justifyCenter, styles.paddingBottom]}>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
            <Text style={styles.titleInfo}>Tipo:</Text>
            <Text style={styles.textInfo}>Felino ou Canino*</Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
            <Text style={styles.titleInfo}>Raça:</Text>
            <Text style={styles.textInfo}>Nome da Raça*</Text>
          </View>

          </View>

        </View>

        <View style={styles.row}>
          <View style={[styles.container, styles.horizontal, styles.justifyCenter, styles.paddingBottom]}>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
          <Text style={styles.titleInfo}>Data de Nascimento:</Text>
            <Text style={styles.textInfo}>00/00/0000*</Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
          <Text style={styles.titleInfo}>Gênero:</Text>
            <Text style={styles.textInfo}>Gender*</Text>
          </View>

          </View>

        </View>

        <View style={styles.row}>
          <View style={[styles.container, styles.horizontal, styles.justifyCenter]}>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
            <Text style={styles.titleInfo}>Castrado:</Text>
            <Text style={styles.textInfo}>Sim ou Não*</Text>
          </View>

          <View style={[styles.justifyCenter, styles.containerPetInfo]}>
            <Text style={styles.titleInfo}>Adestrado:</Text>
            <Text style={styles.textInfo}>Sim ou Não*</Text>
          </View>

          </View>

        </View>

      </View>
    </View>
    <View style={{marginLeft:10, marginRight:10}}>
    <Text style={styles.title}>Dicas</Text>

    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

      <View style={{height: 15}} />

      {Dicas.map((item) => {
          return (
              
                <View
                  style={styles.boxActivity}
                >
                  <Text style={styles.titleAct}>{item.name}</Text>
                    <View style={[styles.row]}>
                      <Text style={styles.descD}>{item.description}</Text>
                    </View>
                </View>

          )
        }
      )} 

      <View style={{height: 410}} />

    </ScrollView>
    </View>
  </SafeAreaView>
  );
}