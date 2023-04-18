import {Text,TouchableOpacity,View,Modal} from 'react-native';
import DownBar from '../../DownNavBar/NavOptions';
import styles from './styleGift'
import { useState } from 'react';
export default function RedeemPointsForGift(){
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
                        <Text>Logo</Text>
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
                <View style={{width:'90%',height:'60%',backgroundColor:'#4f4f4f',alignSelf:'center',marginTop:'30%'}}>

                </View>
            </Modal>
            <DownBar/>
        </View>
    )
}
