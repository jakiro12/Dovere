import {Text,View,TouchableOpacity} from 'react-native';
import DownBar from '../DownNavBar/NavOptions';
import styles from './stylesAks';
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import HowUseIt from './Information/StepOne';
import HowToWin from './Information/WinPoints';
import HowToUpgrade from './Information/LevelsAndMore';
import WhenCanI from './Information/RedeemTime';
import AppCounter from '../Provider/ProviderStatus';
export default function AksAndAwser(){
    const{openInfo,setOpenInfo,setActiveBtn}=useContext(AppCounter)
    
    const navigation = useNavigation()
      const goToProfileStats=()=>{
    setActiveBtn('none')
    navigation.navigate('See_set_profile')
  }
    const openAndCloseFirst=(e)=>{
        if(e === openInfo){
            setOpenInfo('')
        }else{
            setOpenInfo('a')
        }
    }
    const openAndCloseSecond=(e)=>{
        if(e === openInfo){
            setOpenInfo('')
        }else{
            setOpenInfo('b')
        }
    }
    const openAndCloseThird=(e)=>{
        if(e === openInfo){
            setOpenInfo('')
        }else{
            setOpenInfo('c')
        }
    }
    const openAndCloseFourth=(e)=>{
        if(e === openInfo){
            setOpenInfo('')
        }else{
            setOpenInfo('d')
        }
    }

    return(
            <View style={styles.container}>
               <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <TouchableOpacity style={styles.logoProfile} onPress={()=>goToProfileStats()}>
                    <Text>A</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.boxQuestion,{display:openInfo === 'a' || openInfo === '' ? 'flex' : 'none'},{height:openInfo === 'a' ? '70%' : '15%'}]} >
                <TouchableOpacity onPress={()=>openAndCloseFirst('a')} style={styles.btnText} activeOpacity={1} disabled={openInfo === 'a' ? true : false}>
                  {openInfo === 'a' ? <HowUseIt/> : <Text style={{fontSize:24,color:'#ffffff',fontWeight:'bold',}}>Como usar la app</Text> }
                </TouchableOpacity>
            </View>
            <View style={[styles.boxQuestion,{display:openInfo === 'b' || openInfo === '' ? 'flex' : 'none'},{height:openInfo === 'b' ? '70%' : '15%'}]}>
                <TouchableOpacity onPress={()=>openAndCloseSecond('b')} style={styles.btnText} activeOpacity={1} disabled={openInfo === 'b' ? true : false}>
                  { openInfo === 'b' ? <HowToWin/> : <Text  style={{fontSize:24,color:'#ffffff',fontWeight:'bold',}}>Como ganar puntos</Text>}
                </TouchableOpacity>
            </View>
            <View style={[styles.boxQuestion,{display:openInfo === 'c' || openInfo === '' ? 'flex' : 'none'},{height:openInfo === 'c' ? '70%' : '15%'}]}>
               <TouchableOpacity onPress={()=>openAndCloseThird('c')} activeOpacity={1} style={styles.btnText} disabled={openInfo === 'c' ? true : false}>
               { openInfo === 'c' ? <HowToUpgrade/> : <Text  style={{fontSize:24,color:'#ffffff',fontWeight:'bold',}}>Niveles y beneficios</Text>}
                </TouchableOpacity>
            </View>
            <View style={[styles.boxQuestion,{display:openInfo === 'd' || openInfo === '' ? 'flex' : 'none'},{height:openInfo === 'd' ? '70%' : '15%'}]}>
            <TouchableOpacity onPress={()=>openAndCloseFourth('d')} activeOpacity={1} style={styles.btnText} disabled={openInfo === 'd' ? true : false}>
            { openInfo === 'd' ? <WhenCanI/> : <Text  style={{fontSize:24,color:'#ffffff',fontWeight:'bold',}}>Cuando llega mi premio</Text>}
                </TouchableOpacity>
            </View>
                <DownBar/>
            </View>
    )
}