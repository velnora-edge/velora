
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#2A1226] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block text-3xl font-medium tracking-wide text-white"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              Velora
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Curated fashion, accessories and lifestyle essentials
              designed for modern living and timeless elegance.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#B4527A] hover:bg-[#B4527A] hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#B4527A] hover:bg-[#B4527A] hover:text-white"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#B4527A] hover:bg-[#B4527A] hover:text-white"
              >
                X
              </a>

              <a
                href="mailto:hello@velora.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#B4527A] hover:bg-[#B4527A] hover:text-white"
              >
                <Mail size={17} />
              </a>

            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A86C]">
              Shop
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                to="/products?category=women"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Women
              </Link>

              <Link
                to="/products?category=men"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Men
              </Link>

              <Link
                to="/products?category=accessories"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Accessories
              </Link>

              <Link
                to="/products?category=home"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Home & Living
              </Link>

              <Link
                to="/products"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                New Arrivals
              </Link>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A86C]">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                to="/"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/products"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Shop
              </Link>

              <Link
                to="/orders"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                My Orders
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A86C]">
              Customer Care
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                to="/profile"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                My Account
              </Link>

              <Link
                to="/wishlist"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Shopping Cart
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Help & Support
              </Link>

              <a
                href="mailto:hello@velora.com"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Mail size={15} />
                hello@velora.com
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 sm:flex-row md:px-10 lg:px-16">

          <p className="text-center text-xs text-white/40 sm:text-left">
            © 2026 Velora. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <span className="text-xs text-white/40">
              Privacy Policy
            </span>

            <span className="text-xs text-white/40">
              Terms & Conditions
            </span>

            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B4527A]"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
