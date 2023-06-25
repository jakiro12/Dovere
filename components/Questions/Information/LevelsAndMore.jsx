import { Text, View, StyleSheet, TouchableOpacity }  from "react-native";
import AppCounter from "../../Provider/ProviderStatus";
import { useContext } from "react";

export default function HowToUpgrade(){
    const{setOpenInfo}=useContext(AppCounter)
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.boxClose} activeOpacity={1} onPress={()=>setOpenInfo('')}>
                <Text style={styles.textClose}>
                         Cerrar
                </Text></TouchableOpacity>
        <Text style={styles.textInfo}>
          la app cuenta con 7 niveles disponibles y cada uno tiene sus ventajas
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
        borderWidth:1,
        borderColor:'#ffffff',
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
        color:'#ffffff',
    },
    textInfo:{
        fontSize:16
    }
})