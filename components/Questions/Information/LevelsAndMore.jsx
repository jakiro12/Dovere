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
          Cuenta con 7 niveles y diferentes beneficios
        </Text>
        <Text style={styles.textInfo}>
            Nivel 1: Haber reciclado 100 botellas y 5% extra en puntos totales.
        </Text>
        <Text style={styles.textInfo}>
            Nivel 2: Reciclar 300 botellas y 10% extra en puntos totales.
        </Text>
        <Text style={styles.textInfo}>
            Nivel 3: Reciclar 500 botellas y 15% extra en puntos totales.
        </Text>
        <Text style={styles.textInfo}>
            Nivel 4: Reciclar 800 botellas y 20% extra en puntos totales.
        </Text>
        <Text style={styles.textInfo}>
            Nivel 5: Reciclar 1000 botellas y 25% extra en puntos totales.
        </Text>
        <Text style={styles.textInfo}>
            Nivel 6: Reciclar 1500 botellas y 30% extra en puntos totales.
        </Text>
        <Text style={styles.textInfo}>
            Nivel 7: Reciclar 2500 botellas y 35% extra en puntos totales.
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
        color:'#000000',
    },
    textInfo:{
        fontSize:16,
        height:'10%',
        width:'95%',
    }
})