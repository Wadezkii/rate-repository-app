import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './utils/ApolloClient';
import Main from './Main'; 
import Constants from 'expo-constants';
import { AuthProvider } from './utils/AuthContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const apolloClient = createApolloClient();

const App = () => {
  console.log('YHEÖLOASD', Constants.expoConfig);
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Main />
    </View>
    </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
