import {Text,View,TouchableOpacity} from 'react-native';
import DownBar from '../DownNavBar/NavOptions';
import styles from './stylesAks';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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
            <View style={[styles.boxQuestion,{display:test === 'a' || test === '' ? 'flex' : 'none'}]} >
                <TouchableOpacity onPress={()=>openAndCloseFirst('a')}>
                <Text>Como se utiliza la app</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.boxQuestion,{display:test === 'b' || test === '' ? 'flex' : 'none'}]}>
                <TouchableOpacity onPress={()=>openAndCloseSecond('b')}>
                <Text>Como ganar puntos</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.boxQuestion,{display:test === 'c' || test === '' ? 'flex' : 'none'}]}>
               <TouchableOpacity onPress={()=>openAndCloseThird('c')}>
                <Text>Cuantos niveles y beneficios existen?</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.boxQuestion,{display:test === 'd' || test === '' ? 'flex' : 'none'}]}>
            <TouchableOpacity onPress={()=>openAndCloseFourth('d')}>
                <Text>Cuanto tiempo demora en llegar mi canje u donacion</Text>
                </TouchableOpacity>
            </View>

                <DownBar/>
            </View>
    )
}