export const fetchAge = async () => {
    try {
      const response = await fetch('http://localhost:4000/products/age', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(new Error('400'));
    }
  };
  