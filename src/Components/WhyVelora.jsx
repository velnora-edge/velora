
import React from "react";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy free delivery on orders above $100.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Simple and hassle-free returns within 14 days.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Your payment and personal information stay protected.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Thoughtfully selected products made for everyday elegance.",
  },
];

const WhyVelora = () => {
  return (
    <section className="bg-white px-5 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B4527A]">
            The Velora Promise
          </p>

          <h2
            className="mt-3 text-4xl font-medium text-[#2A1226] md:text-5xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Why Shop With
            <span className="text-[#B4527A]"> Velora?</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
            We make every part of your shopping experience simple,
            thoughtful and enjoyable.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[26px] border border-[#EEE5E0] bg-[#FAF7F2] p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#F0D5DF] hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#B4527A] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-[#B4527A] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3
                  className="mt-6 text-xl text-[#2A1226]"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyVelora;
