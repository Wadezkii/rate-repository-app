import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tab: {
    padding: 10,
  },
  text: {
    color: '#ffffff',
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable style={styles.tab}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
