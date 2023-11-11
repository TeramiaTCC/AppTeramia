import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity, View, Image } from 'react-native';

import styles from './styles';

export default function NewPost(props) {
  //console.log(props.route.params.image)

  const [legenda, setLegenda]=useState("")

    return (
      <View style={styles.container}>

        <Image source={{uri: props.route.params.image}}/>

        <TextInput
          style={styles.input}
          placeholder="Adicione uma legenda"
          onChangeText={(text) => setLegenda(text)}
          value={legenda}
        />

        <TouchableOpacity
          style={styles.saveButton}
          activeOpacity={0.8}
          onPress={() => ("")}
        >
          <Text style={styles.textButtonSave}>Publicar</Text>
        </TouchableOpacity>

        <Text>{props.route.params.image}</Text>
      </View>
    );
}