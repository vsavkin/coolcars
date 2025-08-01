export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'sedan' | 'suv' | 'truck' | 'electric' | 'sports';
  features: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}