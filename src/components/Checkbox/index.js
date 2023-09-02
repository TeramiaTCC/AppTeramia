import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CheckBox = ({options=[], onChange}) => {
    const [selected, setSelected] = useState([]);

    function toggle (id){
        let index = selected.findIndex((i) => i === id);
        let arrSelecteds = [...selected];
        
        if (index !== -1) {
            arrSelecteds.splice(index, 1);
        } else {
            arrSelecteds.push(id);
        }
        setSelected(arrSelecteds);
    }

    useEffect(() => onChange(selected),[selected])

    return (
        <View style={styles.container}>
            {
                options.map((opt) => (
                    <View style={styles.optContainer}>
                        <TouchableOpacity style={styles.touchable} onPress={() => toggle(opt?.id)}>
                            {
                                selected.findIndex(i => i === opt.id) !== -1 
                                ? 
                                (<MaterialCommunityIcons
                                    name="check-bold"
                                    color={'#F16520'}
                                    size={10}
                                />)
                                :
                                null
                            }
                        </TouchableOpacity>
                        <Text style={styles.optText}>Li e concordo com os <Text style={styles.useTerms}>{opt?.text}</Text>*</Text>
                    </View>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: -15,
    },
    optContainer:{
        flexDirection: "row",
        alignItems: 'center',
    },
    optText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#777'
    },
    useTerms: {
        color: '#F16520',
        textDecorationLine: 'underline',
    },
    touchable: {
        height: 16,
        width: 16,
        borderRadius: 4,
        backgroundColor: '#EEE7D9',
        borderColor: '#1F0500',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CheckBox;