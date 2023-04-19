import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import NowPlayingScreen from './NowPlayingScreen';
import MyPurchasesScreen from './MyPurchasesScreen';
import LoginScreen from './LoginScreen';
import LogoutScreen from './LogoutScreen';
import MovieDetailsScreen from './MovieDetailsScreen';
import HomeScreen from './HomeScreen';
import BuyTicketsScreen from "./BuyTicketsScreen";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='HomeScreen' >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NowPlayingScreen" component={NowPlayingScreen} />
        <Stack.Screen name="MyPurchasesScreen" component={MyPurchasesScreen} />
        <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BuyTicketsScreen" component={BuyTicketsScreen} />
        <Stack.Screen name="LogOut" 
        component={LogoutScreen} 
        options={ ({route}) => ({headerRight: () => (
          <Button title="LogOut" color={'blue'} onPress = { () => alert("LogOut")} />
        )}) }/>

      </Stack.Navigator>

    </NavigationContainer>
  );
}

// export default function App() {
//   const [userLoggedIn, setUserLoggedIn] = useState(false);

//   useEffect(() => {
//     // code to check if there is a logged in user
//     const isLoggedIn = checkIfUserLoggedIn();
//     setUserLoggedIn(isLoggedIn);
//   }, []);

//   const checkIfUserLoggedIn = () => {
//     // code to check if there is a logged in user
//     return true; // replace with actual code to check if user is logged in
//   };

  
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="NowPlaying"
//           component={NowPlayingScreen}
//           options={{
//             tabBarLabel: 'Now Playing',
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="person-outline" color={color} size={size} />
//             ),
//           }}
//         />
//         {!userLoggedIn ? (
//           <Tab.Screen
//             name="MyPurchases"
//             component={MyPurchasesScreen}
//             options={{
//               tabBarLabel: 'My Purchases',
//               tabBarIcon: ({ color, size }) => (
//                 <Ionicons name="person-outline" color={color} size={size} />
//               ),
//             }}
//           />
//         ) : (
//           <Tab.Screen
//             name="MyPurchases"
//             component={LoginScreen}
//             options={{
//               tabBarLabel: 'My Purchases',
//               tabBarIcon: ({ color, size }) => (
//                 <Ionicons name="log-out-outline" color={color} size={size} />
//               ),
//             }}
//           />
//         )}

//       {userLoggedIn ? (
//           console.log(`No login user- value false `)
//         ) : (
//           <Tab.Screen
//             name="Logout"
//             component={LogoutScreen}
//             options={{
//               tabBarLabel: 'Logout',
//               tabBarIcon: ({ color, size }) => (
//                 <Ionicons name="log-out-outline" color={color} size={size} />
//               ),
//             }}
//           />
//         )}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
