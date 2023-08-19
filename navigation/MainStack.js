import { View, Text, TouchableOpacity,StatusBar, Animated,Image } from 'react-native';
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
import { useEffect,useRef } from 'react';
import FormToCreateANewUser from '../components/RegisterForm/CreateNewUser';
function HomeScreen({navigation}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 4500,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim3, {
      toValue: 1,
      duration: 5300,
      useNativeDriver: true,
    }).start();
  }, []);
    return (
      <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E3E4D3"  />
       <Animated.Text style={[styles.infoStart,{opacity:fadeAnim}]}>Dirigete a tu centro de reciclaje mas cercano</Animated.Text>
       <Animated.Text style={[styles.infoStart,{opacity:fadeAnim2}]}>Ingresa el envase a reciclar</Animated.Text>
       <Animated.Text style={[styles.infoStart,{opacity:fadeAnim3}]}>Escanea el QR y sumá puntos</Animated.Text>
       <View style={styles.logoContainer}>
        <Image style={styles.imgLogoSize} source={require('../components/imagesDisplayed/bottle.jpg')} resizeMode='contain'/>
       </View>
        <TouchableOpacity style={styles.getInBtn} activeOpacity={1} onPress={()=>{navigation.navigate('log')}}>
          <Text style={styles.textBtn}>SALTAR</Text>
          </TouchableOpacity>
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function DovereApp() {
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
          <Stack.Screen name='Create_user' component={FormToCreateANewUser} />
        </Stack.Navigator>
      </NavigationContainer>
      </NewStates>
    );
  }
  
  export default DovereApp;