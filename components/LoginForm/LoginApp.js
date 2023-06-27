import {  Text, TextInput, TouchableOpacity, View,Image} from 'react-native';
import stylesApp from './stylesLogin';
import { useState } from 'react';
export default function GetIn({navigation}) {  // pasar navegacion en el boton
  const[dataUser,setDataUser]=useState({
    userName:'\tusuario',
    password:'\tpassword'
  })
  const handleUserLoginData=(key,value)=>{
    setDataUser({...dataUser,[key]:value})
  }
  const verifyLoginData=()=>{
    console.log(dataUser)
    navigation.navigate('Home_login')
  }
  const createNewUser =()=>{
    navigation.navigate('Register')
  }
  const urlLogoGoogle='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'
  const urlLogoFacebook='https://logotipoz.com/wp-content/uploads/2021/10/logo-facebook-png.png'
  return (
    <View style={stylesApp.container}>
      <View style={stylesApp.logoLogin}>
        <Image style={stylesApp.imageLoginLogo} source={require('../imagesDisplayed/bottle.jpg')} resizeMode='cover' />
      </View>
      <View style={stylesApp.contianerInputs}>
        <TextInput  style={stylesApp.inputTextStyles}
        value={dataUser.userName}
        onChangeText={(enteredValue)=>handleUserLoginData('userName',enteredValue)}
        ></TextInput>
        <TextInput  style={stylesApp.inputTextStyles}
         secureTextEntry
          value={dataUser.password}
          onChangeText={(enteredValue)=>handleUserLoginData('password',enteredValue)}
        ></TextInput>
        <TouchableOpacity style={stylesApp.get_into_app}  onPress={verifyLoginData}>
         <Text>INGRESAR</Text>
        </TouchableOpacity>
          <View style={stylesApp.registerOption}>
            <TouchableOpacity activeOpacity={1} style={stylesApp.textAsk} onPress={createNewUser}>
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

