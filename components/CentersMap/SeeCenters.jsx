import { useEffect, useState } from 'react';
import { View,Text,StyleSheet,Platform} from 'react-native';
import styles from './stylesCenter'
import MapView from 'react-native-maps';
import DownBar from '../DownNavBar/NavOptions';

export default function NearbyCenters(){
    const[say,setSay]=useState('noo funciona')
    const[origin,setOrigin]=useState({
      latitud:  -31.603722,
      longitud: -60.702640,
    })
    useEffect(()=>{

      if(Platform.OS === 'android'){
        setSay('estas en tu celu pero')
      }
    })
    return(
        <View style={styles.container}>
        <MapView style={styles.mapContainer} 
        initialRegion={{
            latitude:origin.latitud,
            longitude:origin.longitud,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        }}
        
        />
      <View><Text>{say}</Text></View>
        <DownBar/>
      </View>
    )
}


