import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetIn from '../components/LoginForm/LoginApp';
import ActualPointsAndProgress from '../components/HomeAuth/HomeStatus';
import SetAndEditUserProfile from '../components/HomeAuth/ProfileAndEdit/SetProfile';
import OpenQrReader from '../components/QrScanner/CheckQr';
import SeeMyOptions from '../components/GiftAndDonate/SeeOptionsAviable';
import { NewStates } from '../components/Provider/ProviderStatus';
import NearbyCenters from '../components/CentersMap/SeeCenters';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={()=>{navigation.navigate('log')}}><Text>Ingresar</Text></TouchableOpacity>
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
        </Stack.Navigator>
      </NavigationContainer>
      </NewStates>
    );
  }
  
  export default Test;