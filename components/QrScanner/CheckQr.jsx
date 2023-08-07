import { Camera, CameraType } from 'expo-camera';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import styles from './stylesScanner';
import DownBar from '../DownNavBar/NavOptions';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import { useContext } from 'react';
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
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }



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
          <Camera style={styles.camera} type={CameraType.back} >
          </Camera>
        )}
      </View>
      <DownBar/>
    </View>
  );
}


