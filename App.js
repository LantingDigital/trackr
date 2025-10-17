import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import UserChoiceScreen from './src/screens/UserChoiceScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RateRideScreen from './src/screens/RateRideScreen'; // Import the new screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} // Hide the header for the welcome screen
        />
        <Stack.Screen 
          name="UserChoice" 
          component={UserChoiceScreen} 
          options={{ title: 'Choose Your Path' }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Enthusiast Login' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Your Logbook' }}
        />
        {/* We will navigate to this screen later */}
        <Stack.Screen 
          name="RateRide" 
          component={RateRideScreen} 
          options={{ title: 'Rate a Ride' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
