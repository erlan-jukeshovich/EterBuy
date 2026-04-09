import { Link } from "react-router-dom";
import type { FC } from "react";
import type { Product } from "../context/types";
import { useShop } from "../context/useShop";

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { currency } = useShop();

  return (
    <Link to={`/product/${product._id}`} className="group block">

      <div className="relative overflow-hidden aspect-5/5.5 bg-gray-100 rounded-2xl">
        <img
          src={product.image[0]}
          alt={product.name}
          aria-label="image of product"
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {product.bestseller && (
          <div className="absolute top-2 left-2 bg-black text-white text-[8px] font-bold px-2 py-2 rounded-full tracking-widest">
            BESTSELLER
          </div>
        )}
      </div>

      <div className="mt-4 space-y-1 flex flex-col">
        <h3 aria-label="name of product" className="text-base font-medium text-gray-900 line-clamp-2 min-h-12 leading-snug group-hover:text-gray-500 transition-colors">
          {product.name}
        </h3>
        <p aria-label="category of product" className="text-sm text-gray-500 line-clamp-1">{product.category}</p>
        <p aria-label={`price of product in ${currency}`} className="text-lg font-semibold text-black">
          {currency} {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
