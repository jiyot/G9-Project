import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , TouchableOpacity, Button } from 'react-native';

const BuyTicketsScreen = ({navigate, route}) => {
    const [username, setUsername] = useState('username');
    const [email, setEmailId] = useState('email id');
     const {movieItem} = route.params;
    const [count, setCount] = useState(0);
    const [ticketCount, setTicketCount] = useState(0);
    const movieName = "The Matrix";
    const ticketPrice = 12;
    const taxRate = 0.13;
    const subtotal = ticketCount * ticketPrice;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;


  const onConfirmPurchase = () => {

    if (ticketCount > 0) {
        console.log("Purchased")
      }

  }


return (
    <View>
        <Text>Buy Tickets</Text>
        <Text>{movieItem.title}</Text>
        <Text>Your Email Address</Text>
        <TextInput 
        style={styles.inputStyle}
                placeholder="enter email id"
                textContentType="emailAddress"
                autoCapitalize="none"
                returnKeyType="next"
                value={email}
                onChangeText={setEmailId}
            />
             <Text>Your Name</Text>
            <TextInput 
            style={styles.inputStyle}
                placeholder="enter name"
                textContentType="name"
                autoCapitalize="none"
                returnKeyType="next"
                value={username}
                onChangeText={setUsername}
            />
 <Text>Number of Tickets</Text>

 <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Button title="-" onPress={() => {
          if (ticketCount > 0) {
            setTicketCount(ticketCount - 1);
          }
        }} />
        <Text style={styles.counter}>{ticketCount}</Text>
        <Button title="+" onPress={() => {
          setTicketCount(ticketCount + 1);
        }} />
      </View>

      {ticketCount > 0 && (
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Order Summary:</Text>
          <Text style={styles.summaryText}>Movie: {movieName}</Text>
          <Text style={styles.summaryText}>Tickets: {ticketCount}</Text>
          <Text style={styles.summaryText}>Subtotal: ${subtotal.toFixed(2)}</Text>
          <Text style={styles.summaryText}>Tax: ${tax.toFixed(2)}</Text>
          <Text style={styles.summaryText}>Total: ${total.toFixed(2)}</Text>
        </View>
      )}
      </View>

      <Button style = {styles.buttonStyle} color = "orangered" title='Confirm Purchase' onPress={onConfirmPurchase}/>
    
 </View>
        
);

}
const styles = StyleSheet.create({
    sectionContainer:{
        marginTop: 32,
        paddingHorizontal: 24,
    },
    inputStyle: {
        height: 50,
        margin: 8,
        borderColor: 'orangered',
        borderWidth: 1,
        padding: 5,
    },
    buttonStyle: {
        margin: 50,
        padding: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'grey',
        borderRadius: 5,
        marginHorizontal: 10,
      },
      buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
      },
      count: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      counter: {
        fontSize: 24,
        marginHorizontal: 10,
      },
      summaryContainer: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      summaryText: {
        fontSize: 16,
        marginVertical: 5,
      },
});
export default BuyTicketsScreen;