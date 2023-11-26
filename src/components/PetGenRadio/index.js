import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Colors from "../Colors/Colors";

const PetGenRadio = ({options=[], horizontal=false, onChangeSelect, selected}) => {
    return (
        <View style={{marginBottom: 15}}>
            {
                options.map((opt, index) => (
                    <TouchableOpacity key={index} onPress={() => onChangeSelect(opt , index)} style={[styles.opContainer, {marginTop:horizontal ? 10 : 10}]} activeOpacity={0.8}>
                        {selected === index
                        ?
                            <View style={styles.boxEnable}>
                                <Text style={styles.textEnable}>{opt}</Text>
                            </View>
                        :
                            <View style={styles.boxDisable}>
                                <Text style={styles.textDisable}>{opt}</Text>
                            </View>
                        }
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
    boxDisable:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius:15,
        borderColor: Colors.brownAlpha2
    },
    textDisable:{
        color: Colors.brownAlpha2
    },
    boxEnable:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius:15,
        borderColor: Colors.orange
    },
    textEnable:{
        color: Colors.orange
    }
})

export default PetGenRadio;