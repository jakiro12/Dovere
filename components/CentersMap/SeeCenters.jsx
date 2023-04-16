import { useState } from 'react';
import { View,Text,StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
export default function NearbyCenters(){
    const[origin,setOrigin]=useState({
      latitud:  -31.603722,
      longitud: -60.702640,
    })
    return(
        <View style={styles.container}>
        <MapView style={styles.map} 
        initialRegion={{
            latitude:origin.latitud,
            longitude:origin.longitud,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        }}
        
        />
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });