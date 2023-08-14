import { Text,View,Modal,TouchableOpacity } from "react-native";
import styles from './stylesAlertLog.js';
export default function ModalForLogin({displayAlert,closeModal}){
    return(
        <Modal 
        visible={displayAlert}
        onRequestClose={closeModal}
        transparent={true}
        animationType="fade"
        >
            <View style={styles.sizeModal}>
                <View style={styles.boxAlert}>
                    <View style={styles.boxDisplayit}>
                <Text style={styles.textDisplayIt}>
                   Usuario y contraseña incorrectos
                </Text>
                <TouchableOpacity style={styles.closeAlertModal} onPress={closeModal}>
                    <Text style={styles.fontCloseMenu}>Cerrar</Text>
                </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}