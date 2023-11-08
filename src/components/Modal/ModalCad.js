import React, { useState } from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity, Button, StatusBar } from 'react-native';

import Colors from '../Colors/Colors';

export default function ModalCad() {
    const [visible, setVisible]= useState(true);

 return (
   <View style={styles.container}>
    <StatusBar barStyle={'default'}/>
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            style={''}
        >
            <View style={styles.modal}>
                <Text style={styles.modalText}>Cadastro Realizado com Sucesso!</Text>
                <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => {setVisible(false)}}
                >
                    <Text style={styles.modalTextButton}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDFA',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? 0 : 25,
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
})