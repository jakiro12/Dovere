import { StyleSheet } from "react-native";

export default containerStyles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },
    imageBg:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    formContianerInp:{
        width:'55%',
        height:'50%',
        borderColor:'#000000',
        borderWidth:2,
        marginTop:'25%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around'
    },
    inptField:{
        width:'90%',
        height:25,
        backgroundColor:'#E7F0E9',
        borderRadius:10,
        paddingLeft:10,
    }
})