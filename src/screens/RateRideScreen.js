import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RateRideScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate a New Ride</Text>
      <Text>The weighted rating system will be built here.</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
  },
});
