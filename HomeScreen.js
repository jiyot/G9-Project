import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import NowPlayingScreen from "./NowPlayingScreen";
import MyPurchasesScreen from "./MyPurchasesScreen";
import LoginScreen from "./LoginScreen";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    // code to check if there is a logged in user
    const isLoggedIn = checkIfUserLoggedIn();
    setUserLoggedIn(isLoggedIn);
  }, []);

  const checkIfUserLoggedIn = () => {
    // code to check if there is a logged in user
    return true; // replace with actual code to check if user is logged in
  };

  
  return (
  
      <Tab.Navigator>
        <Tab.Screen
          name="NowPlaying"
          component={NowPlayingScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
        {!userLoggedIn ? (
          <Tab.Screen
            name="MyPurchases"
            component={MyPurchasesScreen}
            options={{
              tabBarLabel: 'My Purchases',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" color={color} size={size} />
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name="MyPurchases"
            component={LoginScreen}
            options={{
              tabBarLabel: 'My Purchases',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="log-out-outline" color={color} size={size} />
              ),
            }}
          />
        )}

      {userLoggedIn ? (
          console.log(`No login user- value false `)
        ) : (
          <Tab.Screen
            name="Logout"
            component={LoginScreen}
            options={{
              tabBarLabel: 'Logout',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="log-out-outline" color={color} size={size} />
              ),
            }}
          />
        )}
      </Tab.Navigator>
  );
}
