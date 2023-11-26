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
  },
  picAlt: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  petImage: {
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
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: Colors.brown,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 10,
    backgroundColor: Colors.whiteGoldAlpha,
    color: Colors.brown
  },
  inputHeight: {
    height: 40,
  },
  inputHeight2: {
    height: 70,
  },
  boxList: {
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    borderColor: Colors.brown,
    borderWidth: 2,
    backgroundColor: Colors.whiteGoldAlpha,
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
  dropdownList: {
    borderRadius: 15,
    borderColor: Colors.brown,
    borderWidth: 2,
    backgroundColor: Colors.whiteGoldAlpha,
    marginBottom: 10,
    marginTop: -4
  },
  disableItem: {
    backgroundColor: Colors.whiteAlpha2,
  },
  disableText: {
    color: Colors.brown
  },
  Button: {
    backgroundColor: Colors.orange,
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 60,
    elevation: 5
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
  }
});

export default styles;