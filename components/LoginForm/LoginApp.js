import {  Text, TextInput, TouchableOpacity, View,Image,Keyboard} from 'react-native';
import stylesApp from './stylesLogin';
import { useState,useEffect,useContext} from 'react';
import { supabase } from '../../supabeConn/supabase';
import ModalForLogin from './ModalLogin/AlertLog';
import AppCounter from '../Provider/ProviderStatus';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowserRequest from 'expo-web-browser'
export default function GetIn({navigation}) {  // pasar navegacion en el boton
  const{setNameUserLogged}=useContext(AppCounter)
  WebBrowserRequest.maybeCompleteAuthSession()
  const[dataUser,setDataUser]=useState({
    userName:'',
    password:''
  })
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [showAlert,setShowAlert]=useState(false)
  const[request,response,promtAsync]=Facebook.useAuthRequest({
    clientId:"982902083047954",
  })
  const handleUserLoginData=(key,value)=>{
    setDataUser({...dataUser,[key]:value})
  }
  const verifyLoginData=async()=>{
      const {data,error} = await supabase.from('users_data').select(`name_user,pass_user`)
     let find_U_N=data.filter((e)=> e.name_user === dataUser.userName)
      if(find_U_N.length > 0 && find_U_N[0].pass_user === dataUser.password){
        setNameUserLogged(dataUser.userName)
      navigation.navigate('Home_login')
      }else{
        setShowAlert(true)
      }
  }
  const initWithGoogle=async()=>{
 console.log('hoasdf')   
    //debo redireccionar a un link externo a la app para crear un token de acceso
  }
  const initWithFacebook=async()=>{
    const{data,error}= await supabase.auth.signInWithOAuth({
      provider:'facebook',
    })
    if(error)return console.log(error)
    let result = await WebBrowserRequest.openBrowserAsync(data.url)
  if(result.type === "opened"){
    const responseFromFacebook=await promtAsync()
      if(responseFromFacebook) navigation.navigate('Home_login')
  }
}
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    // Limpieza de los listeners cuando el componente se desmonta
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const urlLogoGoogle='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'
  const urlLogoFacebook='https://logotipoz.com/wp-content/uploads/2021/10/logo-facebook-png.png'
  return (
    <View style={stylesApp.container}>
      <View style={stylesApp.logoLogin}>
        <Image style={stylesApp.imageLoginLogo} source={require('../imagesDisplayed/bottle.jpg')} resizeMode='cover' />
      </View>
      <View style={[stylesApp.contianerInputs,{height:isKeyboardVisible ? '60%': '40%'}]}>
        <TextInput  style={stylesApp.inputTextStyles}
        value={dataUser.userName}
        onChangeText={(enteredValue)=>handleUserLoginData('userName',enteredValue)}
        placeholder='usuario'
        ></TextInput>
        <TextInput  style={stylesApp.inputTextStyles}
         secureTextEntry
          value={dataUser.password}
          onChangeText={(enteredValue)=>handleUserLoginData('password',enteredValue)}
          placeholder='contraseña'
        ></TextInput>
        <TouchableOpacity style={stylesApp.get_into_app}  onPress={verifyLoginData}>
         <Text>INGRESAR</Text>
        </TouchableOpacity>
          <View style={stylesApp.registerOption}>
            <TouchableOpacity activeOpacity={1} style={stylesApp.textAsk} onPress={()=>navigation.navigate('Create_user')}>
            <Text style={stylesApp.resgisterText}>¿No tienes una cuenta aun? Registrate
        </Text>
            </TouchableOpacity>
          </View>

      </View>
      {isKeyboardVisible === false ? 
      
      <View style={stylesApp.containerAuthWithMedias}>
          <View style={stylesApp.containerLogo_F_G}>
            <TouchableOpacity style={stylesApp.bothLogos} onPress={initWithGoogle}>
                <Image source={{uri:urlLogoGoogle}} resizeMode='cover' style={stylesApp.svgStyles}/>
            </TouchableOpacity>
            <TouchableOpacity style={stylesApp.bothLogos} onPress={initWithFacebook}>
            <Image source={{uri:urlLogoFacebook}}  style={stylesApp.svgStyles}/>
            </TouchableOpacity>
          </View>
            <Text>Tambien puedes ingresar con tus redes</Text>
          

      </View>
     :
     null }
      <ModalForLogin displayAlert={showAlert} closeModal={()=>setShowAlert(false)} />
    </View>
  );
}

