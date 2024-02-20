import { createContext, useState } from 'react'
import { useEffect } from 'react';
import { pickupProducts, saveProduct } from '../services/requests/product';

export const ContextProducts = createContext({})

export function ProductsProvider({ children }) {
  const [amount, setAmount] = useState(0);
  const [cart, setCart] = useState([]);
  const [latestVisas, setLatestVisas] = useState([]);

  useEffect(async () => {
    const result = await pickupProducts();
    setCart(result);
    setAmount(result.length);
  }, [])

  async function sawProduct(product) {
    setAmount(amount + 1);

    const productSaved = await saveProduct(product)
    let newCart = cart
    newCart.push(productSaved);
    setCart(newCart);

    let newLatestVisuses = new Set(latestVisas)
    newLatestVisuses.add(product)
    setLatestVisas([...newLatestVisuses])
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
  )
}