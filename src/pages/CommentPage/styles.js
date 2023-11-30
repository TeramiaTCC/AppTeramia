import { StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';
import { color } from '@rneui/base';
import { createEntityAdapter } from '@reduxjs/toolkit';

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
  row2: {
    flexDirection: 'row',
    height: 'auto',
  },
  star: {
    alignSelf: 'flex-end'
  },
  numberNote: {
    color: Colors.brownAlpha2,
    marginLeft: 82,
    fontSize: 20
  },
  textName: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 17,
  },
  textCRP: {
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
  textEdit: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 14,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 40 / 2,
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
  boxInfo: {
    padding: 15,
    margin: 10,
    backgroundColor: Colors.whiteGold,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.brown,
    elevation: 5,
  },
  textDesc: {
    color: Colors.brown,
    fontWeight: '300',
    textAlign: 'justify'
  },
  margin: {
    marginLeft : 10,
    marginRight: 10
  },
  comentTitle:{
    paddingLeft: 5,
    fontSize: 25,
    color: Colors.orange,
    fontWeight: 'bold'
  },
  borderBottom: {
    borderBottomColor: Colors.orange,
    borderBottomWidth: 2,
    marginBottom: 10
  },
  marginBottom: {
    marginBottom: 25
  },
  comentInput: {
    marginLeft: 5,
    marginRight: 5,
    color: Colors.brown,
    width: '97.7%',
    height: 40,
    borderBottomWidth: 2,
    borderColor: Colors.brown,
    fontSize: 12,
  },
  send: {
    backgroundColor: Colors.backColor,
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignContent: 'center'
  },
  psicoName: {
    marginLeft: 5,
    color: Colors.orange,
    fontWeight: 'bold',
    fontSize: 24
  },
  backPs: {
    backgroundColor: Colors.whiteGold,
    padding: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: Colors.brown,
    borderWidth: 2,
    elevation: 5,
    marginBottom: 25,
  },
  psicoCrp: {
    marginLeft: 5,
    color: Colors.brownAlpha2,
  },
  title: {
    marginBottom: 15,
    color: Colors.orange,
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft:'auto',
    marginRight: 'auto',
    textDecorationLine: 'underline'
  },
  errorMessage: {
    color: Colors.redDel2,
    marginBottom: 4,
    marginLeft: 5,
    fontWeight: '300',
    fontStyle: 'italic',
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
});

export default styles;