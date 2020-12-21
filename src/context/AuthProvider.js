import { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext('');
AuthContext.displayName = 'AuthProvider';

const AuthProvider = ({ children }) => {
  const [isLogged, setLogged] = useState(localStorage.getItem('id'));

  const login = useCallback(() => {
    setLogged(true);
    localStorage.setItem('id', '123');
  }, [setLogged]);

  const logout = useCallback(() => {
    setLogged(false);
    localStorage.removeItem('id');
  }, [setLogged]);

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
