import { StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
  },
  searchBox:{
    padding: 25,
    paddingBottom: 10,
    backgroundColor: Colors.backColor,
  },
  input: {
    height: 40,
    backgroundColor: Colors.whiteGold,
    borderRadius: 20,
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
    color: Colors.brown,
    borderColor: Colors.brown,
    borderWidth: 2
  },
  list: {
    flex: 1,
    paddingBottom: 75
  },
  item: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 2,
    borderBottomColor: Colors.brown,
    padding: 15,
    backgroundColor: Colors.whiteGold,
    borderRadius: 25,
    marginTop: 15,
    elevation: 3,
    alignItems: 'center'
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
});

export default styles;