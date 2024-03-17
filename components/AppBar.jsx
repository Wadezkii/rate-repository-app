import React from 'react';
import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#24292e',
      paddingBottom: 10,
    },
    tab: {
      alignItems: 'center',
    },
    tabText: {
      color: 'white',
      fontSize: 20,
    },
    
  });

  const AppBar = () => {
    return (
      <View style={styles.container}>
        <ScrollView horizontal contentContainerStyle={styles.scrollView}>
          <Link to="/" component={Pressable}>
            <Text style={styles.tabText}>Repositories</Text>
          </Link>
          <Link to="/signin" component={Pressable}>
            <Text style={styles.tabText}>Sign In</Text>
          </Link>
        </ScrollView>
      </View>
    );
  };
  

export default AppBar;
