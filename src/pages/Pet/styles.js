import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
  },
  buttonNewpet:{
    width: 60,
    height: 60,
    backgroundColor: '#F16520',
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
    backgroundColor: '#EEE7D9',
    padding: 12,
    paddingHorizontal: 20,
    marginBottom: 5,
  }
});

export default styles;