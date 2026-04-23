import { createContext } from "react";

interface FavoriteContextInterface {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const FavoriteContext = createContext<FavoriteContextInterface | undefined>(undefined);