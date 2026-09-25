import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const VeloraEdit = () => {
  return (
    <section className="bg-[#2A1226] px-5 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] bg-[#35182F]">

          <div className="grid md:grid-cols-2">

            {/* Left Content */}
            <div className="flex flex-col justify-center px-7 py-14 sm:px-10 md:px-14 lg:px-20">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A86C]">
                The Velora Edit
              </p>

              <h2
                className="text-4xl font-medium leading-tight text-white sm:text-5xl"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Pieces That
                <span className="block text-[#D9A86C]">
                  Tell Your Story.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/65 md:text-base">
                Discover timeless essentials, statement accessories and
                refined details carefully selected for your everyday style.
              </p>

              <Link
                to="/products"
                className="group mt-8 flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#2A1226] transition-all duration-300 hover:bg-[#D9A86C]"
              >
                Explore The Edit

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[520px]">

              <img
                src="/images/velora-edit.jpg"
                alt="Velora collection"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#35182F] via-transparent to-transparent" />

              {/* Small Card */}
              <div className="absolute bottom-6 right-6 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B4527A]">
                  Curated Collection
                </p>

                <p
                  className="mt-1 text-lg text-[#2A1226]"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                  }}
                >
                  Timeless & Refined
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VeloraEdit;
