export const fetchProducts = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch('http://localhost:4000/products', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
  
      return data;
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error('400'));
  }
};
