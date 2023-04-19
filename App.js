import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

// import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from "./config/Firebase-config";

import NowPlayingScreen from './NowPlayingScreen';
import MyPurchasesScreen from './MyPurchasesScreen';
import LoginScreen from './LoginScreen';
import MovieDetailsScreen from './MovieDetailsScreen';
import SettingsScreen from './SettingsScreen';
import SignupScreen from './SignupScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={NowPlayingScreen} />
      <Stack.Screen name="DetailsScreen" component={MovieDetailsScreen} />
      {/* Add Nowplaying screens to the Home stack */}
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      {/* Add any login screens to the Settings stack */}
    </Stack.Navigator>
  );
}

function MyPurchaseStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="MyPurchase" component={MyPurchasesScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      {/* Add any MyPurchasel screens to the Settings stack */}
    </Stack.Navigator>
  );
}
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>

    {isLoggedIn ? (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home1" component={HomeStack}/>
          <Tab.Screen name="MyPurchase1" component={MyPurchaseStack} />
          <Tab.Screen name="Settings1" component={SettingsStack} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home1" component={HomeStack}/>
        <Tab.Screen name="MyPurchase1" component={MyPurchaseStack} />
        </Tab.Navigator>
      )}

    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
