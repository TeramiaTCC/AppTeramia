import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDFA',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? 0 : 50,
    },
    title: {
        fontSize: 40,
        color: '#F16520',
        marginBottom: '20',
        fontWeight: 'bold',
    },
    input: {
        width: 300,
        height: 40,
        marginTop: 10,
        padding: 10,
        borderWidth: 2,
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
        borderRadius: 25,
        marginTop: 30,
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
    },
    inputTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: -5,
      paddingTop: 10,
      marginLeft: '15%',
      marginRight: 'auto',
    },
    imageLogo: {
        height: 250,
        width: 250,
        borderRadius: 150,
        paddingBottom: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 35,
    }
  });

export default styles;