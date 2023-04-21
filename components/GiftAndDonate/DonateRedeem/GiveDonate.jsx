import { View,Text,Image,TouchableOpacity,Modal } from 'react-native';
import styles from './stylesDonate'
import DownBar from '../../DownNavBar/NavOptions';
import { useState } from 'react';
export default function GiveMyPoints(){
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
                <Text style={styles.textInit}>Estas por dona dinero a empresa</Text>
                    <View style={styles.itemGiftLogo}>
                        <Image resizeMode='contain' style={styles.imageSize} source={require('../../imagesDisplayed/bus.png')}/>
                    </View>
                <View style={styles.boxInfoGift}>
                    <Text>Estas a punto de donar 1000 pesos argentinos  
                            a una ong
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
                <View><Text>Hola</Text></View>
            </Modal>
            <DownBar/>
        </View>
    )
}