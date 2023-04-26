import {Text,TouchableOpacity,View,Modal,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DownBar from '../../DownNavBar/NavOptions';
import styles from './styleGift'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function RedeemPointsForGift(){
    const navigation=useNavigation()
    const[showModal,setShowModal]=useState(false)
    return(
        <View  style={styles.container}>
            <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <View style={styles.logoProfile}>
                    <Text>A</Text>
                </View>
            </View>
            <View style={styles.boxRedeemGift}>
                <Text style={styles.textInit}>Estas por canjear una recarga en la tarjeta</Text>
                    <View style={styles.itemGiftLogo}>
                        <Image resizeMode='contain' style={styles.imageSize} source={require('../../imagesDisplayed/bus.png')}/>
                    </View>
                <View style={styles.boxInfoGift}>
                    <Text>Estas a punto de canjear 1000 puntos por un equivalente a $100 
                        en la tarjeta del colectivo
                    </Text>
                </View>
                <TouchableOpacity style={styles.redeemBtnSubmit} onPress={()=>setShowModal(true)}><Text style={styles.textBtn}>Canjear</Text></TouchableOpacity>
            </View>
            <Modal 
                animationType='slide'
                visible={showModal}
                transparent={false}
                onRequestClose={()=>setShowModal(false)}
                
            >
                <View style={styles.modalContainer}>
                    <View style={styles.checkSucces}>
                    <Icon name="check" size={30} color="#ffffff" />
                    </View>
                    <Text style={styles.modalText}>
                        Has canjeado exitosamente nombre del producto
                    </Text>
                    <TouchableOpacity style={styles.modalClose} onPress={()=>navigation.navigate('Redeem_Or_Donate')}>
                        <Text style={styles.fontModalClose}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <DownBar/>
        </View>
    )
}
