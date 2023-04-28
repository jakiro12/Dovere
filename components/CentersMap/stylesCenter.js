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
        borderWidth:1,
        borderColor:'#000000'
    }

})