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
    backgroundColor: '#F16520',
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
    borderWidth: 4,
    borderColor: Colors.orange,
    borderRadius: 20
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
    backgroundColor: Colors.brown,
    borderRadius: 20,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10
  },
  header: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  description: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  descText: {
    color: Colors.whiteAlpha,
    fontWeight: '300',
    textAlign: 'justify'
  },
  descTextName: {
    color: Colors.whiteAlpha,
    fontWeight: '400',
    textAlign: 'justify',
    textDecorationLine: 'underline'
  },
  list: {
    flex: 1,
  },
});

export default styles;