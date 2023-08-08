import {StyleSheet} from 'react-native'

export default containerStyles=StyleSheet.create({ //los exporto e importo con el nombre que quiera
   container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#ffffff',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center'
   },
   logoLogin:{
    width:130,
    height:130,
    marginTop:'1%',
    borderRadius:20,
    overflow:'hidden'
   },
   contianerInputs:{
    width:'100%',
    borderBottomWidth:2,
    borderBottomColor:'#6AC52D',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center'
   },   
   containerAuthWithMedias:{
        width:'100%',
        height:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
   },
   containerLogo_F_G:{
    width:'50%',
    height:'80%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
   },
   inputTextStyles:{
    width:'90%',
    height:45,
    backgroundColor:'#E7F0E9',
    borderRadius:10,
    paddingLeft:10
   },
   get_into_app:{
    width:'40%',
    height:40,
    backgroundColor:'#6AC52D',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
   },
   bothLogos:{
    width:70,
    height:70,
    borderRadius:70,
    overflow:'hidden',
   },
   svgStyles:{
      flex:1,
      justifyContent:'center',
      resizeMode:'stretch',
   },
   registerOption:{
      height:35,
      width:'80%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
   },
   textAsk:{
      height:25,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      textAlign:'center'
   },
   resgisterText:{
      fontSize:15,
      color:'#0000FF'
   },
   imageLoginLogo:{
      width:'100%',
      height:'100%',
   }
})

