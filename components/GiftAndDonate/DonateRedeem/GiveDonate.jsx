import { View,Text,Image,TouchableOpacity,Modal } from 'react-native';
import styles from './stylesDonate'
import DownBar from '../../DownNavBar/NavOptions';
import { useState,useContext } from 'react';
import { useNavigation,useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'
import YouDonHaveEnoughPoints from '../DeniedModalReq/AlertNotEnoughPoints';
import AppCounter from '../../Provider/ProviderStatus';
import { supabase } from '../../../supabeConn/supabase';
export default function GiveMyPoints(){
    const navigation=useNavigation()
    const route=useRoute()
    const{dataPoints,setNewChanges}=useContext(AppCounter)
    const[showModal,setShowModal]=useState(false)
    const[deniedRequest,setDeniedRequest]=useState(false)
    const {donateToCompany,discountPoints}=route.params;
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
        <View style={styles.container}>
           <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <View style={styles.logoProfile}>
                    <Text>A</Text>
                </View>
            </View>
            <View style={styles.boxRedeemGift}>
                <Text style={styles.textInit}>Doancion para {donateToCompany}</Text>
                    <View style={styles.itemGiftLogo}>
                        <Image resizeMode='contain' style={styles.imageSize} source={require('../../imagesDisplayed/donate.png')}/>
                    </View>
                <View style={styles.boxInfoGift}>
                    <Text>Estas a punto de donar 1000 ARS a {donateToCompany}
                    </Text>
                </View>
                <TouchableOpacity style={styles.redeemBtnSubmit} onPress={verifyIfUserHaveEnoughPoints}><Text style={styles.textBtn}>Donar</Text></TouchableOpacity>
            </View>
            <Modal
            visible={showModal}
            transparent={false}
            animationType='slide'
            >
                 <View style={styles.modalContainer}>
                 <View style={styles.checkSucces}>
                    <Icon name="check" size={30} color="#ffffff" />
                    </View>
                    <Text style={styles.modalText}>
                        Has donado exitosamente a {donateToCompany}
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