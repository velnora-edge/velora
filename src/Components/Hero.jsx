import { imagePath } from "../utils/imagePath";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Truck } from "lucide-react";

const SERIF = {
  fontFamily: "'Fraunces', Georgia, serif",
};

const Hero = ({ image = imagePath("/images/homeImage.jfif") }) => {
    const [show, setShow] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const reveal = (delay) => ({
    style: {
      transitionDelay: `${delay}ms`,
    },
    className: `
      transition-all
      duration-[900ms]
      ease-[cubic-bezier(.2,.8,.2,1)]
      ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-7 opacity-0"
      }
    `,
  });

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2]">

      {/* Soft Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-[360px] w-[360px] rounded-full bg-[#B4527A]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-[#D9A86C]/15 blur-[100px]"
      />

      {/* Main Container */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-8 sm:px-8 lg:min-h-[calc(100vh-96px)] lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-24 lg:pt-10">

        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">

          {/* Small Label */}
          <div
            {...reveal(50)}
            className={`${reveal(50).className} mb-6 inline-flex items-center gap-2 rounded-full border border-[#e6d9d2] bg-white/70 px-4 py-2 backdrop-blur-sm`}
          >
            <span className="h-2 w-2 rounded-full bg-[#B4527A]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#725f69]">
              New Collection 2026
            </span>
          </div>

          {/* Main Heading */}
          <h1
            style={{
              ...SERIF,
              ...reveal(150).style,
            }}
            className={`${reveal(150).className} max-w-2xl text-[3.2rem] font-semibold leading-[0.98] tracking-[-0.04em] text-[#2A1226] sm:text-6xl lg:text-[4.8rem] xl:text-[5.2rem]`}
          >
            Style That

            <span className="block text-[#B4527A]">
              Feels Like You.
            </span>
          </h1>

          {/* Description */}
          <p
            style={reveal(300).style}
            className={`${reveal(300).className} mt-7 max-w-lg text-base leading-7 text-[#6D5C66] sm:text-lg sm:leading-8`}
          >
            Discover curated fashion, accessories and lifestyle
            pieces made for your everyday elegance.
          </p>

          {/* Buttons */}
          <div
            style={reveal(450).style}
            className={`${reveal(450).className} mt-9 flex flex-wrap items-center gap-4`}
          >
            {/* Primary Button */}
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 rounded-full bg-[#2A1226] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(42,18,38,.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B4527A] hover:shadow-[0_15px_35px_rgba(180,82,122,.3)]"
            >
              Shop Collection

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Secondary Button */}
            <a
              href="#categories"
              className="inline-flex items-center rounded-full border border-[#d8cbc4] bg-white/60 px-7 py-4 text-sm font-semibold text-[#2A1226] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B4527A] hover:bg-white hover:text-[#B4527A]"
            >
              Explore Categories
            </a>
          </div>

          {/* Stats */}
          <div
            style={reveal(600).style}
            className={`${reveal(600).className} mt-11 flex flex-wrap items-center gap-7 border-t border-[#e5dad4] pt-7`}
          >
            <div>
              <p
                style={SERIF}
                className="text-2xl font-semibold text-[#2A1226]"
              >
                15K+
              </p>

              <p className="mt-1 text-xs text-[#897982]">
                Happy Customers
              </p>
            </div>

            <div className="h-9 w-px bg-[#ded2cc]" />

            <div>
              <p
                style={SERIF}
                className="text-2xl font-semibold text-[#2A1226]"
              >
                500+
              </p>

              <p className="mt-1 text-xs text-[#897982]">
                Products
              </p>
            </div>

            <div className="h-9 w-px bg-[#ded2cc]" />

            <div>
              <p
                style={SERIF}
                className="text-2xl font-semibold text-[#2A1226]"
              >
                50+
              </p>

              <p className="mt-1 text-xs text-[#897982]">
                Premium Brands
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={reveal(250).style}
          className={`${reveal(250).className} order-1 mx-auto w-full max-w-[400px] sm:max-w-[470px] lg:order-2 lg:max-w-[510px]`}
        >
          <div className="group relative">

            {/* Decorative Back Arch */}
            <div
              aria-hidden="true"
              className="absolute -right-4 top-5 h-full w-full rounded-t-[999px] rounded-b-[45px] border border-[#B4527A]/30 transition-transform duration-700 group-hover:-translate-y-1 sm:-right-6 sm:top-6"
            />

            {/* Main Image Arch */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[45px] bg-[#ead8d2] shadow-[0_30px_75px_rgba(42,18,38,.18)]">

              {!imgFailed ? (
                <img
                  src={image}
                  alt="Velora fashion collection"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#F3D9E2] to-[#E9C9A3] px-8 text-center">
                  <div>
                    <Sparkles
                      size={32}
                      className="mx-auto mb-3 text-[#B4527A]"
                    />

                    <p
                      style={SERIF}
                      className="text-2xl text-[#2A1226]"
                    >
                      Velora
                    </p>

                    <p className="mt-2 text-sm text-[#765f69]">
                      Your fashion story starts here.
                    </p>
                  </div>
                </div>
              )}

              {/* Image Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A1226]/20 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-3 top-[15%] flex items-center gap-2.5 rounded-full border border-white/80 bg-white/90 py-2.5 pl-3 pr-5 shadow-[0_14px_34px_rgba(180,82,122,.2)] backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 sm:-left-8">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#B4527A] to-[#D9A86C] text-white">
                <Sparkles size={15} />
              </span>

              <span className="text-xs font-semibold text-[#2A1226] sm:text-sm">
                New Collection 2026
              </span>
            </div>

            {/* Shipping Card */}
            <div className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-2xl bg-[#2A1226] px-4 py-3.5 text-white shadow-[0_18px_40px_rgba(42,18,38,.3)] transition-transform duration-500 group-hover:-translate-y-1 sm:-bottom-3 sm:-left-7">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                <Truck
                  size={18}
                  className="text-[#D9A86C]"
                />
              </div>

              <div className="leading-tight">
                <p className="text-xs font-semibold sm:text-sm">
                  Free shipping worldwide
                </p>

                <p className="mt-1 text-[10px] text-white/55 sm:text-xs">
                  Easy returns · Secure checkout
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;