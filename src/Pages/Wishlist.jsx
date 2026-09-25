import React, { useEffect, useState } from "react";
import {
  Heart,
  ShoppingBag,
  Trash2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const savedWishlist =
      JSON.parse(
        localStorage.getItem("veloraWishlist")
      ) || [];

    setWishlistItems(
      Array.isArray(savedWishlist)
        ? savedWishlist
        : []
    );

    const handleWishlistUpdate = () => {
      const updatedWishlist =
        JSON.parse(
          localStorage.getItem("veloraWishlist")
        ) || [];

      setWishlistItems(
        Array.isArray(updatedWishlist)
          ? updatedWishlist
          : []
      );
    };

    window.addEventListener(
      "veloraWishlistUpdated",
      handleWishlistUpdate
    );

    return () => {
      window.removeEventListener(
        "veloraWishlistUpdated",
        handleWishlistUpdate
      );
    };
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist =
      wishlistItems.filter(
        (item) => item.id !== id
      );

    setWishlistItems(updatedWishlist);

    localStorage.setItem(
      "veloraWishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(
      new Event("veloraWishlistUpdated")
    );
  };

  const addToCart = (item) => {
    const existingCart =
      JSON.parse(
        localStorage.getItem("veloraCart")
      ) || [];

    const existingProduct =
      existingCart.find(
        (cartItem) => cartItem.id === item.id
      );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map(
        (cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  Number(
                    cartItem.quantity || 1
                  ) + 1,
              }
            : cartItem
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...item,
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
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2]">

      {/* HEADER */}
      <section className="px-5 pb-12 pt-10 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B4527A]">
            Your Favorites
          </p>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <h1
                className="text-4xl font-medium text-[#2A1226] md:text-5xl"
                style={{
                  fontFamily:
                    "'Fraunces', Georgia, serif",
                }}
              >
                My{" "}
                <span className="text-[#B4527A]">
                  Wishlist
                </span>
              </h1>

              <p className="mt-3 text-sm text-gray-500">
                {wishlistItems.length}{" "}
                {wishlistItems.length === 1
                  ? "item"
                  : "items"}{" "}
                saved
              </p>

            </div>

            <Link
              to="/products"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#2A1226]/10 bg-white px-5 py-3 text-sm font-semibold text-[#2A1226] transition-all duration-300 hover:bg-[#2A1226] hover:text-white"
            >
              Continue Shopping

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </section>

      {/* WISHLIST ITEMS */}
      {wishlistItems.length > 0 ? (

        <section className="px-5 pb-20 md:px-10 lg:px-16">

          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {wishlistItems.map((item) => (

              <div
                key={item.id}
                className="group overflow-hidden rounded-[26px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F3EDE7]">

                  <Link
                    to={`/products/${item.id}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  {/* REMOVE */}
                  <button
                    type="button"
                    onClick={() =>
                      removeFromWishlist(
                        item.id
                      )
                    }
                    aria-label="Remove from wishlist"
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#B4527A] hover:text-white"
                  >
                    <Trash2 size={17} />
                  </button>

                  {/* ADD TO CART */}
                  <button
                    type="button"
                    onClick={() =>
                      addToCart(item)
                    }
                    className="absolute bottom-4 left-4 right-4 flex translate-y-14 items-center justify-center gap-2 rounded-full bg-[#2A1226] py-3 text-sm font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#B4527A]"
                  >
                    <ShoppingBag size={17} />
                    Add to Cart
                  </button>

                </div>

                {/* PRODUCT INFO */}
                <div className="p-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B4527A]">
                    {item.category}
                  </p>

                  <Link
                    to={`/products/${item.id}`}
                    className="mt-2 block text-lg font-semibold text-[#2A1226] transition-colors hover:text-[#B4527A]"
                    style={{
                      fontFamily:
                        "'Fraunces', Georgia, serif",
                    }}
                  >
                    {item.name}
                  </Link>

                  <div className="mt-3 flex items-center justify-between">

                    <span className="text-lg font-bold text-[#2A1226]">
                      ${Number(item.price).toFixed(2)}
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8E9EE]">
                      <Heart
                        size={15}
                        className="text-[#B4527A]"
                        fill="#B4527A"
                      />
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

      ) : (

        /* EMPTY WISHLIST */
        <section className="px-5 pb-24 md:px-10 lg:px-16">

          <div className="mx-auto max-w-2xl rounded-[30px] bg-white px-6 py-20 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F3E1E7]">
              <Heart
                size={27}
                className="text-[#B4527A]"
              />
            </div>

            <h2
              className="mt-6 text-3xl text-[#2A1226]"
              style={{
                fontFamily:
                  "'Fraunces', Georgia, serif",
              }}
            >
              Your Wishlist is Empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
              Save your favorite pieces here and
              come back whenever you're ready to
              make them yours.
            </p>

            <Link
              to="/products"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#2A1226] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B4527A]"
            >
              Explore Collection

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </section>

      )}

    </main>
  );
};

export default Wishlist;