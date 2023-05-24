export const fetchSendOrderMail = async (order: any) => {
  try {
    await fetch('/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
      credentials: 'include',
    });
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error('400'));
  }
};
