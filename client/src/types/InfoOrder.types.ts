export default interface InfoOrder {
  userId: number;
  goods: {
    productId: number;
    productName: string;
    // price: number; из бека? 
    quantity: number;
    size?: string;
    color?: string;
  };
  clientAdress: string;
  clientPhone: number;
}
