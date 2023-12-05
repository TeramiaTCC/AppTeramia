import { StyleSheet } from 'react-native';

import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
  },
  containerContent: {
    marginLeft: 10,
    marginRight: 10,
  },
  containerFlex: {
      flex: 1,
      marginLeft: 15
  },
  boxPropaganda:{
    marginTop: -10,
    marginBottom: 10,
    width:'100%',
    justifyContent: "center",
    alignItems: "center",

  },
  title: {
    color: Colors.orange,
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: Colors.orange,
  },
  time: {
    color: Colors.brownAlpha2,
    textAlign: 'right',
    fontWeight: '400',
    paddingLeft: 5
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
  scroll: {
    width:'100%',
    height: '100%',
  },
  scrollContent: {
    justifyContent: 'center',
  },
  boxArt: {
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomWidth: 2,
    borderColor: Colors.brown,
    marginBottom: 10,
    paddingBottom: 10,
  },
  article: {
    padding: 10,
  },
  imageArt: {
    width: 115,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
    borderWidth: 4,
    borderColor: Colors.orange
  },
  titleArt: {
    color: Colors.orange,
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 5,
    paddingBottom: 5,
    textAlign: 'left'
  },
});

export default styles;