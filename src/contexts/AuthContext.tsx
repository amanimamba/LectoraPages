import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';
import { mockUsers } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  role: UserRole;
  login: (email: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('articulus_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
        // Default to admin for demo purposes if nothing stored
        const defaultUser = mockUsers[0];
        setUser(defaultUser);
        localStorage.setItem('articulus_user', JSON.stringify(defaultUser));
    }
  }, []);

  const login = (email: string) => {
    const foundUser = mockUsers.find(u => u.email === email) || mockUsers[0];
    setUser(foundUser);
    localStorage.setItem('articulus_user', JSON.stringify(foundUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('articulus_user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      role: user?.role || 'visitor', 
      login, 
      logout,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
