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
  });

export default styles;