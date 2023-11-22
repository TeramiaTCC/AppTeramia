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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  row2: {
    flexDirection: 'row',
    height: 'auto',
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  avaliCont: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    borderColor: Colors.brown,
    borderBottomWidth: 2,
    backgroundColor: Colors.orange,
    elevation: 5
  },
  boxPropaganda:{
    backgroundColor: Colors.brown,
    padding: 25,
    borderRadius: 15,
    color: Colors.white,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
  },
  title: {
    color: Colors.orange,
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: Colors.orange,
  },
  titleAv: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  number: {
    color: Colors.brownAlpha2,
    alignSelf: 'flex-end'
  },
  boxComent:{
    marginTop: 15,
    padding: 10,
    backgroundColor: Colors.whiteGold,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.brown,
  },
  comentName: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: '700',
    color: Colors.brown
  },
  comentText: {
    fontSize: 12,
    marginLeft: 5,
    marginRight: 30,
    color: Colors.brown,
    textAlign: 'justify'
  },
  comentDate: {
    fontSize: 12,
    color: Colors.brownAlpha2,
    marginLeft: 2,
  },
  comentStar: {
    marginLeft: 10,
  },
  starValue: {
    fontSize: 30,
    color: Colors.brownAlpha2,
    marginLeft: 2,
  },
  advice: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 25,
  },
  adviceText: {
    color: Colors.brown,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  list: {
    flex: 1
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2 ,
    borderWidth: 2,
    borderColor: Colors.brown,
    marginRight: 5
  }
});

export default styles;