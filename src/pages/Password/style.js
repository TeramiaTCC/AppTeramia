import { Platform, StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDFA',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? 0 : 50,
    },
    input: {
        width: '90%',
        height: 40,
        marginTop: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: '#1F0500',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#EEE7D9',
    },
    buttonBusca: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F16520',
        borderRadius: 50,
        marginTop: 30,
        elevation: 5,
        shadowColor: '#1F0500',
    },
    textButtonBusca: {
        color: '#FFFDFA',
        fontWeight: 'bold',
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: 'roll',
        justifyContent: 'center',
        alignItems: 'center',
    },
    warningAlert: {
        paddingLeft: 10,
        color: '#F16520',
        fontSize: 16,
    },
    inputTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: -5,
      paddingTop: 10,
      marginLeft: '5%',
      marginRight: 'auto',
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