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
  containerPrf: {
    flex: 1 / 2
  },
  containerImage: {
    flex: 1 / 3
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
  profileInfo: {
    padding: 25,
    paddingBottom: 10,
    flexDirection: 'column',
    backgroundColor: Colors.backColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  numberConst: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 45,
    color: Colors.brown,
  },
  numberDesc: {
    textAlign: 'center',
    color: Colors.white,
  },
  textName: {
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
  textCrp: {
    fontWeight: '400',
    color: Colors.white,
    fontSize: 16,
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: Colors.brown,
    borderRadius: 8,
  },
  textEdit: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 14,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: Colors.brown
  },
  borderWhite: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderColor: Colors.pageBack
  },
  borderTopGray: {
    borderTopWidth: 2,
    borderColor: Colors.brown
  },
  ico: {
    marginRight: 5
  },
});

export default styles;