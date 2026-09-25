
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Save,
  LogOut,
  ShoppingBag,
  Heart,
  ArrowRight,
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const loggedIn =
      localStorage.getItem("veloraLoggedIn") === "true";

    const savedUser = JSON.parse(
      localStorage.getItem("veloraUser") || "null"
    );

    const savedProfile = JSON.parse(
      localStorage.getItem("veloraProfile") || "null"
    );

    if (!loggedIn || !savedUser) {
      navigate("/login");
      return;
    }

    setUser(savedUser);

    setForm({
      name: savedProfile?.name || savedUser.name || "",
      email: savedUser.email || "",
      phone: savedProfile?.phone || "",
      address: savedProfile?.address || "",
      city: savedProfile?.city || "",
    });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updatedProfile = {
      name: form.name.trim(),
      email: form.email,
      phone: form.phone.trim(),
      address: form.address.trim(),
      city: form.city.trim(),
    };

    localStorage.setItem(
      "veloraProfile",
      JSON.stringify(updatedProfile)
    );

    const updatedUser = {
      ...user,
      name: form.name.trim(),
    };

    localStorage.setItem(
      "veloraUser",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);

    window.dispatchEvent(new Event("veloraAuthUpdated"));

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("veloraLoggedIn");

    window.dispatchEvent(new Event("veloraAuthUpdated"));

    navigate("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] px-5 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B4527A]">
            My Account
          </p>

          <h1
            className="mt-2 text-4xl font-medium text-[#2A1226] md:text-5xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Welcome, {user.name}
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
            Manage your personal information, shipping details
            and Velora account from one place.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

          {/* Sidebar */}
          <aside className="h-fit rounded-[28px] bg-[#2A1226] p-6 text-white shadow-[0_20px_50px_rgba(42,18,38,0.12)]">

            {/* User */}
            <div className="mb-7 border-b border-white/10 pb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B4527A] text-2xl font-semibold">
                {user.name?.charAt(0)?.toUpperCase()}
              </div>

              <h2
                className="mt-4 text-xl"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                {user.name}
              </h2>

              <p className="mt-1 break-all text-xs text-white/60">
                {user.email}
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-2">

              <Link
                to="/profile"
                className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium transition hover:bg-white/15"
              >
                <User size={18} />
                My Profile
              </Link>

              <Link
                to="/orders"
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <ShoppingBag size={18} />
                My Orders
              </Link>

              <Link
                to="/wishlist"
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <Heart size={18} />
                Wishlist
              </Link>
            </div>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-[#B4527A] hover:bg-[#B4527A] hover:text-white"
            >
              <LogOut size={17} />
              Logout
            </button>
          </aside>

          {/* Profile Form */}
          <section className="rounded-[30px] bg-white p-6 shadow-[0_15px_45px_rgba(42,18,38,0.07)] md:p-9">

            <div className="mb-8 border-b border-[#2A1226]/10 pb-6">
              <h2
                className="text-2xl text-[#2A1226]"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Personal Information
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Keep your account details up to date.
              </p>
            </div>

            <form onSubmit={handleSave} className="space-y-6">

              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A1226]">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B4527A]"
                    />

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-[#E8DED8] bg-[#FAF7F2] py-3.5 pl-11 pr-4 text-sm text-[#2A1226] outline-none transition focus:border-[#B4527A] focus:ring-2 focus:ring-[#B4527A]/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A1226]">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B4527A]"
                    />

                    <input
                      type="email"
                      value={form.email}
                      disabled
                      className="w-full cursor-not-allowed rounded-2xl border border-[#E8DED8] bg-gray-100 py-3.5 pl-11 pr-4 text-sm text-gray-500 outline-none"
                    />
                  </div>
                </div>

              </div>

              {/* Phone + City */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A1226]">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B4527A]"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 300 1234567"
                      className="w-full rounded-2xl border border-[#E8DED8] bg-[#FAF7F2] py-3.5 pl-11 pr-4 text-sm text-[#2A1226] outline-none transition placeholder:text-gray-400 focus:border-[#B4527A] focus:ring-2 focus:ring-[#B4527A]/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A1226]">
                    City
                  </label>

                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B4527A]"
                    />

                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      className="w-full rounded-2xl border border-[#E8DED8] bg-[#FAF7F2] py-3.5 pl-11 pr-4 text-sm text-[#2A1226] outline-none transition placeholder:text-gray-400 focus:border-[#B4527A] focus:ring-2 focus:ring-[#B4527A]/10"
                    />
                  </div>
                </div>

              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A1226]">
                  Shipping Address
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-4 top-4 text-[#B4527A]"
                  />

                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Enter your complete shipping address"
                    className="w-full resize-none rounded-2xl border border-[#E8DED8] bg-[#FAF7F2] py-3.5 pl-11 pr-4 text-sm text-[#2A1226] outline-none transition placeholder:text-gray-400 focus:border-[#B4527A] focus:ring-2 focus:ring-[#B4527A]/10"
                  />
                </div>
              </div>

              {/* Save */}
              <div className="flex flex-col gap-4 border-t border-[#2A1226]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                {saved && (
                  <p className="text-sm font-semibold text-[#B4527A]">
                    ✓ Profile updated successfully
                  </p>
                )}

                {!saved && <div />}

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#2A1226] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B4527A] hover:shadow-xl"
                >
                  <Save size={17} />
                  Save Changes
                </button>

              </div>
            </form>
          </section>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">

          <Link
            to="/orders"
            className="group flex items-center justify-between rounded-[24px] bg-[#F1E4EA] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B4527A]">
                Shopping
              </p>

              <h3
                className="mt-1 text-xl text-[#2A1226]"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                View Your Orders
              </h3>
            </div>

            <ArrowRight
              size={21}
              className="text-[#2A1226] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/wishlist"
            className="group flex items-center justify-between rounded-[24px] bg-[#F4EBDD] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D9A86C]">
                Favorites
              </p>

              <h3
                className="mt-1 text-xl text-[#2A1226]"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Your Wishlist
              </h3>
            </div>

            <ArrowRight
              size={21}
              className="text-[#2A1226] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>
      </div>
    </main>
  );
};

export default Profile;
