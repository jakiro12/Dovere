import {View,Text,TouchableOpacity,ScrollView,Image} from 'react-native';
import React,{ useContext, useState } from 'react';
import styles from './stylesOptions';
import { useNavigation } from '@react-navigation/native';
import DownBar from '../DownNavBar/NavOptions';
import AppCounter from '../Provider/ProviderStatus';
export default function SeeMyOptions(){
    const navigation=useNavigation()
    const {redeem,setRedeem}=useContext(AppCounter)
    return(
        <View style={styles.container}>
            <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <TouchableOpacity style={styles.logoProfile} onPress={()=>{navigation.navigate('See_set_profile')}}>
                    <Text>A</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statusAndPoints}>
                <View style={styles.userStats}>
                        <View style={styles.pointContainer}>
                            <Text style={styles.poinsText}>Puntaje Acumulado</Text>
                            <Text style={styles.poinsText}>200</Text>
                            </View>
                        <View style={styles.growStatus}>
                            <Text style={styles.growText}>Crecimiento</Text>
                            <Text style={styles.growText}>Logo</Text>
                            </View>
                    </View>
            </View>
            <View style={styles.sliderContent}>
                <View style={styles.btnOptions}>
                  <TouchableOpacity style={[styles.btnDisplayedRedeemm,{ transform: [{scale: redeem.redeemDefault === true ? 1.4 : 1}]}]} onPress={()=>setRedeem({
        redeemDefault:true
    })} ><Text>Canjear</Text></TouchableOpacity>
                    
                  <TouchableOpacity style={[styles.btnDisplayedGift,{ transform: [{scale: redeem.redeemDefault === false ? 1.4 : 1}],}]} onPress={()=>setRedeem({
        redeemDefault:false
    })}><Text>Donar</Text></TouchableOpacity>
                    
                </View>
                <ScrollView style={styles.scrollOptions} showsVerticalScrollIndicator={false}>
                   {redeem.redeemDefault ?  <View style={styles.boxTicket}>
                        <View style={styles.ticketLogo}>
                            <Image source={require('../imagesDisplayed/ticket.png')} resizeMode='cover' />
                        </View>
                        <View style={styles.ticketInfo}>
                            <Text>1 Pasaje</Text>
                            <Text>100 puntos</Text>
                            <TouchableOpacity style={styles.redeemPoints}>
                            <Text>Canjear</Text>
                            </TouchableOpacity>
                        </View>
                    </View> :
                    <View style={styles.boxTicket}>
                    <View style={styles.ticketLogo}>
                        <Image source={require('../imagesDisplayed/Give.png')} resizeMode='cover' />
                    </View>
                    <View style={styles.ticketInfo}>
                        <Text>Fundacion</Text>
                        <Text>$100 (100pts)</Text>
                        <TouchableOpacity style={styles.redeemPoints}>
                        <Text>Donar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    }
                   
            
                   
                </ScrollView>
            </View>
            <DownBar/>
        </View>
    )
}