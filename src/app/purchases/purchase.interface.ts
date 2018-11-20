interface Category {
  name: string;
  parent: string;
}

interface Prices {
  with_discount_grn: number;
  with_discount_usd: number;
  without_discount_grn: number;
  without_discount_usd: number;
}

export interface Purchase {
  id: string;
  brand: string;
  category: Category;
  details: string;
  name: string;
  photo: string;
  prices: Prices;
  reviews: number;
  sale: boolean;
}
