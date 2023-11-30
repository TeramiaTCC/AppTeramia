import { StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',

  },
  containerContent: {
    marginLeft: 10,
    marginRight: 10,
  },
  boxTexts: {
    backgroundColor: Colors.whiteGold,
    padding: 25,
    borderRadius: 15,
    color: Colors.white,
    borderColor: Colors.brown,
    borderWidth: 2,
    elevation: 3,
    marginBottom: 10
  },
  title: {
    color: Colors.orange,
    fontWeight: 'bold',
    fontSize: 22,
    borderBottomWidth: 2,
    borderColor: Colors.brown,
    marginBottom: 10,
    paddingBottom: 5,
  },
  sub: {
    color: Colors.brown,
    fontWeight: '700',
    fontSize: 20,
  },
  desc: {
    color: Colors.brown,
    textAlign: 'justify',
    fontSize: 17,
    fontWeight: 'normal'
  },
  imageStyle:{
    width: 390,
    height: 390,
    marginBottom: 15,
    borderRadius: 250,
  },
  timerButton: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F16520',
    borderRadius: 50,
    marginTop: 10,
    elevation: 5,
    shadowColor: '#1F0500',
  },
  textButton:{
    color: '#FFFDFA',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  time: {
    color: Colors.brownAlpha2,
    textAlign: 'right',
    fontWeight: '400',
    paddingLeft: 5
  },
  boxPropaganda:{
    backgroundColor: Colors.brown,
    padding: 25,
    borderRadius: 15,
    color: Colors.white,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default styles;