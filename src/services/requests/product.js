import api from "../api";

export async function saveProduct(product) {
  try {
    const result = await api.post('/products', product)
    return result.data;
  }
  catch (erro) {
    console.log(erro);
    return {};
  }
}

export async function pickupProducts() {
  try {
    const result = await api.get('/products')
    return result.data;
  }
  catch {
    console.log(erro);
    return [];
  }
}