import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Main from './Main'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Main />
    </View>
  );
};

export default App;
