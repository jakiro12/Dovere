import { Text, View, StyleSheet, TouchableOpacity }  from "react-native";
import AppCounter from "../../Provider/ProviderStatus";
import { useContext } from "react";

export default function WhenCanI(){
    const{setOpenInfo}=useContext(AppCounter)
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.boxClose} activeOpacity={1} onPress={()=>setOpenInfo('')}>
                <Text style={styles.textClose}>
                         Cerrar
                </Text></TouchableOpacity>
        <Text style={styles.textInfo}>
          Si usted ha canjeado un producto por sus puntos disponibles tenga en cuenta que la demora 
          depende del lugar donde se situe y la disponibilidad del mismo dentro de nuestros centros 
          de almacenamiento, lo cual tomaria un maximo de 2-3 dias en recibir una respuesta.
        </Text>
        <Text style={styles.textInfo}>
            Si usted ha donado sus puntos de manera benefica como un bono a las empresas que apoyamos
            la acreditacion del mismo se le hara saber de modo que tengamos total trasparencia con nuestros
            clientes, por lo general toma entre 24-48 horas la acreditacion del mismo.
        </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'98%',
        display:'flex',
        justifyContent:'space-around',
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
        alignItems:'center'
    },
    boxContent:{
        height:'88%',
    },
    textClose:{
        fontSize:22,
        color:'#ffffff'
    },
    textInfo:{
        fontSize:16
    }
})