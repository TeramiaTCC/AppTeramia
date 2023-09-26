import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const PetAdesRadio = ({options=[], horizontal=false, onChangeSelect, selected}) => {
    return (
        <View style={horizontal ? styles.horizontal : styles.vertical}>
            {
                options.map((opt, index) => (
                    <TouchableOpacity key={index} onPress={() => onChangeSelect(opt , index)} style={[styles.opContainer, {marginLeft:horizontal ? 10 : 0, marginTop:horizontal ? 10 : 10}]}>
                        <View style={styles.outlineCircle}>
                            {selected === index && <View style={styles.innerCircle}/>}
                        </View>
                        <Text style={[styles.text, {color: selected === index ? '#1F0500' : '#777'}]}>{opt}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    opContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    outlineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1F0500',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE7D9',
    },
    innerCircle: {
        width: 13,
        height: 13,
        borderRadius: 6,
        backgroundColor: '#F16520',
    },
    text: {
        fontSize: 16,
        marginLeft: 4,
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default PetAdesRadio;