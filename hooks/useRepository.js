import { useQuery, gql } from '@apollo/client';

const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      ownerAvatarUrl
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const useRepository = (id) => {
    const { data, loading, error } = useQuery(GET_REPOSITORY, {
      variables: { id },
      fetchPolicy: 'cache-and-network',
    });
  
    return {
      repository: data?.repository,
      loading,
      error,
    };
  };

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const repositoryNodes = data?.repositories?.edges.map(edge => edge.node) ?? [];
  return { repositories: repositoryNodes, loading, error, refetch: () => {} };
};

export default useRepositories;
