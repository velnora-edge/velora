
import React, { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const products = [
  // =========================
  // WOMEN
  // =========================
  {
    id: 101,
    name: "Satin Evening Dress",
    category: "Women",
    price: 89,
    oldPrice: 119,
    rating: 4.9,
    image: "/images/silk2.jpg",
    isNew: true,
  },
  {
    id: 102,
    name: "Velvet Wrap Dress",
    category: "Women",
    price: 115,
    oldPrice: 145,
    rating: 4.8,
    image: "/images/shirt5.jpg",
    isNew: true,
  },
  {
    id: 103,
    name: "Pleated Midi Skirt",
    category: "Women",
    price: 68,
    oldPrice: 89,
    rating: 4.7,
    image: "/images/midi.jpg",
    isNew: false,
  },
  {
    id: 104,
    name: "Soft Knit Cardigan",
    category: "Women",
    price: 85,
    oldPrice: 110,
    rating: 4.8,
    image: "/images/shirt.jpg",
    isNew: true,
  },

  // =========================
  // MEN
  // =========================
  {
    id: 105,
    name: "Premium Linen Shirt",
    category: "Men",
    price: 59,
    oldPrice: 79,
    rating: 4.7,
    image: "/images/shirt4.jpg",
    isNew: true,
  },
  {
    id: 106,
    name: "Tailored Wool Blazer",
    category: "Men",
    price: 119,
    oldPrice: 149,
    rating: 4.8,
    image: "/images/shirt3.jpg",
    isNew: true,
  },
  {
    id: 107,
    name: "Classic Oxford Shirt",
    category: "Men",
    price: 64,
    oldPrice: 85,
    rating: 4.6,
    image: "/images/shirt2.jpg",
    isNew: false,
  },
  {
    id: 108,
    name: "Relaxed Cotton Trousers",
    category: "Men",
    price: 78,
    oldPrice: 99,
    rating: 4.7,
    image: "/images/tro.jpg",
    isNew: false,
  },

  // =========================
  // JEWELRY
  // =========================
  {
    id: 109,
    name: "Minimal Gold Necklace",
    category: "Jewelry",
    price: 45,
    oldPrice: 60,
    rating: 4.9,
    image: "/images/but.jpg",
    isNew: true,
  },
  {
    id: 110,
    name: "Diamond Charm Bracelet",
    category: "Jewelry",
    price: 95,
    oldPrice: 125,
    rating: 4.9,
    image: "/images/pearl.jpg",
    isNew: true,
  },
  {
    id: 111,
    name: "Pearl Drop Earrings",
    category: "Jewelry",
    price: 52,
    oldPrice: 69,
    rating: 4.8,
    image: "/images/drop.jpg",
    isNew: false,
  },
  {
    id: 112,
    name: "Rose Gold Chain",
    category: "Jewelry",
    price: 72,
    oldPrice: 95,
    rating: 4.7,
    image: "/images/chain.jpg",
    isNew: false,
  },

  // =========================
  // BAGS
  // =========================
  {
    id: 113,
    name: "Classic Leather Bag",
    category: "Bags",
    price: 75,
    oldPrice: 99,
    rating: 4.8,
    image: "/images/bag3.jpg",
    isNew: true,
  },
  {
    id: 114,
    name: "Luxury Crossbody Bag",
    category: "Bags",
    price: 159,
    oldPrice: 199,
    rating: 4.8,
    image: "/images/bag2.jpg",
    isNew: true,
  },
  {
    id: 115,
    name: "Structured Tote Bag",
    category: "Bags",
    price: 129,
    oldPrice: 165,
    rating: 4.7,
    image: "/images/toti.jpg",
    isNew: false,
  },
  {
    id: 116,
    name: "Mini Shoulder Bag",
    category: "Bags",
    price: 82,
    oldPrice: 105,
    rating: 4.6,
    image: "/images/mini.jpg",
    isNew: false,
  },

  // =========================
  // SHOES
  // =========================
  {
    id: 117,
    name: "Minimal Heels",
    category: "Shoes",
    price: 95,
    oldPrice: 125,
    rating: 4.8,
    image: "/images/heel2.jpg",
    isNew: true,
  },
  {
    id: 118,
    name: "Classic Leather Loafers",
    category: "Shoes",
    price: 88,
    oldPrice: 115,
    rating: 4.7,
    image: "/images/shoe.jpg",
  
    isNew: false,
  },
  {
    id: 119,
    name: "Everyday Sneakers",
    category: "Shoes",
    price: 74,
    oldPrice: 95,
    rating: 4.6,
    image: "/images/sneaker.jpg",
    isNew: true,
  },
  {
    id: 120,
    name: "Pointed Flats",
    category: "Shoes",
    price: 69,
    oldPrice: 89,
    rating: 4.7,
    image: "/images/flats.jpg",
    isNew: false,
  },

  // =========================
  // BEAUTY
  // =========================
  {
    id: 121,
    name: "Signature Fragrance",
    category: "Beauty",
    price: 75,
    oldPrice: 95,
    rating: 4.9,
    image: "/images/frag.jpg",
    isNew: true,
  },
  {
    id: 122,
    name: "Rose Eau de Parfum",
    category: "Beauty",
    price: 68,
    oldPrice: 89,
    rating: 4.8,
    image: "/images/rose.jpg",
    isNew: true,
  },
  {
    id: 123,
    name: "Velvet Body Mist",
    category: "Beauty",
    price: 42,
    oldPrice: 55,
    rating: 4.6,
    image: "/images/body.jpg",
    isNew: false,
  },
  {
    id: 124,
    name: "Luxury Hand Cream",
    category: "Beauty",
    price: 32,
    oldPrice: 42,
    rating: 4.7,
    image: "/images/cream.jpg",
    isNew: false,
  },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlCategory = searchParams.get("category");

  const formattedCategory =
    urlCategory && urlCategory !== "all"
      ? urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1)
      : "All";

  const [activeCategory, setActiveCategory] =
    useState(formattedCategory);

  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("All");
  const [rating, setRating] = useState("All");
  const [sortBy, setSortBy] = useState("Default");

  const categories = [
    "All",
    "Women",
    "Men",
    "Jewelry",
    "Bags",
    "Shoes",
    "Beauty",
  ];

  const handleCategory = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: category.toLowerCase(),
      });
    }
  };

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesPrice =
        price === "All" ||
        (price === "Under50" && product.price < 50) ||
        (price === "50to100" &&
          product.price >= 50 &&
          product.price <= 100) ||
        (price === "Over100" && product.price > 100);

      const matchesRating =
        rating === "All" ||
        product.rating >= Number(rating);

      return (
        matchesCategory &&
        matchesSearch &&
        matchesPrice &&
        matchesRating
      );
    })
    .sort((a, b) => {
      if (sortBy === "Low") {
        return a.price - b.price;
      }

      if (sortBy === "High") {
        return b.price - a.price;
      }

      if (sortBy === "Rating") {
        return b.rating - a.rating;
      }

      if (sortBy === "Newest") {
        return Number(b.isNew) - Number(a.isNew);
      }

      return 0;
    });

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
    setPrice("All");
    setRating("All");
    setSortBy("Default");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* =========================
          PAGE HEADER
      ========================= */}
      <section className="px-5 pb-12 pt-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B4527A]">
            Velora Collection
          </p>

          <h1
            className="mt-4 text-4xl font-medium text-[#2A1226] md:text-6xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Shop{" "}
            <span className="text-[#B4527A]">
              Everything
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
            Explore our curated collection of fashion,
            accessories and lifestyle essentials designed
            for modern everyday elegance.
          </p>

        </div>
      </section>

      {/* =========================
          FILTER BAR
      ========================= */}
      <section className="px-5 pb-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-[24px] bg-white p-5 shadow-sm">

            {/* CATEGORY + SEARCH */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              {/* CATEGORIES */}
              <div className="flex flex-wrap items-center gap-2">

                <SlidersHorizontal
                  size={18}
                  className="mr-1 text-[#2A1226]"
                />

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      handleCategory(category)
                    }
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-[#2A1226] text-white shadow-md"
                        : "bg-[#FAF7F2] text-gray-600 hover:bg-[#F3E1E7] hover:text-[#B4527A]"
                    }`}
                  >
                    {category}
                  </button>
                ))}

              </div>

              {/* SEARCH */}
              <div className="relative w-full lg:w-64">

                <Search
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="w-full rounded-full border border-gray-200 bg-[#FAF7F2] py-2.5 pl-11 pr-10 text-sm outline-none transition-all duration-300 focus:border-[#B4527A] focus:ring-2 focus:ring-[#B4527A]/10"
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-[#B4527A]"
                  >
                    <X size={16} />
                  </button>
                )}

              </div>
            </div>

            {/* ADVANCED FILTERS */}
            <div className="mt-5 flex flex-col gap-3 border-t border-[#eee5de] pt-5 sm:flex-row sm:flex-wrap sm:items-center">

              {/* PRICE */}
              <select
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
                className="rounded-full border border-gray-200 bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2A1226] outline-none transition-all focus:border-[#B4527A]"
              >
                <option value="All">
                  All Prices
                </option>

                <option value="Under50">
                  Under $50
                </option>

                <option value="50to100">
                  $50 - $100
                </option>

                <option value="Over100">
                  Over $100
                </option>
              </select>

              {/* RATING */}
              <select
                value={rating}
                onChange={(e) =>
                  setRating(e.target.value)
                }
                className="rounded-full border border-gray-200 bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2A1226] outline-none transition-all focus:border-[#B4527A]"
              >
                <option value="All">
                  All Ratings
                </option>

                <option value="4.5">
                  4.5+ ⭐
                </option>

                <option value="4">
                  4+ ⭐
                </option>

                <option value="3">
                  3+ ⭐
                </option>
              </select>

              {/* SORT */}
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
                className="rounded-full border border-gray-200 bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2A1226] outline-none transition-all focus:border-[#B4527A]"
              >
                <option value="Default">
                  Sort: Featured
                </option>

                <option value="Newest">
                  Newest
                </option>

                <option value="Low">
                  Price: Low to High
                </option>

                <option value="High">
                  Price: High to Low
                </option>

                <option value="Rating">
                  Highest Rated
                </option>
              </select>

              {/* CLEAR FILTERS */}
              {(activeCategory !== "All" ||
                search ||
                price !== "All" ||
                rating !== "All" ||
                sortBy !== "Default") && (
                <button
                  onClick={clearFilters}
                  className="rounded-full px-4 py-2.5 text-sm font-semibold text-[#B4527A] transition-colors hover:bg-[#F3E1E7]"
                >
                  Clear Filters
                </button>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PRODUCTS
      ========================= */}
      <section className="px-5 pb-20 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          {/* RESULT COUNT */}
          <div className="mb-6 flex items-center justify-between">

            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-[#2A1226]">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            {activeCategory !== "All" && (
              <p className="text-sm text-[#B4527A]">
                {activeCategory} Collection
              </p>
            )}

          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>
          ) : (

            /* EMPTY STATE */
            <div className="rounded-[28px] bg-white px-6 py-20 text-center shadow-sm">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F3E1E7]">
                <Search
                  size={25}
                  className="text-[#B4527A]"
                />
              </div>

              <h2
                className="mt-5 text-2xl text-[#2A1226]"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                No products found
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Try another search or change your filters.
              </p>

              <button
                onClick={clearFilters}
                className="mt-6 rounded-full bg-[#2A1226] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B4527A]"
              >
                View All Products
              </button>

            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Products;
