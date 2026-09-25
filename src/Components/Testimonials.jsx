
import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophia Williams",
    role: "Verified Customer",
    review:
      "Absolutely loved my order. The quality was beautiful and everything looked even better in person.",
  },
  {
    name: "Emma Carter",
    role: "Verified Customer",
    review:
      "Velora has become one of my favorite stores. The designs are elegant, modern and beautifully presented.",
  },
  {
    name: "Olivia Anderson",
    role: "Verified Customer",
    review:
      "The whole shopping experience was smooth and the product quality exceeded my expectations.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F3ECE4] px-5 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#B4527A]">
            Customer Love
          </p>

          <h2
            className="text-4xl font-medium text-[#2A1226] md:text-5xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Real experiences from customers who love discovering
            beautiful pieces at Velora.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-[28px] border border-[#e6d9ce] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF7F2] text-[#B4527A] transition-all duration-300 group-hover:bg-[#2A1226] group-hover:text-white">
                <Quote size={19} />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    fill="currentColor"
                    className="text-[#D9A86C]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 text-sm leading-7 text-gray-600">
                “{testimonial.review}”
              </p>

              {/* Customer */}
              <div className="mt-7 flex items-center gap-3 border-t border-[#eee4dc] pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2A1226] font-serif text-lg text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-[#2A1226]">
                    {testimonial.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;