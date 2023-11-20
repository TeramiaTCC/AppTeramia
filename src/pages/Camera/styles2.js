import { StyleSheet } from "react-native";
import Colors from "../../components/Colors/Colors";

const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    cameraContainer: {
      flexDirection: 'row',
      backgroundColor: '#000',
    },
    fixedRatio: {
      flex: 1,
      aspectRatio: 1
    },
    button: {
        width: 40,
        height: 40,
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonBack: {
        width: 35,
        height: 35,
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonC: {
        width: 50,
        height: 50,
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 5,
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto',
      },
    position: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    positionBack: {
        position: 'absolute',
        top: 35,
        left: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginLeft: 5,
        marginRight: 5,
        color: Colors.brown,
        width: '78%',
        height: 40,
        borderBottomWidth: 2,
        borderColor: Colors.brown,
        fontSize: 12,
      },
      margin: {
        marginLeft: 10,
        marginRight: 10,
      },
      containerHdr: {
        backgroundColor: Colors.backColor,
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 15,
      },
      imageSize: {
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: Colors.orange,
        borderRadius: 10
      },
      send: {
        backgroundColor: Colors.backColor,
        padding: 10,
        borderRadius: 25,
        justifyContent: 'center',
        alignContent: 'center'
      },
      marginTop: {
        marginTop: 25,
      },
      textHeader: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 8
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
      textModal:{
        color: Colors.white,
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 15,
        paddingBottom: 5
      }
  });

  export default styles2;