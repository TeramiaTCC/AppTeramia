import { StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
  },
  containerBottom: {
    flex: 1,
    backgroundColor: '#FFFDFA',
  },
  cont: {
    flex: 1
  },
  margin: {
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  horizontal: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between'
  },
  picAlt: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whiteGoldAlpha
  },
  buttonLogout: {
    width: "33%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.brown,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 4,
    marginRight: 4, 
    elevation: 5,
    padding: 8,
    shadowColor: Colors.brown,
  },
  textButtonLogout: {
    color: '#FFFDFA',
    fontWeight: 'bold',
    marginLeft: 4
  },
  buttonSave: {
    width: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    borderRadius: 10,
    marginTop: 30,
    marginRight: 3,
    elevation: 5,
    padding: 8,
    shadowColor: Colors.brown,
  },
  textButtonSave: {
    color: '#FFFDFA',
    fontWeight: 'bold',
    marginLeft: 4
  },
  buttonDelete: {
    width: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.redDel,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 3,
    elevation: 5,
    padding: 8,
    shadowColor: Colors.brown,
  },
  textButtonDelete: {
    color: '#FFFDFA',
    fontWeight: 'bold',
    marginLeft: 4
  },
  altText: {
    fontSize: 18,
    color: Colors.orange
  },
  label: {
    fontSize: 15,
    color: Colors.brownAlpha2,
    fontWeight: '300'
  },
  input: {
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: Colors.brown,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 10,
    backgroundColor: Colors.whiteGoldAlpha,
    color: Colors.brown
  },
  Button: {
    width: 200,
    backgroundColor: Colors.orange,
    padding: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    elevation: 5,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mdlButton: {
    backgroundColor: Colors.brown,
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    elevation: 5,
  },
  altButton: {
    backgroundColor: Colors.brown,
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    elevation: 5,
  },
  btmText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
  },
  delButton: {
    backgroundColor: Colors.redDel,
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    elevation: 5,
    marginLeft: 2,
  },
  titleModal: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textModal: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 14,
    padding: 10
  },
  margin: {
    marginLeft: 10,
    marginRight: 10,
  },

  login: {
    alignSelf: 'center',
    marginTop: 20,
    color: Colors.brown,
  },
  linkLogin: {
    color: Colors.orange,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  checkText: {
    marginLeft: 8,
    fontSize: 14,
    color: Colors.brown
  },
  useTerms: {
    color: Colors.orange,
    textDecorationLine: 'underline',
  },
  

  boxDisable:{
    width: '49.5%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius:15,
    borderColor: Colors.brownAlpha2,
  },
  textDisable:{
      color: Colors.brownAlpha2
  },
  boxEnable:{
      width: '49.5%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderWidth: 2,
      borderRadius:15,
      borderColor: Colors.orange,
      backgroundColor: Colors.orange
  },
  textEnable:{
      color: Colors.white,
      fontWeight: '700'
  },

  errorMessage: {
    color: Colors.redDel2,
    marginTop: -10,
    marginBottom: 4,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  rowInput: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: Colors.brown,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 10,
    backgroundColor: Colors.whiteGoldAlpha,
    color: Colors.brown,
    alignItems: 'center'
  },
  input2: {
    width: '93.8%',
    height: 45,
    padding: 10,
  },
  eyeIcon:{
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;