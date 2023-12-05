import React from 'react';
import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Feather } from '@expo/vector-icons';
import Colors from '../../components/Colors/Colors';

import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/features/userPosts';
import { fetchUser } from '../../redux/features/user';
import { fetchPets } from '../../redux/features/userPets';
import { fetchUsers } from '../../redux/features/usersData';
import { fetchAllPosts } from '../../redux/features/posts';

import Banner from '../../components/Ads/banner';
import Interstical from '../../components/Ads/interstical';

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      dispatch(fetchAllPosts());
    }, 60 * 1000); // 1 miliseconds interval

    // Clear the interval when the component unmounts
    return () => clearInterval(fetchInterval);
  }, [dispatch]);

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      dispatch(fetchUser());
    }, 60 * 1000); // 1 miliseconds interval

    // Clear the interval when the component unmounts
    return () => clearInterval(fetchInterval);
  }, [dispatch]);

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      dispatch(fetchPets());
    }, 60 * 1000); // 1 miliseconds interval

    // Clear the interval when the component unmounts
    return () => clearInterval(fetchInterval);
  }, [dispatch]);

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      dispatch(fetchUsers());
    }, 60 * 1000); // 5 miliseconds interval

     //Clear the interval when the component unmounts
    return () => clearInterval(fetchInterval);
  }, [dispatch]);

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      dispatch(fetchPosts());
    }, 60 * 1000); // 1 miliseconds interval

    // Clear the interval when the component unmounts
    return () => clearInterval(fetchInterval);
  }, [dispatch]);

  const Atividades = [
    { 
      name: 'Passeio no Parque', 
      title: 'Explorando a Natureza:',
      sub: 'A Importância do Passeio no Parque para a Saúde do seu Pet', 
      description: 'Levar seu pet para um passeio no parque não é apenas uma atividade recreativa, mas uma oportunidade valiosa de proporcionar estimulação sensorial e promover o bem-estar físico e mental do seu companheiro peludo.\n\nDurante esse momento ao ar livre, seu pet é exposto a uma variedade de estímulos, desde novos cheiros até diferentes texturas sob suas patas. A oportunidade de explorar ambientes externos contribui significativamente para o enriquecimento sensorial do animal, estimulando seus sentidos de maneira única e benéfica.\n\nA interação com outros animais também é um aspecto crucial desses passeios. Socializar com outros pets no parque não apenas satisfaz as necessidades sociais do seu animal, mas também promove um ambiente de aprendizado e troca de experiências. Essas interações ajudam a desenvolver habilidades sociais, reduzindo o estresse e a ansiedade em seu pet.\n\nAlém disso, o contato com a natureza e a exposição ao ar livre têm impactos diretos na saúde física do seu pet. O exercício proporcionado pelo passeio contribui para a manutenção de um peso saudável, previne problemas de saúde e fortalece o sistema imunológico. A variedade de estímulos também incentiva a atividade mental, sendo particularmente benéfica para pets mais velhos, ajudando a manter a agilidade mental.\n\nA importância desse tempo de qualidade vai além dos aspectos físicos. O vínculo entre você e seu pet é fortalecido a cada passeio. A confiança mútua se solidifica, criando uma base sólida para uma relação saudável e feliz. O pet passa a associar o passeio não apenas com a atividade física, mas também com a conexão afetiva e o carinho proporcionado pelo tutor.\n\nEm suma, levar seu pet para um passeio no parque é uma prática enriquecedora que contribui para a saúde física, mental e emocional do animal. Portanto, reserve um tempo em sua rotina para esses momentos especiais ao ar livre, fortalecendo a relação com seu companheiro peludo.', 
      time: '30 minutos a 1 hora', 
      image: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/chamadas/image_57_1687188905.jpeg', 
    },
    
    { 
      name: 'Treinamento de Comandos',
      title: 'Desenvolvendo Vínculos:',
      sub: 'A Importância do Treinamento de Comandos para o seu Pet', 
      description: 'O treinamento de comandos vai muito além de moldar o comportamento do seu pet; é uma ferramenta poderosa para fortalecer a conexão única entre vocês. Ao dedicar tempo a sessões curtas e positivas, ensinando comandos básicos ou truques divertidos, você não apenas estabelece ordem na rotina, mas também promove uma interação significativa e um entendimento mútuo.\n\nA utilização de recompensas durante o treinamento é uma estratégia eficaz. Essa abordagem não apenas incentiva comportamentos desejados, mas também cria uma associação positiva com o aprendizado. Seja em forma de petiscos, carinho ou elogios, as recompensas reforçam a ideia de que seguir comandos é algo gratificante para o animal.\n\nAlém de aprimorar o comportamento, o treinamento constante desafia a mente do seu pet. Estimular a inteligência do animal durante as sessões previne o tédio e promove a saúde mental. Isso é especialmente relevante para raças mais inteligentes e ativas, que necessitam de estímulos mentais para se manterem equilibradas e felizes.\n\nA paciência é uma virtude fundamental durante o processo de treinamento. Cada pet possui uma personalidade única e um ritmo de aprendizado distinto. Adaptar as expectativas e métodos de treinamento de acordo com essas características é essencial para o sucesso. A paciência não apenas facilita o aprendizado do animal, mas também fortalece a confiança entre vocês.\n\nAo tornar as sessões de treinamento divertidas e recompensadoras, você não apenas alcança resultados positivos, mas também estabelece uma base sólida de confiança. O pet associa o treinamento não a um momento de disciplina, mas a uma oportunidade de interação e recompensa, fortalecendo os laços emocionais.\n\nPortanto, reserve tempo regularmente para o treinamento de comandos. Além de promover um comportamento adequado, você estará investindo na saúde mental e no vínculo emocional com seu companheiro peludo.',
      time: 'Entre 15 a 30 minutos.', 
      image: 'https://i0.statig.com.br/bancodeimagens/3n/ey/zk/3neyzk4raiijqf954msyke76q.jpg',
    },
    
    { 
      name: 'Jogos Interativos em Casa',
      title: 'Diversão e Desenvolvimento:',
      sub: 'O Papel dos Jogos Interativos na Vida do seu Pet', 
      description: 'O brinquedos interativos, especialmente os quebra-cabeças para pets, desempenham um papel fundamental no estímulo da inteligência e no bem-estar geral do seu animal de estimação. Esconder petiscos nos brinquedos transforma simples momentos de lazer em desafios envolventes e recompensadores, proporcionando benefícios que vão além da diversão.\n\nAo oferecer atividades que desafiam a mente do seu pet, você não apenas o entretém, mas também contribui para a prevenção de problemas comportamentais, como ansiedade e tédio. Pets que não são mentalmente estimulados podem desenvolver comportamentos indesejados, e os brinquedos interativos oferecem uma solução eficaz para esse desafio comum.\n\nA escolha cuidadosa de brinquedos é crucial. É essencial selecionar opções adequadas ao porte e habilidades do seu pet. Brinquedos muito complexos podem levar à frustração, enquanto opções muito simples podem não oferecer estímulo suficiente. A diversidade na escolha de brinquedos garante que seu pet esteja sempre envolvido em atividades que se alinham às suas necessidades individuais.\n\nA supervisão durante as brincadeiras é outra prática importante. Garantir a segurança do seu pet enquanto ele se diverte é essencial para evitar acidentes e garantir uma experiência positiva. Além disso, a interação durante os jogos não é apenas uma oportunidade para monitorar a segurança, mas também para fortalecer os laços afetivos entre vocês. A cumplicidade criada durante esses momentos contribui para uma relação mais sólida e positiva.\n\nEstudos recentes destacam os benefícios a longo prazo da estimulação mental por meio de brincadeiras interativas. A cognição do pet é aprimorada, e sua qualidade de vida é significativamente melhorada. Investir tempo e esforço em atividades lúdicas não é apenas uma forma de entretenimento, mas também uma maneira eficaz de promover o bem-estar do seu companheiro peludo.\n\nPortanto, ao escolher brinquedos interativos, supervisionar as brincadeiras e interagir durante os jogos, você não apenas proporciona diversão, mas também promove o desenvolvimento cognitivo e emocional do seu querido pet.',
      time: 'Entre 20 a 30 minutos.', 
      image: 'https://cdn.awsli.com.br/800x800/1068/1068368/produto/151096165/ce37710de3.jpg' 
    },
    
    { 
      name: 'Sessão de Escovação', 
      title: 'Cuidado Íntimo:',
      sub: 'Os Múltiplos Benefícios da Sessão de Escovação para o seu Pet',
      description: 'A escovação regular do seu pet transcende a mera manutenção da pelagem; é um ritual precioso repleto de benefícios tangíveis e emocionais. Este momento íntimo não só proporciona carinho e atenção, mas também oferece uma oportunidade valiosa de cuidado abrangente.\n\nDurante a escovação, você não apenas acaricia seu animal de estimação, mas também tem a chance de inspecionar minuciosamente sua pele em busca de irregularidades. Essa prática permite identificar qualquer sinal de problema de saúde precocemente, contribuindo para intervenções rápidas e eficazes.\n\nA escovação adequada desempenha um papel fundamental na saúde da pelagem do seu pet. Evita o acúmulo de pelos mortos, reduzindo o risco de formação de nós desconfortáveis. Além disso, promove a circulação sanguínea na pele, contribuindo para um revestimento mais saudável e brilhante. Escolher a escova certa, adaptada ao tipo de pelagem do seu pet, é essencial para garantir que os benefícios sejam maximizados.\n\nIntroduzir esse hábito desde cedo na vida do seu pet é uma prática preventiva inteligente. Além dos benefícios físicos evidentes, a escovação cria uma rotina de cuidado que fortalece o vínculo emocional entre vocês. A interação positiva durante esse momento reforça a confiança mútua, estabelecendo uma base sólida para uma relação saudável e feliz.\n\nEstudos recentes apontam que a escovação regular não apenas contribui para a saúde física, mas também reduz significativamente o estresse em animais de estimação. O ato de escovar proporciona um momento de relaxamento e bem-estar, criando uma associação positiva com o cuidado pessoal.\n\nPortanto, reserve tempo regularmente para a sessão de escovação. Além de manter a pelagem impecável, você estará investindo na saúde e felicidade do seu companheiro peludo, criando laços emocionais que perdurarão ao longo do tempo.',
      time: 'Entre 15 a 20 minutos.', 
      image: 'https://www.racoesreis.com.br/wordpress/wp-content/uploads/escovar-gatos.jpg' 
    },
    
    { 
      name: 'Dia de Spa', 
      title: 'Bem-estar em Foco:',
      sub: 'Os Inúmeros Benefícios do Dia de Spa para seu Pet',
      description: 'Proporcionar ao seu pet uma experiência de spa em casa vai muito além da mera manutenção da higiene; é um investimento significativo na saúde e felicidade do seu companheiro peludo. Incluindo atividades como banho, corte de unhas e limpeza de orelhas, esse dia especial cria uma rotina positiva em torno dos cuidados pessoais, contribuindo para a prevenção de uma série de problemas de saúde.\n\nA escolha de produtos específicos para pets é crucial para garantir a eficácia e a segurança durante o dia de spa. Além disso, selecionar um local tranquilo para a realização desses cuidados é fundamental para criar um ambiente relaxante e positivo para o seu pet.\n\nOs benefícios físicos desse cuidado abrangem desde a prevenção de infecções de ouvido até a manutenção da saúde dermatológica. O banho regular remove sujeiras e resíduos que podem levar a problemas de pele, enquanto o corte de unhas evita desconfortos e possíveis lesões. A limpeza de orelhas, muitas vezes negligenciada, é essencial para prevenir infecções e garantir a saúde auricular.\n\nA recompensa durante e após o processo é uma parte crucial dessa experiência. Associar a experiência do spa a algo positivo, seja por meio de petiscos, carinho ou brincadeiras, cria uma relação positiva com os cuidados pessoais, facilitando futuros procedimentos.\n\nAlém dos benefícios físicos, o dia de spa também desempenha um papel importante no fortalecimento do vínculo emocional entre você e seu pet. Os momentos de relaxamento e carinho durante o processo não apenas promovem o bem-estar do animal, mas também criam memórias afetivas que contribuem para uma relação mais sólida.\n\nEstudos recentes destacam que a prática regular de cuidados pessoais, como os proporcionados durante o dia de spa, melhora significativamente a qualidade de vida e a longevidade dos pets, promovendo um envelhecimento saudável.\n\nPortanto, reserve um tempo regularmente para dedicar ao dia de spa do seu pet. Essa prática não apenas contribui para a saúde física, mas também para o bem-estar emocional, criando uma experiência positiva que seu companheiro peludo irá apreciar.',
      time: 'Cerca de 1 hora', 
      image: 'https://www.petqueroquero.com.br/wp-content/uploads/2018/10/spa.png' 
    },
    
    { 
      name: 'Sessão de Fotografias',
      title: 'Imortalizando Momentos:',
      sub: 'Os Encantos de uma Sessão de Fotografias com seu Pet', 
      description: 'Capturar momentos preciosos do seu pet em uma sessão de fotos não é apenas uma atividade divertida, mas uma maneira encantadora de criar memórias que durarão para sempre. A fotografia não só oferece um registro visual das experiências compartilhadas, mas também proporciona uma forma única de explorar a expressão e personalidade do seu amado animal de estimação.\n\nEscolher um ambiente bem iluminado é essencial para garantir fotos nítidas e vibrantes. Utilizar brinquedos ou petiscos durante a sessão não apenas adiciona um toque de diversão, mas também ajuda a capturar a atenção do seu pet, resultando em imagens mais expressivas e autênticas.\n\nA paciência é a chave para uma sessão de fotografias bem-sucedida. Permitir que seu animal se familiarize com a presença da câmera é fundamental para garantir que ele esteja à vontade e natural diante das lentes. Lembre-se de que o objetivo é capturar a verdadeira essência do seu pet, e isso muitas vezes requer um pouco de tempo e paciência.\n\nA prática de sessões de fotografias não é apenas sobre criar registros visuais; ela também desempenha um papel vital no fortalecimento da conexão emocional entre você e seu pet. Os momentos compartilhados durante a sessão não apenas geram lembranças preciosas, mas também criam uma cumplicidade que se reflete nas fotografias.\n\nEstudos recentes indicam que a visualização de fotos do seu pet pode ter efeitos positivos no seu próprio bem-estar emocional. As imagens não apenas evocam lembranças felizes, mas também proporcionam conforto e alegria, contribuindo para um estado emocional mais positivo.\n\nPortanto, reserve um tempo para explorar a magia de uma sessão de fotografias com seu pet. Além de criar lembranças visuais duradouras, você estará fortalecendo os laços emocionais e cultivando um arquivo de momentos especiais que aquecem o coração.',
      time: 'Entre 20 a 30 minutos.', 
      image: 'https://catracalivre.com.br/wp-content/uploads/2016/01/manny2.jpg' 
    },
    
    { 
      name: 'Brincadeiras de Busca',
      title: 'Explorando e Aprendendo:',
      sub: 'O Mundo de Possibilidades nas Brincadeiras de Busca para seu Pet',
      description:'Estimular o instinto de caça do seu pet por meio de jogos de busca não é apenas uma atividade física; é uma poderosa ferramenta para promover a satisfação mental do seu companheiro peludo. Esconder brinquedos ou petiscos estrategicamente pela casa ou no jardim desencadeia uma série de benefícios que vão além do simples exercício.\n\nAo incentivar seu animal a explorar o ambiente e utilizar o olfato, você está proporcionando uma estimulação mental que é essencial para o bem-estar cognitivo. Essa prática não apenas fornece exercício físico, mas também desafia a mente do seu pet, prevenindo comportamentos indesejados, como a destruição de objetos causada pelo tédio.\n\nA interação durante as brincadeiras de busca é uma oportunidade valiosa para fortalecer a relação entre você e seu pet. O trabalho em equipe na busca dos itens escondidos cria momentos de diversão e aprendizado mútuo. Essa interação positiva contribui para uma convivência mais harmoniosa e solidifica os laços afetivos entre vocês.\n\nEstudos recentes destacam que a estimulação mental proporcionada por jogos de busca desempenha um papel crucial na prevenção de doenças cognitivas em animais de estimação mais velhos. Manter a mente ativa e engajada ao longo dos anos é fundamental para promover uma vida saudável e ativa na terceira idade do seu pet.\n\nPortanto, reserve um tempo regularmente para as brincadeiras de busca. Além de oferecer uma forma divertida de exercício, você estará investindo na saúde mental e física do seu pet, criando momentos de alegria e aprendizado que contribuem para uma vida plena e feliz.',
      time: 'Entre 15 a 20 minutos.', 
      image: 'https://dogsplay.com.br/wp-content/uploads/2023/08/atividades-para-gastar-energia-do-seu-cachorro.png' 
    },
    
    { 
      name: 'Socialização com Outros Pets',
      title: 'Construindo Laços:',
      sub: 'A Importância da Socialização com Outros Pets para seu Animal de Estimação',
      description: 'Organizar encontros regulares com outros pets vai muito além da simples socialização; é uma poderosa ferramenta para promover a interação saudável entre animais, contribuindo significativamente para o desenvolvimento emocional e comportamental do seu querido pet.\n\nEsta prática é especialmente valiosa para pets que apreciam a companhia de outros membros de sua espécie. Estudos recentes destacam que a socialização desde cedo previne problemas comportamentais, como agressividade e ansiedade de separação. Permitir que seu pet interaja com outros animais cria uma base sólida para relações futuras, reduzindo comportamentos indesejados e promovendo uma convivência mais harmônica.\n\nPara garantir que esses encontros sejam positivos, é essencial que ocorram em ambientes controlados. Certifique-se de que todos os animais envolvidos estejam devidamente vacinados, garantindo a saúde e segurança de cada um. A observação cuidadosa do comportamento durante esses momentos é fundamental para antecipar e evitar possíveis conflitos, assegurando uma interação segura e agradável.\n\nAlém de prevenir problemas de comportamento, a socialização proporciona estímulos variados que enriquecem a vida do seu pet. A troca de experiências durante esses encontros contribui para o desenvolvimento cognitivo, emocional e social, proporcionando um ambiente mais rico e estimulante.\n\nAo promover a socialização, você não apenas investe no bem-estar emocional do seu pet, mas também cria oportunidades para uma convivência harmoniosa em diferentes contextos. Portanto, reserve tempo para organizar encontros regulares com outros pets, proporcionando ao seu animal de estimação uma vida social plena e gratificante.',
      time: 'Entre 30 minutos a 1 hora.', 
      image: 'https://tribunadejundiai.com.br/wp-content/uploads/2021/09/gatinho-de-rua-conforta-cao-1.jpg' 
    },
    
    { 
      name: 'Sessão de Carinho e Relaxamento', 
      title: 'Momentos de Ternura:',
      sub: 'A Importância da Sessão de Carinho e Relaxamento para Você e Seu Pet',
      description: 'Reservar um tempo dedicado exclusivamente ao carinho e relaxamento com seu pet não é apenas um luxo, mas uma necessidade vital para fortalecer os laços emocionais entre vocês. Essa prática vai além de proporcionar um momento de tranquilidade para seu animal de estimação; também oferece benefícios significativos para você. Estudos recentes indicam que a interação afetiva entre humanos e pets libera hormônios relacionados ao bem-estar, beneficiando ambas as partes envolvidas.\n\nDurante essa sessão especial, aproveite para acariciar seu pet, conversar suavemente e criar um ambiente sereno. Esses momentos não apenas geram uma sensação de paz e relaxamento, mas também fortalecem a confiança mútua entre você e seu animal de estimação. A conexão única que se desenvolve durante esses momentos contribui para a saúde emocional de ambos, proporcionando uma fonte valiosa de apoio emocional.\n\nA prática regular de sessões de carinho e relaxamento cria uma rotina positiva que se reflete na convivência diária. Além de fortalecer os laços emocionais, esses momentos tranquilos também contribuem para uma atmosfera serena em seu lar, impactando positivamente o bem-estar geral.\n\nPara embasar essa prática, estudos científicos destacam que a liberação de hormônios relacionados ao bem-estar, como a oxitocina, durante a interação afetiva, está associada a benefícios emocionais tanto para humanos quanto para pets.\n\nPortanto, reserve entre 15 a 30 minutos regularmente para uma sessão de carinho e relaxamento com seu pet. Essa prática não apenas proporciona momentos de ternura, mas também fortalece os vínculos emocionais, contribuindo para uma convivência mais feliz e harmoniosa.',
      time: 'Entre 15 a 30 minutos.', 
      image: 'https://t1.ea.ltmcdn.com/pt/posts/4/4/3/como_fazer_carinho_no_gato_23344_600.jpg' 
    },
    
    { name: 'Caminhada Urbana',
    title: 'Descobrindo a Cidade Juntos:',
    sub: 'Os Encantos da Caminhada Urbana com seu Pet',
    description: 'Explorar áreas urbanas durante uma caminhada com seu pet não é apenas um exercício físico; é uma jornada de descobertas que enriquece a vida do seu companheiro peludo. Seja na vizinhança local ou em parques urbanos, essa atividade proporciona uma oportunidade única para seu animal de estimação explorar novos cheiros e ambientes urbanos, estimulando seus sentidos e promovendo uma experiência enriquecedora.\n\nO tempo estimado para essa atividade é entre 30 minutos a 1 hora, um período que permite tanto a satisfação física quanto a exploração adequada. Durante a caminhada, observe como seu pet reage aos diversos estímulos urbanos, desde o bulício das ruas até os cheiros intrigantes dos cantos da cidade. Esses estímulos contribuem para a saúde mental do seu animal, prevenindo o tédio e proporcionando uma experiência estimulante.\n\nAlém dos benefícios físicos, a caminhada urbana fortalece a relação entre você e seu pet. A interação durante esse tempo juntos cria laços afetivos mais profundos, promovendo uma conexão única que se desenvolve através das experiências compartilhadas.\n\nPara tornar a caminhada ainda mais agradável, esteja atento à segurança. Mantenha seu pet na guia, especialmente em áreas movimentadas, e assegure-se de que ele esteja confortável com o ambiente urbano ao redor.\n\nAo introduzir a caminhada urbana na rotina do seu pet, você não apenas investe em sua saúde física, mas também enriquece sua vida com novas experiências e estímulos. Permita-se explorar junto com seu companheiro peludo, descobrindo os encantos que a cidade tem a oferecer.\n\nPortanto, reserve um tempo para explorar a cidade juntos. Essa prática não só proporciona benefícios físicos, mas também cria momentos especiais de conexão e descoberta para você e seu querido animal de estimação.', 
    time: 'Entre 30 minutos a 1 hora.',
    image: 'https://blog.construtoralaguna.com.br/wp-content/uploads/2020/09/Benefi%CC%81cios-de-caminhar-com-seu-cao-Construtora-Laguna.jpg' 
    },
    
    { name: 'Sessão de Massagem',
    title: 'Carinho Terapêutico:',
    sub: 'Os Benefícios da Sessão de Massagem para seu Pet',
    description: 'Proporcionar ao seu pet uma massagem suave não é apenas um gesto de carinho, mas uma prática terapêutica que promove o relaxamento muscular e alivia o estresse. Além dos benefícios físicos evidentes, a massagem desempenha um papel fundamental no fortalecimento do vínculo emocional entre você e seu companheiro peludo.\n\nA dedicar entre 15 a 20 minutos para essa atividade é um investimento que reverbera em diversos aspectos da saúde do seu pet. Durante a massagem, concentre-se em movimentos suaves e tranquilizadores, explorando áreas onde seu animal de estimação demonstra maior sensibilidade. Essa prática não apenas alivia a tensão muscular, mas também proporciona uma sensação reconfortante que contribui para o bem-estar emocional.\n\nOs benefícios físicos da massagem incluem a melhoria da circulação sanguínea, a flexibilização dos músculos e a redução de possíveis pontos de tensão. Esses efeitos não apenas contribuem para a saúde geral, mas também são especialmente benéficos para pets mais velhos ou aqueles que enfrentam condições que afetam a mobilidade.\n\nAlém disso, a massagem cria um momento de conexão especial entre você e seu pet. A atenção dedicada durante essa prática fortalece os laços emocionais, proporcionando um espaço de tranquilidade e confiança mútua.\n\nPara tornar a experiência ainda mais agradável, escolha um ambiente calmo e confortável. Use movimentos suaves, prestando atenção aos sinais de conforto ou desconforto do seu pet. Lembre-se de que a massagem deve ser uma experiência positiva e relaxante para ambos.\n\nAo incorporar regularmente a sessão de massagem na rotina do seu pet, você não apenas promove sua saúde física, mas também cultiva momentos de carinho terapêutico que fortalecem os laços emocionais. Reservar um tempo para essa prática demonstra cuidado e atenção, contribuindo para uma convivência mais saudável e feliz.\n\nPortanto, dedique um tempo para a sessão de massagem. Seu pet certamente apreciará esse gesto de carinho e cuidado.',
    time: 'Entre 15 a 20 minutos.',
    image: 'https://fisiocarepet.com.br/wp-content/uploads/2022/10/massagem.jpg'
    },
    
    { name: 'Noite de Filmes para Pets',
    title: 'Cinema em Casa para Pets:',
    sub: 'Uma Noite de Entretenimento e Relaxamento',
    description: 'Reserve um tempo especial para uma "Noite de Filmes para Pets" e transforme a experiência audiovisual em um momento de diversão e relaxamento para seu amado animal de estimação. Assistir a vídeos ou programas de TV desenvolvidos especialmente para pets não é apenas uma atividade visual e auditiva; é uma forma cativante de proporcionar uma experiência diferente e envolvente para seu companheiro peludo.\n\nDedique cerca de 1 hora para essa atividade, escolhendo vídeos que são conhecidos por atrair a atenção dos animais. Existem produções especialmente criadas para estimular o interesse de cães e gatos, apresentando imagens e sons que cativam seus sentidos de uma maneira única.\n\nEssa prática não apenas oferece entretenimento, mas também pode ser relaxante para alguns animais. A combinação de estímulos visuais e auditivos adaptados às preferências do seu pet cria uma experiência sensorial que contribui para seu bem-estar emocional.\n\nAo preparar a "Noite de Filmes para Pets", crie um ambiente acolhedor, garantindo que seu pet esteja confortável e seguro. Pode ser útil escolher vídeos que apresentem sons suaves e imagens atraentes, especialmente projetadas para captar a atenção do seu animal de estimação.\n\nAlém de proporcionar momentos de diversão, essa atividade fortalece a conexão entre você e seu pet. A partilha desse tempo especial cria memórias afetivas e contribui para uma convivência mais próxima e carinhosa.\n\nPara encontrar vídeos adequados, explore plataformas online que oferecem conteúdo específico para pets ou consulte recomendações de especialistas em comportamento animal.\n\nPortanto, reserve uma noite especial para o cinema em casa com seu pet. Essa prática não apenas proporciona entretenimento, mas também enriquece a vida do seu animal de estimação, criando momentos de diversão e relaxamento.',
    time: 'Cerca de 1 hora e 30 minutos.',
    image: 'https://fisiocarepet.com.br/wp-content/uploads/2021/02/FilmesCachorro-768x512.png'
    },
    
    { name: 'Aula de Natação',
    title: 'Nadando para a Saúde:',
    sub: 'Os Benefícios de Aulas de Natação para seu Pet',
    description: 'Se seu pet é apaixonado por água, considerar aulas de natação pode ser uma decisão que não apenas atende aos seus instintos naturais, mas também promove inúmeros benefícios para sua saúde física e bem-estar geral. Essa atividade é particularmente benéfica para raças que têm uma afinidade natural com a água, oferecendo exercício físico e uma dose extra de diversão aquática.\n\nO tempo estimado para uma aula de natação é entre 30 minutos a 1 hora, proporcionando um equilíbrio ideal entre exercício e diversão. Durante essas sessões, seu pet terá a oportunidade de desenvolver habilidades aquáticas, fortalecer a resistência física e desfrutar de um ambiente que combina diversão e atividade física.\n\nAs aulas de natação são especialmente benéficas para pets mais velhos ou aqueles com condições que podem afetar sua mobilidade. A água proporciona suporte natural, reduzindo o impacto nas articulações e facilitando o movimento, o que pode ser particularmente útil para animais com artrite ou outras condições relacionadas.\n\nAlém dos benefícios físicos, as aulas de natação promovem uma interação positiva entre você e seu pet. A presença do tutor durante a atividade cria um ambiente de confiança, fortalecendo os laços emocionais e tornando a experiência ainda mais gratificante.\n\nAntes de iniciar as aulas, certifique-se de escolher um local seguro e supervisionado por profissionais qualificados em natação para pets. Garanta que seu animal esteja confortável com a água e que as condições do ambiente sejam propícias para uma experiência positiva.\n\nPortanto, se seu pet é um entusiasta da água, considere aulas de natação como uma forma emocionante e saudável de mantê-lo ativo e feliz.',
    time: 'Entre 30 minutos a 1 hora.',
    image: 'https://media.istockphoto.com/id/996261990/pt/foto/siberian-cat-swimming-in-a-pool.jpg?s=170667a&w=0&k=20&c=iIGvUhLWrSdnPDTY5HHfcgwtGJNRSrOXLN4p5wVTxlc='
    },

  ];

 return (
   <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'}/>

        <View style={styles.containerContent}>
          <View style={styles.boxPropaganda}>
            <Banner/>
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
                    onPress={() => navigation.navigate('Activity', {
                      name: item.name,
                      desc: item.description,
                      tempo: item.time,
                      image: item.image,
                      title: item.title,
                      sub: item.sub,
                    })}
                    >
                    <View style={styles.boxArt}>
                      <View style={styles.horizontal}>
                        <Image  source={{ uri : item.image }} style={styles.imageArt}/>

                          <View style={[styles.containerFlex, styles.justifyCenter]}>

                            <View>
                              <Text style={styles.titleArt}>{item.name}</Text>

                                  <View style={[styles.row]}>
                                    <Feather name="clock" size={24} color={Colors.brownAlpha2} />
                                    <Text style={styles.time}>{item.time}</Text>
                                  </View>
                            </View>

                          </View>

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