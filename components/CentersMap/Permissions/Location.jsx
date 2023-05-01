import MapView,{Marker} from 'react-native-maps';
import styles from '../stylesCenter';

//coorT.coords.latitude
export default function SeeMapLocation({coordiantes}){
    return(
        <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: coordiantes.coords.latitude,
          longitude: coordiantes.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: coordiantes.coords.latitude,
            longitude: coordiantes.coords.longitude,
          }}
        />
      </MapView>
    )

}