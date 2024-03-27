import React from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner\'s username is required'),
  repositoryName: yup.string().required('Repository\'s name is required'),
  rating: yup.number().required('Rating is required').min(0, 'Rating must be between 0 and 100').max(100, 'Rating must be between 0 and 100'),
  review: yup.string(),
});

const ReviewForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      ownerName: '',
      repositoryName: '',
      rating: '',
      review: '',
    }}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View>
        <TextInput
          onChangeText={handleChange('ownerName')}
          onBlur={handleBlur('ownerName')}
          value={values.ownerName}
          placeholder="Repository owner's username"
        />
        {touched.ownerName && errors.ownerName && <Text>{errors.ownerName}</Text>}
        <TextInput
          onChangeText={handleChange('repositoryName')}
          onBlur={handleBlur('repositoryName')}
          value={values.repositoryName}
          placeholder="Repository's name"
        />
        {touched.repositoryName && errors.repositoryName && <Text>{errors.repositoryName}</Text>}
        <TextInput
          onChangeText={handleChange('rating')}
          onBlur={handleBlur('rating')}
          value={values.rating}
          placeholder="Rating between 0 and 100"
          keyboardType="numeric"
        />
        {touched.rating && errors.rating && <Text>{errors.rating}</Text>}
        <TextInput
          onChangeText={handleChange('review')}
          onBlur={handleBlur('review')}
          value={values.review}
          placeholder="Review"
          multiline
        />
        <Button onPress={handleSubmit} title="Submit Review" />
      </View>
    )}
  </Formik>
);

export default ReviewForm;
