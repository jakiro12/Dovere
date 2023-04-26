import {Text,View,TouchableOpacity,Animated} from 'react-native';
import DownBar from '../DownNavBar/NavOptions';
import styles from './stylesAks';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import HowUseIt from './Information/StepOne';
import HowToWin from './Information/WinPoints';
import HowToUpgrade from './Information/LevelsAndMore';
import WhenCanI from './Information/RedeemTime';
export default function AksAndAwser(){

    const[test,setTest]=useState('')
    
    const navigation = useNavigation()
    const openAndCloseFirst=(e)=>{
        if(e === test){
            setTest('')
        }else{
            setTest('a')
        }
    }
    const openAndCloseSecond=(e)=>{
        if(e === test){
            setTest('')
        }else{
            setTest('b')
        }
    }
    const openAndCloseThird=(e)=>{
        if(e === test){
            setTest('')
        }else{
            setTest('c')
        }
    }
    const openAndCloseFourth=(e)=>{
        if(e === test){
            setTest('')
        }else{
            setTest('d')
        }
    }

    return(
            <View style={styles.container}>
               <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <TouchableOpacity style={styles.logoProfile} onPress={()=>{navigation.navigate('See_set_profile')}}>
                    <Text>A</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.boxQuestion,{display:test === 'a' || test === '' ? 'flex' : 'none'},{height:test === 'a' ? '70%' : '15%'}]} >
                <TouchableOpacity onPress={()=>openAndCloseFirst('a')} style={styles.btnText} activeOpacity={1}>
                  {test === 'a' ? <HowUseIt/> : <Text style={{fontSize:24}}>Como usar la app</Text> }
                </TouchableOpacity>
            </View>
            <View style={[styles.boxQuestion,{display:test === 'b' || test === '' ? 'flex' : 'none'},{height:test === 'b' ? '70%' : '15%'}]}>
                <TouchableOpacity onPress={()=>openAndCloseSecond('b')} style={styles.btnText} activeOpacity={1}>
                  { test === 'b' ? <HowToWin/> : <Text  style={{fontSize:24}}>Como ganar puntos</Text>}
                </TouchableOpacity>
            </View>
            <View style={[styles.boxQuestion,{display:test === 'c' || test === '' ? 'flex' : 'none'},{height:test === 'c' ? '70%' : '15%'}]}>
               <TouchableOpacity onPress={()=>openAndCloseThird('c')} activeOpacity={1}>
               { test === 'c' ? <HowToUpgrade/> : <Text  style={{fontSize:24}}>Niveles disponibles</Text>}
                </TouchableOpacity>
            </View>
            <View style={[styles.boxQuestion,{display:test === 'd' || test === '' ? 'flex' : 'none'},{height:test === 'd' ? '70%' : '15%'}]}>
            <TouchableOpacity onPress={()=>openAndCloseFourth('d')} activeOpacity={1}>
            { test === 'd' ? <WhenCanI/> : <Text  style={{fontSize:24}}>Cuando llega mi canje</Text>}
                </TouchableOpacity>
            </View>
                <DownBar/>
            </View>
    )
}