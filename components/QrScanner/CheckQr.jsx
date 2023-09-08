import { Camera, CameraType } from 'expo-camera';
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native';
import styles from './stylesScanner';
import DownBar from '../DownNavBar/NavOptions';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import { useContext, useState } from 'react';
import AppCounter from '../Provider/ProviderStatus';
import { supabase } from '../../supabeConn/supabase';
export default function OpenQrReader() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const {setActiveBtn,dataPoints,setNewChanges}=useContext(AppCounter)
  const [scannedData, setScannedData] = useState(null); 
  const [scanningEnabled, setScanningEnabled] = useState(true);

  const goToProfileStats=()=>{
    setActiveBtn('none')
    navigation.navigate('See_set_profile')
  }
 
  if (!permission) {
      //en caso de que los permisos esten en carga mostrar esto
    return <View />;
  }

  if (!permission.granted) {
    // En caso de no otorgar los permisos de la camara, se vera el modal de aqui
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
  const handleBarCodeScanned =  ({ type, data }) => {
    let tryValue=Number(data)
    if (scanningEnabled) {
      if (type === 256) {
        setScannedData(data);
      (  async function testeo(){
          const{error} = await supabase.from('user_score').update({points:( dataPoints[0].points + tryValue)}).eq('id',1)
          if(error) return console.log(error)
          setNewChanges(true)
        })()
      } else {
        setScannedData('No es un código QR válido');
      }
      setScanningEnabled(false); // Deshabilita futuros escaneos
    }
  };
  const handleCloseModalScanned=()=>{
    setScanningEnabled(true)
    setScannedData(null)
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
          <Camera style={styles.camera} 
          type={CameraType.back}
          onBarCodeScanned={handleBarCodeScanned} />
        )}
        <Modal
        visible={scannedData !== null ? true : false}
        animationType='none'
        onRequestClose={handleCloseModalScanned}
        >
          <View style={styles.containerModalCameraRedeem}>
          <View style={styles.containerCameraPermissions}>
        <View style={styles.modalPerCamera}>
        <Text style={{ textAlign: 'center',fontSize:18 }}>Sumaste: {scannedData} puntos!!</Text>
        </View>
      </View>
          </View>
        </Modal>
      </View>
      <DownBar/>
    </View>
  );
}


