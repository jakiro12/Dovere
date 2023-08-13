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
    const textColor=useRef('#000000')
    const imageAlert=useRef('')
    const[seeAlertAction,setSeeAlertAction]=useState(false)
    const[msgAlert,setMsgAlert]=useState('')
    const setNewUserValues=(key,value)=>{
        setDataTo({...dataTo,[key]:value})
    }
    const regexUserName=/^[a-zA-Z]{7,15}$/
    const regexPass=/^[a-zA-Z0-9]{8,12}$/ //Cambiar porque esta mal esta regex
    let imageCongrats=require('../imagesDisplayed/recycled_new.jpg')
    let imageDenied=require('../imagesDisplayed/not_acpt.jpg')
    const verifyDataToSend=async()=>{
        if(dataTo.nameNew === '' || dataTo.passNew === '' ){
            setMsgAlert('Debes completar todos los campos')
            textColor.current='#e90c0c'
            imageAlert.current='denied'
        }else if(regexUserName.test(dataTo.nameNew) && regexPass.test(dataTo.passNew) ){
            setMsgAlert('Usuario creado exitosamente')
            textColor.current='#6AC52D'
            imageAlert.current='accepted'  
            let checkAviable=post.filter((e)=> e.name_user === dataTo.nameNew) 
            if(checkAviable.length > 0) return alert('ya existe elija otro') //agregar otro modal
            const{data,error}=await supabase.from('users_data').insert([{name_user:dataTo.nameNew,pass_user:dataTo.passNew}],{})
            if(error) console.log(error)
        }else{
            setMsgAlert('Usuario solo acepta 7 a 15 mayusculas y minisculas, el password 8 a 12 mayusculas minisculas y numeros')
            textColor.current='#e90c0c'
            imageAlert.current='denied'
        }
       setSeeAlertAction(true)
    }
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
                        placeholder="crear usuario"
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
                    <TouchableOpacity style={styles.new_into_app} activeOpacity={1} onPress={verifyDataToSend}>
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