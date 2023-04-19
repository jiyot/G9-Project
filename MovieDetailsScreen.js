import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MyPurchasesScreen from "./MyPurchasesScreen";
import LoginScreen from "./LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const MovieDetailsScreen = ({navigation, route}) => {
    const { movie } = route.params;


    const onSignInClicked = () => {
        //go to sign up screen
        navigation.navigate('Login');
    }

    const onBuyTicketClicked = () => {

                navigation.navigate('BuyTicketsScreen' ,{movieItem : movie});
    }

    return (
      <View >
        <Text>{movie.title}</Text>
        <Image style={styles.imgAnime} source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} resizeMode="contain" />
        <Text>{movie.overview}</Text>

        <Button style = {styles.buttonStyle} color = "orangered" title='Buy Tickets' onPress={onBuyTicketClicked}/>
        <Button style = {styles.buttonStyle} color = "orangered" title='Login Or Create New Account' onPress={onSignInClicked}/>

      </View>
      
    );
}

const styles = StyleSheet.create({
    
    imgAnime: {
      width: '100%',
      height: 200,
      marginBottom: 5,
    },
    buttonStyle: {
        margin: 50,
        padding: 10,
    },
  });
  

export default MovieDetailsScreen;