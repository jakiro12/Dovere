import {View, Text,StatusBar,TouchableOpacity} from 'react-native';
import styles from './StatusStyles';
import DownBar from '../DownNavBar/NavOptions';
import { useContext} from 'react';
import AppCounter from '../Provider/ProviderStatus';
export default function ActualPointsAndProgress ({navigation}){
    const{setActiveBtn,dataPoints,nameUserLogged}=useContext(AppCounter)
    const goToProfileStats=()=>{
        setActiveBtn('none')
        navigation.navigate('See_set_profile')
      }
    const allBotlesRecycled=dataPoints[0].glass_botles + dataPoints[0].plastic_botles
    const percentOfGlass=dataPoints[0].glass_botles / allBotlesRecycled
    const percentOfPlastic=dataPoints[0].plastic_botles / allBotlesRecycled
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
                <View style={styles.userWelcome}><Text style={styles.fontWelcomeUser}>Hola {nameUserLogged === '' ? 'usuario' : nameUserLogged}</Text></View>
                <View style={styles.userStats}>
                    <View style={styles.pointContainer}>
                        <Text style={styles.poinsText}>Puntaje Acumulado</Text>
                        <Text style={styles.poinsText}>{dataPoints[0].points}</Text>
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
                            <Text style={styles.amountBotles}>
                                {allBotlesRecycled}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.percentageUntilNow}>
                <View style={[styles.percentageBox,
                    {width: percentOfPlastic < 0.5 ?  `${(45) - ((1-percentOfPlastic)*10)  }%` : '40%',
                    height:  percentOfPlastic < 0.5 ?  `${(80) - ((1-percentOfPlastic)*10)}%`: '80%',
                    backgroundColor: percentOfPlastic < 0.5 ? `rgba(106, 197, 45, ${percentOfPlastic})`: '#6AC52D'}]}>
                   <View><Text style={styles.fontToPencentage}>Plastico</Text></View>
                   <View><Text style={styles.fontToPencentage}>{percentOfPlastic * 100}%</Text></View>
                </View>
                <View style={[styles.percentageBox,{width: percentOfGlass < 0.5 ?  `${(45) - ((1-percentOfGlass)*10)  }%` : '40%',
                    height:  percentOfGlass < 0.5 ?  `${(80) - ((1-percentOfGlass)*10)}%`: '80%',
                    backgroundColor:  percentOfGlass < 0.5 ? `rgba(106, 197, 45, ${percentOfGlass})`: '#6AC52D' }]}>
                <View><Text style={styles.fontToPencentage}>Vidrio</Text></View>
                   <View><Text style={styles.fontToPencentage}>{percentOfGlass * 100}%</Text></View>
                </View>
            </View>
            <DownBar/>
        </View>
    )
}