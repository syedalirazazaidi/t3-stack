export interface Products {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface OurProduct {
  products: Products[];
}
