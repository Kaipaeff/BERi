export default interface IDeliveryAddress {
  id: number;
  userId: number;
  address: string;
}

export interface INewDeliveryAddress {
  address: string;
  userId: number;
}
