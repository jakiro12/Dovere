import {StyleSheet} from 'react-native';

export default landingDesign=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#DADD33',
    },
    getInBtn:{
        width:100,
        height:30,
        borderBottomColor:'#ffffff',
        borderBottomWidth:2,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderStyle: 'dotted',
    },
    logoContainer:{
        width:150,
        height:150,
    },
    infoStart:{
        width:'90%',
        height:70,
        fontSize:24,
        color:'#ffffff',
        fontWeight:'bold',
    },
    textBtn:{
        fontSize:22,
        color:'#ffffff'
    },
    imgLogoSize:{
        width:'100%',
        height:'100%',
        borderRadius:15,
    }
    
})