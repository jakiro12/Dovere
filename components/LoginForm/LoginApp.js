import {  Text, TextInput, TouchableOpacity, View,Image} from 'react-native';
import stylesApp from './stylesLogin';
import { useState } from 'react';
export default function GetIn({navigation}) {  // pasar navegacion en el boton
  const[text,setText]=useState("\tusuario") // espacio en blanco tambien funciona
  const[pass,setPass]=useState("\tpassword")
  const urlLogoGoogle='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'
  const urlLogoFacebook='https://logotipoz.com/wp-content/uploads/2021/10/logo-facebook-png.png'
  return (
    <View style={stylesApp.container}>
      <View style={stylesApp.logoLogin}>
        <Image style={stylesApp.imageLoginLogo} source={require('../imagesDisplayed/bottle.jpg')} resizeMode='cover' />
      </View>
      <View style={stylesApp.contianerInputs}>
        <TextInput  style={stylesApp.inputTextStyles}
        value={text}
        onChangeText={setText}
        ></TextInput>
        <TextInput  style={stylesApp.inputTextStyles}
          value={pass}
          onChangeText={setPass}
        ></TextInput>
        <TouchableOpacity style={stylesApp.get_into_app}  onPress={()=>{navigation.navigate('Home_login')}}>
         <Text>INGRESAR</Text>
        </TouchableOpacity>
          <View style={stylesApp.registerOption}>
            <TouchableOpacity activeOpacity={1} style={stylesApp.textAsk}>
            <Text style={stylesApp.resgisterText}>¿No tienes una cuenta aun? Registrate
        </Text>
            </TouchableOpacity>
       

          </View>

      </View>
      <View style={stylesApp.containerAuthWithMedias}>

          <View style={stylesApp.containerLogo_F_G}>
            <View style={stylesApp.bothLogos}>
                <Image source={{uri:urlLogoGoogle}} resizeMode='cover' style={stylesApp.svgStyles}/>
            </View>
            <View style={stylesApp.bothLogos}>
            <Image source={{uri:urlLogoFacebook}} resizeMode='contain' style={stylesApp.svgStyles}/>
            </View>
          </View>
            <Text>Tambien puedes ingresar con tus redes</Text>
          

      </View>


    </View>
  );
}

