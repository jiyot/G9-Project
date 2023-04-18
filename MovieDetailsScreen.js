import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MovieDetailsScreen = ({navigation, route}) => {
    const { movie } = route.params;

    return (
      <View >
        <Text>{movie.title}</Text>
        {/* <Image  source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} resizeMode="contain" /> */}
        <Text>{movie.overview}</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    );
}

export default MovieDetailsScreen;