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
    const[seeCenters,setSeeCenters]=useState(false)
    useEffect(()=>{
      ( async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          console.log('Permission to access location was denied')
        } else {
          const locationSubscription = await Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 3000,
                distanceInterval: 5,
          }, (location) => {
            setCoorT(location)
            setSay(true)
          })
        } return () => locationSubscription.remove()
      })()
    },[])


    
    return(
        <View style={styles.container}>
      {coorT &&
       (<SeeMapLocation coordiantes={coorT} showCenters={seeCenters}/>) 
      ||
       <ActivityIndicator  size="large" color="#0000ff" style={styles.activitycontainer} />}
       <View style={styles.infoAndBtn}>
          {
            say === true ?
            (
              <TouchableOpacity style={styles.btnSeeMarks} onPress={()=>setSeeCenters(true)}>
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


