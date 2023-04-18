import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you can put your login logic to authenticate the user

    // For this example, I'm setting isLoggedIn to true to simulate a successful login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Here you can put your logout logic to clear the user's session

    // For this example, I'm setting isLoggedIn to false to simulate a successful logout
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    // If the user is logged in, redirect to the MyPurchasesScreen
    // navigation.replace('MyPurchasesScreen');
    // return null;
    console.log(`login user true`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    width: '80%',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;

