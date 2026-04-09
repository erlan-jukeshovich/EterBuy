import { Link } from "react-router-dom";
import { useShop } from "../context/useShop";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { useMemo } from "react";

const LatestCollection = () => {
  const { products } = useShop();

  const latestProducts = useMemo(() => products.slice(0, 10), [products]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Title text1="LATEST" text2="COLLECTIONS" />
          <p className="mt-4 text-lg text-gray-600 max-w-md">
            Fresh arrivals. Bold styles. <br />
            Made for those who move different.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {latestProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/collection"
            className="border border-black px-10 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-widest font-medium"
          >
            SHOP ALL COLLECTIONS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
