import { StyleSheet } from "react-native";

export default createTicketsGiftAndDonate=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },navBar:{
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
    boxRedeemGift:{
        width:'90%',
        height:'60%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    itemGiftLogo:{
        width:150,
        height:150,
        borderWidth:2,
        borderColor:'#000000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        overflow:'hidden'
    },
    imageSize:{
        width:'100%',
    }
    ,
    boxInfoGift:{
        width:'90%',
        height:'20%',
        borderWidth:2,
        borderColor:'#000000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    redeemBtnSubmit:{
        width:'60%',
        height:40,
        backgroundColor:'#DADD33',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },
    textBtn:{
        fontSize:22,
        fontWeight:600,
    },
    textInit:{
        fontSize:17
    },
    modalContainer:{
        width:'80%',
        height:'40%',
        backgroundColor:'#DADD33',
        alignSelf:'center',
        marginTop:'50%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
       
    },
    modalText:{
        fontSize:22,
        fontWeight:600, 
        width:'90%',
        textAlign:'center'
    },
    modalClose:{
        width:'30%',
        backgroundColor:'#6AC52D',
        borderRadius:10,
        
    },
    fontModalClose:{
        fontSize:20,
        textAlign:'center',
        padding:'3%'
    }
})