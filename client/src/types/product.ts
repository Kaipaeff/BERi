export type productType = {
  id: number;
  name: string;
  description: string;
  sex: number;
  img: string;
  vendorId: number;
  categoryId: number;
  quantity?: number | undefined;
};
