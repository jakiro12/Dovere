import { Text,View,StyleSheet }  from "react-native";

export default function HowUseIt(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxClose}>Cerrar</Text>
        <Text style={styles.boxContent}>
     1   Preparación de las botellas: El usuario debe separar las botellas de plástico o vidrio que desea llevar al centro de reciclaje y asegurarse de que estén limpias y secas.

      2 Identificación del centro de reciclaje: El usuario debe buscar un centro de reciclaje cercano a su ubicación. Esto se puede hacer mediante una búsqueda en línea o mediante el uso de una aplicación móvil que muestre los centros de reciclaje cercanos.

3 Entrega de las botellas: Una vez que el usuario haya llegado al centro de reciclaje, debe entregar las botellas para su reciclaje. El personal del centro puede indicar al usuario la cantidad de puntos que se le acreditarán por las botellas entregadas.

4  Escaneo del código QR: Después de entregar las botellas, el usuario debe escanear un código QR que se encuentra en el centro de reciclaje con la aplicación móvil. Esto acreditará los puntos en la cuenta del usuario.

5 Verificación de los puntos: El usuario debe verificar que los puntos se hayan acreditado correctamente en la aplicación móvil.

6 Canjeo de los puntos: Si el usuario acumula suficientes puntos, puede canjearlos por recompensas, descuentos u otros beneficios que se ofrezcan en la aplicación móvil.

        </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'98%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    boxClose:{
        height:34,
        borderWidth:1,
        borderColor:'#ffffff',
        width:'28%',
        textAlign:'center',
        fontSize:22,
        borderRadius:5,
        backgroundColor:'#6AC52D',
    },
    boxContent:{
        height:'80%',
        overflow:'scroll',

    }
})