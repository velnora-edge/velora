
import React from "react";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const trendingProducts = [
  {
    id: 21,
    name: "Gold Pearl Earrings",
    category: "Accessories",
    price: "$38",
    image: "/images/earing.jpg",
  },
  {
    id: 22,
    name: "Structured Mini Bag",
    category: "Bags",
    price: "$72",
    image: "/images/trending-1.jpg",
  },
  {
    id: 23,
    name: "Classic Sunglasses",
    category: "Accessories",
    price: "$45",
    image: "/images/trending-3.jpg",
  },
];

const TrendingNow = () => {
  return (
    <section className="bg-[#FAF7F2] px-5 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#B4527A]">
              What's Trending
            </p>

            <h2
              className="text-4xl font-medium text-[#2A1226] md:text-5xl"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              Trending <span className="text-[#B4527A]">Now</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600 md:text-base">
              Discover the pieces everyone is loving right now,
              from everyday accessories to statement essentials.
            </p>
          </div>

          <Link
            to="/products"
            className="group hidden items-center gap-2 text-sm font-semibold text-[#2A1226] sm:flex"
          >
            Explore All
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {trendingProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="group relative overflow-hidden rounded-[28px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-[430px] overflow-hidden bg-[#F3EDE7]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1226]/80 via-transparent to-transparent opacity-70" />

                {/* Trending Badge */}
                <span className="absolute left-5 top-5 rounded-full bg-[#D9A86C] px-4 py-2 text-xs font-semibold text-[#2A1226]">
                  Trending
                </span>

                {/* Heart */}
                <button
                  onClick={(e) => e.preventDefault()}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#2A1226] shadow-md transition-all duration-300 hover:scale-110 hover:text-[#B4527A]"
                >
                  <Heart size={18} />
                </button>

                {/* Product Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9A86C]">
                    {product.category}
                  </p>

                  <h3
                    className="text-2xl text-white"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-white">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            to="/products"
            className="flex items-center gap-2 rounded-full bg-[#2A1226] px-6 py-3 text-sm font-semibold text-white"
          >
            Explore All
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TrendingNow;
