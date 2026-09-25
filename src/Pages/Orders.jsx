import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  Truck,
  CheckCircle,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("veloraOrders")) || [];

    setOrders(Array.isArray(savedOrders) ? savedOrders : []);

    const handleOrdersUpdate = () => {
      const updatedOrders =
        JSON.parse(localStorage.getItem("veloraOrders")) || [];

      setOrders(
        Array.isArray(updatedOrders)
          ? updatedOrders
          : []
      );
    };

    window.addEventListener(
      "veloraOrdersUpdated",
      handleOrdersUpdate
    );

    return () => {
      window.removeEventListener(
        "veloraOrdersUpdated",
        handleOrdersUpdate
      );
    };
  }, []);

  const getStatusIcon = (status) => {
    if (status === "Delivered") {
      return (
        <CheckCircle
          size={20}
          className="text-green-500"
        />
      );
    }

    if (
      status === "Shipping" ||
      status === "Shipped"
    ) {
      return (
        <Truck
          size={20}
          className="text-blue-500"
        />
      );
    }

    return (
      <Package
        size={20}
        className="text-orange-500"
      />
    );
  };

  const getStatusStyle = (status) => {
    if (status === "Delivered") {
      return "bg-green-50 text-green-600";
    }

    if (
      status === "Shipping" ||
      status === "Shipped"
    ) {
      return "bg-blue-50 text-blue-600";
    }

    return "bg-orange-50 text-orange-600";
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] px-5 py-12 md:px-10 lg:px-16 lg:py-16">

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-10 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B4527A]">
            Purchase History
          </p>

          <h1
            className="mt-3 text-4xl text-[#2A1226] sm:text-5xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            My Orders
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500">
            Track and manage your recent orders from
            Velora.
          </p>

        </div>

        {/* EMPTY STATE */}
        {orders.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-[30px] bg-white px-6 py-14 text-center shadow-sm">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F3E1E7]">
              <ShoppingBag
                size={30}
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
              No Orders Yet
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
              You haven't placed any orders yet.
              Discover something beautiful from our
              collection.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2A1226] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B4527A]"
            >
              Start Shopping
              <ArrowRight size={17} />
            </Link>

          </div>
        ) : (
          /* ORDERS */
          <div className="space-y-5">

            {orders
              .slice()
              .reverse()
              .map((order) => (

                <div
                  key={order.id}
                  className="rounded-[28px] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-6"
                >

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    {/* ORDER INFO */}
                    <div>

                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B4527A]">
                        Order
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-[#2A1226]">
                        {order.id}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Ordered on {order.date}
                      </p>

                    </div>

                    {/* ITEMS */}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-400">
                        Items
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#2A1226]">
                        {order.items?.length || 0}{" "}
                        {order.items?.length === 1
                          ? "item"
                          : "items"}
                      </p>
                    </div>

                    {/* TOTAL */}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-400">
                        Total
                      </p>

                      <p className="mt-1 text-lg font-bold text-[#B4527A]">
                        $
                        {Number(
                          order.total || 0
                        ).toFixed(2)}
                      </p>
                    </div>

                    {/* STATUS */}
                    <div
                      className={`flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {getStatusIcon(order.status)}

                      <span>
                        {order.status}
                      </span>
                    </div>

                  </div>

                  {/* ORDER ITEMS */}
                  {order.items?.length > 0 && (
                    <div className="mt-5 border-t border-[#2A1226]/10 pt-5">

                      <div className="flex gap-3 overflow-x-auto pb-1">

                        {order.items.map(
                          (item, index) => (
                            <div
                              key={`${item.id}-${index}`}
                              className="flex min-w-[220px] items-center gap-3 rounded-2xl bg-[#FAF7F2] p-3"
                            >

                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-14 w-12 rounded-xl object-cover"
                              />

                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-[#2A1226]">
                                  {item.name}
                                </p>

                                <p className="mt-1 text-xs text-gray-400">
                                  Qty:{" "}
                                  {item.quantity || 1}
                                </p>

                                {item.size && (
                                  <p className="text-xs text-gray-400">
                                    Size: {item.size}
                                  </p>
                                )}
                              </div>

                            </div>
                          )
                        )}

                      </div>

                    </div>
                  )}

                  {/* FOOTER */}
                  <div className="mt-5 flex flex-col gap-4 border-t border-[#2A1226]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="text-xs text-gray-400">
                      Payment:{" "}
                      <span className="font-semibold text-gray-600">
                        {order.paymentMethod ||
                          "Cash on Delivery"}
                      </span>
                    </div>

                    <Link
                      to="/products"
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2A1226] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#B4527A]"
                    >
                      Shop Again
                      <ArrowRight size={14} />
                    </Link>

                  </div>

                </div>
              ))}

          </div>
        )}

      </div>

    </main>
  );
};

export default Orders;