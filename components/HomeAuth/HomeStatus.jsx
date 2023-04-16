import {View, Text,StatusBar,TouchableOpacity} from 'react-native'
import styles from './StatusStyles';
import DownBar from '../DownNavBar/NavOptions';
export default function ActualPointsAndProgress ({navigation}){
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E3E4D3"  />
            <View style={styles.navBar}>
              <Text style={styles.appName}>AppName</Text>
                <TouchableOpacity style={styles.logoProfile} onPress={()=>{navigation.navigate('See_set_profile')}}>
                    <Text>A</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statusAndPoints}>
                <View style={styles.userWelcome}><Text style={styles.fontWelcomeUser}>Hola loco</Text></View>
                <View style={styles.userStats}>
                    <View style={styles.pointContainer}>
                        <Text style={styles.poinsText}>Puntaje Acumulado</Text>
                        <Text style={styles.poinsText}>200</Text>
                        </View>
                    <View style={styles.growStatus}>
                        <Text style={styles.growText}>Crecimiento</Text>
                        <Text style={styles.growText}>Logo</Text>
                        </View>
                </View>

            </View>
            <View style={styles.progress}>
                <Text style={styles.fontProgress}>Estadisticas</Text>
                <View style={styles.advancedStatus}>
                    <View style={styles.displayLevelStatus}>
                        <Text style={styles.titleLevel}>Plástico</Text>
                        <View  style={styles.circleLevel}>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.miniMap}>
                <Text>Centros de reciclaje</Text>
            </View>
            <DownBar/>
        </View>
    )
}