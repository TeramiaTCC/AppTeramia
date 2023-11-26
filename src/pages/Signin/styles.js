import { Platform, StyleSheet } from 'react-native';
import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDFA',
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
    horizontal: {
      flexDirection: 'row',
      display: 'flex',
    },
    justifyCenter2: {
      justifyContent: 'center',
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
    buttonLogin: {
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
    textButtonLogin: {
        color: Colors.white,
        fontWeight: 'bold',
    },
    registration: {
        marginTop: 20,
        color: Colors.brownAlpha2,
    },
    linkSubscribe: {
        color: Colors.orange,
        textDecorationLine: 'underline',
    },
    imageLogo: {
        borderRadius: 150,
        padding: 90,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    viewLogo: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 40,
    },
    linkForget: {
        color: Colors.orange,
        marginLeft: 'auto',
        textDecorationLine: 'underline',
    },
    justifyCenter: {
        justifyContent: 'center',
        alignItems: 'center',
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
      rowInput: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: Colors.brown,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 10,
        backgroundColor: Colors.whiteGoldAlpha,
        alignItems: 'center'
      },
      input2: {
        width: '93.8%',
        height: 45,
        padding: 10,
      },
      eyeIcon:{
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },

  });

export default styles;