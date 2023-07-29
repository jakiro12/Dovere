import MapView,{Marker} from 'react-native-maps';
import styles from '../stylesCenter';
import { centersLocation } from './centers';

//coorT.coords.latitude  -31.6045413,-60.7077374,
export default function SeeMapLocation({coordiantes,showCenters}){
    return(
        <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: coordiantes.coords.latitude,
          longitude: coordiantes.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        >
      {
        showCenters === true ? (
          
          <Marker
          coordinate={{
            latitude: centersLocation.center_1.latitude,
            longitude: centersLocation.center_1.longitude, 
          }}
        />
       
        ) :
        null
      }
      </MapView>
    )

}