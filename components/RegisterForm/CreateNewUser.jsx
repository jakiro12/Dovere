<<<<<<< HEAD
import { Text,View,ImageBackground,KeyboardAvoidingView } from "react-native";
import styles from './stylesNewUser'
import { TextInput } from "react-native";
export default function FormToCreateANewUser(){
    return(
        <KeyboardAvoidingView style={styles.container}
            behavior="height"
            enabled='true'
        >
            <ImageBackground style={styles.imageBg} resizeMode="cover" source={require('../imagesDisplayed/nobgBottle.png')}>
                <View style={styles.formContianerInp}>
                    <TextInput 
                        style={styles.inptField}
                        value="holasdf"
                    ></TextInput>
                       <TextInput 
                        style={styles.inptField}
                        value="holasdf"
                    ></TextInput>
                       <TextInput 
                        style={styles.inptField}
                        value="holasdf"
                    ></TextInput>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
=======
import { Text,View } from "react-native"
export default function FormToCreateANewUser(){
    return(
        <View>
            <Text>hola</Text>
        </View>
>>>>>>> parent of b532b0e (set form)
    )
}