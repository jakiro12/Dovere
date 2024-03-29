import { Text,View,Image,TouchableOpacity,Modal } from "react-native";
import styles from './stylesNewUser'
import { TextInput } from "react-native";
import { useState,useRef,useEffect } from "react";
import { supabase } from "../../supabeConn/supabase";
export default function FormToCreateANewUser(){
    const[dataTo,setDataTo]=useState({
        nameNew:'',
        passNew:''
    })
    const[post,setPost]=useState([])
    useEffect(()=>{
        const fetchPost=async()=>{
        const {data,error}= await supabase.from('users_data').select('*')
        if(error){
            console.log(error)
        }else{
            setPost(data)
             } 
        }
        fetchPost()
    },[])
    const regexPass=/^[a-zA-Z0-9]{7,12}$/ //Cambiar porque esta mal esta regex
    const signUpWithEmail=async() =>{
        if(dataTo.nameNew === '' || dataTo.passNew === '' ){
            setMsgAlert('Debes completar todos los campos')
            textColor.current='#e90c0c'
            imageAlert.current='denied'}
            else if(regexPass.test(dataTo.passNew) && dataTo.nameNew.length > 0 ){
                const { error,data } = await supabase.auth.signUp({
                    email: dataTo.nameNew,
                    password: dataTo.passNew,
                  })
                  if (error) setMsgAlert(error.message)
                  if(!error) setMsgAlert('Usuario Creado con exito')
                  textColor.current='#6cef14'
            }else{
                console.log('error de conexion')
            }
        setSeeAlertAction(true)
      }
    const textColor=useRef('#000000')
    const imageAlert=useRef('')
    const[seeAlertAction,setSeeAlertAction]=useState(false)
    const[msgAlert,setMsgAlert]=useState('')
    const setNewUserValues=(key,value)=>{
        setDataTo({...dataTo,[key]:value})
    }
  
    let imageCongrats=require('../imagesDisplayed/recycled_new.jpg')
    let imageDenied=require('../imagesDisplayed/not_acpt.jpg')
  
    return(
        <View style={styles.container}>
                <View style={styles.formContianerInp}>
                <View style={styles.logoLogin}>
                    <Image style={styles.imageLoginLogo} resizeMode="cover" source={require('../imagesDisplayed/bottle.jpg')}/>
                </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textInput}>
                           Crear nuevo usuario
                        </Text>
                    <TextInput 
                        style={styles.inptField}
                        value={dataTo.nameNew}
                        onChangeText={(inserting)=>setNewUserValues('nameNew',inserting)}
                        placeholder="email"
                    ></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textInput}>Crear contraseña</Text>
                    <TextInput 
                        style={styles.inptField}
                        value={dataTo.passNew}
                        onChangeText={(inserting)=>setNewUserValues('passNew',inserting)}
                        placeholder="crear contraseña"
                        secureTextEntry
                    ></TextInput>
                    </View>
                    <TouchableOpacity style={styles.new_into_app} activeOpacity={1} onPress={signUpWithEmail}>
                        <Text >CREAR</Text>
                    </TouchableOpacity>
                </View>
                <Modal 
                animationType="none"
                visible={seeAlertAction === true ? true : false}
                onRequestClose={()=>setSeeAlertAction(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.boxAlert}>
                            <View style={styles.logoAlert}>
                                <Image  resizeMode="stretch" style={styles.logoLogin} source={imageAlert.current === 'denied' ? imageDenied : imageCongrats}/>
                            </View>
                            <View style={styles.infoAlert}>
                                <Text style={{color:`${textColor.current}`,fontSize:18,fontWeight:'bold'}}>{msgAlert}</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
        </View>
    )
}