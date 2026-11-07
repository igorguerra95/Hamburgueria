export interface MenuItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: 'prime' | 'smash' | 'autorais' | 'porcoes' | 'bebidas';
  badge?: string;
  weight?: string;
  image: string;
  ingredients: string[];
  spicyLevel?: number;
  isFavorite?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  meatDoneness?: string;
  notes?: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  favoriteBurger: string;
}

export interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}
