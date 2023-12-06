import { StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
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
  boxPropaganda:{
    marginTop: -10,
    marginBottom: 10,
    width:'100%',
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.orange,
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: Colors.orange,
  },
  number: {
    color: Colors.brownAlpha2,
    alignSelf: 'flex-end'
  },
  item: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.brown,
    padding: 15,
    backgroundColor: Colors.whiteGold,
    borderRadius: 25,
    marginTop: 15,
    elevation: 3,
  },
  itemPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.orange,
  },
  itemInfo: {
    marginLeft: 20,
  },
  itemP1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.orange,
    marginBottom: 2
  },
  itemP2: {
    fontSize: 15,
    color: Colors.brownAlpha2,
    marginBottom: 2
  },
  itemP3:{
    fontSize: 15,
    color: Colors.brown,
    textAlign: 'justify',
    marginRight: 100,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  list: {
    flex: 1,
    paddingBottom: 250
  },
});

export default styles;