import { StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
  },
  containerContent: {
    flex: 1,
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
    fontSize: 25,
    borderBottomWidth: 2,
    borderColor: Colors.brown,
    marginBottom: 10,
    paddingBottom: 5,
  },
  desc: {
    color: Colors.brown,
    textAlign: 'justify'
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
    color: Colors.brown,
    textAlign: 'right',
    fontWeight: '400',
    paddingLeft: 5
  },
  boxPropaganda:{
    backgroundColor: Colors.brown,
    padding: 25,
    borderRadius: 15,
    color: Colors.white,
    marginTop: 20,
  },
});

export default styles;