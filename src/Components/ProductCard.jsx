import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { imagePath } from "../utils/imagePath";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlist =
      JSON.parse(localStorage.getItem("veloraWishlist")) || [];

    setIsWishlisted(
      wishlist.some((item) => item.id === product.id)
    );
  }, [product.id]);

  const handleAddToCart = () => {
    const existingCart =
      JSON.parse(localStorage.getItem("veloraCart")) || [];

    const existingProduct = existingCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: Number(item.quantity || 1) + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1,
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

    navigate("/cart");
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

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

  return (
    <div className="group relative overflow-hidden rounded-[26px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(42,18,38,0.10)]">

      {/* PRODUCT IMAGE */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F3EDE7]">

        <Link to={`/products/${product.id}`}>
          <img
            src={imagePath(product.image)}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800";
            }}
          />
        </Link>

        {/* NEW BADGE */}
        {product.isNew && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#2A1226] backdrop-blur-sm">
            New
          </span>
        )}

        {/* WISHLIST */}
        <button
          type="button"
          onClick={handleWishlist}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            isWishlisted
              ? "text-[#B4527A]"
              : "text-[#2A1226]"
          }`}
        >
          <Heart
            size={18}
            fill={
              isWishlisted
                ? "currentColor"
                : "none"
            }
          />
        </button>

        {/* ADD TO CART */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-16 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2A1226] py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#B4527A]"
          >
            <ShoppingBag size={17} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* PRODUCT INFO */}
      <div className="p-5">

        {/* CATEGORY */}
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4527A]">
          {product.category}
        </p>

        {/* NAME */}
        <Link to={`/products/${product.id}`}>
          <h3
            className="mt-1 text-lg text-[#2A1226] transition-colors duration-300 hover:text-[#B4527A]"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            {product.name}
          </h3>
        </Link>

        {/* PRICE */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-base font-bold text-[#2A1226]">
            ${Number(product.price).toFixed(2)}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${Number(product.oldPrice).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;