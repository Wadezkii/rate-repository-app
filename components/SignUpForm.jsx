import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().min(5, 'Username must be at least 5 characters').max(30, 'Username must be at most 30 characters').required('Username is required'),
  password: Yup.string().min(5, 'Password must be at least 5 characters').max(50, 'Password must be at most 50 characters').required('Password is required'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirmation is required'),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '', passwordConfirmation: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <TextInput onChangeText={handleChange('username')} onBlur={handleBlur('username')} value={values.username} placeholder="Username" />
          {touched.username && errors.username && <Text>{errors.username}</Text>}
          
          <TextInput onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} placeholder="Password" secureTextEntry />
          {touched.password && errors.password && <Text>{errors.password}</Text>}

          <TextInput onChangeText={handleChange('passwordConfirmation')} onBlur={handleBlur('passwordConfirmation')} value={values.passwordConfirmation} placeholder="Confirm Password" secureTextEntry />
          {touched.passwordConfirmation && errors.passwordConfirmation && <Text>{errors.passwordConfirmation}</Text>}

          <Button onPress={handleSubmit} title="Sign Up" />
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
