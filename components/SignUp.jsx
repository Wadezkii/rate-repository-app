import React from 'react';
import { View, Text } from 'react-native';
import SignUpForm from './SignUpForm';
import { useSignIn } from '../hooks/useSignIn';
import { useMutation, gql } from '@apollo/client';

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      id
    }
  }
`;

const SignUp = () => {
  const [signIn] = useSignIn();
  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const handleSignUp = async (values) => {
    try {
      const { data } = await createUser({ variables: { username: values.username, password: values.password } });
      if (data) {
        await signIn({ username: values.username, password: values.password });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <SignUpForm onSubmit={handleSignUp} />
    </View>
  );
};

export default SignUp;
