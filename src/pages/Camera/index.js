import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, Text, TouchableOpacity, View, Image, Modal, TextInput, SafeAreaView, TouchableHighlight, StatusBar, KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import BottomSheet, { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, useBottomSheet } from '@gorhom/bottom-sheet'

import styles from './styles';

import { Ionicons, MaterialIcons, Entypo, Feather, FontAwesome } from '@expo/vector-icons';

import Colors from '../../components/Colors/Colors';

export default function CameraP({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  const snapPoints = useMemo( () => ["22%", "25%"], []);

  const bottomSheetRef = useRef(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  const takePicture = async () => {
    if(camera){
      const data = await camera.takePictureAsync(null);
      console.log('foto enviada:', data.uri);
      setImage(data.uri);
      navigation.navigate('NewPost', {image: data.uri})
    }
  }


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log('foto enviada:', result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      navigation.navigate('NewPost', {image: result.assets[0].uri})
    }
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: Colors.black}]}>
      <View style={styles.cameraContainer}>        
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio} 
          type={type}
          ratio={'1:1'}
        />
      </View>


        <View style={[styles.horizontal, styles.positionBack]}>
              <TouchableOpacity
                style={styles.buttonBack}
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
              >
                <Feather name="arrow-left-circle" size={35} color={Colors.whiteAlpha} />
              </TouchableOpacity>
        </View>
        
        <View style={[styles.horizontal, styles.position,]}>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraType}
                activeOpacity={0.8}
              >
                <Ionicons name="camera-reverse" size={40} color={Colors.whiteAlpha} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonC}
                onPress={takePicture}
                activeOpacity={0.8}
              >
                <Ionicons name="camera" size={50} color={Colors.orange} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={pickImage}
                activeOpacity={0.8}
              >
                <Ionicons name="image" size={40} color={Colors.whiteAlpha} />
              </TouchableOpacity>
        </View>

        {!permission.granted
        &&
          <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={renderBackdrop}
          backgroundStyle={{backgroundColor: Colors.orange}}
          handleIndicatorStyle={{backgroundColor: Colors.brown}}
        >
          <View style={styles.margin}>

            <Text style={styles.titleModal}>ATENÇÃO!</Text>
            <Text style={styles.textModal}>Precisamos da sua permissão para usar a câmera</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.mdlButton}
              onPress={requestPermission}
            >
              <Text style={styles.btmText}>Conceder permissão</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
        }

    </SafeAreaView>
  );
}