export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: string[]; // e.g., "Vegano", "Gluten Free", "Popolare", "Specialità"
}

export interface MenuCategory {
  id: string; // e.g., "antipasti", "primi", "secondi", "dolci", "bevande"
  title: string;
  description?: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  author: string;
  rating: number; // e.g. 5
  timeAgo: string;
  text: string;
  accentQuote?: string;
  avatarUrl?: string;
  isLocalGuide?: boolean;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  status: 'confermata' | 'in_attesa' | 'annullata';
  createdAt: string;
}
