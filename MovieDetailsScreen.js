import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from './config/Firebase-config';


const MovieDetailsScreen = ({navigation, route}) => {
    const { movie } = route.params;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
  
      return unsubscribe;
    }, []);

    const handleBuyTickets = () => {
      if (isLoggedIn) {
          // Proceed with ticket purchase process
          alert('Ticket purchase process initiated!');
      } else {
          navigation.navigate('Login');
      }
  }

    return (
      <View >
        <Text>{movie.title}</Text>
        {/* <Image  source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} resizeMode="contain" /> */}
        <Text>{movie.overview}</Text>
        {/* <StatusBar style="auto" /> */}
        

      {isLoggedIn ? (
        <View>
          
          <Button
            title="BUY TICKETS"
            disabled={!isLoggedIn}
            onPress={handleBuyTickets}
        />
        </View>
      ) : (
        <View>
          <Button
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Text>You must be logged in to buy tickets.</Text>
          <Button
            title="BUY TICKETS"
            disabled={!isLoggedIn}
            onPress={handleBuyTickets}
        />
        </View>
      )}


      </View>
    );
}

export default MovieDetailsScreen;