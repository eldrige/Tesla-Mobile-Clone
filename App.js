import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarComponent/index';
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={'Model S'}
        tagline={'Starting from $69,420'}
        taglineCTA={'Toucless Delivery'}
        image={require('./assets/images/ModelS.jpeg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
