import { useMutation, gql } from '@apollo/client';

const AUTHENTICATE_MUTATION = gql`
  mutation authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE_MUTATION);

  const signIn = async ({ username, password }) => {
    return await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });
  };

  return [signIn, result];
};

export default useSignIn;