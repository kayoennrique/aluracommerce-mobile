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

export async function deleteProdutos() {
  const products = await pickupProducts();
  if (products.length > 0) {
    products.forEach(async (product) => {
      await deleteProduto(product.id);
    })
  }
}

async function deleteProduto(id) {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}