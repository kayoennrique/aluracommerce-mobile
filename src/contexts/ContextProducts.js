import { createContext, useState } from 'react'

export const ContextProducts = createContext({})

export function ProductsProvider({ children }) {
  const [amount, setAmount] = useState(0);
  const [cart, setCart] = useState([]);
  const [latestVisas, setLatestVisas] = useState([]);

  function sawProduct(product) {
    setAmount(amount + 1);

    let newCart = cart
    newCart.push(product);
    setCart(newCart);

    let newLatestVisas = new Set(latestVisas)
    newLatestVisas.add(product)
    setLatestVisas([...newLatestVisas])
  }

  return (
    <ContextProducts.Provider value={{
      amount,
      cart,
      latestVisas,
      sawProduct
    }}>
      {children}
    </ContextProducts.Provider>
  );
}