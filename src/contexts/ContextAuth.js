import { createContext, useState } from 'react';

export const ContextAuth = createContext({});

export function ContextAuthProvider({ children }) {
  const [user, setUser] = useState({});

  function login(email, password) {
    if (email === 'kayo@email.com' &&
      password == 1234
    ) {
      setUser({
        name: 'Kayo',
        email: email,
        address: 'Rua 9',
        telephone: '(21)978936167'
      })
      return 'Ok!';
    }
    else {
      return 'Email ou senha incorretos';
    }
  }
  return (
    <ContextAuth.Provider value={{
      login,
      user
    }}>
      {children}
    </ContextAuth.Provider>
  );
}