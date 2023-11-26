import { StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  prmyContainer: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
  },
  container: {
    flex: 1,
  },
  buttonNewpet:{
    width: 50,
    height: 50,
    backgroundColor: Colors.backColor,
    position: 'absolute',
    bottom: 80,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  petInfo: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    flexDirection: 'column',
    backgroundColor: Colors.whiteGold,
    borderWidth: 2,
    borderColor: Colors.brown,
    borderRadius: 25,
    marginBottom: 10,
    elevation: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  petIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginBottom: 10,
    borderColor: Colors.orange,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  containerName: {
    flex: 1,
    paddingLeft: 10,
  },
  containerIcons: {
    flex: 1 / 6,
  },
  horizontal: {
    flexDirection: 'row',
    display: 'flex',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  textName:{
    fontSize: 25,
    color: Colors.brown,
    fontWeight: 'bold',
  },
  textDesc: {
    fontWeight: '300',
    color: Colors.brown,
    fontSize: 16,
  },
  margin: {
    marginLeft: 10,
    marginRight: 10,
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
    flex: 1,
  },
});

export default styles;