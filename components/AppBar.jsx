import React from 'react';
import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery, gql } from '@apollo/client';
import AuthStorage from '../utils/authStorage';
import { useNavigate } from 'react-router-native';
import { useAuth } from '../utils/AuthContext';

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
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    const { isSignedIn } = useAuth();
  
    const handleSignOut = async () => {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
      navigate('/');
    };
    const handleReviewPress = () => {
      navigate('/review-form');
    };
  
    return (
      <View style={styles.container}>
        <Pressable onPress={() => navigate('/')}>
          <Text style={styles.tabText}>Repositories</Text>
        </Pressable>
        {isSignedIn ? (
          <>
            <Pressable onPress={handleReviewPress}>
              <Text style={styles.tabText}>Create a review</Text>
            </Pressable>
            <Pressable onPress={handleSignOut}>
              <Text style={styles.tabText}>Sign out</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Pressable onPress={() => navigate('/signin')}>
              <Text style={styles.tabText}>Sign in</Text>
            </Pressable>
            <Pressable onPress={() => navigate('/signup')}>
              <Text style={styles.tabText}>Sign up</Text>
            </Pressable>
          </>
        )}
      </View>
    );
  };
  

export default AppBar;
