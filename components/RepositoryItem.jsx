import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  countContainer: {
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
  count: {
    marginTop: 5,
  },
  languageTag: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
});

const formatCount = count => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();
  };


  const RepositoryItem = ({ item, showGitHubButton }) => {

    const handlePress = () => {
      Linking.openURL(item.url);
    };

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.languageTag}>Language: {item.language}</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.countContainer}>
            <Text style={styles.count}>{formatCount(item.stargazersCount)}</Text>
            <Text>Stars</Text>
          </View>
          <View style={styles.countContainer}>
            <Text style={styles.count}>{formatCount(item.forksCount)}</Text>
            <Text>Forks</Text>
          </View>
          <View style={styles.countContainer}>
            <Text style={styles.count}>{formatCount(item.reviewCount)}</Text>
            <Text>Reviews</Text>
          </View>
          <View style={styles.countContainer}>
            <Text style={styles.count}>{formatCount(item.ratingAverage)}</Text>
            <Text>Rating</Text>
          </View>
        </View>
        {showGitHubButton && <Button title="Open in GitHub" onPress={handlePress} />}
      </View>
    );
  };

export default RepositoryItem;
