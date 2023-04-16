import { View,TouchableOpacity,Image } from "react-native";
import style from './barStyles';
import {useNavigation} from '@react-navigation/native'

export default function DownBar(){
    const navigation=useNavigation()
    return(
        <View style={style.container}>
           <TouchableOpacity style={style.butonNavigate} onPress={()=>navigation.navigate('Home_login')}>
             <Image source={require('../imagesDisplayed/House.png')} resizeMode='contain'  style={style.vectorColor}/>
           </TouchableOpacity>
           <TouchableOpacity style={style.butonNavigate} onPress={()=>navigation.navigate('Redeem_Or_Donate')}>
           <Image source={require('../imagesDisplayed/Gift.png')} resizeMode='contain'  style={style.vectorColor}/>

           </TouchableOpacity>
           <TouchableOpacity style={style.butonNavigate} onPress={()=>navigation.navigate('Open_Qr_Reader')}>
           <Image source={require('../imagesDisplayed/Qr.png')} resizeMode='contain'  style={style.vectorColor}/>

           </TouchableOpacity>
           <TouchableOpacity style={style.butonNavigate} onPress={()=>navigation.navigate('See_centers')} >
           <Image source={require('../imagesDisplayed/Ping.png')}  resizeMode='contain'  style={style.vectorColor}/>

           </TouchableOpacity>
           <View style={style.butonNavigate}>
           <Image source={require('../imagesDisplayed/Book.png')} resizeMode='contain'  style={style.vectorColor}/>
           </View>

        </View>
    )
}