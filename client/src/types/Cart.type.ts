export default interface IOneOrderedCartElement {
  id: number;
  userId: number;
  productPropsId: number;
  productName: string;
  quantity: number;
  price: number;
  totalPrice: number;
  orderId: number;
}

export interface INewOneOrderedCartElement {
  userId: number;
  productPropsId: number;
  productName: string;
  quantity: number;
  price: number;
  totalPrice: number;
  orderId: number;
}
