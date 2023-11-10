import { StyleSheet } from 'react-native';

import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    cameraContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    fixedRatio: {
      flex: 1,
      aspectRatio: 1
    },
    button: {
      width: 40,
      height: 40,
      alignItems: 'center',
      alignSelf: 'center'
    },
    buttonC: {
      width: 50,
      height: 50,
      alignItems: 'center',
      alignSelf: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      display: 'flex',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    containerOpt: {
      flex: 1 / 6,
    },
    modal:{
      backgroundColor: Colors.whiteGold,
      borderRadius: 20,
      elevation: 5,
      shadowColor: Colors.brown,
      margin:20,
      padding:20
  },
  modalText: {
      color: Colors.brown,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 10
  },
  modalButton: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F16520',
      borderRadius: 50,
      elevation: 5,
      shadowColor: '#1F0500',
  },
  modalTextButton: {
      color: '#FFFDFA',
      fontWeight: 'bold',
  },
  modalBack: {
    backgroundColor: 'black'
  }
  });

  

export default styles;