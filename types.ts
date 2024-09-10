export interface Category {
  header: string;
  slug: string;
  products: Product[];
}

export interface Product {
  image: string;
  name: string;
  description?: string;
  required?: string[];
  expectedPeriod?: string;
  price: string;
}
