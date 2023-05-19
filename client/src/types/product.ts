import { NumericLiteral } from 'typescript';

export type productType = {
  id: number;
  name: string;
  description: string;
  img: string;
  vendorId: number;
  vendorPice: number;
  categoryId: number;
  productTypeId: number;
  sexId: number;
  ageId: number;
  rating: number;
  reviews: number;
  minPrice: number;
  Vendor: { premium: boolean };
  quantity?: number | undefined;
};

export type categoryType = {
  id: number;
  productType: string;
};
