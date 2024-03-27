import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import SignIn from './components/SignIn';
import SingleRepositoryView from './components/SingleRepositoryView';
import ReviewFormContainer from './components/ReviewFormContainer';
import SignUp from './components/SignUp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Main = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} exact />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/repository/:id" element={<SingleRepositoryView />} />
          <Route path="/create-review" element={<ReviewFormContainer />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </View>
    </NativeRouter>
  );
};

export default Main;
