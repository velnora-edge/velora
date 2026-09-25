import React from "react";
import { Heart, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Silk Evening Dress",
    category: "Women",
    price: "$129",
    oldPrice: "$159",
    image:
      "./images/silk.jpg",
    badge: "New",
  },
  {
    id: 2,
    name: "Classic Linen Shirt",
    category: "Men",
    price: "$79",
    oldPrice: "$99",
    image:
      "./images/linen.jpg",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Gold Pearl Necklace",
    category: "Jewelry",
    price: "$89",
    oldPrice: "$120",
    image:
      "./images/gold.jpg",
    badge: "Trending",
  },
  {
    id: 4,
    name: "Luxury Leather Bag",
    category: "Accessories",
    price: "$149",
    oldPrice: "$189",
    image:
      "./images/bag.jpg",
    badge: "Best Seller",
  },
  {
    id: 5,
    name: "Minimal Heels",
    category: "Shoes",
    price: "$95",
    oldPrice: "$125",
    image:
      "./images/heel.jpg",
    badge: "New",
  },
  {
    id: 6,
    name: "Signature Fragrance",
    category: "Beauty",
    price: "$75",
    oldPrice: "$95",
    image:
      "./images/perfume.jpg",
    badge: "Popular",
  },
  {
    id: 7,
    name: "Premium Watch",
    category: "Accessories",
    price: "$179",
    oldPrice: "$220",
    image:
      "./images/watch.jpg",
    badge: "Luxury",
  },
  {
    id: 8,
    name: "Soft Knit Cardigan",
    category: "Women",
    price: "$85",
    oldPrice: "$110",
    image:
      "./images/shirt.jpg",
    badge: "New",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-[#FAF7F2] px-5 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#B4527A" }}
            >
              Curated For You
            </p>

            <h2
              className="text-4xl font-medium leading-tight text-[#2A1226] md:text-5xl"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              Featured{" "}
              <span className="text-[#B4527A]">Products</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
              Discover our most-loved pieces, carefully selected to
              bring elegance and effortless style to your everyday life.
            </p>
          </div>

          <Link
            to="/products"
            className="group flex w-fit items-center gap-2 rounded-full border border-[#2A1226] px-5 py-2.5 text-sm font-semibold text-[#2A1226] transition-all duration-300 hover:bg-[#2A1226] hover:text-white"
          >
            View All Products

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-[26px] border border-[#eadfd5] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-[330px] overflow-hidden bg-[#f3ece5]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800";
                  }}
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1226]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-[#2A1226] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                  {product.badge}
                </span>

                {/* Wishlist */}
                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2A1226] shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#B4527A] hover:text-white"
                >
                  <Heart size={18} />
                </button>

                {/* Add to Cart */}
                <button
                  type="button"
                  className="absolute bottom-4 left-4 right-4 flex translate-y-16 items-center justify-center gap-2 rounded-full bg-[#2A1226] py-3 text-sm font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#B4527A]"
                >
                  <ShoppingBag size={17} />
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5">

                <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#B4527A]">
                  {product.category}
                </p>

                <Link to={`/products/${product.id}`}>
                  <h3
                    className="mt-2 text-xl font-medium text-[#2A1226] transition-colors duration-300 hover:text-[#B4527A]"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                    }}
                  >
                    {product.name}
                  </h3>
                </Link>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-lg font-bold text-[#2A1226]">
                    {product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;