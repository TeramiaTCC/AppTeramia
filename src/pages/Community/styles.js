import { StyleSheet } from 'react-native';

import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
  },
  buttonNewPost:{
    width: 50,
    height: 50,
    backgroundColor: Colors.orange,
    position: 'absolute',
    bottom: 80,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 40 / 2 ,
    borderWidth: 2,
    borderColor: Colors.orange,
    marginRight: 5
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.orange
  },
  imageSize: {
    aspectRatio: 1,
    borderRadius: 15
  },
  horizontal: {
    flexDirection: 'row',
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  post: {
    backgroundColor: Colors.whiteGold,
  },
  header: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.brown
  },
  imagepost:{
    padding: 10,
    borderBottomWidth: 2,
    borderColor: Colors.brown
  },
  description: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.whiteGold
  },
  descText: {
    color: Colors.brown,
    fontWeight: '300',
    textAlign: 'justify'
  },
  descTextName: {
    color: Colors.brownAlpha2,
    fontWeight: '900',
    textAlign: 'justify',
    textDecorationLine: 'underline'
  },
  list: {
    flex: 1,
  },
  advice: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 25,
  },
  adviceText: {
    color: Colors.brown,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default styles;