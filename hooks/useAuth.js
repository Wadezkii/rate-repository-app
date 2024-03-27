import { useContext } from 'react';
import AuthStorage from '../utils/authStorage';

export const useAuth = () => {
  const context = useContext(AuthStorage);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
