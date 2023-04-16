import { useState } from 'react';
import { View,Text,StyleSheet} from 'react-native';
import styles from './stylesCenter'
import MapView from 'react-native-maps';
import DownBar from '../DownNavBar/NavOptions';
export default function NearbyCenters(){
    const[origin,setOrigin]=useState({
      latitud:  -31.603722,
      longitud: -60.702640,
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
        <DownBar/>
      </View>
    )
}


