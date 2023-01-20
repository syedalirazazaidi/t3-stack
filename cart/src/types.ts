export interface Products {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface OurProduct {
  products: Products[];
}
