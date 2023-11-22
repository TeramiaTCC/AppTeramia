import React, { useState } from 'react';
import { Text, StatusBar, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';

import styles from './styles';
import Colors from '../../components/Colors/Colors';

import { FontAwesome, AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function CommentPage() {

    const [coment, setComent] = useState('');

 return (
   <SafeAreaView style={styles.prmryContainer} >
        <StatusBar barStyle={'default'}/>

        <KeyboardAvoidingView
            keyboardVerticalOffset={90}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.margin, styles.row, styles.marginBottom]}
        >
        <FontAwesome name="user-circle-o" size={40} color={Colors.brown} />
        <TextInput
            style={styles.comentInput}
            multiline
            maxLength={150}
            placeholder='Adicione um comentário...'
            placeholderTextColor={Colors.brownAlpha2}
            onChangeText={(text) => setComent(text)}
            value={coment}
        />
        <TouchableOpacity
            activeOpacity={0.8}
        >
            <Ionicons style={styles.send} name="send" size={15} color={Colors.white} />
        </TouchableOpacity>
    </KeyboardAvoidingView>

   </SafeAreaView>
  );
}