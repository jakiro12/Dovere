import {Text,View,TouchableOpacity} from 'react-native';
import DownBar from '../DownNavBar/NavOptions';
import styles from './stylesAks'
import { useNavigation } from '@react-navigation/native';
export default function AksAndAwser(){
    const navigation = useNavigation()
    return(
            <View style={styles.container}>
               <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <TouchableOpacity style={styles.logoProfile} onPress={()=>{navigation.navigate('See_set_profile')}}>
                    <Text>A</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxQuestion}>
                <Text>Como se utiliza la app</Text>
            </View>
            <View style={styles.boxQuestion}>
                <Text>Como ganar puntos</Text>
            </View>
            <View style={styles.boxQuestion}>
                <Text>Cuantos niveles y beneficios existen?</Text>
            </View>
            <View style={styles.boxQuestion}>
                <Text>Cuanto tiempo demora en llegar mi canje u donacion</Text>
            </View>

                <DownBar/>
            </View>
    )
}