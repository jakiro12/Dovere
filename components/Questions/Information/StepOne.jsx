import { useContext } from "react";
import { Text,View,StyleSheet,TouchableOpacity }  from "react-native";
import AppCounter from "../../Provider/ProviderStatus";

export default function HowUseIt(){
    const{setOpenInfo}=useContext(AppCounter)
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.boxClose} onPress={()=>setOpenInfo('')} activeOpacity={1}>
                <Text style={styles.textClose}>
                         Cerrar
                </Text></TouchableOpacity>
        <Text style={styles.boxContent}>
     1 Debe separar las botellas de plástico que desea llevar al centro de reciclaje y asegurarse de que estén limpias y secas.

      2 El usuario debe buscar un centro de reciclaje cercano a su ubicación. Esto se puede hacer mediante una búsqueda en línea o mediante el uso de la aplicación móvil.

3  Una vez que el usuario haya llegado al centro de reciclaje, debe entregar las botellas para su reciclaje. El personal del centro puede indicar al usuario la cantidad de puntos que se le acreditarán por las botellas entregadas.

4  El usuario debe escanear un código QR que se encuentra en el centro de reciclaje con la aplicación móvil. Esto acreditará los puntos en la cuenta del usuario.

5 Verificación de los puntos: El usuario debe verificar que los puntos se hayan acreditado correctamente en la aplicación móvil.

6 Si acumula suficientes puntos, puede canjearlos por recompensas, descuentos u otros beneficios que se ofrezcan en la aplicación móvil.

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
        backgroundColor:'#6AC52D',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    boxContent:{
        height:'88%',
    },
    textClose:{
        fontSize:22,
    }
})