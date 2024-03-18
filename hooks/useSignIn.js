import { useMutation, gql } from '@apollo/client';
import AuthStorage from '../utils/authStorage';
import { useApolloClient } from '@apollo/client';

const AUTHENTICATE_MUTATION = gql`
  mutation authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = new AuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE_MUTATION);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: { username, password },
      },
    });

    if (data?.authenticate.accessToken) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
      await apolloClient.resetStore();
    }

    return data;
  };

  return [signIn, result];
};

export default useSignIn;