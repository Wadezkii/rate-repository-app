import React, { createContext, useState, useContext } from 'react';
import AuthStorage from './authStorage';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const authStorage = new AuthStorage();

  const checkSignInStatus = async () => {
    const accessToken = await authStorage.getAccessToken();
    setIsSignedIn(!!accessToken);
  };

  checkSignInStatus();

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
