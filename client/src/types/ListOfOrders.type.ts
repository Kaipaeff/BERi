export default interface IOneOrderElement {
  id: number;
  userId: number;
  totalOrderPrice: string;
  addressId: number;
  accepted: boolean;
  processed: boolean;
  completed: boolean;
  canceled: boolean;
  createdAt: string;
  updatedAt: string;
  'User.email': string;
  'User.phone': string;
  'DeliveryAddress.address': string;
}

export interface INewOrderElement {
  userId: number;
  totalOrderPrice: number;
  addressId: number;
  accepted: boolean;
  processed: boolean;
  completed: boolean;
  canceled: boolean;
}

export interface IOneOrderChangeStatus {
  id: number;
  accepted: boolean;
  processed: boolean;
  completed: boolean;
  canceled: boolean;
}
