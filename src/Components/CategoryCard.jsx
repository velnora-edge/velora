
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CategoryCard = ({ title, subtitle, image, link, accent }) => {
  return (
    <Link
      to={link}
      className="group relative block overflow-hidden rounded-[28px] bg-[#2A1226] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-[390px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1226] via-[#2A1226]/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Accent Line */}
        <div
          className="absolute left-5 top-5 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-16"
          style={{ backgroundColor: accent }}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h3
                className="text-2xl font-medium text-white"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                {title}
              </h3>

              <p className="mt-2 max-w-[190px] text-xs leading-5 text-white/70">
                {subtitle}
              </p>
            </div>

            {/* Arrow */}
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#2A1226] transition-all duration-500 group-hover:rotate-45">
              <ArrowUpRight size={19} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
