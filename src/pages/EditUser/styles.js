import { StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
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
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginBottom: 10,
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
    width: "33%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    borderRadius: 10,
    marginTop: 30,
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
    width: "33%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.redDel,
    borderRadius: 10,
    marginTop: 30,
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
});

export default styles;