export const fetchGetFullListOfUserOrderCartElementsFromBack = async (
  orderId: number
) => {
  try {
    const response = await fetch(`/order/carts/${orderId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
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
