import MapView,{Marker} from 'react-native-maps';
import styles from '../stylesCenter';
import { centersLocation } from './centers';

export default function SeeMapLocation({coordiantes,showCenters}){
    return(
        <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: coordiantes.coords.latitude,
          longitude: coordiantes.coords.longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}
        showsUserLocation={true}
        >
      {
        showCenters === true ? (
          centersLocation.map((e,i)=>{
            return(
              <Marker
              key={i}
              coordinate={{
                latitude: e.coordinates.latitude,
                longitude: e.coordinates.longitude, 
              }}/>
            )
          
          })
         
       
        ) :
        null
      }
      </MapView>
    )

}

/*
 <Marker
          coordinate={{
            latitude: centersLocation.center_1.latitude,
            longitude: centersLocation.center_1.longitude, 
          }}
        />
*/