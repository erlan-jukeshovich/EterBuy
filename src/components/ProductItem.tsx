import { Link } from "react-router-dom";
import type { FC, MouseEvent } from "react";
import { useState } from "react";
import type { Product } from "../context/types";
import { useShop } from "../context/useShop";
import FavoriteIcon from "./icons/FavoriteIcon";

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { currency } = useShop();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToWishlist = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Added to wishlist:", product.name);
  };

  return (
    <Link
      to={`/product/${product._id}`}
      className="group flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black rounded-[32px]"
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 rounded-[32px]">
        <img
          src={product.image[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {product.bestseller && (
          <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-[0.1em] z-20">
            BESTSELLER
          </div>
        )}

        <button
          onClick={handleAddToWishlist}
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute top-4 right-4 p-2.5 bg-white/80 hover:bg-white backdrop-blur-md rounded-full text-gray-700 hover:text-red-500 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 shadow-sm"
        >
          <FavoriteIcon />
        </button>

        {product.image.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/70 backdrop-blur-lg p-1.5 rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-xl border border-white/20">
            {product.image.map((imgUrl, index) => (
              <button
                key={index}
                type="button"
                onMouseEnter={() => setCurrentImageIndex(index)}
                onClick={(e) => e.preventDefault()} 
                className={`w-10 h-10 rounded-[14px] overflow-hidden border-2 transition-all duration-200 ${
                  index === currentImageIndex
                    ? "border-black scale-110 shadow-md"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 px-1 flex flex-col flex-grow space-y-1">
        <h3 className="text-[16px] font-medium leading-snug text-gray-900 line-clamp-2 min-h-[44px] group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 font-normal">{product.category}</p>

        <div className="mt-auto pt-2">
          <p className="text-lg font-bold text-black">
            {currency} {product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
