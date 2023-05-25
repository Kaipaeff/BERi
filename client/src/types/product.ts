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

export type productPropsType = {
  id: number;
  Size: { size: number };
  Images: [{ src: string }];
  Product: { name: string; description: string; Vendor: { name: string } };
  Color: { color: string; colorCode: string };
  productId: number;
  colorId: number;
  sizeId: number;
  salePrice: number;
  sale: boolean;
  quantity: number;
  amount: number;
};

export type categoryType = {
  id: number;
  productType: string;
};

export type ageType = {
  id: number;
  age: string;
};
