import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';



export default function NewPost( props ) {

    const uploadImage = async () => {
        const uri = props.route.params.image;

        const response = await fetch(uri);
        const blob = await response.blob();

        const task = firebase.storage().ref().child(``)
    }

    //console.log(props.route.params.image)

    const [legenda, setLegenda] = useState("");

    const[image]=useState(props.route.params.image)

    return (
        <View style={styles.container}>
            <Image source={{uri: image}}/>
            <TextInput
                style={styles.input}
                placeholder='Adicione uma legenda'
                onChangeText={(text) => setLegenda(text)}
                value={legenda}
            />
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.saveButton}
                onPress={() => {''}}
            >
                <Text style={styles.textButtonSave}>Publicar</Text>
            </TouchableOpacity>

            <Text>{image}</Text>
        </View>
    );
}