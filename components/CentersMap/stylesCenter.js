import {StyleSheet} from 'react-native';

export default MapDisplay=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    mapContainer:{
        width:'100%',
        height:'80%',
    },
    testS:{
        height:'80%',
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'column'
    },
    infoAndBtn:{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        justifyContent:'center'
    },
    btnSeeMarks:{
        width:'40%',
        height:40,
        backgroundColor:'#000000',
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textMark:{
        color:'#ffffff'
    },
    activitycontainer:{
        width:'50%',
        height:'40%'
    }

})