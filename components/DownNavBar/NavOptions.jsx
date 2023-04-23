import { View,TouchableOpacity,Image } from "react-native";
import style from './barStyles';
import {useNavigation} from '@react-navigation/native';
import { useContext } from "react";
import AppCounter from "../Provider/ProviderStatus";

export default function DownBar(){
    const navigation=useNavigation()
    const {activeBtn,setActiveBtn}=useContext(AppCounter)
    const navigateToHome=(e)=>{  
      setActiveBtn(e)
      navigation.navigate('Home_login')
    }
    const navigateToRedeem=(e)=>{  
      setActiveBtn(e)
      navigation.navigate('Redeem_Or_Donate')
    }
    const navigateToQr=(e)=>{  
      setActiveBtn(e)
      navigation.navigate('Open_Qr_Reader')
    }
    const navigateToMap=(e)=>{  
      setActiveBtn(e)
      navigation.navigate('See_centers')
    }
    const navigateToFaq=(e)=>{
      setActiveBtn(e)
      navigation.navigate('Faq')
    }
    return(
        <View style={style.container}>
           <TouchableOpacity activeOpacity={1} style={[style.butonNavigate,{backgroundColor:activeBtn === 'home' ? '#6AC52D' : '#000000'}]} onPress={()=>navigateToHome('home')}>
             <Image source={require('../imagesDisplayed/House.png')} resizeMode='contain'  style={style.vectorColor}/>
           </TouchableOpacity>
           <TouchableOpacity activeOpacity={1} style={[style.butonNavigate,{backgroundColor:activeBtn === 'redeem' ? '#6AC52D' : '#000000'}]} onPress={()=>navigateToRedeem('redeem')}>
           <Image source={require('../imagesDisplayed/Gift.png')} resizeMode='contain'  style={style.vectorColor}/>

           </TouchableOpacity>
           <TouchableOpacity activeOpacity={1} style={[style.butonNavigate,{backgroundColor:activeBtn === 'openQr' ? '#6AC52D' : '#000000'}]} onPress={()=>navigateToQr('openQr')}>
           <Image source={require('../imagesDisplayed/Qr.png')} resizeMode='contain'  style={style.vectorColor}/>

           </TouchableOpacity>
           <TouchableOpacity activeOpacity={1} style={[style.butonNavigate,{backgroundColor:activeBtn === 'maps' ? '#6AC52D' : '#000000'}]} onPress={()=>navigateToMap('maps')} >
           <Image source={require('../imagesDisplayed/Ping.png')}  resizeMode='contain'  style={style.vectorColor}/>

           </TouchableOpacity>
           <TouchableOpacity activeOpacity={1} style={[style.butonNavigate,{backgroundColor:activeBtn === 'ask' ? '#6AC52D' : '#000000'}]} onPress={()=>navigateToFaq('ask')}>
           <Image source={require('../imagesDisplayed/Book.png')} resizeMode='contain'  style={style.vectorColor}/>
           </TouchableOpacity>

        </View>
    )
}