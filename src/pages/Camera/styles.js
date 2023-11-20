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
      alignSelf: 'center',
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
  });

  

export default styles;