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
  contextAllPets: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  deletePet: {
    justifyContent: 'center',
    paddingLeft: 150
  },
  descriptionPet: {
    width: '75%',
    alignContent: 'flex-start',
    backgroundColor: Colors.whiteGold,
    padding: 12,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  petInfo: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
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
    borderRadius: 80 / 2,
    marginBottom: 10,
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
    fontSize: 24,
    color: Colors.brown,
    fontWeight: 'bold'
  },
  textDesc: {
    fontWeight: '300',
    color: Colors.brown,
    fontSize: 16,
  },
  margin: {
    marginLeft: 10,
    marginRight: 10,
  }
});

export default styles;