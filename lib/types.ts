export type Category = { id: string; name: string; slug: string };

export type Product = {
  id: string;
  category_id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  old_price?: number | null;
  image_url: string;
  stock: number;
  is_active: boolean;
};
