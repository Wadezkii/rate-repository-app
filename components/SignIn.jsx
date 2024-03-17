import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginBottom: 10,
    },
    errorInput: {
        borderColor: '#d73a4a',
      },
      errorText: {
        marginBottom: 10,
        color: '#d73a4a',
      },
  });

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const SignIn = () => {
    const onSubmit = (values) => {
      console.log(values);
    };
  
    return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
        <View style={styles.container}>
          <TextInput
            style={[styles.input, touched.username && errors.username && styles.errorInput]}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            placeholder="Username"
          />
          {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
          <TextInput
            style={[styles.input, touched.password && errors.password && styles.errorInput]}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
            secureTextEntry
          />
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          <Button onPress={handleSubmit} title="Sign In" disabled={!isValid} />
        </View>
      )}
    </Formik>
  );
  };
  
  export default SignIn;
