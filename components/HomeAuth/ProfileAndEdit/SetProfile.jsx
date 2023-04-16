import {View,Text,StatusBar,Image,ScrollView,TouchableOpacity} from 'react-native';
import styles from './SetStyles'
import DownBar from '../../DownNavBar/NavOptions';
export default function SetAndEditUserProfile(){
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E3E4D3"  />
            <View style={styles.navBar}>
              <Text style={styles.appName}>Dovere</Text>
                <View style={styles.logoProfile} >
                    <Text>A</Text>
                </View>
            </View>
            <View style={styles.containerPhoto}>
                <View style={styles.photoDisplay}><Image style={styles.photoUser} resizeMode='cover' source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} /></View>
                <View style={styles.nameUserDisplay}>
                    <Text style={styles.levelName}>Jacaranda</Text>
                    <Text style={styles.fullName}>Nombre completo</Text>
                    </View>
            </View>
            <View style={styles.sliderContent}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled  nestedScrollEnabled={true}>
                    <View style={styles.tagContainer}>
                        <View style={styles.optionTitle}>
                            <Text style={styles.fontTitle}>Mi puntaje</Text>
                        </View>
                        <View>
                            <Text style={styles.fontPointsAviable}>Puntos disponibles: 1200</Text>
                        </View>
                        <View style={styles.boxBtn}>
                           <TouchableOpacity style={styles.btnRedeem}>
                            <Text>Logo</Text>
                            <Text>Canjear</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.btnRedeem}>
                           <Text>Logo</Text>
                            <Text>Donar</Text>
                           </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.tagContainer}>
                    <View style={styles.optionTitle}>
                            <Text style={styles.fontTitle}>Crecimiento</Text>
                        </View>
                        <View style={styles.logoAndLevel}>
                            <View><Text>Logo</Text></View>
                            <Text style={styles.fontBottles}>Jacaranda</Text>
                        </View>
                        <View style={styles.actualAmount}>
                             <Text style={styles.allBottles}>4</Text>
                            <Text style={styles.fontBottles}>Botellas recicladas</Text>
                        </View>
                        </View>
                    <View style={styles.tagContainer}>
                    <View style={styles.optionTitle}>
                            <Text style={styles.fontTitle}>Movimientos</Text>
                        </View>
                        <ScrollView  style={styles.allRecord} showsVerticalScrollIndicator={false} contentContainerStyle={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                          
                                <Text style={{width:'100%',backgroundColor:'#B8D271',paddingBottom:5,fontWeight:600}}>  Mes</Text>
                                    <View style={{width:'90%',height:100,borderColor:'#2e4a21',borderBottomWidth:2,display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                                        <View style={{width:'30%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <Text>Logo</Text>
                                        </View>
                                        <View style={{width:'70%',height:'100%',display:'flex',justifyContent:'space-around'}}>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        </View>
                                    </View>
                                    <View style={{width:'90%',height:100,borderColor:'#2e4a21',borderBottomWidth:2,display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                                        <View style={{width:'30%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <Text>Logo</Text>
                                        </View>
                                        <View style={{width:'70%',height:'100%',display:'flex',justifyContent:'space-around'}}>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        </View>
                                    </View>
                                    <View style={{width:'90%',height:100,borderColor:'#2e4a21',borderBottomWidth:2,display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                                        <View style={{width:'30%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <Text>Logo</Text>
                                        </View>
                                        <View style={{width:'70%',height:'100%',display:'flex',justifyContent:'space-around'}}>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        <Text>Canjes</Text>
                                        </View>
                                    </View>
                        </ScrollView>
                    </View>
                    
                
                </ScrollView>
            </View>
            <DownBar/>
        </View>
    )
}