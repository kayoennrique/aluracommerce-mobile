import { createContext, useState } from 'react';

export const ContextAuth = createContext({});

export function ContextAuthProvider({ children }) {
  const [user, setUser] = useState({});

  function login(email, password) {
    if (email === 'kayo@email.com' &&
      password == 1234
    ) {
      setUser({
        name: 'Kayo Ennrique Pereira',
        email: email,
        address: 'Rua dos Bacanas',
        telephone: '+55 (21) 97893-6167'
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