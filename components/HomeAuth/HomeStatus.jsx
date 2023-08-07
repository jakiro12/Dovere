import {View, Text,StatusBar,TouchableOpacity} from 'react-native';
import styles from './StatusStyles';
import DownBar from '../DownNavBar/NavOptions';
import { useState,useContext } from 'react';
import AppCounter from '../Provider/ProviderStatus';
export default function ActualPointsAndProgress ({navigation}){
    const[plastic,setPlastic]=useState(0.3)
    const[glass,setGlass]=useState(0.7)
    const{setActiveBtn}=useContext(AppCounter)
    const goToProfileStats=()=>{
        setActiveBtn('none')
        navigation.navigate('See_set_profile')
      }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E3E4D3"  />
            <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <TouchableOpacity style={styles.logoProfile} onPress={()=>goToProfileStats()}>
                    <Text>A</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statusAndPoints}>
                <View style={styles.userWelcome}><Text style={styles.fontWelcomeUser}>Hola Usuario</Text></View>
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
                        <Text style={styles.titleLevel}>Botellas</Text>
                        <View  style={styles.circleLevel}>
                            <Text style={styles.amountBotles}>1000</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.percentageUntilNow}>
                <View style={[styles.percentageBox,
                    {width: plastic < 0.5 ?  `${(45) - ((1-plastic)*10)  }%` : '40%',
                    height:  plastic < 0.5 ?  `${(80) - ((1-plastic)*10)}%`: '80%',
                    backgroundColor: plastic < 0.5 ? `rgba(106, 197, 45, ${plastic})`: '#6AC52D'}]}>
                   <View><Text style={styles.fontToPencentage}>Plastico</Text></View>
                   <View><Text style={styles.fontToPencentage}>30%</Text></View>
                </View>
                <View style={[styles.percentageBox,{width: glass < 0.5 ?  `${(45) - ((1-glass)*10)  }%` : '40%',
                    height:  glass < 0.5 ?  `${(80) - ((1-glass)*10)}%`: '80%',
                    backgroundColor:  glass < 0.5 ? `rgba(106, 197, 45, ${glass})`: '#6AC52D' }]}>
                <View><Text style={styles.fontToPencentage}>Vidrio</Text></View>
                   <View><Text style={styles.fontToPencentage}>70%</Text></View>
                </View>
            </View>
            <DownBar/>
        </View>
    )
}