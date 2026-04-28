export interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image: string;
  createdAt?: FirestoreTimestamp;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id?: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  paymentMethod: 'COD' | 'UPI';
  createdAt: FirestoreTimestamp;
}

export interface Category {
  id: string;
  name: string;
}
