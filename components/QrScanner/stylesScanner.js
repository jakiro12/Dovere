import { StyleSheet } from "react-native";

export default scanerStyles=StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-between',
      },
      camerCotnainer:{
        width:'80%',
        height:'60%',
        borderColor:'#000000',
        borderWidth:2,
      },  
      camera: {
        width:'100%',
        height:'100%'
      },
      navBar:{
        width:'100%',
        height:50,
        backgroundColor:'#6AC52D',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    appName:{
        width:'60%',
        fontSize:22,
        display:'flex',
        textAlign:'right'
    },
    logoProfile:{
        width:35,
        height:35,
        borderRadius:35,
        backgroundColor:'#2e4a21',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
    },
    containerCameraPermissions:{
      width:'100%',
      height:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent: 'center',
    },
    modalPerCamera:{
      width:'90%',
      height:'30%',
      backgroundColor:'#E7F0E9',
      borderRadius:10,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around',
      flexDirection:'column'
    },
    containerModalCameraRedeem:{
      width:'100%',
      height:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent: 'center',
    }
})