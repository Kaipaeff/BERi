import { NumericLiteral } from 'typescript';

export type productType = {
  id: number;
  name: string;
  description: string;
  vendorId: number;
  vendorPice: number;
  categoryId: number;
  productTypeId: number;
  sexId: number;
  ageId: number;
  rating: number;
  reviews: number;
  minPrice: number;
  Images: [{ src: string }];
  Vendor: { premium: boolean };
  quantity?: number | undefined;
};

export type categoryType = {
  id: number;
  productType: string;
};

export type ageType = {
  id: number;
  age: string;
};
