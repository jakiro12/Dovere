import {Text,TouchableOpacity,View,Modal,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DownBar from '../../DownNavBar/NavOptions';
import styles from './styleGift'
import { useState,useContext } from 'react';
import { useNavigation,useRoute } from '@react-navigation/native';
import { supabase } from '../../../supabeConn/supabase';
import AppCounter from '../../Provider/ProviderStatus';
import YouDonHaveEnoughPoints from '../DeniedModalReq/AlertNotEnoughPoints';
export default function RedeemPointsForGift(){
    const navigation=useNavigation()
    const{dataPoints,setNewChanges}=useContext(AppCounter)
    const route=useRoute()
    const{nameProductToRedeem,discountPoints,win}=route.params;
    const[showModal,setShowModal]=useState(false) 
    const[deniedRequest,setDeniedRequest]=useState(false)
    const verifyIfUserHaveEnoughPoints=async()=>{
        if(dataPoints[0].points > discountPoints ){
            const{error} = await supabase.from('user_score').update({points:( dataPoints[0].points- discountPoints)}).eq('id',1)
            if(error) return console.log(error) // agregar el numero a restar diresctamente entre ()
            setShowModal(true)
            setNewChanges(true)
        }else{
            console.log('no tienes suficientes puntos')
            setDeniedRequest(true)
        }
    }
    return(
        <View  style={styles.container}>
            <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <View style={styles.logoProfile}>
                    <Text>A</Text>
                </View>
            </View>
            <View style={styles.boxRedeemGift}>
                <Text style={styles.textInit}>Estas por canjear una {nameProductToRedeem}</Text>
                    <View style={styles.itemGiftLogo}>
                        <Image resizeMode='contain' style={styles.imageSize} source={require('../../imagesDisplayed/redeemGift.png')}/>
                    </View>
                <View style={styles.boxInfoGift}>
                    <Text>Estas a punto de canjear {discountPoints} puntos por un equivalente a {win} en {nameProductToRedeem}
                    </Text>
                </View>
                <TouchableOpacity style={styles.redeemBtnSubmit} onPress={verifyIfUserHaveEnoughPoints}><Text style={styles.textBtn}>Canjear</Text></TouchableOpacity>
            </View>
            <Modal 
                animationType='slide'
                visible={showModal}
                transparent={false}               
            >
                <View style={styles.modalContainer}>
                    <View style={styles.checkSucces}>
                    <Icon name="check" size={30} color="#ffffff" />
                    </View>
                    <Text style={styles.modalText}>
                        Has canjeado exitosamente un {nameProductToRedeem}
                    </Text>
                    <TouchableOpacity style={styles.modalClose} onPress={()=>navigation.navigate('Redeem_Or_Donate')}>
                        <Text style={styles.fontModalClose}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <YouDonHaveEnoughPoints allowReq={deniedRequest}/>
            <DownBar/>
        </View>
    )
}
