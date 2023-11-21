import { StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
  },
  title: {
    textAlign: 'center',
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
    width: "90%",
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
  buttonAdd: {
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
  textButtonAdd: {
    color: '#FFFDFA',
    fontWeight: 'bold',
  },
  safeArea: {
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxList: {
    width: 370,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 10,
    marginTop: 10,
    borderColor: '#1F0500',
    borderWidth: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#EEE7D9',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
  dropdownList: {
    width: 370,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 10,
    borderColor: '#1F0500',
    borderWidth: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#EEE7D9',
  },
  disableItem: {
    backgroundColor: '#EEE7D9',
  },
  disableText: {
    color: '#1F0500'
  },
  mdlButton: {
    backgroundColor: Colors.brown,
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    elevation: 5
  },
  btmText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
    paddingLeft: 5
  },
  titleModal: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5
  },
  textModal: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 14,
    paddingBottom: 5
  },
  margin: {
    marginLeft: 10,
    marginRight: 10,
  }
});

export default styles;