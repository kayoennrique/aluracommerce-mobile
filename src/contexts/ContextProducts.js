import { createContext, useState } from 'react'
import { useEffect } from 'react';
import { pickupProducts, saveProduct, deleteProdutos } from '../services/requests/products';

export const ContextProducts = createContext({})

export function ProductsProvider({ children }) {
  const [amount, setAmount] = useState(0);
  const [cart, setCart] = useState([]);
  const [latestVisas, setLatestVisas] = useState([]);

  useEffect(() => {
    async function getProductsCart() {
      const products = await pickupProducts();
      setCart(products);
      setAmount(products.length);
    }
    getProductsCart();
  }, []);

  async function sawProduct(product) {
    setAmount(amount + 1);
    const productSaved = await saveProduct(product)
    let newCart = cart
    newCart.push(productSaved);

    let newLatestVisuses = new Set(latestVisas)
    newLatestVisuses.add(product)
    setLatestVisas([...newLatestVisuses])
  }

  async function deletarProdutos() {
    const deleteProd = await deleteProdutos();
    if (deleteProd === null) {
      Alert.alert("Erro ao deletar produtos");
      return;
    }
    setAmount(0);
    setCart([]);
  }

  return (
    <ContextProducts.Provider value={{
      amount,
      cart,
      latestVisas,
      deletarProdutos,
      sawProduct
    }}>
      {children}
    </ContextProducts.Provider>
  )
}