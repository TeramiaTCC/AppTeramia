import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
  },
  buttonLogout: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F16520',
    borderRadius: 50,
    marginTop: 30,
    elevation: 5,
    shadowColor: '#1F0500',
  },
  textButtonLogout: {
    color: '#FFFDFA',
    fontWeight: 'bold',
  },
  buttonDelete: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 50,
    marginTop: 30,
    elevation: 5,
    shadowColor: '#1F0500',
  },
  textButtonDelete: {
    color: '#FFFDFA',
    fontWeight: 'bold',
  },


  
});

export default styles;