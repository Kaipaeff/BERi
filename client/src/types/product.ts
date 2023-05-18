export type productType = {
  id: number;
  name: string;
  description: string;
  sex: number;
  img: string;
  rating: number;
  reviews: number;
  vendorId: number;
  categoryId: number;
  minPrice: string;
  quantity?: number | undefined;
};

