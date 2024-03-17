import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          ownerAvatarUrl
        }
      }
    }
  }
`;

const useRepositories = () => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
    });
  
    const repositoryNodes = data?.repositories?.edges.map(edge => edge.node) ?? [];
  
    return { repositories: repositoryNodes, loading, error, refetch: () => {} };
  };

export default useRepositories;