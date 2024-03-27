import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'blue',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    fontSize: 20,
  },
  text: {
    paddingTop: 5,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
      <Text>{review.user.username} {format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
      <Text style={styles.text}>{review.text}</Text>
    </View>
  );
};

export default ReviewItem;
