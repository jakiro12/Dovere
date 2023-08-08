import { Text,View,Image,TouchableOpacity } from "react-native";
import styles from './stylesNewUser'
import { TextInput } from "react-native";
import { useState } from "react";
export default function FormToCreateANewUser(){
    const[dataTo,setDataTo]=useState({
        nameNew:'',
        passNew:''
    })
    const setNewUserValues=(key,value)=>{
        setDataTo({...dataTo,[key]:value})

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
                    <TouchableOpacity style={styles.new_into_app} activeOpacity={1} onPress={()=>console.log(dataTo)}>
                        <Text >CREAR</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}