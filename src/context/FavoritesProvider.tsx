import type { ReactNode } from "react";
import { useCallback, useMemo, useState } from "react";
import { FavoriteContext } from "./FavoriteContext";

interface FavoriteContextProviderInterface {
  children: ReactNode;
}

export const FavoriteContextProvider = ({
  children,
}: FavoriteContextProviderInterface) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  }, []);

  const isFavorite = useCallback(
    (id: string) => {
      return favorites.includes(id);
    },
    [favorites],
  );

  const contextValue = useMemo(
    () => ({
      favorites,
      toggleFavorite,
      isFavorite,
    }),
    [favorites, toggleFavorite, isFavorite],
  );

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};
