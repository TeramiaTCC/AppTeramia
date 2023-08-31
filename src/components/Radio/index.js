import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Radio = ({options=[], horizontal=false, onChangeSelect, selected}) => {
    return (
        <View style={horizontal ? styles.horizontal : styles.vertical}>
            {
                options.map((opt, index) => (
                    <TouchableOpacity onPress={() => onChangeSelect(opt , index)} style={[styles.opContainer, {marginLeft:horizontal ? 10 : 0, marginTop:horizontal ? 10 : 10}]}>
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
    },
    outlineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1F0500',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 12,
        height: 12,
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
    }
})

export default Radio;