import { StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  prmryContainer: {
    flex: 1,
    backgroundColor: Colors.pageBack,
  },
  container: {
    flex: 1,
  },
  containerPet: {
    flex: 1,
  },
  containerPet2: {
    flex: 1 / 5,
  },
  horizontal: {
    flexDirection: 'row',
    display: 'flex',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  padding10Sides: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  profilePet: {
    padding: 25,
    paddingBottom: 10,
    flexDirection: 'column',
    backgroundColor: Colors.backColor,
  },
  petIcon: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  textName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.brown,
  },
  textType: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 17,
  },
  textDesc: {
    fontWeight: '300',
    color: Colors.white,
    fontSize: 16,
    marginBottom: 15,
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: Colors.brown,
    borderRadius: 8,
    marginRight: 2
  },
  dltButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: Colors.redDel,
    borderRadius: 8,
    marginLeft: 2 
  },
  textButton: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 14,
  },
  borderBottomBrown: {
    borderBottomWidth: 2,
    borderColor: Colors.brown
  },
  ico: {
    flex: 1 / 2
  },
  numberConst: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    color: Colors.brown,
  },
  numberDesc: {
    textAlign: 'center',
    color: Colors.white,
  },
});

export default styles;