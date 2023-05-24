import { fetchSendOrderMail } from './orderingFetch';

export const ordering = async (order:any) => {
  try {
    const response = await fetchSendOrderMail(order);
    console.log(response, '<<<<<<RESPONSE');
  } catch (error) {
    return Promise.reject(new Error('400'));
  }
};
