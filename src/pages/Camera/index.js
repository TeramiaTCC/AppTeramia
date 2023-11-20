import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, Text, TouchableOpacity, View, Image, Modal, TextInput, SafeAreaView, TouchableHighlight, StatusBar, KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import BottomSheet, { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, useBottomSheet } from '@gorhom/bottom-sheet'

import styles from './styles';
import styles2 from './styles2';

import { Ionicons, MaterialIcons, Entypo, Feather, FontAwesome } from '@expo/vector-icons';

import Colors from '../../components/Colors/Colors';

export default function CameraP({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [visible, setVisible]= useState(false);
  const [legenda, setLegenda]= useState('');

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
      console.log(data.uri);
      setImage(data.uri);
      setVisible(!visible)
    }
  }

  const close = () => {
    setVisible(!visible)
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);


    if (!result.canceled) {
      setVisible(!visible)
      setImage(result.assets[0].uri);
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
      <View style={styles2.cameraContainer}>        
        <Camera
          ref={ref => setCamera(ref)}
          style={styles2.fixedRatio} 
          type={type}
          ratio={'1:1'}
        />
      </View>


        <View style={[styles2.horizontal, styles2.positionBack]}>
              <TouchableOpacity
                style={styles2.buttonBack}
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
              >
                <Feather name="arrow-left-circle" size={35} color={Colors.whiteAlpha} />
              </TouchableOpacity>
        </View>
        
        <View style={[styles2.horizontal, styles2.position,]}>
              <TouchableOpacity
                style={styles2.button}
                onPress={toggleCameraType}
                activeOpacity={0.8}
              >
                <Ionicons name="camera-reverse" size={40} color={Colors.whiteAlpha} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles2.buttonC}
                onPress={takePicture}
                activeOpacity={0.8}
              >
                <Ionicons name="camera" size={50} color={Colors.orange} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles2.button}
                onPress={pickImage}
                activeOpacity={0.8}
              >
                <Ionicons name="image" size={40} color={Colors.whiteAlpha} />
              </TouchableOpacity>
        </View>

        <Modal
            animationType='fade'
            visible={visible}
            style={''}
        >
            <View style={styles.container}>
            <StatusBar hidden={true}/>

              <View style={[styles2.row, styles2.containerHdr]}>
                <TouchableOpacity
                  onPress={(close)}
                  activeOpacity={1}
                >
                  <Feather name="arrow-left-circle" size={25} color={Colors.white} />
                </TouchableOpacity>
                <Text style={styles2.textHeader}>Criar Publicação</Text>
              </View>

            <View style={styles2.margin}> 
              <Image source={{uri: image}} style={[styles2.imageSize]}/>


            <View style={styles2.row}>
            <KeyboardAvoidingView
              keyboardVerticalOffset={90}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={[styles2.margin, styles2.row, styles2.marginTop]}
            >
                <FontAwesome name="user-circle-o" size={40} color={Colors.brown} />
                <TextInput
                  style={styles2.input}
                  placeholder="Adicione uma legenda..."
                  onChangeText={(text) => setLegenda(text)}
                  value={legenda}
                />
                <TouchableOpacity
                    activeOpacity={0.8}
                >
                    <Ionicons style={styles2.send} name="send" size={15} color={Colors.white} />
                </TouchableOpacity>
            </KeyboardAvoidingView>

            </View>

            </View>
          </View>
        </Modal>

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
          <View style={styles2.margin}>

            <Text style={styles2.titleModal}>ATENÇÃO!</Text>
            <Text style={styles2.textModal}>Precisamos da sua permissão para usar a câmera</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles2.mdlButton}
              onPress={requestPermission}
            >
              <Text style={styles2.btmText}>Conceder permissão</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
        }

    </SafeAreaView>
  );
}