import {View,Text,TouchableOpacity,ScrollView,Image} from 'react-native';
import React,{ useContext} from 'react';
import styles from './stylesOptions';
import { useNavigation } from '@react-navigation/native';
import DownBar from '../DownNavBar/NavOptions';
import AppCounter from '../Provider/ProviderStatus';
export default function SeeMyOptions(){
    const navigation=useNavigation()
    const {redeem,setRedeem,setActiveBtn,dataPoints}=useContext(AppCounter)
    const goToProfileStats=()=>{
        setActiveBtn('none')
        navigation.navigate('See_set_profile')
      }

      const dataGift=[{
        id:1,
        name_product:'pasaje',
        quantity_aviable:1000,
        points_request:100
      },
     { id:2,
      name_product:'recarga',
      quantity_aviable:1500,
      points_request:2000
    },
    { id:3,
        name_product:'LTC',
        quantity_aviable:1,
        points_request:4000
      },
    ]
    const dataDonate=[
        {
            id:1,
            company_name:'Green',
            points_redeem:1000,
        },
        {
            id:2,
            company_name:'Nestle',
            points_redeem:500,
        },
        {
            id:3,
            company_name:'Q&A',
            points_redeem:1500,
        },
    ]
    return(
        <View style={styles.container}>
            <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <TouchableOpacity style={styles.logoProfile} onPress={()=>goToProfileStats()}>
                    <Text>A</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statusAndPoints}>
                <View style={styles.userStats}>
                        <View style={styles.pointContainer}>
                            <Text style={styles.poinsText}>Puntaje Acumulado</Text>
                            <Text style={styles.poinsText}>{dataPoints[0].points}</Text>
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
                   {redeem.redeemDefault ?  dataGift.map((e)=>(<View style={styles.boxTicket} key={e.id}>
                        <View style={styles.ticketLogo}>
                            <Image source={require('../imagesDisplayed/ticket.png')} resizeMode='cover' />
                        </View>
                        <View style={styles.ticketInfo}>
                            <Text> {e.name_product} ({e.quantity_aviable})</Text>
                            <Text>{e.points_request} puntos</Text>
                            <TouchableOpacity style={styles.redeemPoints} onPress={()=>navigation.navigate('Redeem_gift',{nameProductToRedeem:e.name_product})}>
                            <Text>Ver</Text>
                            </TouchableOpacity>
                        </View>
                    </View>)) :
                  dataDonate.map((e)=> (<View style={styles.boxTicket} key={e.id}>
                    <View style={styles.ticketLogo}>
                        <Image source={require('../imagesDisplayed/Give.png')} resizeMode='cover' />
                    </View>
                    <View style={styles.ticketInfo}>
                        <Text>{e.company_name}</Text>
                        <Text>$100 ({e.points_redeem})</Text>
                        <TouchableOpacity style={styles.redeemPoints}  onPress={()=> navigation.navigate('Give_points',{donateToCompany:e.company_name})}>
                        <Text>Ver</Text>
                        </TouchableOpacity>
                    </View>
                </View>))
                    }
                </ScrollView>
            </View>
            <DownBar/>
        </View>
    )
}