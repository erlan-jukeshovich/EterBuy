import { createContext } from "react";
import type { Product } from "./types";


interface ShopContextType {
  products: Product[];
  currency: string;
  deliveryFee: number;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined,
);



