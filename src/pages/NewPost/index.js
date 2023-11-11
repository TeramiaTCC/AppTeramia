import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, Text, TouchableOpacity, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';

export default function NewPost() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  const takePicture = async () => {
    if(camera){
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setImage(data.uri);
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Precisamos da sua permissão para usar a câmera</Text>
        <Button onPress={requestPermission} title="Conceder Permissão" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio} 
          type={type}
          ratio={'1:1'}
        />
      </View>

      <View style={{flex:1}}>
          <View style={[styles.horizontal, styles.justifyCenter, {backgroundColor: Colors.whiteGold}]}>

            <View style={[styles.justifyCenter, styles.containerOpt]}>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraType}
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