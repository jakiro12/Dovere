import { useEffect, useState } from 'react';
import { View,Text,ActivityIndicator} from 'react-native';
import styles from './stylesCenter'
import DownBar from '../DownNavBar/NavOptions';
import * as Location from 'expo-location';
import SeeMapLocation from './Permissions/Location';
import { TouchableOpacity } from 'react-native';
export default function NearbyCenters(){
    const[say,setSay]=useState(false)
    const[coorT,setCoorT]=useState(null)
    const[allCenters,setAllCenters]=useState([''])
   
    useEffect(()=>{
      async function getLocationPermission() {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          // Los permisos de ubicación no fueron concedidos
          // Manejar el error o mostrar un mensaje al usuario
          
          return
        }
        // Los permisos de ubicación fueron concedidos
        // Hacer algo con la ubicación
        const coords= await Location.getCurrentPositionAsync({})
        setCoorT(coords)
        setSay(true)
      }
     getLocationPermission()
    },[])
    return(
        <View style={styles.container}>
      {coorT && (<SeeMapLocation coordiantes={coorT} />) || <ActivityIndicator  size="large" color="#0000ff" />}
       <View style={styles.infoAndBtn}>
          {
            say === true ?
            (
              <TouchableOpacity style={styles.btnSeeMarks}>
              <Text style={styles.textMark}>
               Ver centros
              </Text>
            </TouchableOpacity>
            ) :
            null
          }
           
      </View>
     
     
      
        <DownBar/>
      </View>
    )
}


