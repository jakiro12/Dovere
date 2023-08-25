import { Text, View, StyleSheet, TouchableOpacity }  from "react-native";
import AppCounter from "../../Provider/ProviderStatus";
import { useContext } from "react";

export default function HowToWin(){
    const{setOpenInfo}=useContext(AppCounter)
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.boxClose} activeOpacity={1} onPress={()=>setOpenInfo('')}>
                <Text style={styles.textClose}>
                         Cerrar
                </Text></TouchableOpacity>
        <Text style={styles.textInfo}>
          los puntos dependen de la cantidad de botellas que dejes
        </Text>
      
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'98%',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    boxClose:{
        height:34,
        width:'28%',
        borderRadius:5,
        backgroundColor:'#DADD33',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
    },
    boxContent:{
        height:'88%',
    },
    textClose:{
        fontSize:22,
        color:'#000000'
    },
    textInfo:{
        fontSize:16
    }
})