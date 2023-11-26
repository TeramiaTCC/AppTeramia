import { Platform, StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDFA',
    },
    input: {
      height: 40,
      marginBottom: 10,
      padding: 10,
      borderWidth: 2,
      borderColor: Colors.brown,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 10,
      backgroundColor: Colors.whiteGoldAlpha,
    },
    buttonBusca: {
      width: 200,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.orange,
      borderRadius: 50,
      marginTop: 30,
      elevation: 5,
      shadowColor: Colors.brown,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    textButtonBusca: {
      color: '#FFFDFA',
      fontWeight: 'bold',
    },
    label: {
      fontSize: 15,
      color: Colors.brownAlpha2,
      fontWeight: '300'
    },

    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
    },
    justifyCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorMessage: {
      color: Colors.redDel2,
      marginTop: -10,
      marginBottom: 4,
      fontWeight: '300',
      fontStyle: 'italic',
    },
    errorPass: {
      color: Colors.redDel2,
      fontWeight: '400',
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
      margin: {
        marginLeft: 10,
        marginRight: 10,
      }
  });

export default styles;