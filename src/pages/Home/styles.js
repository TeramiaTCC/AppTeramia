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
  containerFlex: {
      flex: 1,
      marginLeft: 15
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
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: Colors.orange,
  },
  boxActivity: {
    backgroundColor: Colors.whiteGold,
    padding: 25,
    borderRadius: 15,
    color: Colors.white,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: Colors.brown,
    elevation: 2,
  },
  titleAct: {
    color: Colors.orange,
    fontWeight: 'bold',
    fontSize: 25,
    borderBottomWidth: 2,
    borderColor: Colors.brown,
    marginBottom: 5,
    paddingBottom: 5,
    textAlign: 'left'
  },
  time: {
    color: Colors.brown,
    textAlign: 'right',
    fontWeight: '400',
    paddingLeft: 5
  },
  imageStyle:{
    width: 180,
    height: 180,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  horizontal: {
    flexDirection: 'row',
    display: 'flex',
  },
  scroll: {
    width:'100%',
    height: '100%',
  },
  scrollContent: {
    justifyContent: 'center',
  }
});

export default styles;