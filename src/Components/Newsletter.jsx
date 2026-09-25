
import React, { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="bg-[#FAF7F2] px-5 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[32px] bg-[#F3E1E7] px-7 py-14 text-center sm:px-10 md:py-16">

          {/* Decorative Circles */}
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#B4527A]/10" />
          <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-[#D9A86C]/15" />

          <div className="relative z-10 mx-auto max-w-2xl">

            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
              <Mail size={21} className="text-[#B4527A]" />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#B4527A]">
              Stay In The Loop
            </p>

            <h2
              className="mt-3 text-4xl font-medium text-[#2A1226] md:text-5xl"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              A Little More
              <span className="text-[#B4527A]"> Velora.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-600 md:text-base">
              Get first access to new collections, exclusive offers and
              style inspiration delivered straight to your inbox.
            </p>

            {!subscribed ? (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-full border border-white bg-white py-3.5 pl-11 pr-5 text-sm text-[#2A1226] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#B4527A] focus:ring-2 focus:ring-[#B4527A]/10"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-full bg-[#2A1226] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B4527A]"
                >
                  Subscribe

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            ) : (
              <div className="mx-auto mt-8 max-w-xl rounded-full bg-white px-6 py-4 text-sm font-medium text-[#2A1226] shadow-sm">
                ✨ Thank you for subscribing to Velora!
              </div>
            )}

            <p className="mt-4 text-xs text-gray-500">
              No spam. Just beautiful things worth knowing about.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
