import { Camera, CameraType } from 'expo-camera';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import styles from './stylesScanner';
import DownBar from '../DownNavBar/NavOptions';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import { useContext, useState } from 'react';
import AppCounter from '../Provider/ProviderStatus';

export default function OpenQrReader() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const {setActiveBtn}=useContext(AppCounter)

  const goToProfileStats=()=>{
    setActiveBtn('none')
    navigation.navigate('See_set_profile')
  }
 
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.containerCameraPermissions}>
        <View style={styles.modalPerCamera}>
        <Text style={{ textAlign: 'center',fontSize:18 }}>Esta funcionalidad requiere de la habilitacion de 
        los permisos de camara para escanear codigos</Text>
        <Button onPress={requestPermission} title="Habilitar" />
        </View>
      </View>
    );
  }
  const handleBarCodeScanned = ({ type, data }) => {
    // Aquí puedes realizar acciones con los datos del código de barras leído
    console.log(`Tipo de código: ${type}`);
    console.log(`Datos del código: ${data}`);
    alert(data)
    // Realiza las acciones que necesites con los datos del código de barras
  };


  return (
    <View style={styles.container}>
       <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <TouchableOpacity style={styles.logoProfile} onPress={()=>goToProfileStats()}>
                    <Text>A</Text>
                </TouchableOpacity>
            </View>
      <View style={styles.camerCotnainer}>
      {isFocused && (
          <Camera style={styles.camera} 
          type={CameraType.back}
          onBarCodeScanned={handleBarCodeScanned} />
       
        )}
      </View>
      <DownBar/>
    </View>
  );
}


