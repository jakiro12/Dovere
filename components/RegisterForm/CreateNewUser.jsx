import { Text,View,Image,TouchableOpacity,Modal } from "react-native";
import styles from './stylesNewUser'
import { TextInput } from "react-native";
import { useState } from "react";
export default function FormToCreateANewUser(){
    const[dataTo,setDataTo]=useState({
        nameNew:'',
        passNew:''
    })
    const[seeAlertAction,setSeeAlertAction]=useState(false)
    const[msgAlert,setMsgAlert]=useState('')
    const setNewUserValues=(key,value)=>{
        setDataTo({...dataTo,[key]:value})
    }
    const regexUserName=/^[a-zA-Z]{7,15}$/
    const regexPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$/
    const verifyDataToSend=()=>{
        console.log(dataTo)
        if(dataTo.nameNew === '' || dataTo.passNew === '' ){
            setMsgAlert('Debes completar todos los campos')
        }else if(regexUserName.test(dataTo.nameNew) && regexPass.test(dataTo.passNew) ){
            setMsgAlert('Usuario creado exitosamente')
        }else{
            setMsgAlert('Usuario solo acepta 7 a 15 mayusculas y minisculas, el password 8 a 12 mayusculas minisculas y numeros')
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
                    ></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textInput}>Crear contraseña</Text>
                    <TextInput 
                        style={styles.inptField}
                        value={dataTo.passNew}
                        onChangeText={(inserting)=>setNewUserValues('passNew',inserting)}
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
                                <Text>
                                    logo
                                </Text>
                            </View>
                            <View style={styles.infoAlert}>
                                <Text>{msgAlert}</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
        </View>
    )
}