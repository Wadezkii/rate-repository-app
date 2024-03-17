import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const createApolloClient = () => {
  let uri = 'http://localhost:4000/graphql';

  if (Constants.manifest?.extra?.apolloUri) {
    uri = Constants.manifest.extra.apolloUri;
  } else if (Constants.manifest2?.extra?.apolloUri) {
    uri = Constants.manifest2.extra.apolloUri;
  }

  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;