import { StyleSheet } from 'react-native';

import Colors from '../../components/Colors/Colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      width: '90%',
      height: 40,
      marginTop: 10,
      padding: 10,
      borderWidth: 2,
      borderColor: '#1F0500',
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: Colors.whiteGold,
    },
    saveButton:{
      width: 200,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.orange,
      borderRadius: 50,
      marginTop: 10,
      elevation: 5,
      shadowColor: Colors.brown,
    },
    textButtonSave: {
      color: '#FFFDFA',
      fontWeight: 'bold',
    },
  });

export default styles;