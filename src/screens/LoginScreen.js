import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  // For now, this button just takes us to the main part of the app.
  // Later, this will handle actual login logic.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enthusiast Login</Text>
      <Text style={styles.subtitle}>Login/Sign-up will go here.</Text>
      <Button
        title="Continue to App"
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: 'gray',
  }
});
