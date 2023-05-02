import { View, Text, TouchableOpacity,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetIn from '../components/LoginForm/LoginApp';
import ActualPointsAndProgress from '../components/HomeAuth/HomeStatus';
import SetAndEditUserProfile from '../components/HomeAuth/ProfileAndEdit/SetProfile';
import OpenQrReader from '../components/QrScanner/CheckQr';
import SeeMyOptions from '../components/GiftAndDonate/SeeOptionsAviable';
import { NewStates } from '../components/Provider/ProviderStatus';
import NearbyCenters from '../components/CentersMap/SeeCenters';
import RedeemPointsForGift from '../components/GiftAndDonate/GiftRedeem/GetGift';
import GiveMyPoints from '../components/GiftAndDonate/DonateRedeem/GiveDonate';
import AksAndAwser from '../components/Questions/CommonQuestions';
import styles from './stylesGetIn';
function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E3E4D3"  />

       <Text style={styles.infoStart}>Dirigete a tu centro de reciclaje mas cercano</Text>
       <Text style={styles.infoStart}>Ingresa el envase a reciclar</Text>
       <Text style={styles.infoStart}>Escanea el QR y sumá puntos</Text>
       <View style={styles.logoContainer}><Text>Logo de Inicio</Text></View>
        <TouchableOpacity style={styles.getInBtn} onPress={()=>{navigation.navigate('log')}}>
          <Text style={styles.textBtn}>Ingresar</Text>
          </TouchableOpacity>
       
     
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function Test() {
    return (
<NewStates>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name='log' component={GetIn} />
          <Stack.Screen name='Home_login' component={ActualPointsAndProgress} />
          <Stack.Screen name='See_set_profile' component={SetAndEditUserProfile} />
          <Stack.Screen name='Open_Qr_Reader' component={OpenQrReader}/>
          <Stack.Screen name='Redeem_Or_Donate' component={SeeMyOptions} />
          <Stack.Screen name='See_centers' component={NearbyCenters} />
          <Stack.Screen name='Redeem_gift' component={RedeemPointsForGift}/>
          <Stack.Screen name='Give_points' component={GiveMyPoints}/>
          <Stack.Screen name='Faq' component={AksAndAwser} />
        </Stack.Navigator>
      </NavigationContainer>
      </NewStates>
    );
  }
  
  export default Test;