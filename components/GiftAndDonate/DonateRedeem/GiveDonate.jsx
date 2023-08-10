import { View,Text,Image,TouchableOpacity,Modal } from 'react-native';
import styles from './stylesDonate'
import DownBar from '../../DownNavBar/NavOptions';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function GiveMyPoints(){
    const navigation=useNavigation()
    const[showModal,setShowModal]=useState(false)
    return(
        <View style={styles.container}>
           <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <View style={styles.logoProfile}>
                    <Text>A</Text>
                </View>
            </View>
            <View style={styles.boxRedeemGift}>
                <Text style={styles.textInit}>Doancion para .....</Text>
                    <View style={styles.itemGiftLogo}>
                        <Image resizeMode='contain' style={styles.imageSize} source={require('../../imagesDisplayed/bus.png')}/>
                    </View>
                <View style={styles.boxInfoGift}>
                    <Text>Estas a punto de donar 1000 ARS a una ONG
                    </Text>
                </View>
                <TouchableOpacity style={styles.redeemBtnSubmit} onPress={()=>setShowModal(true)}><Text style={styles.textBtn}>Donar</Text></TouchableOpacity>
            </View>
            <Modal
            visible={showModal}
            onRequestClose={()=>setShowModal(false)}
            transparent={false}
            animationType='slide'
            >
                 <View style={styles.modalContainer}>
                 <View style={styles.checkSucces}>
                    <Icon name="check" size={30} color="#ffffff" />
                    </View>
                    <Text style={styles.modalText}>
                        Has donado exitosamente nombe de la ong
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