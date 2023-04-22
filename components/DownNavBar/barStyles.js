import {StyleSheet} from 'react-native';

export default downBarStyles=StyleSheet.create({
    container:{
        width:'100%',
        height:'10%',
        backgroundColor:'#000000',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    butonNavigate:{
        width:35,
        height:35,
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center'
    },
    vectorColor:{
        tintColor:'#ffffff'
    }
})