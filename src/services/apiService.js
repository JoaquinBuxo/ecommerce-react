import { fetchData } from '../utils/fetchData';

const baseURL = 'https://itx-frontend-test.onrender.com/api';

export const getAllProducts = fetchData(`${baseURL}/product`);

export const getProductsDetails = async ({ params }) => {
  const { productId } = params;
  const response = await fetch(`${baseURL}/product/${productId}`);
  return response.json();
};

export const postToCart = async (productSelected) => {
  try {
    const response = await fetch(`${baseURL}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productSelected),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('apiService: addToCart error: ', error);
    throw error;
  }
};
