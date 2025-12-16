import lunaChair from '$lib/assets/images/luna-chair.png?enhanced';
import terraBench from '$lib/assets/images/terra-bench.png?enhanced';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: any; // Allow enhanced image object
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Luna Lounge Chair",
    category: "Chairs",
    price: "$450",
    image: lunaChair, 
    description: "Hand-woven rattan lounge chair with a curved organic silhouette. Perfect for sunrooms or living areas."
  },
  {
    id: 2,
    name: "Terra Woven Bench",
    category: "Seating",
    price: "$280",
    image: terraBench,
    description: "Minimalist bench featuring durable teak wood frame and intricate rattan webbing."
  },
  {
    id: 3,
    name: "Bali Credenza",
    category: "Storage",
    price: "$890",
    image: terraBench, // Reusing for consistency in demo
    description: "Elegant storage unit with breathable woven doors and solid wood construction."
  },
  {
    id: 4,
    name: "Surya Dining Set",
    category: "Dining",
    price: "$2,200",
    image: lunaChair, // Reusing for demo
    description: "Complete dining set including a large oval table and 6 classic rattan dining chairs."
  },
  {
    id: 5,
    name: "Nusa Pendant Light",
    category: "Lighting",
    price: "$150",
    image: lunaChair, // Reusing for demo
    description: "Large domed pendant light woven from natural seagrass to create warm ambient lighting."
  },
  {
    id: 6,
    name: "Ubud Coffee Table",
    category: "Tables",
    price: "$320",
    image: terraBench, // Reusing for demo
    description: "Round coffee table with a sturdy rattan base and tempered glass top."
  }
];
