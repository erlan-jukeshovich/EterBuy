import type { ReactNode } from "react";
import { useMemo } from "react";
import { ShopContext } from "./ShopContext";
import { products } from "../assets/assets";

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const currency = "$";
  const deliveryFee = 10;

  const value = useMemo(
    () => ({
      products,
      currency,
      deliveryFee,
    }),
    [],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
