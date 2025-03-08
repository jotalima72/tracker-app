// AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextData = {
  jwt: string | null;
  loading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextData>({
  jwt: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jwt, setJwt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carrega o token ao iniciar
    const loadToken = async () => {
      try {
        const token = await AsyncStorage.getItem('jwt');
        setJwt(token);
      } catch (error) {
        console.error("Erro ao carregar token", error);
      } finally {
        setLoading(false);
      }
    };
    loadToken();
  }, []);

  const login = async (token: string) => {
    setJwt(token);
    await AsyncStorage.setItem('jwt', token);
  };

  const logout = async () => {
    setJwt(null);
    await AsyncStorage.removeItem('jwt');
  };

  return (
    <AuthContext.Provider value={{ jwt, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
