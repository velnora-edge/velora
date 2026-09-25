import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  User,
  MapPin,
  Phone,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  useEffect(() => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("veloraCart") || "[]"
      );

      setCart(Array.isArray(savedCart) ? savedCart : []);

      const savedProfile = JSON.parse(
        localStorage.getItem("veloraProfile") || "{}"
      );

      const fullName = savedProfile.name || "";
      const nameParts = fullName.trim().split(/\s+/);

      setForm({
        email: savedProfile.email || "",
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        address: savedProfile.address || "",
        city: savedProfile.city || "",
        postalCode: "",
        phone: savedProfile.phone || "",
      });
    } catch (error) {
      console.error("Checkout data error:", error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const subtotal = cart.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;

    return total + price * quantity;
  }, 0);

  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!cart.length) return;

    const newOrderId = `VEL-${Date.now()
      .toString()
      .slice(-6)}`;

    const newOrder = {
      id: newOrderId,
      date: new Date().toLocaleDateString(),
      items: cart,
      customer: form,
      paymentMethod: "Cash on Delivery",
      subtotal,
      shipping,
      total,
      status: "Processing",
    };

    const existingOrders = JSON.parse(
      localStorage.getItem("veloraOrders") || "[]"
    );

    localStorage.setItem(
      "veloraOrders",
      JSON.stringify([
        ...existingOrders,
        newOrder,
      ])
    );

    localStorage.removeItem("veloraCart");

    window.dispatchEvent(
      new Event("veloraOrdersUpdated")
    );

    window.dispatchEvent(
      new Event("veloraCartUpdated")
    );

    setOrderId(newOrderId);
    setOrderPlaced(true);
    setCart([]);
  };

  // Loading
  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#FAF7F2]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#E8D9DF] border-t-[#B4527A]" />

          <p className="mt-4 text-sm text-gray-500">
            Loading checkout...
          </p>
        </div>
      </section>
    );
  }

  // Order placed
  if (orderPlaced) {
    return (
      <section className="min-h-screen bg-[#FAF7F2] px-5 py-20">
        <div className="mx-auto max-w-2xl rounded-[32px] bg-white p-8 text-center shadow-sm sm:p-12">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2A1226] text-[#D9A86C]">
            <CheckCircle size={38} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#B4527A]">
            Order Confirmed
          </p>

          <h1
            className="mt-3 text-4xl text-[#2A1226] sm:text-5xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Thank You for Shopping with Velora
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-500">
            Your order has been successfully placed.
            We will process it and prepare it for delivery.
          </p>

          <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-[#FAF7F2] p-5">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Order ID
            </p>

            <p className="mt-2 text-xl font-bold text-[#2A1226]">
              {orderId}
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/orders"
              className="rounded-full bg-[#2A1226] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#B4527A]"
            >
              View My Orders
            </Link>

            <Link
              to="/products"
              className="rounded-full border border-[#2A1226] px-7 py-3.5 text-sm font-bold text-[#2A1226] transition hover:bg-[#2A1226] hover:text-white"
            >
              Continue Shopping
            </Link>
          </div>

        </div>
      </section>
    );
  }

  // Empty cart
  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-[#FAF7F2] px-5 py-20">
        <div className="mx-auto max-w-xl text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2A1226] text-white">
            <ShoppingBag size={32} />
          </div>

          <h1
            className="mt-6 text-4xl text-[#2A1226]"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Add some beautiful pieces before checking out.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex rounded-full bg-[#B4527A] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#2A1226]"
          >
            Continue Shopping
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#FAF7F2] px-5 py-12 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B4527A]">
            Secure Checkout
          </p>

          <h1
            className="mt-2 text-4xl text-[#2A1226] sm:text-5xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Complete Your Order
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Complete your delivery information to place your order.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Checkout Form */}
          <div className="rounded-[30px] bg-white p-6 shadow-sm sm:p-8">

            <h2
              className="text-2xl text-[#2A1226]"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              Delivery Information
            </h2>

            <form
              onSubmit={handlePlaceOrder}
              className="mt-7 space-y-5"
            >

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2A1226]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-gray-200 bg-[#FAF7F2] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#B4527A]"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#2A1226]">
                    First Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="First name"
                      className="w-full rounded-2xl border border-gray-200 bg-[#FAF7F2] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#B4527A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#2A1226]">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full rounded-2xl border border-gray-200 bg-[#FAF7F2] px-4 py-3.5 text-sm outline-none transition focus:border-[#B4527A]"
                  />
                </div>

              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2A1226]">
                  Address
                </label>

                <div className="relative">
                  <MapPin
                    size={17}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    placeholder="Your delivery address"
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-[#FAF7F2] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#B4527A]"
                  />
                </div>
              </div>

              {/* City + Postal */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#2A1226]">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="Your city"
                    className="w-full rounded-2xl border border-gray-200 bg-[#FAF7F2] px-4 py-3.5 text-sm outline-none focus:border-[#B4527A]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#2A1226]">
                    Postal Code
                  </label>

                  <input
                    type="text"
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handleChange}
                    placeholder="Postal code"
                    className="w-full rounded-2xl border border-gray-200 bg-[#FAF7F2] px-4 py-3.5 text-sm outline-none focus:border-[#B4527A]"
                  />
                </div>

              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2A1226]">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+92 300 1234567"
                    className="w-full rounded-2xl border border-gray-200 bg-[#FAF7F2] py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#B4527A]"
                  />
                </div>
              </div>

              {/* Payment */}
              <div className="rounded-2xl border border-[#E8D9DF] bg-[#FAF7F2] p-5">

                <p className="text-sm font-bold text-[#2A1226]">
                  Payment Method
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full border-[5px] border-[#B4527A] bg-white" />

                  <span className="text-sm text-gray-600">
                    Cash on Delivery
                  </span>
                </div>

              </div>

              {/* Place Order */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2A1226] py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B4527A]"
              >
                <ShoppingBag size={18} />
                Place Order
              </button>

            </form>
          </div>

          {/* Summary */}
          <div className="h-fit rounded-[30px] bg-[#2A1226] p-7 text-white lg:sticky lg:top-28">

            <h2
              className="text-2xl"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              Order Summary
            </h2>

            <div className="mt-7 space-y-4">

              {cart.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex gap-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-14 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Qty: {item.quantity || 1}
                    </p>
                  </div>

                  <p className="text-sm font-semibold">
                    $
                    {(
                      Number(item.price || 0) *
                      Number(item.quantity || 1)
                    ).toFixed(2)}
                  </p>
                </div>
              ))}

            </div>

            <div className="my-7 h-px bg-white/10" />

            <div className="space-y-3 text-sm">

              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-white/60">
                <span>Shipping</span>

                <span>
                  {shipping === 0
                    ? "Free"
                    : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between border-t border-white/10 pt-4 text-lg font-bold">
                <span>Total</span>

                <span className="text-[#D9A86C]">
                  ${total.toFixed(2)}
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Checkout;