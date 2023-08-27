import { Platform, StyleSheet } from 'react-native';

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
    buttonLogin: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F16520',
        borderWidth: 2,
        borderColor: '#1F0500',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 10,
        marginTop: 30,
        elevation: 5,
        shadowColor: '#1F0500',
    },
    textButtonLogin: {
        color: '#FFFDFA',
        fontWeight: 'Bold',
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
    registration: {
        marginTop: 20,
        color: '#4d5156',
    },
    linkSubscribe: {
        color: '#F16520',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    inputTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: -5,
      paddingTop: 10,
      marginLeft: '5%',
      marginRight: 'auto',
    },
    imageLogo: {
        borderRadius: 150,
        paddingBottom: 10,
    },
    viewLogo: {
        flex: 1,
        justifyContent: 'center',
    },
    linkForget: {
        color: '#F16520',
        marginLeft: 'auto',
        marginRight: '5%',
        textDecorationLine: 'underline',
    }
  });

export default styles;