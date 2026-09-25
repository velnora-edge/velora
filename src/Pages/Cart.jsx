
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("veloraCart")) || [];

    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);

    localStorage.setItem(
      "veloraCart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(new Event("veloraCartUpdated"));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];

    updatedCart[index].quantity += 1;

    updateCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }

    updateCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter(
      (_, itemIndex) => itemIndex !== index
    );

    updateCart(updatedCart);
  };

  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity || 1),
    0
  );

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 100
      ? 0
      : 10;

  const total = subtotal + shipping;

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (cart.length === 0) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#FAF7F2] px-5 py-16">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
            <ShoppingBag
              size={30}
              className="text-[#B4527A]"
            />
          </div>

          <h1
            className="mt-6 text-4xl text-[#2A1226]"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Your Cart Is Empty
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
            Looks like you haven't added anything to your
            cart yet. Discover something beautiful from our
            collection.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2A1226] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B4527A]"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#FAF7F2] px-5 py-10 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B4527A]">
            Your Selection
          </p>

          <h1
            className="mt-2 text-4xl text-[#2A1226] sm:text-5xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Shopping Cart
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            {cart.length}{" "}
            {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* CART ITEMS */}
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="flex flex-col gap-5 rounded-[24px] bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row sm:items-center"
              >

                {/* IMAGE */}
                <div className="h-32 w-full shrink-0 overflow-hidden rounded-[18px] bg-[#F3EDE7] sm:h-36 sm:w-28">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* INFO */}
                <div className="flex flex-1 flex-col">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4527A]">
                    {item.category}
                  </p>

                  <h2
                    className="mt-1 text-xl text-[#2A1226]"
                    style={{
                      fontFamily:
                        "'Fraunces', Georgia, serif",
                    }}
                  >
                    {item.name}
                  </h2>

                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-400">
                    {item.size && (
                      <span>
                        Size:{" "}
                        <strong className="text-gray-600">
                          {item.size}
                        </strong>
                      </span>
                    )}

                    {item.color && (
                      <span className="flex items-center gap-1">
                        Color:

                        <span
                          className="h-3 w-3 rounded-full border border-black/10"
                          style={{
                            backgroundColor: item.color,
                          }}
                        />
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-lg font-bold text-[#2A1226]">
                    ${Number(item.price).toFixed(2)}
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">

                  {/* QUANTITY */}
                  <div className="flex h-10 items-center rounded-full border border-gray-200 bg-[#FAF7F2] px-3">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(index)}
                      className="p-1 text-[#2A1226] transition hover:text-[#B4527A]"
                    >
                      <Minus size={15} />
                    </button>

                    <span className="w-8 text-center text-sm font-semibold text-[#2A1226]">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(index)}
                      className="p-1 text-[#2A1226] transition hover:text-[#B4527A]"
                    >
                      <Plus size={15} />
                    </button>
                  </div>

                  {/* REMOVE */}
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="flex items-center gap-1 text-xs font-semibold text-gray-400 transition hover:text-[#B4527A]"
                  >
                    <Trash2 size={15} />
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* CONTINUE SHOPPING */}
            <Link
              to="/products"
              className="inline-flex items-center gap-2 pt-3 text-sm font-semibold text-[#2A1226] transition hover:text-[#B4527A]"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>
          </div>

          {/* SUMMARY */}
          <div className="h-fit rounded-[28px] bg-[#2A1226] p-7 text-white lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A86C]">
              Order Summary
            </p>

            <h2
              className="mt-3 text-3xl"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              Your Total
            </h2>

            <div className="mt-7 space-y-4 border-b border-white/10 pb-6">

              <div className="flex justify-between text-sm">
                <span className="text-white/60">
                  Subtotal
                </span>

                <span>
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-white/60">
                  Shipping
                </span>

                <span>
                  {shipping === 0
                    ? "Free"
                    : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              {subtotal > 0 && subtotal < 100 && (
                <p className="rounded-xl bg-white/5 p-3 text-xs leading-5 text-white/50">
                  Add $
                  {(100 - subtotal).toFixed(2)} more to unlock
                  free shipping.
                </p>
              )}
            </div>

            {/* TOTAL */}
            <div className="flex items-center justify-between py-6">
              <span className="text-sm text-white/60">
                Total
              </span>

              <span className="text-2xl font-bold">
                ${total.toFixed(2)}
              </span>
            </div>

            {/* CHECKOUT BUTTON */}
            <button
              type="button"
              onClick={handleCheckout}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#B4527A] py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9A86C] hover:text-[#2A1226]"
            >
              <ShoppingBag
                size={17}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              Proceed to Checkout
            </button>

            <p className="mt-4 text-center text-[11px] text-white/40">
              Secure checkout • Easy returns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
