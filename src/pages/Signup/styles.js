import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
  },
  title: {
    fontSize: 35,
    color: '#F16520',
    marginBottom: '20',
    fontWeight: 'bold',
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: -5,
    paddingTop: 10,
    marginLeft: '5%',
    marginRight: 'auto',
  },
  input: {
    width: '90%',
    height: 40,
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#1F0500',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#EEE7D9',
  },
  buttonRegister: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F16520',
    borderRadius: 50,
    marginTop: 10,
    elevation: 5,
    shadowColor: '#1F0500',
  },
  textButtonRegister: {
    color: '#FFFDFA',
    fontWeight: 'bold',
  },
  login: {
    marginTop: 20,
    color: '#4d5156',
  },
  linkLogin: {
      color: '#F16520',
      fontSize: 16,
      textDecorationLine: 'underline',
  },
  checkText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#777'
  },
  useTerms: {
    color: '#F16520',
    textDecorationLine: 'underline',
  },
  containerOpt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  buttonOptLeft: {
    backgroundColor: '#F16520',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    elevation: 5,
  },
  buttonOptRight: {
    backgroundColor: '#f0834d',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 5,
  },
  textSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 40
  },
  textNotSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ebbda7',
    marginLeft: 40
  },
  keyboard: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;