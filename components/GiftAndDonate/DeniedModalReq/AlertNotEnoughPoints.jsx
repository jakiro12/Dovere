import {Modal,View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function YouDonHaveEnoughPoints({allowReq}){
    const navigation=useNavigation()
    return(
        <Modal
            animationType='slide'
            visible={allowReq}
            transparent={false} 
        >
            <View style={styles.modalDisplay}>
                <View style={styles.modalBoxDeniedAlert}>
                    <View style={styles.checks}>
                    <Icon name="close" size={30} color="#ffffff"/>
                    </View>
                    <Text style={styles.modalText}>
                      Puntos insuficientes
                    </Text>
                <TouchableOpacity style={styles.modalClose} onPress={()=>navigation.navigate('Redeem_Or_Donate')}>
                    <Text style={styles.fontModalClose}>
                        Volver
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
            </Modal>
    )
}

const styles=StyleSheet.create({
    modalDisplay:{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    modalBoxDeniedAlert:{
        width:'80%',
        height:'40%',
        backgroundColor:'#dddddd',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:10,
    },
    modalClose:{
        width:'30%',
        backgroundColor:'#6AC52D',
        borderRadius:10,
        
    },
    checks:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'#ff0000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    fontModalClose:{
        fontSize:20,
        textAlign:'center',
        padding:'3%'
    },
    modalText:{
        fontSize:22,
        fontWeight:600, 
        width:'90%',
        textAlign:'center'
    },
})