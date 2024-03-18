import React from 'react';
import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery, gql } from '@apollo/client';
import AuthStorage from '../utils/authStorage';
import { useNavigate } from 'react-router-native';

const ME_QUERY = gql`
{
  me {
    id
    username
  }
}
`;

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
    const { data } = useQuery(ME_QUERY);
    const apolloClient = useApolloClient();
    const authStorage = new AuthStorage();
    const navigate = useNavigate();
  
    const handleSignOut = async () => {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
      navigate('/');
    };
  
    return (
      <View style={styles.container}>
        {data?.me ? (
          <Pressable onPress={handleSignOut}>
            <Text>Sign out</Text>
          </Pressable>
        ) : (
          <Pressable onPress={() => navigate('/signin')}>
            <Text>Sign in</Text>
          </Pressable>
        )}
      </View>
    );
  };
  

export default AppBar;
