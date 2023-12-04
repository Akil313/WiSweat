// UserContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  id: number;
  name: string;
}

interface UserContextProps {
  user: User | null;
  loading: boolean;
  login: (name: string, password: string) => void;
  logout: () => void;
  signup: (name: string, email: string, password: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticateUser = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const userData: User = { id: 1, name: 'exampleUser' };

      setUser(userData);
      setLoading(false);
    };

    authenticateUser();
  }, []);

  const login = (name: string, password: string) => {
    // Replace this with your actual login logic
    const newUser: User = { id: 2, name };
    setUser(newUser);
  };

  const logout = () => {
    // Replace this with your actual logout logic
    setUser(null);
  };

  const signup = (name: string, email: string, password: string) => {
    // Replace this with your actual signup logic
    const newUser: User = { id: 3, name };
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};