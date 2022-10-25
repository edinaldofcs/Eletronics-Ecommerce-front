export interface ProductProps  {
  id: string;
  name: string;
  price: number;
  quantity: number;
  slug: string;
  img: string;
  categoryId: string;
  sold: number;
  discount: number;
  description: {
    title: string;
    text: string;
  }[];
};

export interface FragmentProductProps {
  name: string;
  slug: string;
  quantity: number;
  sold: number;
  price: number;
  discount: number;
  id: string;
  img: string;  
}

export interface Productsprops {
  name: string;
  price: number;
  quantity: number;
  id: string;
  slug: string;
  img: string[];
  categoryId: string;
  sold: number;
  discount: number;
  description: {
    title: string;
    text: string;
  }[];
}

export interface CategorieProps {
  id: string;
  name: string;
  img: string;
  products?: Productsprops[]
}


export interface CartProps{
  id: string;
  userId: string;
  productId: string;
  quantity: number;
}