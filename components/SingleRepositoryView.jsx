import React from 'react';
import { useParams } from 'react-router-native';
import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import { useRepository } from '../hooks/useRepository';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { repository, loading, error } = useRepository(id);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

  if (!repository || !repository.reviews) {
    return <Text>No repository data available</Text>;
  }

  const reviews = repository.reviews.edges.map(edge => edge.node);

  return (
    <FlatList
      data={reviews}
      ListHeaderComponent={() => <RepositoryItem item={repository} showGitHubButton={true} />}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepositoryView;
