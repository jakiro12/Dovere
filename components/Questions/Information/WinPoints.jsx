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
          Los puntos dependen de la cantidad de botellas que dejes y el material de la botella.
        </Text>
        <Text style={styles.textInfo}>
            Las botellas de vidrio otorgan un total 30 puntos.
        </Text>
        <Text style={styles.textInfo}>
            Las botellas de plastico otorgan un total 15 puntos sin importan su condicion.
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
        fontSize:16,
        height:'15%',
        width:'95%',
    }
})