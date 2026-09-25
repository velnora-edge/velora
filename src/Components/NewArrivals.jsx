
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";


  const products = [
  {
    id: 101,
    name: "Velvet Evening Gown",
    category: "Women",
    price: 139,
    oldPrice: 179,
    rating: 4.9,
    image: "/images/velvet.jpg",
    isNew: true,
  },
  {
    id: 102,
    name: "Tailored Wool Blazer",
    category: "Men",
    price: 119,
    oldPrice: 149,
    rating: 4.8,
    image: "/images/blazer.jpg",
    isNew: true,
  },
  {
    id: 103,
    name: "Diamond Charm Bracelet",
    category: "Jewelry",
    price: 95,
    oldPrice: 125,
    rating: 4.9,
    image: "/images/bracelete.jpg",
    isNew: true,
  },
  {
    id: 104,
    name: "Luxury Crossbody Bag",
    category: "Accessories",
    price: 159,
    oldPrice: 199,
    rating: 4.8,
    image: "/images/crossbag.jpg",
    isNew: true,
  },
];

const NewArrivals = () => {
  return (
    <section className="bg-[#FAF7F2] px-5 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#B4527A]">
              Fresh From Velora
            </p>

            <h2
              className="text-4xl font-medium text-[#2A1226] md:text-5xl"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              New <span className="text-[#B4527A]">Arrivals</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600 md:text-base">
              Discover our latest pieces, carefully selected to bring
              effortless elegance to your everyday style.
            </p>
          </div>

          {/* Desktop View All */}
          <Link
            to="/products"
            className="group hidden items-center gap-2 text-sm font-semibold text-[#2A1226] sm:flex"
          >
            View All

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            to="/products"
            className="flex items-center gap-2 rounded-full bg-[#2A1226] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B4527A]"
          >
            View All Products
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;