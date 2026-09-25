
import React from "react";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#FAF7F2]">

      {/* Hero */}
      <section className="px-5 pb-20 pt-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 overflow-hidden rounded-[32px] bg-[#2A1226] md:grid-cols-2">

            {/* Content */}
            <div className="px-7 py-14 sm:px-10 md:px-14 lg:px-16">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A86C]">
                About Velora
              </p>

              <h1
                className="text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Style Made
                <span className="block text-[#D9A86C]">
                  Personal.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/65 md:text-base">
                Velora is a modern fashion and lifestyle destination created
                for people who believe that everyday style should feel
                effortless, personal and timeless.
              </p>

              <Link
                to="/products"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#2A1226] transition-all duration-300 hover:bg-[#D9A86C]"
              >
                Explore Collection

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-[400px] md:h-[520px]">
              <img
                src="/images/about-velora.jpg"
                alt="Velora fashion collection"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#2A1226] via-transparent to-transparent" />

              <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3E1E7]">
                  <Heart size={18} className="text-[#B4527A]" />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Made for you
                  </p>
                  <p
                    className="text-base text-[#2A1226]"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                    }}
                  >
                    With intention
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E1E7]">
            <Sparkles size={20} className="text-[#B4527A]" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B4527A]">
            Our Story
          </p>

          <h2
            className="mt-4 text-4xl font-medium text-[#2A1226] md:text-5xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            More Than Just
            <span className="text-[#B4527A]"> Fashion.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-gray-600 md:text-base">
            We believe the right piece can change how you feel.
            That's why every collection at Velora is thoughtfully selected
            around quality, simplicity and individuality. From everyday
            essentials to statement accessories, we bring together pieces
            that are designed to become part of your story.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B4527A]">
              What We Believe
            </p>

            <h2
              className="mt-3 text-4xl font-medium text-[#2A1226] md:text-5xl"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              The Velora Values
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-[26px] bg-[#FAF7F2] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E1E7] text-[#B4527A]">
                <Sparkles size={20} />
              </div>

              <h3
                className="text-2xl text-[#2A1226]"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Quality
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                We focus on carefully selected pieces that combine style,
                quality and everyday comfort.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-[26px] bg-[#FAF7F2] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#F8EEDC] text-[#B88A4A]">
                <Heart size={20} />
              </div>

              <h3
                className="text-2xl text-[#2A1226]"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Individuality
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Your style is personal. Our collections are designed to give
                you pieces that feel uniquely yours.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-[26px] bg-[#FAF7F2] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#F6E2E5] text-[#C9707F]">
                <ArrowRight size={20} />
              </div>

              <h3
                className="text-2xl text-[#2A1226]"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Simplicity
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                From browsing to checkout, we keep the experience simple,
                beautiful and easy to enjoy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#FAF7F2] px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">

          <h2
            className="text-4xl font-medium text-[#2A1226] md:text-5xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Find Something That
            <span className="block text-[#B4527A]">
              Feels Like You.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600">
            Explore our latest collection and discover pieces selected
            especially for modern everyday style.
          </p>

          <Link
            to="/products"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#2A1226] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B4527A]"
          >
            Shop Velora

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default About;
