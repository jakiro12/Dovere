import {StyleSheet} from 'react-native';

export default QuestionStyles=StyleSheet.create({
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
    boxQuestion:{
        width:'85%',
        height:'15%',
        borderWidth:2,
        borderColor:'#000000',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    }
})