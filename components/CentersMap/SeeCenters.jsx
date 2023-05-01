import { useEffect, useState } from 'react';
import { View,Text,ActivityIndicator} from 'react-native';
import styles from './stylesCenter'
import DownBar from '../DownNavBar/NavOptions';
import * as Location from 'expo-location';
import SeeMapLocation from './Permissions/Location';
export default function NearbyCenters(){
    const[say,setSay]=useState('')
    const[coorT,setCoorT]=useState(null)
   
    useEffect(()=>{
      async function getLocationPermission() {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          // Los permisos de ubicación no fueron concedidos
          // Manejar el error o mostrar un mensaje al usuario
          setSay('no')
          return
        }
        // Los permisos de ubicación fueron concedidos
        // Hacer algo con la ubicación
        setSay('mostrando mapa')
        const coords= await Location.getCurrentPositionAsync({})
        setCoorT(coords)
      }
     getLocationPermission()
    },[])
    return(
        <View style={styles.container}>
      {coorT && (<SeeMapLocation coordiantes={coorT} />) || <ActivityIndicator  size="large" color="#0000ff" />}
      <View><Text>{say} y agrgar botones :D</Text></View>
        <DownBar/>
      </View>
    )
}


