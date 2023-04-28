import { useEffect, useState } from 'react';
import { View,Text} from 'react-native';
import styles from './stylesCenter'
import MapView,{Marker} from 'react-native-maps';
import DownBar from '../DownNavBar/NavOptions';
import * as Location from 'expo-location';
export default function NearbyCenters(){
    const[say,setSay]=useState('')
    const[coorT,setCoorT]=useState(null)
   
    useEffect(()=>{
      async function getLocationPermission() {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          // Los permisos de ubicación no fueron concedidos
          // Manejar el error o mostrar un mensaje al usuario
          setSay('me denegaste tu ubicacion perro')
          return
        }
        // Los permisos de ubicación fueron concedidos
        // Hacer algo con la ubicación
        setSay('se donde vivis')
        const coords= await Location.getCurrentPositionAsync({})
        setCoorT(coords)
       
      }
     getLocationPermission()
    },[])
    return(
        <View style={styles.container}>
         {coorT && (
        <MapView
          style={styles.mapContainer}
          initialRegion={{
            latitude: coorT.coords.latitude,
            longitude: coorT.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: coorT.coords.latitude,
              longitude: coorT.coords.longitude,
            }}
          />
        </MapView>
      )}
      <View><Text>{say}</Text></View>
        <DownBar/>
      </View>
    )
}


