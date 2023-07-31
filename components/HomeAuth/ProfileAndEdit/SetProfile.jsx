import {View,Text,StatusBar,Image,ScrollView,TouchableOpacity} from 'react-native';
import styles from './SetStyles'
import DownBar from '../../DownNavBar/NavOptions';
import ArrowBorderRight from './Symbols/ArrowRigth';
import ArrowBorderLeft from './Symbols/ArrowLeft';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import AppCounter from '../../Provider/ProviderStatus';
export default function SetAndEditUserProfile(){
    const {setRedeem}=useContext(AppCounter)
    const navigation=useNavigation()
    const goToRedeemGift=()=>{
        navigation.navigate('Redeem_Or_Donate')
        setRedeem( {redeemDefault:true})

    }   
    const goToReedemDonation=()=>{
        navigation.navigate('Redeem_Or_Donate')
        setRedeem( {redeemDefault:false})
    }
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E3E4D3"  />
            <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <View style={styles.logoProfile} >
                    <Text>A</Text>
                </View>
            </View>
            <View style={styles.containerPhoto}>
                <View style={styles.photoDisplay}><Image style={styles.photoUser} resizeMode='cover' source={require('../../imagesDisplayed/default_photo.jpg')} /></View>
                <View style={styles.nameUserDisplay}>
                    <Text style={styles.levelName}>Jacaranda</Text>
                    <View style={styles.nameAndEdit}>   
                    <Text style={styles.fullName}>Nombre completo</Text>
                    <Image source={require('../../imagesDisplayed/pencil.png')} style={styles.editLogo} resizeMode='cover'/>
                    </View>
                    </View>
            </View>
          
            <View style={styles.sliderContent}>
               
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled  nestedScrollEnabled={true}>
                    <View style={styles.tagContainer}>
                        <View style={styles.optionTitle}>
                            <Text style={styles.fontTitle}>Mi puntaje</Text>
                            <ArrowBorderRight/>
                        </View>
                        <View>
                            <Text style={styles.fontPointsAviable}>Puntos disponibles: 1200</Text>
                        </View>
                        <View style={styles.boxBtn}>
                           <TouchableOpacity style={styles.btnRedeem} onPress={()=>goToRedeemGift()}>
                           <Image source={require('../../imagesDisplayed/ticket.png')} style={styles.redeemLogosImage} resizeMode='contain' />
                            <Text>Canjear</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.btnRedeem} onPress={()=>goToReedemDonation()}>
                           <Image source={require('../../imagesDisplayed/Give.png')} style={styles.redeemLogosImage} resizeMode='contain' />
                            <Text>Donar</Text>
                           </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.tagContainer}>
                    <View style={styles.optionTitle}>
                        <ArrowBorderLeft/>
                            <Text style={styles.fontTitle}>Crecimiento</Text>
                            <ArrowBorderRight/>
                        </View>
                        <View style={styles.logoAndLevel}>
                            <View style={styles.logoLevel}><Image style={styles.imageLogoLevel} source={require('../../imagesDisplayed/plant.png')} resizeMode='cover'/></View>
                            <Text style={styles.fontBottles}>Jacaranda</Text>
                        </View>
                        <View style={styles.actualAmount}>
                             <Text style={styles.allBottles}>4</Text>
                            <Text style={styles.fontBottles}>Botellas recicladas</Text>
                        </View>
                        </View>
                    <View style={styles.tagContainer}>
                    <View style={styles.optionTitle}>
                    <ArrowBorderLeft/>
                            <Text style={styles.fontTitle}>Movimientos</Text>
                        </View>
                        <ScrollView  style={styles.allRecord} showsVerticalScrollIndicator={false} contentContainerStyle={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                          
                                <Text style={{width:'100%',backgroundColor:'#B8D271',paddingBottom:5,fontWeight:600}}>  Mes</Text>
                                    <View style={{width:'90%',height:100,borderColor:'#2e4a21',borderBottomWidth:2,display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                                        <View style={{width:'30%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <Text>Logo</Text>
                                        </View>
                                        <View style={{width:'70%',height:'100%',display:'flex',justifyContent:'space-around'}}>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        </View>
                                    </View>
                                    <View style={{width:'90%',height:100,borderColor:'#2e4a21',borderBottomWidth:2,display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                                        <View style={{width:'30%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <Text>Logo</Text>
                                        </View>
                                        <View style={{width:'70%',height:'100%',display:'flex',justifyContent:'space-around'}}>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        </View>
                                    </View>
                                    <View style={{width:'90%',height:100,borderColor:'#2e4a21',borderBottomWidth:2,display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                                        <View style={{width:'30%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <Text>Logo</Text>
                                        </View>
                                        <View style={{width:'70%',height:'100%',display:'flex',justifyContent:'space-around'}}>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        </View>
                                    </View>
                        </ScrollView>
                    </View>
                    
                
                </ScrollView>
            </View>
            <DownBar/>
        </View>
    )
}