import { StyleSheet } from "react-native";



export default createTicketsGiftAndDonate=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
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
    }, logoProfile:{
        width:35,
        height:35,
        borderRadius:35,
        backgroundColor:'#2e4a21',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
    }, 
    statusAndPoints:{
        width:'90%',
        height:'30%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    userStats:{
        width:'100%',
        height:'60%',
        borderColor:'#0A8156',
        borderWidth:1,
        borderRadius:10,
        display:'flex',
        flexDirection:'column',
        overflow:'hidden'
    },  pointContainer:{
        width:'100%',
        height:'50%',
        backgroundColor:'#6AC52D',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    growStatus:{
        width:'100%',
        height:'50%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    }, poinsText:{
        fontSize:20,
        color:'#000000',
        fontWeight:600
    },
    growText:{
        fontSize:20,
        color:'#0A8156',
        fontWeight:600
    },
    sliderContent:{
        width:'90%',
        height:'50%',
        display:'flex',
        alignItems:'center'
    },
    btnOptions:{
        width:'80%',
        height:'20%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        overflow:'hidden'
    },
    scrollOptions:{
        width:'100%',
        height:'20%',
    },
    boxTicket:{
        width:'100%',
        height:150,
        borderColor:'#0A8156',
        borderWidth:1,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginVertical:10,
        borderRadius:10,
    },
    btnDisplayedRedeemm:{
        width:'35%',
        height:'60%',
        borderBottomColor:'#000000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1
    },
    btnDisplayedGift:{
        width:'35%',
        height:'60%',
        borderBottomColor:'#000000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        transform: [{scale: 2}],
        borderBottomWidth:1
    },
    ticketLogo:{
        width:'40%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    ticketInfo:{
        width:'40%',
        height:'70%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    redeemPoints:{
        width:'70%',
        height:30,
        borderRadius:4,
        backgroundColor:'#DADD33',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})