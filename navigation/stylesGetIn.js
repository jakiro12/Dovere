import {StyleSheet} from 'react-native';

export default landingDesign=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#DDDDDD',
    },
    getInBtn:{
        width:100,
        height:30,
        borderBottomColor:'#000000',
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
        color:'#000000',
        fontWeight:'bold',
    },
    textBtn:{
        fontSize:22,
        color:'#000000'
    },
    imgLogoSize:{
        width:'100%',
        height:'100%',
        borderRadius:15,
    }
    
})