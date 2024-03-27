import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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

export const useRepositories = (orderBy = 'CREATED_AT', orderDirection = 'DESC') => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: 'cache-and-network',
  });

  return {
    repositories: data?.repositories.edges.map(edge => edge.node) ?? [],
    loading,
    error,
  };
};

export default useRepositories;