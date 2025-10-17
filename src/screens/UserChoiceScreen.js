import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function UserChoiceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How will you be using TrackR?</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="I'm an Enthusiast"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="I'm just visiting"
          onPress={() => navigation.navigate('Home')} // We'll send guests to the Home screen for now
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  }
});
