export type Category =
  | "All"
  | "Granulated Sugar"
  | "Brown Sugar"
  | "Specialty Sugars"
  | "Syrups"
  | "By-products";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  category: Category;
  rating: number;
  reviews: number;
  features: string[];
  certifications: string[];
  sustainabilityScore: number;
}
// @/types/index.ts

// export interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   unit: string;
//   image: string;
//   category: string;
//   rating: number;
//   reviews: number;
//   features: string[];
//   certifications: string[];
//   sustainabilityScore: number;
// }

export interface Review {
  id: number;
  productId: number;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

export interface PackageCustomization {
  size: "small" | "medium" | "large";
  packaging: "eco-friendly" | "standard" | "gift";
  label: string;
}

export interface PackageCustomization {
  color: string;
  logo: string;
  text: string;
  size: "small" | "medium" | "large";
  packaging: "eco-friendly" | "standard" | "gift";
  label: string;
}

