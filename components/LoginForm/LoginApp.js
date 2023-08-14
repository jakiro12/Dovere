import {  Text, TextInput, TouchableOpacity, View,Image,Keyboard} from 'react-native';
import stylesApp from './stylesLogin';
import { useState,useEffect } from 'react';
import { supabase } from '../../supabeConn/supabase';
export default function GetIn({navigation}) {  // pasar navegacion en el boton
  const[dataUser,setDataUser]=useState({
    userName:'',
    password:''
  })
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const handleUserLoginData=(key,value)=>{
    setDataUser({...dataUser,[key]:value})
  }
  const verifyLoginData=async()=>{
      const {data,error} = await supabase.from('users_data').select(`name_user,pass_user`)
     let find_U_N=data.filter((e)=> e.name_user === dataUser.userName)
      console.log(find_U_N[0])
      if(find_U_N.length > 0 && find_U_N[0].pass_user === dataUser.password){
    navigation.navigate('Home_login')
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
            <View style={stylesApp.bothLogos}>
                <Image source={{uri:urlLogoGoogle}} resizeMode='cover' style={stylesApp.svgStyles}/>
            </View>
            <View style={stylesApp.bothLogos}>
            <Image source={{uri:urlLogoFacebook}}  style={stylesApp.svgStyles}/>
            </View>
          </View>
            <Text>Tambien puedes ingresar con tus redes</Text>
          

      </View>
     :
     null }
    </View>
  );
}

