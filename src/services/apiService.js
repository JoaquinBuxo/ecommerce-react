const baseURL = 'https://itx-frontend-test.onrender.com/api';

export const addToCart = async (productSelected) => {
  try {
    const response = await fetch(`${baseURL}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productSelected),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('addToCart error:\n', error);
    throw error;
  }
};
