import { StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  //Profile Box
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
  },
  textButton: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 14,
    marginLeft: 5
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

  //Info Box
  petInfo: {
    padding: 15,
    margin: 10,
    backgroundColor: Colors.whiteGold,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.brown,
    elevation: 5,
  },
  titleInfo: {
    color: Colors.backColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInfo: {
    color: Colors.brown,
    fontWeight: '300',
  },
  containerPetInfo: {
    flex: 1,
  },
  paddingBottom: {
    paddingBottom: 5,
  },
  petInfoTitle: {
    color: Colors.darkOverlayColor,
    fontWeight: 'bold',
    fontSize: 25,
  },
  scroll: {
    width:'100%',
    height: '100%',
  },
  scrollContent: {
    justifyContent: 'center',
  },
  title: {
    color: Colors.orange,
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: Colors.orange,
  },
  boxActivity: {
    backgroundColor: Colors.oryelow,
    padding: 25,
    borderRadius: 15,
    color: Colors.white,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: Colors.brown,
    elevation: 5,
  },
  titleAct: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 25,
    borderBottomWidth: 2,
    borderColor: Colors.brown,
    marginBottom: 5,
    paddingBottom: 5,
    textAlign: 'left'
  },
  descD: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.white,
    textAlign: 'justify'
  }
});

export default styles;