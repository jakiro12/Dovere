import { StyleSheet} from "react-native";

export default editProfileStyles=StyleSheet.create({
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
    containerPhoto:{
        width:'90%',
        height:'25%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    sliderContent:{
        width:'90%',
        height:'50%',
    },
    photoDisplay:{
        width:'30%',
        height:'60%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        overflow:'hidden'
    },
    nameUserDisplay:{
        width:'60%',
        height:'35%',
        display:'flex',
        justifyContent:'space-between'
    },
    photoUser:{
        width:'100%',
        height:'100%',
    },
    fullName:{
        fontSize:18,
        fontWeight:500
    },
    levelName:{
        fontSize:20,
        fontWeight:300
    },
    tagContainer:{
        width:350,
        height:'100%',
        borderColor:'#000000',
        borderWidth:2,
        marginHorizontal:10,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    optionTitle:{
        width:'55%',
        height:'15%',
        borderColor:'#2e4a21',
        borderBottomWidth:2,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    fontTitle:{
        fontSize:20,
        fontWeight:500,
    },
    fontPointsAviable:{
        fontSize:20,
        color:'#2e4a21',
        padding:10,
    },
    boxBtn:{
        display:'flex',
        width:'90%',
        height:'30%',
        marginBottom:'auto',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    btnRedeem:{
        width:'48%',
        height:'100%',
        backgroundColor:'#F1F2B1',
        borderRadius: 5,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    logoAndLevel:{
        width:'50%',
        height:'30%',
        marginTop:'5%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center'
    },
    actualAmount:{
        width:'80%',
        height:'20%',
        borderBottomWidth:2,
        borderBottomColor:'#6AC52D',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:'auto',
    },
    allBottles:{
        fontSize:26,
        fontWeight:700
    },
    fontBottles:{
        fontSize:20,
    },
    allRecord:{
        width:'100%',
        height:'50%',
        marginTop:'5%',
      
    },

})