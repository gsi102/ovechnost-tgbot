export interface IItemInCart {
  id: string;
  title: string;
  sku: string;
  size: string;
  oldPrice: string;
  newPrice: string;
  discount: number;
  quantity: number;
}

export interface IProduct {
  _id: string;
  title: string;
  sku: string;
  sizes: string;
  oldPrice: string;
  newPrice: string;
  material: string;
  isInStockColor1: string;
  colors: string;
}
