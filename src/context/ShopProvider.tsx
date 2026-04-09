import type { ReactNode, FC } from "react";
import { useMemo } from "react";
import { ShopContext } from "./ShopContext";
import { products } from "../assets/assets";

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider: FC<ShopContextProviderProps> = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;

  const value = useMemo(
    () => ({
      products,
      currency,
      deliveryFee,
    }),
    [currency, deliveryFee],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
