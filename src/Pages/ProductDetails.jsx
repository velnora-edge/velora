
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";

const products = [
  {
  id: 1,
  name: "Silk Evening Dress",
  category: "Women",
  price: 129,
  oldPrice: 159,
  image: "/images/silk.jpg",
},

{
  id: 2,
  name: "Classic Linen Shirt",
  category: "Men",
  price: 79,
  oldPrice: 99,
  image: "/images/linen.jpg",
},

{
  id: 3,
  name: "Gold Pearl Necklace",
  category: "Jewelry",
  price: 89,
  oldPrice: 120,
  image: "/images/gold.jpg",
},

{
  id: 4,
  name: "Luxury Leather Bag",
  category: "Accessories",
  price: 149,
  oldPrice: 189,
  image: "/images/bag.jpg",
},
 {
  id: 5,
  name: "Minimal Heels",
  category: "Shoes",
  price: 95,
  oldPrice: 125,
  image: "/images/heel.jpg",
},
{
  id: 6,
  name: "Signature Fragrance",
  category: "Beauty",
  price: 75,
  oldPrice: 95,
  image: "/images/perfume.jpg",
},
{
  id: 7,
  name: "Premium Watch",
  category: "Accessories",
  price: 179,
  oldPrice: 220,
  image: "/images/watch.jpg",
},
{
  id: 8,
  name: "Soft Knit Cardigan",
  category: "Women",
  price: 85,
  oldPrice: 110,
  image: "/images/shirt.jpg",
},
];

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] =
    useState("#2A1226");

  useEffect(() => {
    if (!product) return;

    const wishlist =
      JSON.parse(
        localStorage.getItem("veloraWishlist")
      ) || [];

    setIsWishlisted(
      wishlist.some(
        (item) => item.id === product.id
      )
    );
  }, [product]);

  if (!product) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#FAF7F2] px-5">
        <div className="text-center">
          <h1
            className="text-4xl text-[#2A1226]"
            style={{
              fontFamily:
                "'Fraunces', Georgia, serif",
            }}
          >
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2A1226] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B4527A]"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  const handleWishlist = () => {
    const existingWishlist =
      JSON.parse(
        localStorage.getItem("veloraWishlist")
      ) || [];

    let updatedWishlist;

    if (isWishlisted) {
      updatedWishlist = existingWishlist.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedWishlist = [
        ...existingWishlist,
        product,
      ];
    }

    localStorage.setItem(
      "veloraWishlist",
      JSON.stringify(updatedWishlist)
    );

    setIsWishlisted(!isWishlisted);

    window.dispatchEvent(
      new Event("veloraWishlistUpdated")
    );
  };

  const handleAddToCart = () => {
    const existingCart =
      JSON.parse(
        localStorage.getItem("veloraCart")
      ) || [];

    const existingProduct = existingCart.find(
      (item) =>
        item.id === product.id &&
        item.size === selectedSize &&
        item.color === selectedColor
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id &&
        item.size === selectedSize &&
        item.color === selectedColor
          ? {
              ...item,
              quantity:
                Number(item.quantity || 1) +
                quantity,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity,
          size: selectedSize,
          color: selectedColor,
        },
      ];
    }

    localStorage.setItem(
      "veloraCart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("veloraCartUpdated")
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <section className="min-h-screen bg-[#FAF7F2] px-5 py-10 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* BACK */}
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#7D6C77] transition-colors hover:text-[#B4527A]"
        >
          <ArrowLeft size={16} />
          Back to Collection
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* PRODUCT IMAGE */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#F3EDE7]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full min-h-[500px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            <button
              type="button"
              onClick={handleWishlist}
              className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                isWishlisted
                  ? "text-[#B4527A]"
                  : "text-[#2A1226]"
              }`}
            >
              <Heart
                size={21}
                fill={
                  isWishlisted
                    ? "currentColor"
                    : "none"
                }
              />
            </button>
          </div>

          {/* PRODUCT INFO */}
          <div className="flex flex-col justify-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B4527A]">
              {product.category}
            </p>

            <h1
              className="mt-3 text-4xl leading-tight text-[#2A1226] sm:text-5xl"
              style={{
                fontFamily:
                  "'Fraunces', Georgia, serif",
              }}
            >
              {product.name}
            </h1>

            {/* PRICE */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl font-bold text-[#2A1226]">
                ${product.price.toFixed(2)}
              </span>

              <span className="text-base text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>

              <span className="rounded-full bg-[#F9EAF0] px-3 py-1 text-xs font-bold text-[#B4527A]">
                Sale
              </span>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#7D6C77]">
              A thoughtfully designed piece made to bring
              effortless elegance to your everyday style.
              Discover timeless details and premium
              finishing with Velora.
            </p>

            <div className="my-8 h-px bg-[#2A1226]/10" />

            {/* SIZE */}
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#2A1226]">
                  Select Size
                </p>

                <span className="text-xs text-gray-400">
                  Required
                </span>
              </div>

              <div className="mt-3 flex gap-3">
                {["S", "M", "L", "XL"].map(
                  (size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() =>
                        setSelectedSize(size)
                      }
                      className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-300 ${
                        selectedSize === size
                          ? "border-[#2A1226] bg-[#2A1226] text-white"
                          : "border-gray-200 bg-white text-[#2A1226] hover:border-[#B4527A]"
                      }`}
                    >
                      {size}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* COLOR */}
            <div className="mt-7">
              <p className="text-sm font-bold text-[#2A1226]">
                Select Color
              </p>

              <div className="mt-3 flex gap-3">
                {[
                  "#2A1226",
                  "#B4527A",
                  "#D9A86C",
                  "#E7D8CF",
                ].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() =>
                      setSelectedColor(color)
                    }
                    className={`h-9 w-9 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === color
                        ? "scale-110 border-[#2A1226] ring-2 ring-[#B4527A]/30"
                        : "border-white hover:scale-110"
                    }`}
                    style={{
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* QUANTITY + CART */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <div className="flex h-14 items-center justify-center rounded-full border border-gray-200 bg-white px-4 sm:w-36">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      Math.max(1, quantity - 1)
                    )
                  }
                  className="p-2 text-[#2A1226] transition hover:text-[#B4527A]"
                >
                  <Minus size={17} />
                </button>

                <span className="w-10 text-center text-sm font-bold text-[#2A1226]">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="p-2 text-[#2A1226] transition hover:text-[#B4527A]"
                >
                  <Plus size={17} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="group flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#2A1226] px-7 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B4527A]"
              >
                <ShoppingBag
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                {added
                  ? "Added to Cart ✓"
                  : "Add to Cart"}
              </button>
            </div>

            {/* BUY NOW */}
            <Link
              to="/cart"
              className="mt-3 flex h-14 items-center justify-center rounded-full border border-[#2A1226]/10 bg-white text-sm font-bold text-[#2A1226] transition-all duration-300 hover:border-[#B4527A] hover:text-[#B4527A]"
            >
              View Shopping Cart
            </Link>

            {/* BENEFITS */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#2A1226]/10 pt-7">
              <div>
                <p className="text-xs font-bold text-[#2A1226]">
                  Free Shipping
                </p>
                <p className="mt-1 text-[11px] text-gray-400">
                  On orders $100+
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-[#2A1226]">
                  Easy Returns
                </p>
                <p className="mt-1 text-[11px] text-gray-400">
                  Simple process
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-[#2A1226]">
                  Secure Payment
                </p>
                <p className="mt-1 text-[11px] text-gray-400">
                  Safe checkout
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
