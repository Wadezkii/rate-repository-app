import { useSignIn } from '../hooks/useSignIn';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
jest.mock('../hooks/useSignIn', () => {
    return jest.fn();
  });

describe('SignIn', () => {
  it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
    const signInMock = jest.fn();
    useSignIn.mockReturnValue([signInMock]);

    const { getByPlaceholderText, getByText } = render(<SignIn />);

    fireEvent.changeText(getByPlaceholderText('Username'), 'username');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('Sign In'));

    await waitFor(() => {
      expect(signInMock).toHaveBeenCalledTimes(1);
      expect(signInMock).toHaveBeenCalledWith({
        username: 'username',
        password: 'password',
      });
    });
  });
});
