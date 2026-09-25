
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
const categories = [
  {
    title: "Women Collection",
    subtitle: "Elegant styles for every moment",
    image: "./images/Women's.jpg",
    link: "/products?category=women",
    accent: "#B4527A",
  },
  {
    title: "Men Collection",
    subtitle: "Modern essentials with character",
    image: "./images/Men.jpg",
    link: "/products?category=men",
    accent: "#D9A86C",
  },
  {
    title: "Luxury Accessories",
    subtitle: "Details that complete your look",
    image: "./images/accessories.jfif",
    link: "/products?category=accessories",
    accent: "#C9707F",
  },
  {
    title: "Home & Living",
    subtitle: "Beautiful pieces for your space",
    image: "./images/home.jfif",
    link: "/products?category=home",
    accent: "#B4527A",
  },
];

const Categories = () => {
  return (
   <section
  id="categories"
  className="bg-gradient-to-b from-[#FAF7F2] to-[#F3ECE4] px-5 py-20 md:px-10 lg:px-16"
>
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#B4527A" }}
            >
              Shop by Category
            </p>

            <h2
              className="text-4xl font-medium leading-tight text-[#2A1226] md:text-5xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Find Your <span className="text-[#B4527A]">Style</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
              Explore thoughtfully selected fashion, accessories and
              lifestyle essentials curated for modern living.
            </p>
          </div>

        <Link
  to="/products"
  className="group flex items-center gap-2 rounded-full border border-[#2A1226] px-5 py-2 text-sm font-semibold text-[#2A1226] transition-all duration-300 hover:bg-[#2A1226] hover:text-white"
>
  View All
  <ArrowUpRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.title}
className="group relative overflow-hidden rounded-[28px] border border-[#e8dcd1] bg-[#2A1226] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"            >
              {/* Image */}
              <div className="relative h-[390px] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1226] via-[#2A1226]/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Accent line */}
                <div
                  className="absolute left-5 top-5 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: category.accent }}
                />

                {/* Content */}
<div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:-translate-y-2">                  <div className="mb-3 flex items-end justify-between gap-3">
                    <div>
                      <h3
                        className="text-2xl font-medium text-white"
                        style={{
                          fontFamily: "'Fraunces', Georgia, serif",
                        }}
                      >
                        {category.title}
                      </h3>

                      <p className="mt-2 max-w-[190px] text-xs leading-5 text-white/70">
                        {category.subtitle}
                      </p>
                    </div>

                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#2A1226] transition-all duration-500 group-hover:rotate-45"
                    >
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;