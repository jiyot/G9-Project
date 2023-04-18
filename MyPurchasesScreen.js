import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import MyPurchasesScreenList from './MyPurchasesScreenList';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const MyPurchasesScreen = ({ route }) => {
  const { userLoggedIn } = route.params;

  return (
    <NavigationContainer>
    <Stack.Navigator>
      {userLoggedIn ? (
        <Stack.Screen
          name="MyPurchasesScreenList"
          component={MyPurchasesScreenList}
          options={{ title: 'My Purchases' }}
        />
      ) : (
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
      )}
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyPurchasesScreen;
