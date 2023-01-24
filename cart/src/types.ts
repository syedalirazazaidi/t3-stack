export interface Products {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface OurProduct {
  products: Products[];
}
